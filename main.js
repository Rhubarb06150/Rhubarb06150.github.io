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

function addNews(title, infos, content, post_id, comms_nb) {

    div = document.createElement("div");
    div.classList = "element";

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
    comment_a.href = '/news/?id=' + post_id;
    comment_a.innerHTML = 'Comments (' + comms_nb + ')'
    comments_div.appendChild(comment_a);

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    div.appendChild(comments_div);

    document.getElementById("news").appendChild(div);

};

function showPost(title, infos, content, news) {

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
    if (news == null) {
        content = content.replaceAll("<", "&lt");
        content = content.replaceAll(">", "&gt");
    };
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);

    document.getElementById("elements").appendChild(div);

};

function showTopic(title, infos, content, news) {

    div = document.createElement("div");
    div.id = 'topic';
    div.classList = "element";

    title_div = document.createElement("div");
    title_div.id = 'topic_title';
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
    if (news == null) {
        content = content.replaceAll("<", "&lt");
        content = content.replaceAll(">", "&gt");
    };
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    replies = document.createElement('div');
    replies.id = "replies";
    div.appendChild(replies);
    content_div.style.paddingBottom = "10px";

    document.getElementById("elements").prepend(div);
};

function showCommentary(user, infos, content, cur_user, edit, comm_id) {

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

    if (edit != '') {

        edit = edit.slice(0, -3)
        edit_span = document.createElement('span');
        edit_span.style.marginLeft = '20px'
        edit_span.style.fontStyle = 'italic';
        edit_span.style.color = '#aaaaaa'
        edit_span.innerHTML = 'Last edited at ' + edit;
        infos_div.appendChild(edit_span);

    };

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content = content.replaceAll("<", "&lt");
    content = content.replaceAll(">", "&gt");
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    bottom_div = document.createElement('div');
    bottom_div.classList = 'element_infos';

    div.appendChild(infos_div);
    div.appendChild(content_div);

    if (user.name == cur_user) {

        action_button = document.createElement('a');
        action_button.href = '/com/?id=' + comm_id;
        action_button.innerHTML = 'Edit / Delete';
        action_button.style.marginRight = '10px';

        bottom_div.appendChild(action_button);
        div.appendChild(bottom_div);
    };

    document.getElementById("comments").appendChild(div);
}

function downloadLink() {
    document.getElementById('level_file').remove();
    document.getElementById('dlm').remove();
    div = document.createElement('div');

    level_url = document.createElement('input');
    level_url.type = "text";
    level_url.placeholder = 'Download URL:';

    dl = document.createElement('span');
    dl.innerHTML = 'Download link: ';

    div.appendChild(dl);
    div.appendChild(level_url);
    document.getElementById('level_input').prepend(div);
};

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
};

function showReply(user, infos, content, cur_user, edit, comm_id, reply_id, reply_content, reply_poster) {

    div = document.createElement("div");
    div.classList = 'reply';
    div.id = 'rep' + comm_id;

    pfp = document.createElement('img');
    pfp.src = user.pfp;
    pfp.style.width = "32px";
    pfp.style.height = "32px";
    pfp.style.marginRight = "8px";

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(pfp);
    infos_div.appendChild(infos_span);

    if (edit != '') {

        edit = edit.slice(0, -3);
        edit_span = document.createElement('span');
        edit_span.style.marginLeft = '20px'
        edit_span.style.fontStyle = 'italic';
        edit_span.style.color = '#aaaaaa'
        edit_span.innerHTML = 'Last edited at ' + edit;
        infos_div.appendChild(edit_span);
    };

    if (reply_id != 0) {

        edit = edit.slice(0, -3)
        edit_span = document.createElement('span');
        edit_span.style.marginLeft = '20px'
        edit_span.style.fontStyle = 'italic';
        edit_span.style.color = '#aaaaaa'
        edit_span.innerHTML = 'Reply to: ' + reply_poster + " - " + TPP(reply_content, 50);
        infos_div.appendChild(edit_span);

    };

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content = content.replaceAll("<", "&lt");
    content = content.replaceAll(">", "&gt");
    content = content.replaceAll("\n", "<br>");
    content_content.innerHTML = content;

    reply = document.createElement('a');
    reply.onclick = function () { setReply(comm_id, content); };
    reply.innerHTML = '<br>Reply';

    content_div.appendChild(content_content);
    content_div.appendChild(reply);

    bottom_div = document.createElement('div');
    bottom_div.classList = 'element_infos';

    div.appendChild(infos_div);
    div.appendChild(content_div);

    if (user.name == cur_user) {

        action_button = document.createElement('a');
        action_button.href = '/rep/?id=' + comm_id;
        action_button.innerHTML = 'Edit / Delete';
        action_button.style.marginRight = '10px';

        bottom_div.appendChild(action_button);
        div.appendChild(bottom_div);

    };
    document.getElementById("replies").appendChild(div);
};

