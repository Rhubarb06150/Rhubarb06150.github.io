<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <link href="/images/head/icon.png" rel="icon">
    <script src="/main.js"></script>

    <title>SMBX World</title>
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
                    <div class="element_title">
                        <span>
                            Welcome to SMBX World!
                        </span>
                    </div>
                    <div class="element_infos">
                        <span>
                            April 11 2024, written by Rhubarb
                        </span>
                    </div>
                    <div class="element_content">
                        <p>
                            What's going on? I'm currently rebuilding all of the website because the old design was too much complicated to adjust for everybody.<br>
                            That's also because I didn't like the name because it didn't represent SMBX.
                            <br><br>So I'm rebuilding this website with a to do list there (very far to be complete):
                            <br><br>

                            - Levels uploads<br>
                            - Level search engine<br>
                            - The documentation for my softwares<br>
                            - An level making help page<br>
                            - Multiple themes<br><br>

                            If you have any idea you can contact me at <a href="mailto:rhubarb06150@gmail.com">rhubarb06150@gmail.com</a>.<br><br>
                            If you also want to help me for making the website you can still contact me at the adress above.<br><br>
                        </p>
                        <img src="/images/head/v-mario.png" width="154" height="128">
                        <img src="/images/head/v-luigi.png" width="148" height="128">
                    </div>
                </div>
            </div>

            <div style="display: flex;flex-direction:row;">

                <div class="elements" id="posts">
                    <span class="section_title">Lastest posts</span>
                    <div class=element style="margin-bottom: 40px;">
                        <div class="element_title">You wanna post something?</div>
                        <div class="element_infos">You can!</div>
                        <div class="element_content">Go on the <a href="/post">post page</a> and express yourself!</div>
                    </div>
                </div>
                <div class="elements" id="news">
                    <span class="section_title">Lastest news:</span>
                </div>
            </div>
        </div>
    </div>
    <center>
        <span class="infos" id="visits"></span>
    </center>

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

if (isset($_SESSION["username"])) {
    echo "<script>AddElement('<a href=/users>Members!</a>','Wow this is awesome!','Currently, there are <span id=members_nb></span> members registered here! Our last member is <span id=last_member></span>.');</script>";
} else {
    echo '<script>' . "AddElement('You do not have an account?','No problem!','You can create an account an account on <a href=/signup.php>sign up page</a>, and joining <span id=members_nb></span> members!  Our last member is <span id=last_member></span>.');"  . '</script>';
};

$conn = new PDO(
    'mysql:host=localhost;dbname=data;charset=utf8',
    'hey',
    ''
);

$req = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
$result = $conn->query($req);
$lu = $result->fetch();
$last_user = $lu["username"];

$req = "SELECT * FROM users";
$result = $conn->query($req);

$sql = "SELECT id FROM users WHERE username = '$last_user'";
$result_b = $conn->query($sql);
$result_b = $result_b->fetch();
$luid = $result_b['id'];

echo "<script>document.getElementById('members_nb').innerHTML=" . $result->rowCount() . ";</script>";
echo "<script>document.getElementById('last_member').innerHTML='<a href=/user/?id=" . $luid . ">" . $last_user . "</a>';</script>";

$sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql);
$result = $result->fetchAll();

foreach ($result as $value) {

    $pid = $value['poster_id'];
    $post_id = $value['id'];

    $sql = "SELECT username FROM users WHERE id = '$pid'";
    $poster_usr = $conn->query($sql);
    $poster_usr = $poster_usr->fetch();
    $poster_usr = $poster_usr['username'];

    $sql = "SELECT * FROM comments WHERE type = 'post' and post_id = '$post_id'";
    $res = $conn->query($sql);
    $comm_nb = $res->rowCount();

    echo "<script>";
    echo "addPost(`" . $value["subject"] . "`,`posted by <a href=/user/?id=" . $pid . ">" . $poster_usr . "</a> at " . mb_substr($value["post_date"], 0, -3) . "`,`" . $value["content"] . "`," . $value["id"] . "," . $comm_nb . ");";
    echo "</script>";
};

$sql = "SELECT * FROM news ORDER BY id DESC LIMIT 5";
$result = $conn->query($sql);
$result = $result->fetchAll();

foreach ($result as $value) {

    $pid = $value['poster_id'];
    $post_id = $value['id'];

    $sql = "SELECT username FROM users WHERE id = '$pid'";
    $poster_usr = $conn->query($sql);
    $poster_usr = $poster_usr->fetch();
    $poster_usr = $poster_usr['username'];

    $sql = "SELECT * FROM comments WHERE type = 'news' and post_id = '$post_id'";
    $res = $conn->query($sql);
    $comm_nb = $res->rowCount();

    echo "<script>addNews(`" . $value["title"] . "`,`posted by <a href=/user/?id=" . $pid . ">" . $poster_usr . "</a> at " . mb_substr($value["post_date"], 0, -3) . "`,`" . $value["content"] . "`," . $value["id"] . "," . $comm_nb . ");</script>";
};

$sql="SELECT visits FROM visits WHERE id = 1";
$res=$conn->query($sql);
$res=$res->fetch();
$visits_nb=$res['visits'];

echo "<script>document.getElementById('visits').innerHTML='".$visits_nb." pages browsed on SMBX World'</script>"
?>