<?php 
    require_once("functions.php");
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP + Javascript + CSS</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <?php 
        welcomeMessage(["text" => "Ciao Mondo" , "isHeader" => true]);
        welcomeMessage(["text" => "seconda riga qui" , "isHeader" => false]);
        welcomeMessage(["text" => "Test valori di default"]);
    ?>

    <div class="block" id="counter">
        <div>Counter: <span>0</span></div>
        <button class="btn">Add number</button>
    </div>


    <div class="block isLoading" id="randomUser">
        <h2 class="title">Random user</h2>
        <div class="spinner"></div>
        <span></span>
        <button class="btn btn-light">Reload</button>
    </div>

    <script src="main.js"></script>
</body>
</html>