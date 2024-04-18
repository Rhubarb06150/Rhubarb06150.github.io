function AddElement(title, infos, content, div_id) {

    div = document.createElement("div");
    div.classList = "element";

    title_div = document.createElement("div");
    title_div.classList = "element_title";
    title_span = document.createElement("span");
    title_span.innerHTML = title;
    title_div.appendChild(title_span);

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(infos_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);
    if (div_id != null) {
        content_div.id = div_id;
    };

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    document.getElementById("elements").appendChild(div);

};

function addPost(title, infos, content, post_id, comms_nb) {

    div = document.createElement("div");
    div.classList = "element";

    content = content.replaceAll("<", "&lt");
    content = content.replaceAll(">", "&gt");
    content = content.replaceAll("\n", "<br>");

    title_div = document.createElement("div");
    title_div.classList = "element_title";
    title_span = document.createElement("span");
    title_span.innerHTML = title;
    title_div.appendChild(title_span);

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(infos_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    comments_div = document.createElement("div");
    comments_div.classList = "element_infos";
    comment_a = document.createElement('a');
    comment_a.href = '/posts/?id=' + post_id;
    comment_a.innerHTML = 'Comments (' + comms_nb + ')'
    comments_div.appendChild(comment_a);

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    div.appendChild(comments_div);

    document.getElementById("posts").appendChild(div);

};

function showPost(title, infos, content, post_id) {

    div = document.createElement("div");
    div.classList = "element";

    title_div = document.createElement("div");
    title_div.classList = "element_title";
    title_span = document.createElement("span");
    title_span.innerHTML = title;
    title_div.appendChild(title_span);

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(infos_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content = content.replaceAll("<", "&lt");
    content = content.replaceAll(">", "&gt");
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);

    document.getElementById("elements").appendChild(div);

};

function showCommentary(user, infos, content) {

    div = document.createElement("div");
    div.classList = "element";

    pfp = document.createElement('img');
    pfp.src = user.pfp
    pfp.style.width = "32px"
    pfp.style.height = "32px"
    pfp.style.marginRight = "8px"

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(pfp);
    infos_div.appendChild(infos_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content = content.replaceAll("<", "&lt");
    content = content.replaceAll(">", "&gt");
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    div.appendChild(infos_div);
    div.appendChild(content_div);

    document.getElementById("comments").appendChild(div);
}

function ShowStars(note, votes) {
    note_abs = Math.round(note);
    if (votes > 100) {
        pres = 'prestige_';
    } else {
        pres = '';
    };
    star_src = '';
    stars_div = document.createElement("div");
    for (i = 0; i < note_abs; i++) {
        star = document.createElement("img");
        star.style.width = "32px";
        star.style.height = "32px";

        star_src = '/images/stars/' + pres + 'half_star.png';
        if (i % 2 == 0) {
            star_src = '/images/stars/' + pres + 'star.png';
        };

        star.src = star_src;

        if (i % 2 == 0) {
            stars_div.appendChild(star);
        };

    };

    note_span = document.createElement('span')
    note_span.innerHTML = note_abs + '|' + note_abs + '|' + star_src
    stars_div.appendChild(note_span)
    document.getElementById("elements").appendChild(stars_div);
};

function LoadLevel() {

    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');
    let level = {};

    fetch('/files/levels/' + id + '/index.xml').then(r => r.text()).then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
        level.file = (xmlDoc.querySelector("file").textContent);
        level.author = (xmlDoc.querySelector("author").textContent);
        level.release_date = (xmlDoc.querySelector("release_date").textContent);
        level.release_hour = (xmlDoc.querySelector("release_hour").textContent);
        level.version = (xmlDoc.querySelector("version").textContent);
        level.description = (xmlDoc.querySelector("description").textContent);
        level.bbcode = (xmlDoc.querySelector("bbcode").textContent);
        level.name = (xmlDoc.querySelector("name").textContent);
        level.id = (xmlDoc.querySelector("id").textContent);
        level.size = (xmlDoc.querySelector("size").textContent);
        level.votes = (xmlDoc.querySelector("votes").textContent);
        level.note = (xmlDoc.querySelector("note").textContent);

        div = document.createElement("div");
        div.classList = "element";
        div_title = document.createElement("div");
        div_title.classList = "element_title";
        div_title.innerHTML = level.name;
        div_infos = document.createElement("div");
        div_infos.classList = "element_infos";
        div_infos.innerHTML = "By:" + level.author;
        div_content = document.createElement("div");
        div_content.classList = "element_content";
        div_content.style.display = "flex";
        div_content.style.flexDirection = 'row';
        thumbnail = document.createElement("img");
        thumbnail.src = '/files/levels/' + id + '/thumbnail.png';
        thumbnail.classList = "thumbnail";
        thumbnail.style.marginRight = "5px";
        div_content.appendChild(thumbnail);
        div_right = document.createElement("div");

        description_span = document.createElement("span");
        description_span.innerHTML = "Description:";
        description_span.style.marginBottom = "5px";
        description = document.createElement("p");
        description.innerHTML = level.description;

        //Compiling and sending to the page
        div_right.appendChild(description_span);
        div_right.appendChild(description);
        div_content.append(div_right);
        div.appendChild(div_title);
        div.appendChild(div_infos);
        div.appendChild(div_content);
        document.getElementById("elements").append(div);
    });
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function LoadUser() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    userid = urlParams.get('id');
};

