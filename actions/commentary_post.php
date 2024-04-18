<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
$usr=$_SESSION['username'];
$sql="SELECT id FROM users WHERE username = '$usr'";
$pid=$conn->query($sql);
$pid=$pid->fetch();
$pid=$pid['id'];

$content=$_POST['content'];

// $content=str_replace('<','$lt',$content);
// $content=str_replace('>','$gt',$content);
$content=str_replace("'","''",$content);

$type=$_POST['type'];
$post_id=$_POST['post_id'];

$sql="INSERT INTO comments (poster_id , type , content , post_date , post_id)
VALUES ('$pid' , '$type' , '$content' , NOW() , '$post_id')";

if ($conn->query($sql)==true){
    header('Location:/success.php?act=com_post&post_id='.$post_id);
    exit();
}else{
    header('Location:/failure.php?act=com_post');
    exit();
}