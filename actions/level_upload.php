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

$dir_id = rand(0, 99999);
mkdir("../admin/files/levels/" . $dir_id . "/", 0777, true);

$uploadOk = 1;

$target_dir = "../admin/files/levels/";
$target_file = $target_dir . basename($_FILES["thumbnail"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

$target_dir = "../admin/files/levels/";
$target_file = $target_dir . basename($_FILES["level_file"]["name"]);
$uploadOk = 1;
$levelFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));


$level_title = $_POST['level_name'];
$level_description = $_POST['level_description'];
$smbx_version = $_POST['smbx_version'];

if (!(filesize($_FILES["thumbnail"]["tmp_name"]))) {
    $thumbnail = '../images/head/default_level.png';
};

if ($_FILES["thumbnail"]["size"] > 524288) {
    header('Location:/failure.php?act=thu_size');
    exit();
};

if (isset($_POST["level_file"])) {
    $check = getimagesize($_FILES["level_file"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        header('Location:/failure.php?act=no_lvl');
        exit();
    }
};

if (!file_exists($_FILES['level_file']['tmp_name']) || !is_uploaded_file($_FILES['level_file']['tmp_name'])) {
    header('Location:/failure.php?act=no_lvl');
    exit();
};

if ($_FILES["level_file"]["size"] > 10485760) {
    header('Location:/failure.php?act=lvl_size');
    exit();
};

if ($levelFileType != "lvl" && $levelFileType != "lvlx" && $levelFileType != "zip" && $levelFileType != "rar" && $levelFileType != "7z") {
    header('Location:/failure.php?act=lvl_for');
    exit();
};

if (file_exists($_FILES['thumbnail']['tmp_name']) || is_uploaded_file($_FILES['thumbnail']['tmp_name'])) {
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
        header('Location:/failure.php?act=thu_for');
        exit();
    } else {
        $thumbnail = 1;
    }
} else {
    $thumbnail = 0;
};

if ($uploadOk == 1) {
    $thumbnail_path = "../admin/files/levels/" . $dir_id . "/thumbnail.png";
    if ($thumbnail == 1) {
        move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $thumbnail_path);
    }else{
        copy("../images/head/default_level.png", $thumbnail_path);
    }

    $level_path = "../admin/files/levels/" . $dir_id . "/" . $_FILES["level_file"]["name"];
    $level_path_ul = "/admin/files/levels/" . $dir_id . "/" . $_FILES["level_file"]["name"];

    move_uploaded_file($_FILES["level_file"]["tmp_name"], $level_path);

    $sql = "INSERT INTO levels_mq (poster_id, title, description, file_path, submit_date, smbx_version)
    VALUES ('$uid', '$level_title', '$level_description', '$level_path_ul', NOW(), '$smbx_version')";
    $conn->query($sql);

    header('Location:/success.php?act=lvl_up');
    exit();
} else {
    header('Location:/failure.php?act=lvl_up');
    exit();
}
