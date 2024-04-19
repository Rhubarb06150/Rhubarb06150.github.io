<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$usr = $_SESSION['username'];
$content = $_POST['post_content'];
$content = str_replace("'", "''", $content);
$subject = $_POST['subject'];

$sql = "SELECT id FROM users WHERE username = '$usr'";
$result = $conn->query($sql);
$result = $result->fetch();
$uid = $result['id'];

if (isset($_SESSION["loggedin"])) {
    if (isset($_POST)&&$_POST['subject']!=''&&$_POST['post_content']!='') {
        $sql = "INSERT INTO posts (poster_id, post_date , content , subject)
VALUES ('$uid', NOW(), '$content', '$subject')";
        if ($conn->query($sql) == TRUE) {
            header("Location:/success.php?act=post");
            exit();
        } else {
            header("Location:/failure.php?act=post");
        };
    };
};
