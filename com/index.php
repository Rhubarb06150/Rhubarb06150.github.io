<?php
session_start();
$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);
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
    <title>Comment action - SMBX World</title>
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
        <div class="elements" id="elements">
            <span class=little_section_title id="post_span">Your comment:</span>
            <div class="element" id="com_span">
                <div class=element_infos>Here you can edit or delete your comment.</div>
                <div class="element_content">
                    <form method="post" action="/actions/commentary_edit.php" id="post_form">

                        <span id="comment_title">Comment posted on</span><br><br>
                        <input id="com_id" name="com_id" hidden>
                        <textarea style="width: 100%; height:256px;" id="content" name="content"></textarea>
                        <input id="post_id" name="post_id" value="post" hidden>
                        <br><br>
                        <input hidden type="submit" id="edit" name="edit">
                        <label for="edit" class="button">Edit comment</label>
                    </form><br>
                    <form method="post" action="/actions/commentary_delete.php">
                        <input id="com_id_2" name="com_id_2" hidden>
                        <input hidden type="submit" id="delete" name="delete">
                        <label for="delete" class="button">Delete comment</label>
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

$id = $_GET['id'];

$sql = "SELECT * FROM comments WHERE id = '$id'";
$comment = $conn->query($sql);
$exist = $comment->rowCount();
$comment = $comment->fetch();

$sql = "SELECT id FROM users WHERE username = '" . $_SESSION['username'] . "'";
$res = $conn->query($sql);
$res = $res->fetch();
$uid = $res['id'];

if ($exist > 0) {
    $poster_id = $comment['poster_id'];
    if ($uid == $poster_id) {
        $target_id = $comment['post_id'];
        $post_time = $comment['post_date'];

        if ($comment['type'] == 'post') {
            $sql = "SELECT * FROM posts WHERE id = '$target_id'";
            $res = $conn->query($sql);
            $target = $res->fetch();
            $target_name = $target['subject'];
        }else if($comment['type']=='news'){
            $sql = "SELECT * FROM news WHERE id = '$target_id'";
            $res = $conn->query($sql);
            $target = $res->fetch();
            $target_name = $target['title'];
        };

        echo "<script>document.getElementById('content').value=`" . $comment['content'] . "`</script>";
        echo "<script>document.getElementById('com_id').value=`" . $comment['id'] . "`</script>";
        echo "<script>document.getElementById('com_id_2').value=`" . $comment['id'] . "`</script>";
        echo "<script>document.getElementById('post_id').value=`" . $target['id'] . "`</script>";
        echo "<script>document.getElementById('comment_title').innerHTML+=` <a href='/posts/?id=" . $target_id . "'>" . $target_name . "</a> at " . $post_time . "`</script>";
    } else {
        echo "<script>document.getElementById('post_span').remove()</script>";
        echo "<script>document.getElementById('com_span').remove()</script>";
        echo "<script>AddElement('What are you doing?',`This comment isn't yours`,`You cannot edit/delete a comment that you doesn't own`);</script>";
        echo "<script>document.title='Comment not found - SMBX World'</script>";
    }
} else {
    echo "<script>document.getElementById('post_span').remove()</script>";
    echo "<script>document.getElementById('com_span').remove()</script>";
    echo "<script>AddElement('Oops',`Comment not found.`,'This comment seems to not exist :/');</script>";
    echo "<script>document.title='Comment not found - SMBX World'</script>";
};

?>