function Pokey(div_id, length) {

    pokey_div = document.createElement("div");
    pokey_div.style.display = "flex";
    pokey_div.style.flexDirection = "column";
    pokey_div.style.verticalAlign = "left";
    pokey_div.style.width = "max-content";

    for (i = 0; i < length; i++) {
        img = document.createElement("img");
        img.style.width = "32px";
        img.style.height = "32px";
        img.style.marginLeft = getRandomInt(8) + "px";
        if (i == 0) {
            img.src = "/images/npcs/pokey-head.png"
        } else {
            img.src = "/images/npcs/pokey-body.png"
        }
        pokey_div.appendChild(img);
    };
    document.getElementById(div_id).appendChild(pokey_div);
};

function loadTheme(fav_theme) {
    if (fav_theme == "blue") {
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-blue.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        elements = document.getElementsByClassName("element");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.border = "#6060ff 2px solid";
        }
        titles = document.getElementsByClassName("element_title");
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.backgroundColor = "#2020ff";
        }
        infos = document.getElementsByClassName("element_infos");
        for (let i = 0; i < infos.length; i++) {
            infos[i].style.backgroundColor = "#202060";
        }
        contents = document.getElementsByClassName("element_content");
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.backgroundColor = "#202040";
        }

        menus = document.getElementsByClassName("menu");
        for (let i = 0; i < menus.length; i++) {
            menus[i].style.border = "#6060ff 2px solid";
            menus[i].style.backgroundColor = "#2020ff";
        }
        menus_options = document.getElementsByClassName("menu_options");
        for (let i = 0; i < menus_options.length; i++) {
            menus_options[i].style.borderRight = "#6060ff 2px solid";
            menus_options[i].style.borderLeft = "#6060ff 2px solid";
            menus_options[i].style.backgroundColor = "#202040";
        }
        menus_options_websites = document.getElementsByClassName("menu_options_websites");
        for (let i = 0; i < menus_options_websites.length; i++) {
            menus_options_websites[i].style.borderRight = "#6060ff 2px solid";
            menus_options_websites[i].style.borderLeft = "#6060ff 2px solid";
            menus_options_websites[i].style.borderBottom = "#6060ff 2px solid";
            menus_options_websites[i].style.backgroundColor = "#202040";
        }
        buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.border = "#6060ff 2px solid";
            buttons[i].style.backgroundColor = "#2020ff";
            buttons[i].addEventListener('mouseover', () => {
                buttons[i].style.backgroundColor = '#404060';
                buttons[i].style.border = "#6060ff 2px solid";
            });
            buttons[i].addEventListener('mouseout', () => {
                buttons[i].style.backgroundColor = '#2020ff';
                buttons[i].style.border = "#6060ff 2px solid";
            });
        }
    } else if (fav_theme == 'pokemon') {
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-pokemon.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-pokemon.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-pokemon.png')";
        document.getElementById("website-logo").src = "/images/logos/smbxworld-pokemon.png";
    } else if (fav_theme == 'pokemon2') {
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-pokemon2.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-pokemon2.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-pokemon2.png')";
        document.getElementById("website-logo").src = "/images/logos/smbxworld-pokemon2.png";
        document.getElementById("website-logo").width = "614";
        document.getElementById("website-logo").height = "128";
    } else if (fav_theme == 'dark') {
        document.body.style.backgroundImage = "url('/images/bgs/dark-mushrooms.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-mushrooms.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-mushrooms.png')";
        document.getElementById("website-logo").src = "/images/logos/smbxworld-dark.png";
        elements = document.getElementsByClassName("element");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.border = "#ccccff 2px solid";
        }
        titles = document.getElementsByClassName("element_title");
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.backgroundColor = "#000020";
        }
        infos = document.getElementsByClassName("element_infos");
        for (let i = 0; i < infos.length; i++) {
            infos[i].style.backgroundColor = "#000015";
        }
        contents = document.getElementsByClassName("element_content");
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.backgroundColor = "#050510";
        }

        menus = document.getElementsByClassName("menu");
        for (let i = 0; i < menus.length; i++) {
            menus[i].style.border = "#ccccff 2px solid";
            menus[i].style.backgroundColor = "#000020";
        }
        menus_options = document.getElementsByClassName("menu_options");
        for (let i = 0; i < menus_options.length; i++) {
            menus_options[i].style.borderRight = "#ccccff 2px solid";
            menus_options[i].style.borderLeft = "#ccccff 2px solid";
            menus_options[i].style.backgroundColor = "#050510";
        }
        menus_options_websites = document.getElementsByClassName("menu_options_websites");
        for (let i = 0; i < menus_options_websites.length; i++) {
            menus_options_websites[i].style.borderRight = "#ccccff 2px solid";
            menus_options_websites[i].style.borderLeft = "#ccccff 2px solid";
            menus_options_websites[i].style.borderBottom = "#ccccff 2px solid";
            menus_options_websites[i].style.backgroundColor = "#050510";
        }
        buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.border = "#ccccff 2px solid";
            buttons[i].style.backgroundColor = "#000020";
            buttons[i].addEventListener('mouseover', () => {
                buttons[i].style.backgroundColor = '#404060';
                buttons[i].style.border = "#ffffff 2px solid";
            });
            buttons[i].addEventListener('mouseout', () => {
                buttons[i].style.backgroundColor = '#000020';
                buttons[i].style.border = "#ccccff 2px solid";
            });
        }
    };

};

