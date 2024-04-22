<?php
session_start();
if (!(isset($_SESSION["username"]))){
    header('Location:/login.php');
};
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <link href="/images/head/icon.png" rel="icon">
    <script src="/main.js"></script>
</head>

<body id="body">

    <div class="header" id="header">
        <a href="/" style="width: max-content;">
            <img src="/images/logos/smbxworld.png" height="106" width="588" style="margin-left: 32px;" alt="website logo" id="website-logo">
        </a>
    </div>
    <div class="page_structure">
        <div class="sidebar">
            <div class="menu">Main
                <img src="/images/tiles/cloud.png" width="16" height="16" class="menu_img" class="menu_img">
            </div>

            <div class="menu_options">
                <span class="menu_options_link"><a href="/">Home</a></span>
                <span class="menu_options_link"><a href="/forums/">Forums</a></span>
                <span class="menu_options_link"><a href="/contact">Contact</a></span>
                <span class="menu_options_link"><a href="/softwares/">Softwares</a></span>
            </div>
            <div class="menu">Contents
                <img src="/images/tiles/small-green-pipe-up.png" width="16" height="16" class="menu_img">
            </div>
            <div class="menu_options">
                <span class="menu_options_link"><a href="/levels/">Levels</a></span>
                <span class="menu_options_link"><a href="/scripts/">Scripts</a></span>
                <span class="menu_options_link"><a href="/npcs/">NPCs Packs</a></span>
            </div>
            <div class="menu">About
                <img src="/images/tiles/magic-cube.png" width="16" height="16" class="menu_img">
            </div>
            <div class="menu_options">
                <span class="menu_options_link">
                    <a href="/friends/">Friends</a></span>
                <span class="menu_options_link"><a href="/credits/">Credits</a></span>
                <span class="menu_options_link"><a href="/team/">Team</a></span>
            </div>
            <div id="account_div">
                <div class="menu">Account
                    <img src="/images/tiles/rotating-block.png" width="16" height="16" class="menu_img">
                </div>
                <div class="menu_options" id="account">
                    <span class="menu_options_link"><a href="/login.php">Log In</a></span>
                    <span class="menu_options_link"><a href="/signup.php">Sign Up</a></span>
                </div>
            </div>

            <!-- <div class="menu">Affiliates
                <img src="/images/tiles/star-block.png" width="16" height="16" class="menu_img">
            </div>
            <div class="menu_options_websites">
            </div> -->

            <div class="menu">Unaffiliated
                <img src="/images/tiles/green-switch.png" width="16" height="16" class="menu_img">
            </div>
            <div class="menu_options_websites">
                <a href="https://mfgg.net/">
                    <img src="/images/websites/mfgg.png" class="website_img" alt="MFGG website">
                </a>
                <a href="https://smbxgame.com">
                    <img src="/images/websites/smbx.gif" class="website_img" alt="SMBX website">
                </a>
                <a href="https://smwcentral.net/">
                    <img src="/images/websites/smwc.gif" class="website_img" alt="SMW Central website">
                </a>
                <a href="https://wohlsoft.ru/">
                    <img src="/images/websites/wohlsoft-2.png" class="website_img" alt="Wohlsoft website">
                </a>
                <a href="https://mariowiki.com">
                    <img src="/images/websites/mariowiki.png" class="website_img" alt="Mario Wiki website">
                </a>
                <a href="https://spriters-resource.com/">
                    <img src="/images/websites/tsr.gif" class="website_img" alt="The Spriter Ressources website">
                </a>
                <a href="https://hellofangaming.github.io/">
                    <img src="/images/websites/hfg.png" class="website_img" alt="HelloFanGaming Hello Mario Engine website">
                </a>
                <a href="https://generation-nintendo.com/">
                    <img src="/images/websites/gn.png" class="website_img" alt="Generation Nintendo website">
                </a>
            </div>
        </div>
        <form method="post" action="/actions/start_chat.php" id="instant_discussion" hidden>
            Instant discussion:
            <input type="text" name="username" id="username"><br><br>
            <input hidden type="submit" id="login" name="login">
        </form>
        <div class="elements">
            <div class="elements" id="elements">
                <div class=element id="pms">
                    <div class="element_title" id="title">Discussion with </div>
                    <div class="element_infos" id="infos"></div>
                    <div class="element_content" id="messages"></div>
                    <div class="element_infos">
                        <form method="post" action="/actions/message_send.php">
                            <input name="receiver_id" id="receiver_id" hidden>
                            <input name="sender_id" id="sender_id" hidden>
                            Your message:<br><br>
                            <textarea style="width: calc(100% - 7px);height:128px" name="content" id="content"></textarea>
                            <input hidden type="submit" id="post" name="post">
                    </div>
                    <div class="element_content">
                        <label for="post" class="button">Send message</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer id="footer">
        <div class="footer_content">
            <center>
                <p>SMBX World is not affiliated with Nintendo or any other company. All nintendo content belongs to
                    Nintendo, all the rest belongs to SMBX World.</p>
            </center>
        </div>
    </footer>
</body>

</html>

<?php
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

