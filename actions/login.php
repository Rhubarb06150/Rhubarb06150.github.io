<?php
$servername = "localhost";
$username = "hey";
$password = "";

$conn = new mysqli($servername, $username, $password);
$conn->select_db('personnes');

if ($conn->connect_error) {
};
$username = ($_POST['username']);
$password = ($_POST['password']);

$rpassword='';
$sql=('SET @rpassword = (SELCET password FROM users WHERE username = @username)');

if ($conn->query($sql) === TRUE) { 
    header("Location:/success.php?act=login");
    exit();
}
