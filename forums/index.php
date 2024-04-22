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
                    <div class="element_title">Topics</div>
                    <div class="element_content">
                        <a href="/forums/topic/submit/">Start a new topic</a>
                        <table>
                            <tr>
                                <th width="20%">Subject</th>
                                <th>Last Topic</th>
                                <th width="5%">Topics</th>
                                <th width="5%">Replies</th>
                            </tr>
                            <tr>
                                <td>Super Mario Bros. X</td>
                                <td id="smbx_last"></td>
                                <td id="smbx_nb"></td>
                                <td id="smbx_rnb"></td>
                            </tr>
                            <tr>
                                <td>Super Mario Bros</td>
                                <td id="smb_last"></td>
                                <td id="smb_nb"></td>
                                <td id="smb_rnb"></td>
                            </tr>
                            <tr>
                                <td>Super Smash Bros.</td>
                                <td id="ssb_last"></td>
                                <td id="ssb_nb"></td>
                                <td id="ssb_rnb"></td>
                            </tr>
                            <tr>
                                <td>The Legend Of Zelda</td>
                                <td id="tloz_last"></td>
                                <td id="tloz_nb"></td>
                                <td id="tloz_rnb"></td>
                            </tr>
                            <tr>
                                <td>Metroid</td>
                                <td id="met_last"></td>
                                <td id="met_nb"></td>
                                <td id="met_rnb"></td>
                            </tr>
                            <tr>
                                <td>Donkey Kong Country</td>
                                <td id="dkc_last"></td>
                                <td id="dkc_nb"></td>
                                <td id="dkc_rnb"></td>
                            </tr>
                            <tr>
                                <td>Pokémon</td>
                                <td id="pk_last"></td>
                                <td id="pk_nb"></td>
                                <td id="pk_rnb"></td>
                            </tr>
                            <tr>
                                <td>Other</td>
                                <td id="other_last"></td>
                                <td id="other_nb"></td>
                                <td id="other_rnb"></td>
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
};

$sql="SELECT * FROM topics WHERE category = 'smbx'";
$req="SELECT DISTINCT * FROM topics WHERE category = 'smbx' ORDER BY id DESC";
$res=$conn->query($sql);
$nb=$res->rowCount();
$res=$conn->query($req);
$res=$res->fetch();
$last=$res['topic'];
$last_id=$res['id'];
echo "<script>document.getElementById('smbx_nb').innerHTML=".$nb."</script>";
echo "<script>document.getElementById('smbx_last').innerHTML='<a href=/forums/topic/?topic=".$last_id.">".$last."</a>'</script>";

$sql="SELECT * FROM topics WHERE category = 'smb'";
$req="SELECT DISTINCT * FROM topics WHERE category = 'smb' ORDER BY id DESC";
$res=$conn->query($sql);
$nb=$res->rowCount();
$res=$conn->query($req);
$res=$res->fetch();
$last=$res['topic'];
$last_id=$res['id'];
echo "<script>document.getElementById('smb_nb').innerHTML=".$nb."</script>";
echo "<script>document.getElementById('smb_last').innerHTML='<a href=/forums/topic/?topic=".$last_id.">".$last."</a>'</script>";

$sql="SELECT * FROM topics WHERE category = 'ssb'";
$req="SELECT DISTINCT * FROM topics WHERE category = 'ssb' ORDER BY id DESC";
$res=$conn->query($sql);
$nb=$res->rowCount();
$res=$conn->query($req);
$res=$res->fetch();
$last=$res['topic'];
$last_id=$res['id'];
echo "<script>document.getElementById('ssb_nb').innerHTML=".$nb."</script>";
echo "<script>document.getElementById('ssb_last').innerHTML='<a href=/forums/topic/?topic=".$last_id.">".$last."</a>'</script>";

$sql="SELECT * FROM topics WHERE category = 'dkc'";
$req="SELECT DISTINCT * FROM topics WHERE category = 'dkc' ORDER BY id DESC";
$res=$conn->query($sql);
$nb=$res->rowCount();
$res=$conn->query($req);
$res=$res->fetch();
$last=$res['topic'];
$last_id=$res['id'];
echo "<script>document.getElementById('dkc_nb').innerHTML=".$nb."</script>";
echo "<script>document.getElementById('dkc_last').innerHTML='<a href=/forums/topic/?topic=".$last_id.">".$last."</a>'</script>";
?>