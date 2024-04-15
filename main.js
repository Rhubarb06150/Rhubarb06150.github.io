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
}

function LoadLevel() {

    console.log('load level');

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

function loadTheme() {
    fav_theme = localStorage.getItem("fav_theme");
    if (fav_theme == "blue") {
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-blue.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-blue.png')";
        console.log('blue')
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
            menus_options[i].style.border = "#6060ff 1px solid";
            menus_options[i].style.backgroundColor = "#202040";
        }
        menus_options_websites = document.getElementsByClassName("menu_options_websites");
        for (let i = 0; i < menus_options_websites.length; i++) {
            menus_options_websites[i].style.border = "#6060ff 1px solid";
            menus_options_websites[i].style.backgroundColor = "#202040";
        }
    }else if (fav_theme=='pokemon'){
        document.body.style.backgroundImage = "url('/images/bgs/dark-bg-pokemon.png')";
        document.getElementById("header").style.backgroundImage = "url('/images/bgs/header-bg-pokemon.png')";
        document.getElementById("footer").style.backgroundImage = "url('/images/bgs/header-bg-pokemon.png')";
        document.getElementById("website-logo").src = "/images/logos/smbxworld-pokemon.png";
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
            menus_options[i].style.border = "#ccccff 1px solid";
            menus_options[i].style.backgroundColor = "#050510";
        }
        menus_options_websites = document.getElementsByClassName("menu_options_websites");
        for (let i = 0; i < menus_options_websites.length; i++) {
            menus_options_websites[i].style.border = "#ccccff 1px solid";
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

function Redirect() {
    setTimeout(function () {
        open("/", "_self")
    }, 5000);
};

function getSuccess() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    act = urlParams.get('act');
    if (act == 'signup') {
        document.getElementById('success_span').innerHTML = 'Your account has been created, you now <a href="/login.php">log in</a>.'
    }else if(act=='login'){
        document.getElementById('success_span').innerHTML = 'You are now logged in.'
    }
};

function verifyUsernameDisponibility() {
    console.log('focusout');
};