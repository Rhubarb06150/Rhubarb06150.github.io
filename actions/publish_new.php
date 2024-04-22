<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$usr = $_SESSION['username'];
$usr = $_SESSION['username'];

$req = "SELECT id FROM users WHERE username = '$usr'";
$res = $conn->query($req);
$res = $res->fetch();
$uid = $res['id'];

$sql = "SELECT * FROM admins WHERE user_id = '$uid'";
$admin = $conn->query($sql);

if (!($admin->rowCount() > 0)) {
    header("Location: /404.php");
    exit();
} else {
    $content = $_POST['post_content'];
    $content = str_replace("'", "''", $content);
    $subject = $_POST['subject'];

    $sql = "SELECT id FROM users WHERE username = '$usr'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $uid = $result['id'];

    if (isset($_SESSION["loggedin"])) {
        if (isset($_POST) && $_POST['subject'] != '' && $_POST['post_content'] != '') {
            $sql = "INSERT INTO news (title, content , post_date , poster_id)
VALUES ('$subject', '$content', NOW(), '$uid')";
            if ($conn->query($sql) == TRUE) {
                header("Location:/success.php?act=post");
                exit();
            } else {
                header("Location:/failure.php?act=post");
            };
        };
    };
};