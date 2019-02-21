<?php

$message = "from ".$_REQUEST['name']."--email: ".$_REQUEST['email']."--message: ".$_REQUEST['comment']."<br>";
$message = wordwrap($message, 70);
mail("reiosantos@yahoo.com", "datastructures_simplified", $message);
echo "<span style='color:green;' >message sent successfully</span><br>";
?>