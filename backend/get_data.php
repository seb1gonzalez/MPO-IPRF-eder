<?php 
ini_set('memory_limit', '-1');
ini_set('max_execution_time', 30000); //300 seconds = 5 minutes
//conection to utep database
require_once("conn.php"); //file needed to make connection to DB, "$conn" variable originates from there


$p_title = $_GET['project_title']; // key sent from front-end, from the object defined at the ajax call
$p_owner = $_GET['owner'];

$query = "SELECT * FROM request_form WHERE project_title = $p_title AND created_by = $p_owner;"

?>