function Redirect(act) {
    setTimeout(function () {
        open("/" + act + '.php', "_self")
    }, 5000);
};

function getSuccess() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    act = urlParams.get('act');

    if (act == 'signup') {
        document.getElementById('success_span').innerHTML = 'Your account has been created, you can now <a href="/login.php">log in</a>.';
        Redirect('index');
    } else if (act == 'login') {
        document.getElementById('success_span').innerHTML = 'You are now logged in.';
        Redirect('index');
    } else if (act == 'logout') {
        document.getElementById('success_span').innerHTML = "You've been logged out.";
        Redirect('index');
    } else if (act == 'acc_modify') {
        document.getElementById('success_span').innerHTML = "Your account preferences has been updated.<br><a href='/account/'>Return to account managing</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'pwd_ch') {
        document.getElementById('success_span').innerHTML = "Your password has been modified.<br><a href='/account/'>Return to account managing</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'pfp_ch') {
        document.getElementById('success_span').innerHTML = "Your profile picture has been modified.<br><a href='/account/'>Return to account managing</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'post') {
        document.getElementById('success_span').innerHTML = "Your post has been submitted.";
        Redirect('index');
    } else if (act == 'com_post') {

        queryString = window.location.search;
        urlParams = new URLSearchParams(queryString);
        pid = urlParams.get('post_id');

        document.getElementById('success_span').innerHTML = "Your comment has been submitted.<br><a href='/posts/?id="+pid+"'>Go back to the post</a> or wait to get redirected.";
        Redirect('index');
    } else {
        Redirect('index');
    };
};

