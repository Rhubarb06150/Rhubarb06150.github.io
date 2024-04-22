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
                <div class=element id="post_form">
                    <div class=element_title>Submit a topic!</div>
                    <div class=element_infos>Remember to stay in-topic or to choose the off-topic category.</div>
                    <div class=element_content>
                        <form method="post" action="/actions/submit_topic.php">
                            Category:<br>
                            <select id="cat" name="cat">
                                <option value="none" name="none">- Please choose a category -</option>
                                <option value="smbx" name="smbx">Super Mario Bros. X</option>
                                <option value="smb" name="smb">Super Mario Bros.</option>
                                <option value="ssb" name="ssb">Super Smash Bros.</option>
                                <option value="tloz" name="tloz">The Legend Of Zelda</option>
                                <option value="met" name="met">Metroid</option>
                                <option value="dkc" name="dkc">Donkey Kong Country</option>
                                <option value="pknm" name="pkmn">Pokémon</option>
                                <option value="other" name="other">Other</option>
                            </select><br><br>
                            The subject of your topic:<br><br>
                            <input type="text" id="subject" name="subject" style="width: 25vw;"><br><br>
                            Content of your topic:<br><br>
                            <textarea id="content" name="content" style="width:70vw;height:256px"></textarea>
                            <script>
                                document.getElementById('content').addEventListener("keyup", (event) => {
                                    document.getElementById('len').innerHTML = document.getElementById('content').value.length
                                    if (document.getElementById('content').value.length > 4096) {
                                        document.getElementById('len').style.color = "#ff0000";
                                    } else {
                                        document.getElementById('len').style.color = "#ffffff";
                                    }
                                });
                            </script><br>
                            <span id=len>0</span>/4096
                            <input hidden type="submit" id="post" name="post"><br><br>
                            <label for="post" class="button">Submit your topic</label><br>
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
if (isset($_SESSION["username"])) {
    echo "<script>loadAccount('" . $_SESSION["username"] . "')</script>";
    echo "<script>loadTheme('" . $_SESSION["theme"] . "');</script>";
}else{
    echo "<script>document.getElementById('post_form').remove();</script>";
    echo "<script>AddElement('You cannot post yet.','But I said YET','<br><br>You must <a href=/login.php>log in</a> to post.<br><br><br>');</script>";
};
?>