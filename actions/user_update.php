<?php
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$sql = "SELECT visits FROM visits WHERE id = 1";
$res = $conn->query($sql);
$res = $res->fetch();
$visits_nb = $res['visits'];

$visits_nb += 1;

$sql = "UPDATE visits SET visits = '$visits_nb' WHERE id = 1 ";
$conn->query($sql);

if (isset($_SESSION["username"])) {
    echo "<script>loadAccount('" . $_SESSION["username"] . "')</script>";

    $usr = $_SESSION['username'];
    $sql = "SELECT id FROM users WHERE username = '$usr'";
    $res = $conn->query($sql);
    $res = $res->fetch();
    $ur_id = $res['id'];

    $sql = "SELECT * FROM notifications WHERE receiver_id = '$ur_id'";
    $res = $conn->query($sql);
    $notifs = $res->fetchAll();
    $unread_notifs = 0;
    foreach ($notifs as &$notif) {
        if ($notif['state'] == 'unread') {
            $unread_notifs += 1;
        };
    };
    if ($unread_notifs != 0) {
        echo "<script>document.getElementById('notif_span').innerHTML+=' (" . $unread_notifs . ")'</script>";
    };


    $sql = "SELECT * FROM pms WHERE receiver_id = '$ur_id'";
    $res = $conn->query($sql);
    $msgs = $res->fetchAll();
    $unread_msgs = 0;
    foreach ($msgs as &$message) {
        if ($message['msg_state'] == 'unread') {
            $unread_msgs += 1;
        };
    };
    if ($unread_msgs != 0) {
        echo "<script>document.getElementById('chat_span').innerHTML+=' (" . $unread_msgs . ")'</script>";
    };
    echo "<script>loadTheme('" . $_SESSION["theme"] . "');</script>";
};