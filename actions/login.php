<?php
session_start();

$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

if (isset($_POST["login"])) {

    $usernamef = ($_POST['username']);
    $passwordf = ($_POST['password']);

    

    if (!filter_var($usernamef, FILTER_VALIDATE_EMAIL)) {
        $sql = "SELECT password FROM users WHERE username = '$usernamef'";
        $rpassword = $conn->query($sql);
        $rpassword = $rpassword->fetch();
        $rpassword = $rpassword["password"];
        $sql = "SELECT * FROM users WHERE username = '$usernamef'";
    } else {
        $sql = "SELECT password FROM users WHERE email = '$usernamef'";
        $rpassword = $conn->query($sql);
        $rpassword = $rpassword->fetch();
        $rpassword = $rpassword["password"];
        $sql = "SELECT * FROM users WHERE email = '$usernamef'";
    };

    $result = $conn->query($sql);
    $rusername = $result->fetch();
    $rusername = $rusername['username'];

    if (password_verify($passwordf, $rpassword)) {

        $sql = "SELECT theme FROM users WHERE username = '$rusername'";
        $theme = $conn->query($sql);
        $themef = $theme->fetch();

        $sql = "SELECT abs_code FROM users WHERE username = '$rusername'";
        $abs_code = $conn->query($sql);
        $abs_codef = $abs_code->fetch();

        $sql = "SELECT id FROM users WHERE username = '$rusername'";
        $id = $conn->query($sql);
        $id = $id->fetch();

        if ($result->rowCount() > 0) {
            $_SESSION["username"] = $rusername;
            $_SESSION["id"] = $id;
            $_SESSION["theme"] = $themef["theme"];
            $_SESSION["abs_code"] = $abs_codef["abs_code"];
            $_SESSION["loggedin"] = true;
            header("Location: /success.php?act=login");
        } else {
            header("Location: /failure.php?act=login");
        };
    } else {
        header("Location: /failure.php?act=login");
    };
} else {
    header("Location: /login.php");
};
