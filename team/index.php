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
    
    <title>SMBX World Team</title>
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
                <div class="element_title">
                    <span>
                        The Team!
                    </span>
                </div>
                <div class="element_infos">
                    <span>
                        April 11 2024
                    </span>
                </div>
                <div class="element_content">
                    <p>
                        Here is the SMBX World team!<br><br>
                        <img src="/images/staff/rhubarb.png" class="element" style="max-width:128px;min-width:128px;min-height:128px;max-height:128px;" /><br>
                        <a href="/user/?id=1">Rhubarb</a>    (Founder)<br><br>

                        Hello I'm Rhubarb, and I'm a Nintendo lover since I'm born, I played a lot of Super Mario World
                        and Super Mario All-Stars when I was only a very young kid, that's what gave me the love of the
                        16-bits era with all the games it brought like the legendary Super Mario World but also the
                        extremely good game Super Mario All Stars. When I grown up I was happy that I could buy all of
                        Nintendo consoles such as the Super Nintedo and the Nintendo 64 which are still my favorites
                        consoles to this day, I mean I never knew which one I prefer, these two consoles are so good
                        that I can't choose. I also love the Donkey Kong Country franchise.<br>

                        I basically do everything here because I'm alone for this website, that's because I'm the
                        only one of my friends that knows SMBX.<br><br>

                        I discovered SMBX back in 2015 with the 1.3.0 version on which I spent too much nights of
                        buildings little levels that I showed to my family that doesn't event play Mario games but I was
                        very happy of my levels
                        <br><br>

                        I think you noticed it, but the design of this website is a lot inspired by the desgin
                        of <a href="https://mfgg.net">mfgg.net</a> design, especially because I love this website and
                        because I love it's design. I hope you like this design because I'm proud of it, I think it
                        reproduces a bit old Nintendo forums designs.
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
