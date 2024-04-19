<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$usr = $_SESSION['username'];
$sql = "SELECT id FROM users WHERE username = '$usr'";
$res = $conn->query($sql);
$res = $res->fetch();

$sender_id = $res['id'];
$receiver_id = $_POST['receiver_id'];
$mp_content = $_POST['content'];
$mp_content = str_replace("'", "''", $mp_content);
$state = 'unread';

$sql = "INSERT INTO pms (sender_id , receiver_id , content , send_date , msg_state) VALUES ('$sender_id' , '$receiver_id' , '$mp_content' , NOW() , '$state')";
if ($conn->query($sql) == true) {
    header('Location:/pms/?user=' . $receiver_id);
    exit();
};
