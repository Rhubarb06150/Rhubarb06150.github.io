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

$sql="SELECT poster_id FROM posts WHERE id = '$post_id'";
$res=$conn->query($sql);
$res=$res->fetch();
$op_id=$res['poster_id'];

$sql="INSERT INTO comments (poster_id , type , content , post_date , post_id)
VALUES ('$pid' , '$type' , '$content' , NOW() , '$post_id')";

$post_link="Someone just commented your post! <a href=/posts/?id=".$post_id.">see it</a>";

$req="INSERT INTO notifications (receiver_id, content) VALUES ('$op_id', '$post_link')";

if (str_contains($content,'`')){
    header("Location: /failure.php?act=ill_char");
    exit();
};

if ($conn->query($sql)==true){
    $conn->query($req);
    header('Location:/success.php?act=com_post');
    exit();
}else{
    header('Location:/failure.php?act=com_post');
    exit();
}