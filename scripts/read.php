<?php 
    // This file is for running our queries

    //Get all of something...
    //$tbl = "tbl_movies"; //Remove This when done testing
    //getAll($tbl); //This is for TESTING ONLY!
    
    function getAll($tbl) {
        // echo "Working from getAll()";
        // echo $tbl;
        //Gives me access to my database through the connect script
        include("connect.php");
        $queryAll = "SELECT * FROM {$tbl}";
        // echo $queryAll;
        // This will query our database and return an object back to the variable
        $runAll = mysqli_query($link, $queryAll);
        if($runAll) {
            return $runAll;
        }else{
            $error = "There was a problem with the frontend, totally not the backend devs fault";
            return $error;
        }
        mysqli_close($link);
    }
?>