<?php
session_start();

$conn = new PDO(
    'mysql:host=localhost;dbname=personnes;charset=utf8',
    'hey',
    ''
);

if (isset($_POST["login"])) {

    $usernamef = ($_POST['username']);
    $passwordf = ($_POST['password']);

    $sql = "SELECT * FROM users WHERE username = '$usernamef'";
    $result = $conn->query($sql);

    $sql = "SELECT password FROM users WHERE username = '$usernamef'";
    $rpassword = $conn->query($sql);
    $rpassword = $rpassword->fetch();
    $rpassword = $rpassword["password"];
    
    if (password_verify($passwordf, $rpassword)) {

        $sql = "SELECT theme FROM users WHERE username = '$usernamef'";
        $theme = $conn->query($sql);
        $themef = $theme->fetch();

        $sql = "SELECT abs_code FROM users WHERE username = '$usernamef'";
        $abs_code = $conn->query($sql);
        $abs_codef = $abs_code->fetch();

        if ($result->rowCount() > 0) {
            $_SESSION["username"] = $usernamef;
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
