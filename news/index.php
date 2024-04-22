<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$id = $_GET['id'];
$sql = "SELECT title FROM news WHERE id = '$id'";
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
        <div class="elements">
            <div class="elements" id="elements">
            </div>
            <span class=little_section_title id="post_span">Post a comment:</span>
            <form method="post" action="/actions/commentary_post.php" id="post_form">
                <div class="element">
                    <div class=element_infos>Remember to stay polite and respectful when posting comment.</div>
                    <div class="element_content">
                        Comment:<br><br>
                        <textarea style="width: 100%; height:64px;" id="content" name="content"></textarea>
                        <input id="type" name="type" value="news" hidden>
                        <input id="post_id" name="post_id" value="post" hidden>
                        <br><br>
                        <input hidden type="submit" id="post" name="post">
                        <label for="post" class="button">Post comment</label>
                    </div>

                </div>

            </form>
            <span class=little_section_title id='com_span'></span>
            <div id="comments"></div>

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

$post_id = $_GET['id'];
$sql = "SELECT * FROM news WHERE id = '$post_id'";
$result = $conn->query($sql);
$exist = $result->rowCount();
$result = $result->fetch();


if ($exist > 0) {
    $title = $result['title'];
    echo "<script>document.title=`" . $title . " - SMBX World`</script>";
} else {
    echo "<script>document.title='Post not found - SMBX World'</script>";
};

if ($exist > 0) {

    $pid = $result['poster_id'];

    $sql = "SELECT username FROM users WHERE id = '$pid'";
    $res = $conn->query($sql);
    $res = $res->fetch();
    $poster_usr = $res['username'];

    echo "<script>showPost('" . $result['title'] . "','Posted by: <a href=/user/?id=" . $result['poster_id'] . ">" . $poster_usr . "</a> at: " . $result['post_date'] . "',`" . $result['content'] . "`,'new'    );</script>";
    echo "<script>document.getElementById('post_id').value=" . $_GET['id'] . "</script>";

    $pid = $_GET['id'];
    $sql = "SELECT * FROM comments WHERE type = 'news' AND post_id = '$pid' ORDER BY id DESC";

    $comments = $conn->query($sql);
    $comms_nb = $comments->rowCount();
    $comments = $comments->fetchAll();

    if (isset($_SESSION['username'])) {
        $usr = $_SESSION['username'];
    } else {
        $usr = '';
    };

    foreach ($comments as &$value) {

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

        $infos = 'posted by <a href=/user/?id=' . $poster_id . '>' . $poster_name . '</a> at: ' . $value['post_date'];
        $content = $value['content'];

        echo "<script>showCommentary(" . json_encode($user) . ",`" . $infos . "`,`" . $content . "`,`" . $usr . "`,'" . $value['edit'] . "','" . $value['id'] . "')</script>";

        // $user = array($pid);

    };

    if ($comms_nb != 0) {
        echo "<script>document.getElementById('com_span').innerHTML=' Comments (" . $comms_nb . ")'</script>";
    } else {
        echo "<script>document.getElementById('com_span').innerHTML='No comments yet.'</script>";
    };
} else {
    echo "<script>document.getElementById('post_form').remove();</script>";
    echo "<script>document.getElementById('post_span').remove();</script>";
    echo "<script>AddElement('Oops...','Not found!','No post was found with this ID');</script>";
};
if (!(isset($_SESSION["username"]))) {
    echo "<script>document.getElementById('post_form').remove();</script>";
    echo "<script>document.getElementById('post_span').remove();</script>";
    echo "<script>AddElement('Oops...','You cannot comment without an account','<br>You must <a href=/login.php>log in</a> to comment.<br><br>');</script>";
};

?>