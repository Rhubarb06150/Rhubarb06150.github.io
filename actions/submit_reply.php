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

$content = $_POST['content'];

$content = str_replace("'", "''", $content);

$post_id = $_POST['topic_id'];

$sql = "SELECT * FROM topics WHERE id = '$post_id'";
$res = $conn->query($sql);
$res = $res->fetch();
$op_id = $res['poster_id'];
$topic_subject = $res['topic'];

$reply = $_POST['reply'];

$sql = "INSERT INTO replies (poster_id , content , submit_date , reply, topic_id)
VALUES ('$pid' , '$content' , NOW() , '$reply', '$post_id')";

if (str_contains($content, '`')) {
    header("Location: /failure.php?act=ill_char");
    exit();
};

if ($conn->query($sql) == true) {

    $post_link = "Someone just replied to your topic: " . $topic_subject . " <a href=/forums/topic/?topic=" . $post_id . ">see it</a>";
    $req = "INSERT INTO notifications (receiver_id, content) VALUES ('$op_id', '$post_link')";
    $conn->query($req);

    $sql="UPDATE topics SET last_activity = NOW() WHERE id = '$post_id'";
    $conn->query($sql);

    header('Location:/success.php?act=reply_submit');
    exit();
} else {
    header('Location:/failure.php?act=reply_submit');
    exit();
}
