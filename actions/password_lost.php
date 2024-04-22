<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
ini_set('display_errors', 1);
error_reporting(E_ALL);
$from = "no-reply@smbxworld.net";
$to = "matheo.gass1@gmail";
$subject = "Essai de PHP Mail";
$message = "PHP Mail fonctionne parfaitement";
$headers = "De :" . $from;
mail($to, $subject, $message, $headers);
echo "L'email a été envoyé.";
