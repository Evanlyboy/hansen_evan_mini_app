<?php 
    
    // Turn on error reporting
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
    // Setup Connection Creds
    $user = "root";
    $pass = "root"; //root for mac and mamp
    $url = "localhost";
    $db = "db_hansen_miniapp";

    $link = mysqli_connect($url, $user, $pass, $db); //Windows
    // $link = mysqli_connect($url, $user, $pass, $db, "8888"); //Mac

    // Check connection
    if(!$link) {
        error_log('Connection error: ' . mysqli_connect_error());
    }

?>