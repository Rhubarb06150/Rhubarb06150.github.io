<?php
session_start();
$servername = "10.10.29.38";
$username = "hey";
$password = "";

$conn = new PDO(
	'mysql:host=10.10.29.38;dbname=personnes;charset=utf8',
	'hey',
	''
);

if (isset($_POST["login"])) {


    $usernamef = ($_POST['username']);
    $passwordf = ($_POST['password']);

    $sql = "SELECT * FROM users WHERE username = '$usernamef' AND password = '$passwordf'";
    $result = $conn->query($sql);

    if ($result->rowCount() > 0) {
        $_SESSION["username"] = $usernamef;
        $_SESSION["loggedin"] = true;
        header("Location: /success.php?act=login");
    } else {
        echo "Invalid username or password";
    };
};