<?php
$conn = new PDO(
    'mysql:host=10.10.29.38;dbname=personnes;charset=utf8',
    'hey',
    ''
);

$usernamef = ($_POST['username']);
$emailf = ($_POST['mail1']);
$passwordf = ($_POST['password1']);

$req = "SELECT * FROM users WHERE username = '$usernamef'";
$result = $conn->query($req);
echo $result->rowCount();

if ($result->rowCount() > 0) {
    echo 'Username already tooken.';
    echo $result->rowCount();
} else {
    $sql = "INSERT INTO users (username , register_date , email , password)
    VALUES ('$usernamef', NOW(), '$emailf', '$passwordf')";
    if ($conn->query($sql) == TRUE) {
        header("Location:/success.php?act=signup");
        echo $result->rowCount();
        exit();
    };
};
