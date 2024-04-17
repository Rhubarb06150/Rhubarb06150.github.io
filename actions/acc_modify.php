<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=personnes;charset=utf8',
    'hey',
    ''
);

$theme = $_POST['theme'];
$bio = $_POST['bio'];
$bio = str_replace("'","''",$bio);

if (isset($_SESSION["loggedin"])) {
    $username = $_SESSION['username'];
    $req = "UPDATE users SET theme = '$theme' where username = '$username'";
    $sec_req = "UPDATE users SET description = '$bio' where username = '$username'";
    if (strlen($bio)>1024){
        header("Location: /failure.php?act=tl_bio");
        exit();
    }
    if ($conn->query($req) == TRUE && $conn->query($sec_req) == TRUE) {
        $_SESSION["theme"]=$_POST["theme"];
        header("Location: /success.php?act=acc_modify");
        exit();
    };
} else {
    header("Location: /failure.php?act=acc_modify");
    exit();
};