function getFailure() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    act = urlParams.get('act');
    if (act == 'signup') {
        document.getElementById('failure').innerHTML = "Verify that you've been completed all fields correctly."
        Redirect('singup');
    } else if (act == 'login') {
        document.getElementById('failure').innerHTML = 'Invalid username or password.'
        Redirect('login');
    } else if (act == 'tk_usr') {
        document.getElementById('failure').innerHTML = 'This username is already tooken.'
        Redirect('login');
    } else if (act == 'no_add') {
        document.getElementById('failure').innerHTML = "You didn't entered a valid address."
        Redirect('signup');
    } else if (act == 'nc_add') {
        document.getElementById('failure').innerHTML = "Addresses aren't corresponding."
        Redirect('signup');
    } else if (act == 'nel_pwd') {
        document.getElementById('failure').innerHTML = "Your password must be at least 8 characters long."
        Redirect('signup');
    } else if (act == 'nc_pwd') {
        document.getElementById('failure').innerHTML = "Passwords aren't corresponding."
        Redirect('signup');
    } else if (act == 'usr') {
        document.getElementById('failure').innerHTML = "Your username isn't valid."
        Redirect('signup');
    } else if (act == 'sm_pwd') {
        document.getElementById('failure').innerHTML = "You can't modify your password to your current password."
        Redirect('/account/password_modify');
    } else if (act == 'nel_npwd') {
        document.getElementById('failure').innerHTML = "Your new password isn't long enough."
        Redirect('/account/password_modify');
    } else if (act == 'ncn_pwd') {
        document.getElementById('failure').innerHTML = "Your new passwords aren't corresponding."
        Redirect('/account/password_modify');
    } else if (act == 'bad_pwd') {
        document.getElementById('failure').innerHTML = "Your old passwords isn't corresponding."
        Redirect('/account/password_modify');
    } else if (act == 'no_pfp') {
        document.getElementById('failure').innerHTML = "Your didn't uploaded an image."
        Redirect('/account/index');
    } else if (act == 'no_img') {
        document.getElementById('failure').innerHTML = "The file you uploaded seems to be broken."
        Redirect('/account/index');
    } else if (act == 'pfp_size') {
        document.getElementById('failure').innerHTML = "The file you uploaded is too heavy, the max file size is 128 Kb! Try to reduce the size."
        Redirect('/account/index');
    } else if (act == 'pfp_for') {
        document.getElementById('failure').innerHTML = "The file format is'nt supported, the supported formats are: .png, .jpg, .jpeg, .gif"
        Redirect('/account/index');
    } else if (act == 'pfp_ch') {
        document.getElementById('failure').innerHTML = "An unknown error has occured when trying to modify your profile picture."
        Redirect('/account/index');
    } else if (act == 'tl_bio') {
        document.getElementById('failure').innerHTML = "Your biography cannot exceed 1024 characters."
        Redirect('/account/index');


    } else if (act == 'usignup') {
        document.getElementById('failure').innerHTML = "An unknown error has occured."
        Redirect('signup');
    };
};

function loadAccount(acc_name) {

    document.getElementById('account').remove();
    div = document.createElement("div");

    div.classList = "menu_options";

    a1 = document.createElement("a");
    a1.href = "/account/";
    span1 = document.createElement("span");
    span1.classList = "menu_options_link";
    a1.innerHTML = acc_name;
    span1.appendChild(a1);

    a2 = document.createElement("a");
    a2.href = "/logout.php";
    span2 = document.createElement("span");
    span2.classList = "menu_options_link";
    a2.innerHTML = "Log Out";
    span2.appendChild(a2);

    div.appendChild(span1);
    div.appendChild(span2);

    document.getElementById("account_div").appendChild(div);
};

function showAbsCode() {
    div = document.getElementById("abs_code_div");
    div.innerHTML = "Your absolute code is <span class='green'>" + abs_code + "</span>, DON'T SHARE IT WITH ANYONE!<br><a onclick='hideAbsCode();'>HIDE</a>";
};

function hideAbsCode() {
    div = document.getElementById("abs_code_div");
    div.innerHTML = "Your absolute code is currently hidden.";
};

function checkEmoji(text) {
    text = text.replaceAll(':mushroom:', '<img src="/images/emojis/mushroom.png">')
    return text;
}

function showPosts(posts) {
    for (i = 0; i < posts.length; i++) {
        posts[i][4] = posts[i][4].replaceAll("<", "&lt");
        posts[i][4] = posts[i][4].replaceAll(">", "&gt");
        posts[i][4] = posts[i][4].replaceAll("\n", "<br>");
        // posts[i][4]=checkEmoji(posts[i][4]);
        addPost(posts[i][5], "posted by: <a href='/user/?id=" + posts[i][2] + "'>" + posts[i][1] + "</a> at: " + posts[i][3], posts[i][4], posts[i]);
    };
};
