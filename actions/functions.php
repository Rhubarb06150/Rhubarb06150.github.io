<?php
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
function prevUser()

{
    $id = $_GET['id'];
    if ($id > 0) {
        $id = intval($id) - 1;
    };
    header('Location:/user/?id=' . $id);
}