if (isset($_SESSION["username"])) {

    $usr = $_SESSION['username'];
    $sql = "SELECT id FROM users WHERE username = '$usr'";
    $res = $conn->query($sql);
    $res = $res->fetch();
    $ur_id = $res['id'];

    if (isset($_GET['user'])) {
        $chat_id = $_GET['user'];

        $sql = "SELECT * FROM users WHERE id = '$chat_id'";
        $res = $conn->query($sql);
        $exist = $res->rowCount();
        $user = $res->fetch();

        if ($exist > 0) {
            if ($chat_id != $ur_id) {
                echo "<script>document.getElementById('title').innerHTML+='" . $user['username'] . "'</script>";
                echo "<script>document.getElementById('receiver_id').value='" . $chat_id . "'</script>";
                echo "<script>document.getElementById('sender_id').value='" . $ur_id . "'</script>";
                echo "<script>document.title='Discussion with " . $user['username'] . " - SMBX World'</script>";

                $sql = "SELECT DISTINCT send_date FROM pms WHERE (sender_id = '$ur_id' AND receiver_id = '$chat_id') OR (sender_id = '$chat_id' AND receiver_id = '$ur_id')";
                $res = $conn->query($sql);
                $first = $res->fetch();
                
                if ($res->rowCount() > 0) {
                    echo "<script>document.getElementById('infos').innerHTML='Discussion started at " . mb_substr($first['send_date'],0,-3) . "'</script>";
                } else {
                    echo "<script>document.getElementById('infos').innerHTML='No messages has been sent yet.'</script>";
                    echo "<script>document.getElementById('messages').innerHTML=`Wow it's empty here.`</script>";
                };

                $sql = "SELECT * FROM pms WHERE (sender_id = '$ur_id' AND receiver_id = '$chat_id') OR (sender_id = '$chat_id' AND receiver_id = '$ur_id')";
                $res = $conn->query($sql);
                $msgs = $res->fetchAll();
                foreach ($msgs as &$message) {

                    $sender_id = $message['sender_id'];
                    $sql = "SELECT *   FROM users WHERE id = '$sender_id'";
                    $res = $conn->query($sql);
                    $res = $res->fetch();

                    $sender_username = $res['username'];
                    $sender_pfp = $res['pfp'];
                    $send_date = $message['send_date'];

                    $msg = array(
                        "sender_id" => $message["sender_id"],
                        "sender_username" => $sender_username,
                        "sender_pfp" => $sender_pfp,
                        "send_date" => $send_date,
                        "receiver_id" => $message["receiver_id"],
                        "content" => $message["content"],
                        "date" => $message["send_date"]
                    );

                    $mid = $message['id'];
                    if ($message['sender_id'] != $ur_id) {
                        $sql = "UPDATE pms SET msg_state = 'read' WHERE id = '$mid'";
                        $conn->query($sql);
                    };
                    echo "<script>
                    showMessage(" . json_encode($msg) . ",'" . $ur_id . "');
                    </script>";
                };
            } else {
                echo "<script>document.getElementById('pms').remove();</script>";
                echo "<script>AddElement('Seriously?','Did you just wanted to talk to yourself?','You really need some friends...');</script>";
                echo "<script>document.title='You need friends - SMBX World'</script>";
            }
        } else {

            echo "<script>document.getElementById('pms').remove();</script>";
            echo "<script>document.title='User not found - SMBX World'</script>";
            echo "<script>AddElement('User not found!','User not found!!!','USER NOT FOUND NAAAAAAAAH !!!!!!');</script>";
        };

    } else {

        echo "<script>document.getElementById('pms').remove();</script>";
        echo "<script>document.title='Discussions - SMBX World'</script>";
        echo "<script>AddElement('All your discussions','Here you can see all of your discussions','<div id=chats></div>');</script>";
        echo "<script>document.getElementById('chats').appendChild(document.getElementById('instant_discussion'))</script>";
        echo "<script>document.getElementById('instant_discussion').style.display='block';</script>";
        $sql = "SELECT * FROM pms WHERE sender_id = '$ur_id' OR receiver_id = '$ur_id'";
        $res = $conn->query($sql);
        $chats = $res->fetchAll();
        $chats_arr = array();
        foreach ($chats as &$chat) {
            if (!(in_array($chat['sender_id'], $chats_arr))) {
                array_push($chats_arr, $chat['sender_id']);
            }
            if (!(in_array($chat['receiver_id'], $chats_arr))) {
                array_push($chats_arr, $chat['receiver_id']);
            }
        };
        if (count($chats_arr)==0){
            echo "<script>document.getElementById('chats').innerHTML+=`There's no discussions here :(`</script>";
        };
        foreach ($chats_arr as &$chat) {

            if ($chat != $ur_id) {
                $sql = "SELECT username FROM users WHERE id = '$chat'";
                $res = $conn->query($sql);
                $res = $res->fetch();
                $username = $res['username'];

                $sql = "SELECT pfp FROM users WHERE id = '$chat'";
                $res = $conn->query($sql);
                $res = $res->fetch();
                $pfp = $res['pfp'];

                $sql = "SELECT * FROM pms WHERE (sender_id = '$chat' AND receiver_id = '$ur_id') OR (sender_id = '$ur_id' AND receiver_id = '$chat')";
                $res = $conn->query($sql);
                $msg_nb = $res->rowCount();

                $sql = "SELECT * FROM pms WHERE sender_id = '$chat' AND receiver_id = '$ur_id' AND msg_state = 'unread'";
                $res = $conn->query($sql);
                $unread = $res->rowCount();


                $user = array(
                    "id" => $chat,
                    "name" => $username,
                    "pfp" => $pfp,
                    "nb" => $msg_nb,
                    "unread" => $unread
                );

                echo "<script>
                loadChat(" . json_encode($user) . ")
                </script>";
            };
        };
    };
};
?>