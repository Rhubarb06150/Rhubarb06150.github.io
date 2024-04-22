<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$usr = $_SESSION['username'];

$sql = "SELECT id FROM users WHERE username = '$usr'";
$pid = $conn->query($sql);
$pid = $pid->fetch();
$uid = $pid['id'];

$content = $_POST['content'];
$content = str_replace("'", "''", $content);

$post_id = $_POST['post_id'];
$comm_id = $_POST['com_id'];

$sql = "SELECT poster_id FROM comments WHERE id = '$comm_id'";
$res = $conn->query($sql);
$res = $res->fetch();
$op_id = $res['poster_id'];

if ($uid == $op_id) {

    $sql = "UPDATE comments SET content = '$content', edit = NOW() WHERE id = '$comm_id'";

    if (str_contains($content,'`')){
        header("Location: /failure.php?act=ill_char");
        exit();
    };

    if ($conn->query($sql) == true) {
        header('Location:/success.php?act=com_edit');
        exit();
    } else {
        header('Location:/failure.php?act=com_edit');
        exit();
    }
}
header('Location:/failure.php?act=no_yo_com');
exit();