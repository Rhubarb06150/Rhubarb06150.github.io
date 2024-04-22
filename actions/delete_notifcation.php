<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
$notif_if=$_GET['id'];
$sql="DELETE FROM `notifications` WHERE id = '$notif_id'";
$conn->query($sql);
header('Location:/account/notifications/');