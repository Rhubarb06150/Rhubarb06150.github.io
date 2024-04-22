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
$pid = $pid['id'];

$reply_id = $_POST['reply_id_2'];

if ($pid != $op_id) {

    $sql = "DELETE FROM replies WHERE id = '$reply_id'";

    if ($conn->query($sql) == true) {
        header('Location:/success.php?act=rep_del');
        exit();
    } else {
        header('Location:/failure.php?act=rep_del');
        exit();
    }
};
header('Location:/failure.php?act=no_yo_rep');
exit();