function noReply() {
    document.getElementById('reply').value = 0;
    document.getElementById('reply_target').style.display = 'none';
};

function setReply(id, content) {
    remove = document.createElement('a');
    remove.onclick = function () { noReply(); };
    remove.innerHTML = ' Cancel'
    document.getElementById('reply').value = id;
    document.getElementById('reply_target').innerHTML = "Reply to: " + TPP(content);
    document.getElementById('reply_target').style.display = 'block';
    document.getElementById('reply_target').appendChild(remove);
};

function TPP(text, size) {
    if (text.length > size) {
        text = text.substring(0, size) + '...';
    };
    return text;
};

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

function previousUser() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');
    if (id != '' && id != null) {
        if (id > 1) {
            id=parseInt(id);
            id -= 1;
            open("/user/?id=" + id, "_self");
        };
    };
};
function nextUser() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');
    if (id != '' && id != null) {
        id=parseInt(id);
        id += 1;
        open("/user/?id=" + id, "_self");
    };
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
            img.src = "/images/npcs/pokey-head.png";
        } else {
            img.src = "/images/npcs/pokey-body.png";
        }
        pokey_div.appendChild(img);
    };
    document.getElementById(div_id).appendChild(pokey_div);
};

function loadTheme(fav_theme) {
    if (document.getElementById('chat_span').innerHTML.includes('(')) {
        document.getElementById('chat_span').style.color = '#00ff00   '
    }
    if (document.getElementById('notif_span').innerHTML.includes('(')) {
        document.getElementById('notif_span').style.color = '#00ff00   '
    }
    if (fav_theme == "blue") {
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-blue.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        elements = document.getElementsByClassName("element");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.border = "#6060ff 2px solid";
        }
        replies = document.getElementsByClassName("reply");
        for (let i = 0; i < replies.length; i++) {
            replies[i].style.borderTop = "#6060ff 2px solid";
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
        replies = document.getElementsByClassName("reply");
        for (let i = 0; i < replies.length; i++) {
            replies[i].style.borderTop = "#ccccff 2px solid";
        }
        tables = document.querySelectorAll('table,th,tr,td')
        for (let i = 0; i < tables.length; i++) {
            tables[i].style.border = "#ccccff 2px solid";
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
    try {
        var r = document.getElementsByTagName('script');

        for (var i = (r.length - 1); i >= 0; i--) {

            if (r[i].getAttribute('id') != 'a') {
                r[i].parentNode.removeChild(r[i]);
            }

        };
    } catch (error) { };

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
    document.getElementById('success_span').style.height = 'max-content';
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
        document.getElementById('success_span').innerHTML = "Your password has been modified.<br>You can now <a href='/account/'>log in back</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'pfp_ch') {
        document.getElementById('success_span').innerHTML = "Your profile picture has been modified.<br><a href='/account/'>Return to account managing</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'post') {
        document.getElementById('success_span').innerHTML = "Your post has been submitted.";
        Redirect('index');
    } else if (act == 'com_post') {
        document.getElementById('success_span').innerHTML = "Your comment has been submitted.<br><a href='" + document.referrer + "'>Go back to the post</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'submit_reply') {
        document.getElementById('success_span').innerHTML = "Your comment has been submitted.<br><a href='" + document.referrer + "'>Go back to the topic</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'submit_reply') {
        document.getElementById('success_span').innerHTML = "Your reply has been submitted.<br><a href='" + document.referrer + "'>Go back to the topic</a> or wait to get redirected.";
        Redirect('index');
    } else if (act == 'com_edit') {
        document.getElementById('success_span').innerHTML = "Your comment has been edited.";
        Redirect('index');
    } else if (act == 'com_del') {
        document.getElementById('success_span').innerHTML = "Your comment has been deleted.";
        Redirect('index');
    } else {
        Redirect('index');
    };
};

function execPHP(path) {
    frame = document.createElement('iframe');
    frame.style.display = 'none';
    frame.id = 'frame';
    frame.src = path;
    document.body.appendChild(frame);
};

function addTopicRow(poster_name, topic_id, topic_name, replies) {

    row = document.createElement('tr');

    poster_td = document.createElement('td');
    poster_td.innerHTML = poster_name

    topic_td = document.createElement('td');
    topic = document.createElement('a');
    topic.href = '/forums/topic/?topic=' + topic_id;
    topic.innerHTML = topic_name
    topic_td.appendChild(topic)

    replies_td = document.createElement('td');
    replies_td.innerHTML = replies;

    row.appendChild(poster_td);
    row.appendChild(topic_td);
    row.appendChild(replies_td);
    document.getElementById('topics').appendChild(row);
}

function getFailure() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    act = urlParams.get('act');
    if (act == 'signup') {
        document.getElementById('failure').innerHTML = "Verify that you've been completed all fields correctly.";
        Redirect('singup');
    } else if (act == 'login') {
        document.getElementById('failure').innerHTML = 'Invalid username or password.';
        Redirect('login');
    } else if (act == 'tk_usr') {
        document.getElementById('failure').innerHTML = 'This username is already tooken.';
        Redirect('singup');
    } else if (act == 'tk_add') {
        document.getElementById('failure').innerHTML = 'This address is already in use.';
        Redirect('singup');
    } else if (act == 'no_add') {
        document.getElementById('failure').innerHTML = "You didn't entered a valid address.";
        Redirect('signup');
    } else if (act == 'nc_add') {
        document.getElementById('failure').innerHTML = "Addresses aren't corresponding.";
        Redirect('signup');
    } else if (act == 'nel_pwd') {
        document.getElementById('failure').innerHTML = "Your password must be at least 8 characters long.";
        Redirect('signup');
    } else if (act == 'nc_pwd') {
        document.getElementById('failure').innerHTML = "Passwords aren't corresponding.";
        Redirect('signup');
    } else if (act == 'usr') {
        document.getElementById('failure').innerHTML = "Your username isn't valid.";
        Redirect('signup');
    } else if (act == 'sm_pwd') {
        document.getElementById('failure').innerHTML = "You can't modify your password to your current password.";
        Redirect('/account/password_modify');
    } else if (act == 'nel_npwd') {
        document.getElementById('failure').innerHTML = "Your new password isn't long enough.";
        Redirect('/account/password_modify');
    } else if (act == 'ncn_pwd') {
        document.getElementById('failure').innerHTML = "Your new passwords aren't corresponding.";
        Redirect('/account/password_modify');
    } else if (act == 'bad_pwd') {
        document.getElementById('failure').innerHTML = "Your old passwords isn't corresponding.";
        Redirect('/account/password_modify');
    } else if (act == 'no_pfp') {
        document.getElementById('failure').innerHTML = "Your didn't uploaded an image.";
        Redirect('/account/index');
    } else if (act == 'no_img') {
        document.getElementById('failure').innerHTML = "The file you uploaded seems to be broken.";
        Redirect('/account/index');
    } else if (act == 'pfp_size') {
        document.getElementById('failure').innerHTML = "The file you uploaded is too heavy, the max file size is 128 Kb! Try to reduce the size.";
        Redirect('/account/index');
    } else if (act == 'pfp_for') {
        document.getElementById('failure').innerHTML = "The file format is'nt supported, the supported formats are: .png, .jpg, .jpeg, .gif";
        Redirect('/account/index');
    } else if (act == 'pfp_ch') {
        document.getElementById('failure').innerHTML = "An unknown error has occured when trying to modify your profile picture.";
        Redirect('/account/index');
    } else if (act == 'tl_bio') {
        document.getElementById('failure').innerHTML = "Your biography cannot exceed 1024 characters.";
        Redirect('/account/index');
    } else if (act == 'com_edit') {
        document.getElementById('failure').innerHTML = "An error has occured, so your comment hasn't been edited.";
        Redirect('/account/index');
    } else if (act == 'com_del') {
        document.getElementById('failure').innerHTML = "An error has occured, so your comment hasn't been deleted.";
        Redirect('/account/index');
    } else if (act == 'no_yo_com') {
        document.getElementById('failure').innerHTML = "You cannot edit/delete this comment, your aen't the poster of it.";
        Redirect('/account/index');
    } else if (act == 'usr_nf') {
        document.getElementById('failure').innerHTML = "The user you requested does not exists, try to check that you typed the username correctly.";
        Redirect('/pms/');
    } else if (act == 'ill_char') {
        document.getElementById('failure').innerHTML = "One or multiple fields contained illegal characters.";
        Redirect('/index');
    } else if (act == 'submit_reply') {
        document.getElementById('failure').innerHTML = "One or multiple fields contained illegal characters.";
        Redirect('/index');


    } else if (act == 'usignup') {
        document.getElementById('failure').innerHTML = "An unknown error has occured."
        Redirect('signup');
    };
};

