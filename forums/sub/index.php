<?php
session_start();
$category_url = $_GET['sub'];
$cats = array("smbx", "smb", "ssb", "tloz", "met", "dkc", "pkmn", "other");

if(!(in_array($category_url,$cats))){
    header('Location:/forums/');
};
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <link href="/images/head/icon.png" rel="icon">
    <script src="/main.js"></script>

    <title>Forums - SMBX World</title>
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
                    <div class="element_title" id="title"></div>
                    <div class="element_content">
                        <a href="/forums/topic/submit/">Start a new topic</a>
                        <table id="topics">
                            <tr>
                                <th width="10%">Poster</th>
                                <th>Topic</th>
                                <th width="5%">Replies</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="elements">
            <div class="elements" id="elements">
                <div class="element">
                    <div class="element_title">Off-Topics</div>
                    <div class="element_content">
                        <a>Start a new topic</a>
                    </div>
                </div>
            </div>
        </div> -->

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
$cat=$category_url;
if ($cat == 'smbx') {
    $category = 'Super Mario Bros. X';
} else if ($cat == 'smb') {
    $category = 'Super Mario Bros.';
} else if ($cat == 'tloz') {
    $category = 'The Legend Of Zelda';
} else if ($cat == 'met') {
    $category = 'Metroid';
} else if ($cat == 'dkc') {
    $category = 'Donkey Kong Country';
} else if ($cat == 'other') {
    $category = 'Other';
} else if ($cat == 'pkmn') {
    $category = 'Pokémon';
} else if ($cat == 'ssb') {
    $category = 'Super Smash Bros.';
};

$sql="SELECT * FROM topics WHERE category = '$category_url' ORDER BY last_activity DESC";
$res=$conn->query($sql);
$topics=$res->fetchAll();
$topics_nb=$res->rowCount();

echo "<script>document.getElementById('title').innerHTML='".$category." Topics (".$topics_nb.")'</script>";
echo "<script>document.title='".$category." topics - SMBX World'</script>";

foreach($topics as &$topic){
    $poster_id=$topic['poster_id'];
    $sql="SELECT username FROM users WHERE id = '$poster_id'";
    $res=$conn->query($sql);
    $res=$res->fetch();
    $poster_username=$res['username'];
    $topic_id=$topic['id'];
    $topic_name=$topic['topic'];
    $sql="SELECT * FROM replies WHERE topic_id = '$topic_id'";
    $res=$conn->query($sql);
    $replies_nb=$res->rowCount();
    echo "<script>addTopicRow(`<a href=/user/?id=".$poster_id.">".$poster_username."</a>`,".$topic_id.",`".$topic_name."`,".$replies_nb.")</script>";
};

?>