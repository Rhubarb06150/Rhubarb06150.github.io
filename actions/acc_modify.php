<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=personnes;charset=utf8',
    'hey',
    ''
);

$theme = $_POST['theme'];

if (isset($_SESSION["loggedin"])) {
    $username = $_SESSION['username'];
    $req = "UPDATE users SET theme = '$theme' where username = '$username'";
    if ($conn->query($req) == TRUE) {
        $_SESSION["theme"]=$_POST["theme"];
        header("Location: /success.php?act=acc_modify");
        exit();
    };
} else {
    header("Location: /failure.php?act=acc_modify");
};