function showMessage(message, userid) {

    abs_div = document.createElement('div');
    abs_div.style.display = 'flex';
    abs_div.style.width = "100%"
    abs_div.style.flexDirection = 'column';
    abs_div.style.marginBottom = "5px";

    div = document.createElement("div");
    div.classList = "element";
    div.style.maxWidth = '80%';
    div.style.width = 'max-content';
    div.style.marginBottom = "0px"

    title_div = document.createElement("div");
    title_div.classList = "element_infos";
    title_div.style.display = 'flex';
    title_div.style.flexDirection = 'row';
    title_div.style.fontSize = '100%';

    title_span = document.createElement("span");
    title_span.innerHTML = message.sender_username;
    title_span.style.height = 'max-content';
    title_span.style.marginTop = 'auto';

    pfp = document.createElement('img');
    pfp.src = message.sender_pfp;
    pfp.classList = "element";
    pfp.style.width = "32px";
    pfp.style.height = "32px";
    pfp.style.marginRight = "10px";
    pfp.style.marginBottom = "0px";
    pfp.src = message.sender_pfp;

    title_div.appendChild(pfp);
    title_div.appendChild(title_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");

    message.content = message.content.replaceAll("<", "&lt");
    message.content = message.content.replaceAll(">", "&gt");
    message.content = message.content.replaceAll("\n", "<br>");

    content_content.innerHTML = message.content;
    content_div.appendChild(content_content);

    div.appendChild(title_div);
    div.appendChild(content_div);

    abs_div.appendChild(div);
    date_span = document.createElement('span');
    date_span.innerHTML = message.send_date;
    date_span.style.color = '#aaaaaa';
    date_span.style.fontSize = "60%"
    date_span.style.marginLeft = "5px";

    if (parseInt(userid) == parseInt(message.sender_id)) {

        div.style.marginLeft = 'auto';
        date_span.style.marginLeft = "auto";
    }

    abs_div.appendChild(date_span);
    document.getElementById("messages").appendChild(abs_div);

};

function loadChat(user) {

    div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.marginTop = '5px';
    a = document.createElement('a');
    a.href = '/pms/?user=' + user.id;
    a.style.height = 'max-content';
    a.style.maxHeight = 'max-content';
    a.innerHTML = 'Discussion with ' + user.name;
    if (user.unread > 0) {
        a.innerHTML += ' (' + user.unread + ')';
        a.style.color = '#00ff00';
        if (user.unread < 2) {
            a.innerHTML = user.unread + ' new message from ' + user.name;
        } else {
            a.innerHTML = user.unread + ' new messages from ' + user.name;
        };
    };
    pfp = document.createElement("img");
    pfp.src = user.pfp;
    pfp.style.width = "32px";
    pfp.style.height = "32px";
    pfp.style.maxWidth = "32px";
    pfp.style.maxHeight = "32px";
    pfp.style.marginRight = "10px";
    div2 = document.createElement('div');
    div2.style.display = "flex";
    div2.style.alignItems = "flex-end";
    div2.style.justifyContent = "baseline";
    div2.appendChild(pfp);
    div2.appendChild(a);
    div.appendChild(div2);
    nb_span = document.createElement('span');
    nb_span.innerHTML = user.nb + ' message(s)';
    nb_span.style.height = 'max-content';
    nb_span.style.marginTop = 'auto';
    div.appendChild(nb_span);
    document.getElementById('chats').appendChild(div);

};

function loadNotif(content, notif_id) {

    div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.marginTop = '5px';

    span = document.createElement('span');
    span.style.height = 'max-content';
    span.style.maxHeight = 'max-content';
    span.innerHTML = content;

    div2 = document.createElement('div');
    div2.style.display = "flex";
    div2.style.alignItems = "flex-end";
    div2.style.justifyContent = "baseline";
    div2.appendChild(span);
    div.appendChild(div2);

    remove = document.createElement('a');
    remove.innerHTML = 'Delete notification'
    remove.href = '/actions/delete_notifcation.php?id=' + notif_id;
    div.appendChild(remove);

    document.getElementById('notifs').appendChild(div);

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
    a2.href = "/pms/";
    span2 = document.createElement("span");
    span2.classList = "menu_options_link";
    a2.innerHTML = "Chat";
    a2.id = 'chat_span';
    span2.appendChild(a2);

    a3 = document.createElement("a");
    a3.href = "/account/notifications/";
    span3 = document.createElement("span");
    span3.classList = "menu_options_link";
    a3.innerHTML = "Notifs";
    a3.id = 'notif_span';
    span3.appendChild(a3);

    a4 = document.createElement("a");
    a4.href = "/logout.php";
    span4 = document.createElement("span");
    span4.classList = "menu_options_link";
    a4.innerHTML = "Log Out";
    span4.appendChild(a4);

    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);

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
