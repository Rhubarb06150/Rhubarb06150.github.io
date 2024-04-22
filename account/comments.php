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

    <title>Your comments - SMBX World</title>
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
                <div class="element">
                    <div class="element_title">Your comments</div>
                    <div class="element_infos">Here you can see all of comments.</div>
                    <div class="element_content" id="comments_div">
                        <span id='comments_span'></span>
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
$usr = $_SESSION['username'];
$sql = "SELECT id FROM users WHERE username = '$usr'";
$res = $conn->query($sql);
$res = $res->fetch();
$pid = $res['id'];

$sql = "SELECT * FROM comments WHERE poster_id = '$pid'";
$res = $conn->query($sql);
$comments = $res->fetchAll();
$posts_nb = $res->rowCount();

if ($posts_nb > 0) {
    echo "<script>
document.getElementById('comments_span').innerHTML='" . $posts_nb . " comment(s)<br><br>'
</script>";
} else {
    echo "<script>
document.getElementById('comments_span').innerHTML=`<br>You haven't posted any comments yet.<br><br>`
</script>";
};

foreach ($comments as &$value) {
    $content = $value['content'];
    $com_id = $value['id'];
    $sql = "SELECT * FROM comments WHERE post_id = '$com_id'";
    $res = $conn->query($sql);
    $com_nb = $res->rowCount();
    $content = str_replace('<', '&lt', $content);
    $content = str_replace('>', '&gt', $content);

    $post_id = $value['post_id'];

    $sql = "SELECT * FROM posts WHERE id = '$post_id'";
    $res = $conn->query($sql);
    $res = $res->fetch();

    if (json_encode($res) != 'false') {
        $post_name = $res['subject'];
        $post_id = $res['id'];

        echo "<script>
    post_div=document.createElement('div');
    post_div.style.borderTop='1px #404040 solid';
    post_div.style.marginBottom='5px';
    post_div.style.display='flex';
    post_div.style.justifyContent='space-between';
    content_span=document.createElement('span'); 
    content_span.innerHTML+='<a href=/com/?id=" . $com_id . ">'+`" . $content . "`+'</a>';
    post_div.appendChild(content_span);
    post_span=document.createElement('span');
    post_span.innerHTML= 'posted on <a href=/posts/?id=" . $post_id . ">" . $post_name . "</a>';
    post_div.appendChild(post_span);
    document.getElementById('comments_div').appendChild(post_div);
    </script>";
    };
};
