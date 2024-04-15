<?php
$servername = "localhost";
$username = "hey";
$password = "";

$conn = new mysqli($servername, $username, $password);
$conn->select_db('personnes');

if ($conn->connect_error) {
};
$username = ($_POST['username']);
$email = ($_POST['mail1']);
$password = ($_POST['password1']);

$sql = "INSERT INTO users (username , register_date , email , password)
VALUES ('$username', NOW(), '$email', '$password')";
if ($conn->query($sql) === TRUE) { 
    header("Location:/success.php?act=signup");
    exit();
}
