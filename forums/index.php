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
                                <td><a href="/forums/sub/?sub=smbx">Super Mario Bros. X</a></td>
                                <td id="smbx_last"></td>
                                <td id="smbx_nb"></td>
                                <td id="smbx_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=smb">Super Mario Bros</a></td>
                                <td id="smb_last"></td>
                                <td id="smb_nb"></td>
                                <td id="smb_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=ssb">Super Smash Bros.</a></td>
                                <td id="ssb_last"></td>
                                <td id="ssb_nb"></td>
                                <td id="ssb_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=tloz">The Legend Of Zelda</a></td>
                                <td id="tloz_last"></td>
                                <td id="tloz_nb"></td>
                                <td id="tloz_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=met">Metroid</a></td>
                                <td id="met_last"></td>
                                <td id="met_nb"></td>
                                <td id="met_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=dkc">Donkey Kong Country</a></td>
                                <td id="dkc_last"></td>
                                <td id="dkc_nb"></td>
                                <td id="dkc_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=pkmn">Pokémon</a></td>
                                <td id="pkmn_last"></td>
                                <td id="pkmn_nb"></td>
                                <td id="pkmn_rnb"></td>
                            </tr>
                            <tr>
                                <td><a href="/forums/sub/?sub=other">Other</a></td>
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

$cats = array("smbx", "smb", "ssb", "tloz", "met", "dkc", "pkmn", "other");

foreach ($cats as &$category) {

    $sql = "SELECT * FROM topics WHERE category = '$category'";
    $req = "SELECT DISTINCT * FROM topics WHERE category = '$category' ORDER BY id DESC";

    $res = $conn->query($sql);
    $nb = $res->rowCount();

    $topics = $res->fetchAll();

    $res = $conn->query($req);
    $res = $res->fetch();
    $last = $res['topic'];

    $last_id = $res['id'];

    $ids = array();
    foreach ($topics as &$value) {
        array_push($ids, $value['id']);
    };

    $sql2 = "SELECT * FROM replies WHERE topic_id IN (" . implode(',', $ids) . ")";
    $replies = $conn->query($sql2);
    $replies = $replies->rowCount();

    echo "<script>document.getElementById('".$category."_rnb').innerHTML=" . $replies . "</script>";
    echo "<script>document.getElementById('".$category."_nb').innerHTML=" . $nb . "</script>";
    echo "<script>document.getElementById('".$category."_last').innerHTML='<a href=/forums/topic/?topic=" . $last_id . ">" . $last . "</a>'</script>";
};
?>