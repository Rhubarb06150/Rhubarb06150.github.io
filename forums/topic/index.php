<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$id = $_GET['topic'];
$sql = "SELECT subject FROM posts WHERE id = '$id'";
$result = $conn->query($sql);
$exist = $result->rowCount();
$result = $result->fetch();
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
        <div class="elements">
            <div class="elements" id="elements">
            </div>
            <span class=little_section_title id="post_span">Submit a reply:</span>
            <form method="post" action="/actions/submit_reply.php" id="post_form">
                <div class="element">
                    <div class=element_infos>Remember to stay polite and respectful when replying to someone.</div>
                    <div class="element_content">
                        Reply:<br><br>
                        <textarea style="width: 100%; height:64px;" id="content" name="content"></textarea>
                        <input id="type" name="type" value="post" hidden>
                        <input id="topic_id" name="topic_id" value="topic" hidden>
                        <input id="reply" name="reply" value="" hidden>
                        <br><br>
                        <input hidden type="submit" id="post" name="post">
                        <label for="post" class="button">Submit reply</label>
                    </div>
                </div>
            </form>
            <span class=little_section_title id='com_span'></span>

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

$topic_id = $_GET['topic'];
$sql = "SELECT * FROM topics WHERE id = '$topic_id'";
$result = $conn->query($sql);
$exist = $result->rowCount();
$result = $result->fetch();


if ($exist > 0) {
    $topic = $result['topic'];
    echo "<script>document.title=`" . $topic . " - SMBX World`</script>";
} else {
    echo "<script>document.title='Topic not found - SMBX World'</script>";
};

if ($exist > 0) {

    $sql="SELECT category FROM topics WHERE id = '$topic_id'";
    $res=$conn->query($sql);
    $res=$res->fetch();
    $cat=$res['category'];
    if($cat=='smbx'){
        $category='Super Mario Bros. X';
    }else if($cat=='smb'){
        $category='Super Mario Bros.';
    }else if($cat=='tloz'){
        $category='The Legend Of Zelda';
    }else if($cat=='met'){
        $category='Metroid';
    }else if($cat=='dkc'){
        $category='Donkey Kong Country';
    }else if($cat=='other'){
        $category='Other';
    }else if($cat=='pkmn'){
        $category='Pokémon';
    }else if($cat=='ssb'){
        $category='Super Smash Bros.';
    };
    echo "<script>document.title=`" . $topic . " - ".$category." - SMBX World`</script>";

    $topic_id = $result['poster_id'];

    $sql = "SELECT username FROM users WHERE id = '$topic_id'";
    $res = $conn->query($sql);
    $res = $res->fetch();
    $poster_usr = $res['username'];

    echo "<script>showTopic('" . $result['topic'] . "',`Posted by: <a href=/user/?id=" . $result['poster_id'] . ">" . $poster_usr . "</a> at: " . $result['submit_date'] . " in <a href=/forums/sub/?sub=".$cat.">".$category."</a>`,`" . $result['content'] . "`);</script>";
    echo "<script>document.getElementById('topic_id').value=" . $_GET['topic'] . "</script>";

    $topic_id = $_GET['topic'];
    $sql = "SELECT * FROM replies WHERE topic_id = '$topic_id' ORDER BY id DESC";

    $replies = $conn->query($sql);
    $replies_nb = $replies->rowCount();
    $replies = $replies->fetchAll();

    if (isset($_SESSION['username'])) {
        $usr = $_SESSION['username'];
    } else {
        $usr = '';
    };

    foreach ($replies as &$value) {

        $poster_id = $value['poster_id'];

        $sql = "SELECT username FROM users WHERE id = '$poster_id'";
        $res = $conn->query($sql);
        $res = $res->fetch();
        $poster_name = $res['username'];

        $sql = "SELECT pfp FROM users WHERE id = '$poster_id'";
        $res = $conn->query($sql);
        $res = $res->fetch();

        $poster_pfp = $res['pfp'];

        $user = array(
            'id' => $poster_id,
            'name' => $poster_name,
            'pfp' => $poster_pfp
        );

        $infos = 'posted by <a href=/user/?id=' . $poster_id . '>' . $poster_name . '</a> at: ' . $value['submit_date'];
        $content = $value['content'];

        echo "<script>showReply(" . json_encode($user) . ",`" . $infos . "`,`" . $content . "`,`" . $usr . "`,'" . $value['edit'] . "','" . $value['id'] . "')</script>";

        // $user = array($pid);

    };

    if ($replies_nb != 0) {
        echo "<script>document.getElementById('topic_title').innerHTML+=' (" . $replies_nb . ")'</script>";
    } else {    
        echo "<script>document.getElementById('topic_title').innerHTML+=' (No replies)'</script>";
    };
} else {
    echo "<script>document.title='Topic not found - SMBX World'</script>";
    echo "<script>document.getElementById('post_form').remove();</script>";
    echo "<script>document.getElementById('post_span').remove();</script>";
    echo "<script>AddElement('Oops...','Not found!','No topic was found with this ID');</script>";
};
if (isset($_SESSION["username"])) {
    echo "<script>loadAccount('" . $_SESSION["username"] . "')</script>";

    $usr = $_SESSION['username'];
    $sql = "SELECT id FROM users WHERE username = '$usr'";
    $res = $conn->query($sql);
    $res = $res->fetch();
    $ur_id = $res['id'];

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
} else {
    echo "<script>document.getElementById('post_form').remove();</script>";
    echo "<script>document.getElementById('post_span').remove();</script>";
    echo "<script>AddElement('Oops...','You cannot comment without an account','<br>You must <a href=/login.php>log in</a> to comment.<br><br>');</script>";
};

?>