<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

if (isset($_POST["username"])) {
    $username = $_POST['username'];
    $req = "SELECT id FROM users WHERE username = '$username'";
    $res = $conn->query($req);
    $res = $res->fetch();
    $id = $res['id'];
    if ($id!='') {
        header("Location: /pms/?user=" . $id);
        exit();
    } else {
        header("Location: /failure.php?act=usr_nf");
        exit();
    };
};
