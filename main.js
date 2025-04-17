//counter
document.querySelector("#counter button").addEventListener("click", () => {
  const domSpan = document.querySelector("#counter span");

  let number = parseInt(domSpan.textContent, 10);
  number++;

  domSpan.textContent = number;
});

//randomUser
document.addEventListener("DOMContentLoaded", () => {
  loadRandomuser();
});
document.querySelector("#randomUser button").addEventListener("click", () => {
  loadRandomuser();
});

//***************************************
// FUNZIONI
//***************************************

// Funzione per creare un delay usando una Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Funzione di escape HTML per prevenire XSS
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (match) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[match];
  });
}

//esegue fetch su API randomUser
async function loadRandomuser() {
  const domBlock = document.querySelector("#randomUser");

  domBlock.classList.add("isLoading");
  document.querySelector("#randomUser span").innerHTML = "";

  try {
    // Aggiungi il ritardo di 1 secondo
    await delay(1000);

    // Poi fai la fetch
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data?.results?.[0];

    if (user && user.name && user.picture) {
      const firstName = user.name.first ?? "";
      const lastName = user.name.last ?? "";
      const email = user.email ?? "";
      const profilePic = user.picture.large ?? "";

      const html = `
        <div>
          <img src="${profilePic}" alt="Foto profilo">
          <h2>${escapeHtml(firstName)} ${escapeHtml(lastName)}</h2>
          <p>Email: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        </div>
      `;

      // Mostra l'HTML nel DOM
      document.querySelector("#randomUser span").innerHTML = html;
    } else {
      // Lancia un'eccezione se i dati non sono validi
      throw new Error("Dati utente non validi o mancanti");
    }
  } catch (err) {
    console.error("Errore:", err);
  } finally {
    domBlock.classList.remove("isLoading");
  }
}
