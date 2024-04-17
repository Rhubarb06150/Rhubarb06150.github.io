<?php
$conn = new PDO(
    'mysql:host=localhost;dbname=personnes;charset=utf8',
    'hey',
    ''
);

$usernamef = ($_POST['username']);
$emailf = ($_POST['mail1']);
$passwordf = (password_hash($_POST['password1'],CRYPT_BLOWFISH));

$req = "SELECT * FROM users WHERE username = '$usernamef'";
$result = $conn->query($req);
if (strlen($_POST['username']) == 0) {
    header("Location:/failure.php?act=usr");
    exit();
};

if ($result->rowCount() > 0) {
    header("Location:/failure.php?act=tk_usr");
    exit();
}
if ($_POST['mail1'] == '') {
    header("Location:/failure.php?act=no_add");
    exit();
}
if ($_POST['mail1'] != $_POST['mail2']) {
    header("Location:/failure.php?act=nc_add");
    exit();
}
if (strlen($_POST['password1']) < 8) {
    header("Location:/failure.php?act=nel_pwd");
    exit();
}
if ($_POST['password1'] != $_POST['password2']) {
    header("Location:/failure.php?act=nc_pwd");
    exit();
}

$abs_code = strval(random_int(0, 9)) . strval(random_int(0, 9)) . strval(random_int(0, 9)) . strval(random_int(0, 9)) . strval(random_int(0, 9)) . strval(random_int(0, 9));

$sql = "INSERT INTO users (username , register_date , email , password, abs_code)
    VALUES ('$usernamef', NOW(), '$emailf', '$passwordf', '$abs_code')";
if ($conn->query($sql) == TRUE) {
    header("Location:/success.php?act=signup");
    exit();
} else {
    header("Location:/failure.php?act=usignup");
};
