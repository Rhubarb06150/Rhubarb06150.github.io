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
        <div class="elements" id="elements">
            <div class="element">
                <div class="element_title">Credits</div>
                <div class="element_infos">Here you can find basically all ressources I used for the design of the website</div>
                <div class="element_content">
                    <p>Special Thanks to:
                        <br><br>
                        <a href="https://mfgg.net">MFGG</a> which inspired me a lot for the design.<br>
                        <a href="https://www.spriters-resource.com/">The Spriters Ressources</a> on which I took a lot of ressources.<br>
                        <a href="https://wohlsoft.ru/">Wohlstand</a> who helped me by giving me some tips for the website and for my softwares.
                        <br><br>Below are tilesheets/spritesheets I used for the website's design:
                        <br><br>
                        <a href="https://www.spriters-resource.com/custom_edited/mariocustoms/sheet/17656/">Bowser on website's logo</a><br>
                        <a href="https://mfgg.net/index.php?act=resdb&param=02&c=1&id=30424">Font used website's logo</a><br>
                        <a href="https://www.spriters-resource.com/snes/smarioworld/sheet/144754/">Power ups in the background</a><br>
                        <a href="https://mfgg.net/index.php?act=resdb&param=02&c=1&id=4226">SMW Tiles for the sidebar</a><br>
                        <a href="https://www.spriters-resource.com/snes/smassmb1/sheet/168932/">Mario and Luigi on welcome page</a><br>
                        <a href="https://www.spriters-resource.com/snes/smarioworld/sheet/53664/">Mario Sprites</a><br>
                        <a href="https://www.spriters-resource.com/snes/smarioworld/sheet/4591/">Yoshi Sprites</a><br>
                        <a href="https://www.spriters-resource.com/snes/smarioworld/sheet/32120/">Softwares logo's font</a><br>
                    </p>
                    <br>
                    Here is my 88x31 logo if you want to put it somewhere:<br><br>
                    <img src="/smbxworld.png" width=88 height=31><br>
                    Here is also my 350x38 gif banner if you want to put it somewhere:<br><br>
                    <img src="/smbxworld.gif" width=350 height=38><br>
                    Or even if you are registered here and you want to support the website:<br><br>
                    <img src="/images/head/smbxworlduser.png" width=350 height=19>   
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