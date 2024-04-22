<?php
session_start();

$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
$usr = $_SESSION['username'];

$sql = "SELECT password FROM users WHERE username = '$usr'";
$rpassword = $conn->query($sql);
$rpassword = $rpassword->fetch();
$rpassword = $rpassword["password"];

if (isset($_POST['old_password'])) {
    if (password_verify($_POST['old_password'], $rpassword)) {
        if ($_POST['new_password1'] == $_POST['new_password2']) {
            if (strlen($_POST['new_password1']) > 7) {
                if (!(password_verify($_POST['new_password1'], $rpassword))) {
                    $new_password = password_hash($_POST['new_password1'], CRYPT_BLOWFISH);
                    $req = "UPDATE users SET password = '$new_password' where username = '$usr'";
                    if ($conn->query($req) == TRUE) {
                        $_SESSION = array();
                        if (ini_get("session.use_cookies")) {
                            $params = session_get_cookie_params();
                            setcookie(
                                session_name(),
                                '',
                                time() - 42000,
                                $params["path"],
                                $params["domain"],
                                $params["secure"],
                                $params["httponly"]
                            );
                        }
                        session_destroy();
                        header("Location: /success.php?act=pwd_ch");
                        exit();
                    };
                } else {
                    header('Location:/failure.php?act=sm_pwd');
                    exit();
                }
            } else {
                header('Location:/failure.php?act=nel_npwd');
                exit();
            }
        } else {
            header('Location:/failure.php?act=ncn_pwd');
            exit();
        }
    } else {
        header('Location:/failure.php?act=bad_pwd');
        exit();
    }
};
