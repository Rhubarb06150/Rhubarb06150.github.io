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
    
    <title>Account preferences - SMBX World</title>
</head>

<body id="body">

    <div class="header" id="header">
        <a href="/" style="width: max-content;">
            <img src="/images/logos/smbxworld.png" height="106" width="588" style="margin-left: 32px;" alt="website logo" id="website-logo">
        </a>
    </div>
    <div class="page_structure" style="max-width:100vw;">
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
        <div class="elements" id="elements">
            <div class="element" style="max-width:100%;">
                <div class="element_title">
                    <span>Manage account preferences</span>
                </div>
                <div class="element_infos">
                    <span>Here you can edit your account settings.</span>
                </div>
                <div class="element_content">

                    <form action="/actions/upload_pfp.php" method="post" enctype="multipart/form-data">
                        <p>
                            Modify profile picture:<br>
                            The image can't be over 128 Kb!<br><br>For a better result, upload a square profile picture.<br><br>
                        </p>

                        <input type="file" id="picture" name="picture"><br><br>

                        <input type="submit" id="post_pfp" name="post_pfp" hidden>

                        <label for="post_pfp" class="button">Update profile picture</label>

                    </form>

                    <br><br>

                    <form method="post" action="/actions/acc_modify.php">

                        <p>
                            Change website theme:
                        </p>
                        <br>
                        <select id="theme" name="theme">
                            <option value="default">Classic (Gray and Red)</option>
                            <option value="dark">Dark (Blue Mushrooms)</option>
                            <option value="pokemon">Pokémon (Gold and Silver)</option>
                            <!-- <option value="pokemon2">Pokémon 2 (Fire Red and Green Leaf)</option> -->
                            <option value="blue">Blue</option>
                        </select><br><br>
                        Bio:<br><br>
                        <textarea id="desc_aera" style="width:80%;height:256px" name="bio"></textarea>
                        <script>
                            document.getElementById('desc_aera').addEventListener("keyup", (event) => {
                                document.getElementById('len').innerHTML=document.getElementById('desc_aera').value.length
                                if (document.getElementById('desc_aera').value.length>1024){
                                    document.getElementById('len').style.color="#ff0000";
                                }else{
                                    document.getElementById('len').style.color="#ffffff";
                                }
                            });
                        </script><br>
                        <span id="len"></span>/1024<br><br>
                        <input hidden type="submit" id="post" name="post">
                        <label for="post" class="button">Update account preferences</label>
                    </form>
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

    echo "<script>document.getElementById('theme').value='" . $_SESSION["theme"] . "'</script>";

    echo "<script>var abs_code ='" . $_SESSION["abs_code"] . "'</script>";

    $conn = new PDO('mysql:host=localhost;dbname=data;charset=utf8', 'hey', '');
    $usrf = $_SESSION['username'];

    $sql = "SELECT description FROM users WHERE username = '$usrf'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $bio = $result["description"];

    echo "<script>document.getElementById('desc_aera').value=`" . $bio . "`</script>";
    echo "<script>document.getElementById('len').innerHTML=document.getElementById('desc_aera').value.length</script>";

};
?>