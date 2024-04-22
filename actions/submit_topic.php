<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$usr = $_SESSION['username'];
$sql = "SELECT id FROM users WHERE username = '$usr'";
$result = $conn->query($sql);
$result = $result->fetch();
$uid = $result['id'];
$content = $_POST['content'];
$category = $_POST['cat'];
$content = str_replace("'", "''", $content);
$subject = $_POST['subject'];

if (str_contains($content, '`')) {
    header("Location: /failure.php?act=ill_char");
    exit();
};

if (isset($_SESSION["loggedin"])) {
    if (isset($_POST) && $_POST['subject'] != '' && $_POST['content'] != '') {
        $sql = "INSERT INTO topics (topic, category, poster_id , content , submit_date)
VALUES ('$subject','$category','$uid','$content',NOW())";
        if ($conn->query($sql) == TRUE) {
            header("Location:/success.php?act=topic");
            exit();
        } else {
            header("Location:/failure.php?act=topic");
        };
    };
};
