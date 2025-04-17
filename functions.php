<?php

function welcomeMessage($props=[]) {

    // Definiamo i valori di default
    $defaults = [
        'text'      => 'Benvenuto!',
        'isHeader'  => false
    ];

    // Estendiamo $props con i valori di default
    $props = array_merge($defaults, $props);


    echo '<div class="block">';
        if ($props["isHeader"] === true) {
            echo '<h1 class="title">'.$props["text"].'</h1>';
        }
        else {
            echo '<p>'.$props["text"].'</p>';
        }
    echo '</div>';
    
}

?>