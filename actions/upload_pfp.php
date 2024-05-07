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

$target_dir = "../files/pfps/";
$target_file = $target_dir . basename($_FILES["picture"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (!(filesize($_FILES["picture"]["tmp_name"]))) {
    header('Location:/failure.php?act=no_pfp');
    exit();
}


if (isset($_POST["post_pfp"])) {
    $check = getimagesize($_FILES["picture"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        header('Location:/failure.php?act=no_img');
        exit();
    }
};

if ($_FILES["picture"]["size"] > 524288) {
    header('Location:/failure.php?act=pfp_size');
    exit();
}

if (
    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif"
) {
    header('Location:/failure.php?act=pfp_for');
    exit();
};

if ($uploadOk == 1) {

    $pfp_path = "../files/pfps/" . $uid . "." . $imageFileType;
    $pfp_path_ul = "/files/pfps/" . $uid . "." . $imageFileType;
    move_uploaded_file($_FILES["picture"]["tmp_name"], $pfp_path);

    $sql = "UPDATE users SET pfp = '$pfp_path_ul' where username = '$usr'";
    $conn->query($sql);

    header('Location:/success.php?act=pfp_ch');
    exit();
} else {
    header('Location:/failure.php?act=pfp_ch');
    exit();
}
