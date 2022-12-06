<?php 
    // We use this to do a page redirect with PHP
    function redirect_to($location) {
        if($location != NULL) {
            header("Location: {$location}");
            exit;
        }
    }

?>