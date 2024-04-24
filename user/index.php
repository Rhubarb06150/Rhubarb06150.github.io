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

    <title>User - SMBX World</title>
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

            <div class="element" id="user_div">
                <div class="element_title" id="username"></div>
                <div class="element_infos" id="infos">Informations about </div>
                <div class="element_content">
                    <img id="pfp" class="element" style="max-width:128px;min-width:128px;max-height:128px;min-height:128px;"><br>
                    <span id="uid">User ID: </span><br>
                    <span id="reg_date">Register date: </span><br>
                    <span id="posts">Posts: </span><br>
                    <span id="comms">Comments: </span><br>
                    <span id="topics">Topics: </span><br>
                    <span id="replies">Replies: </span><br><br>
                    <a id="chat_a">
                        <span id="chat">Chat with </span></a><br><br>
                    <div class="line"></div>
                    <span id="bio"></span><br><br>
                    <button id="prev" onclick="previousUser();" hidden></button>
                    <label for="prev" class="button" style="width:max-content;"><span>Previous user</span></label>
                    <button id="next" onclick="nextUser();" hidden></button>
                    <label for="next" class="button" style="width:max-content;"><span>Next user</span></label>
                </div>

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

$user_id = '0';
if (isset($_GET["id"])) {
    $user_id = htmlspecialchars($_GET["id"]);
};

$sql = "SELECT * FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);

$sql = "SELECT * FROM admins WHERE id = '$user_id'";
$admin = $conn->query($sql);

if ($result->rowCount() > 0) {

    $sql = "SELECT username FROM users WHERE id = '$user_id'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $username = $result['username'];

    $sql = "SELECT register_date FROM users WHERE id = '$user_id'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $reg_date = $result['register_date'];

    $sql = "SELECT pfp FROM users WHERE id = '$user_id'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $pfp = $result['pfp'];

    $sql = "SELECT description FROM users WHERE id = '$user_id'";
    $result = $conn->query($sql);
    $result = $result->fetch();
    $bio = $result['description'];
    $bio = str_replace("\n", '<br>', $bio);

    if ($bio == '') {
        echo "<script>document.getElementById('bio').innerHTML='No bio provided'</script>";
    } else {
        echo "<script>document.getElementById('bio').innerHTML='Bio: <br><br>'+`$bio`</script>";
    };

    echo "<script>document.title='User: " . $username . " - SMBX World'</script>";

    echo "<script>document.getElementById('username').innerHTML='" . $username . "'</script>";

    if ($admin->rowCount() > 0) {
        echo "<script>staff_span=document.createElement('span');</script>";
        echo "<script>staff_span.style.color='#0088ff';</script>";
        echo "<script>staff_span.innerHTML=' (Staff)';</script>";
        echo "<script>document.getElementById('username').appendChild(staff_span);</script>";
    };

    echo "<script>document.getElementById('infos').innerHTML+='" . $username . ".'</script>";
    echo "<script>document.getElementById('pfp').src='" . $pfp . "'</script>";
    echo "<script>document.getElementById('uid').innerHTML+='" . $user_id . "'</script>";
    echo "<script>document.getElementById('reg_date').innerHTML+='" . $reg_date . "'</script>";
    echo "<script>document.getElementById('chat').innerHTML+='" . $username . "'</script>";
    echo "<script>document.getElementById('chat_a').href='/pms/?user=" . $user_id . "'</script>";

    $sql = "SELECT * FROM posts WHERE poster_id = '$user_id'";
    $result = $conn->query($sql);
    $posts_nb = $result->rowCount();

    $sql = "SELECT * FROM comments WHERE poster_id = '$user_id'";
    $result = $conn->query($sql);
    $comms_nb = $result->rowCount();

    $sql = "SELECT * FROM replies WHERE poster_id = '$user_id'";
    $result = $conn->query($sql);
    $replies_nb = $result->rowCount();

    $sql = "SELECT * FROM topics WHERE poster_id = '$user_id'";
    $result = $conn->query($sql);
    $topics_nb = $result->rowCount();

    echo "<script>document.getElementById('posts').innerHTML+='" . $posts_nb . "'</script>";
    echo "<script>document.getElementById('topics').innerHTML+='" . $topics_nb . "'</script>";
    echo "<script>document.getElementById('replies').innerHTML+='" . $replies_nb . "'</script>";
    if ($posts_nb > 0) {
        $sql = "SELECT * FROM posts WHERE poster_id = '$user_id' ORDER BY id DESC";
        $res = $conn->query($sql);
        $res = $res->fetch();
        $last_post = $res['subject'];
        $last_post_id = $res['id'];
        echo "<script>document.getElementById('posts').innerHTML+='  -  Last post: <a href=/posts/?id=" . $last_post_id . ">" . $last_post . "</a>'</script>";
    };

    if ($topics_nb > 0) {
        $sql = "SELECT * FROM topics WHERE poster_id = '$user_id' ORDER BY id DESC";
        $res = $conn->query($sql);
        $res = $res->fetch();
        $last_post = $res['topic'];
        $last_post_id = $res['id'];
        echo "<script>document.getElementById('topics').innerHTML+='  -  Last topic: <a href=/posts/?id=" . $last_post_id . ">" . $last_post . "</a>'</script>";
    };
    echo "<script>document.getElementById('comms').innerHTML+='" . $comms_nb . "'</script>";
} else {
    echo "<script>document.getElementById('user_div').remove();";
    echo "AddElement('User not found','I have nothing to say about it','This user does not exist.')</script>";
    echo "<script>document.title='User not found! - SMBX World'</script>";
};
?>