
function smw() {
  if (sessionStorage.getItem('index') < 100) {
    document.getElementById("logo_img").src = "/images/logos/logo_smw_alt.png";
    document.getElementById("logo_img").style.height = "66px";
    document.getElementById("logo_img").style.width = "584px";
  } else if (sessionStorage.getItem('index') == 3999) {
    document.getElementById("logo_img").src = "/images/logos/logo_smw_alt_bowser.png";
    document.getElementById("logo_img").style.height = "102px";
    document.getElementById("logo_img").style.width = "590px";
  } else {
    document.getElementById("logo_img").src = "/images/logos/logo_smw.png";
    document.getElementById("logo_img").style.height = "66px";
    document.getElementById("logo_img").style.width = "498px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/hills_smw.png)";
  document.getElementById("top_layer_bg").style.height = "262px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(/images/bg/clouds_smw.png)";
  document.getElementById("clouds_bg").style.height = "542px";
  document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top_smw.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(240,240,240)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smw_1.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smw_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smw_2.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smw_2.png)"
  });
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smw_3.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smw_3.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smw_4.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smw_4.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smw_5.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smw_5.png)"
  });
  localStorage.setItem('ui', 'smw')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try {
    document.getElementById('mario').src = '/images/obj/mariosmw.png'
    document.getElementById('luigi').src = '/images/obj/luigismw.png'
  } catch (error) { };
  check_fav_logo();
}
function smb3() {
  if (sessionStorage.getItem('index') < 100) {
    document.getElementById("logo_img").src = "/images/logos/logo_alt.png";
    document.getElementById("logo_img").style.height = "70px";
    document.getElementById("logo_img").style.width = "638px";
  } else if (sessionStorage.getItem('index') == 3999) {
    document.getElementById("logo_img").src = "/images/logos/logo_alt_bowser.png";
    document.getElementById("logo_img").style.height = "84px";
    document.getElementById("logo_img").style.width = "590px";
  } else {
    document.getElementById("logo_img").src = "/images/logos/logo.png";
    document.getElementById("logo_img").style.height = "70px";
    document.getElementById("logo_img").style.width = "542px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/bg.png)";
  document.getElementById("top_layer_bg").style.height = "300px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(/images/bg/clouds.png)";
  document.getElementById("clouds_bg").style.height = "532px";
  document.getElementById("clouds_bg").style.bottom = "100px";
  document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(248,248,248)";
  if (document.URL.includes("/profile")) {
    const h1 = document.querySelectorAll('h1');
  }
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(/images/box/border_blue.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_blue.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(/images/box/border_red.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_red.png)"
  });
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(/images/box/border_orange.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_orange.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(/images/box/border_green.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_green.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(/images/box/border_white.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_white.png)"
  });
  localStorage.setItem('ui', 'smb3')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try {
    document.getElementById('mario').src = '/images/obj/mariosmb3.png'
    document.getElementById('luigi').src = '/images/obj/luigismb3.png'
  } catch (error) { };
  check_fav_logo();

}

function smb() {
  if (sessionStorage.getItem('index') < 100) {
    document.getElementById("logo_img").src = "/images/logos/logo_smb_alt.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "508px";
  } else if (sessionStorage.getItem('index') == 3999) {
    document.getElementById("logo_img").src = "/images/logos/logo_smb_alt_bowser.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "514px";
  } else {
    document.getElementById("logo_img").src = "/images/logos/logo_smb.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "418px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/hills_smb.png)";
  document.getElementById("top_layer_bg").style.height = "432px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(/images/bg/clouds_smb.png)";
  document.getElementById("clouds_bg").style.height = "478px";
  document.getElementById("clouds_bg").style.bottom = "96px";
  document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top_smb.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(255,255,255)";
  try {
    const box = document.getElementById("#profile_name,#softwares")
    box.addEventListener('mouseover', function handleMouseOver() {
      box.style.color = 'orange';
    });
  } catch (error) { }
  const h1 = document.querySelectorAll('h1');

  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smb_1.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smb_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smb_2.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smb_2.png)"
  });
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smb_3.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smb_3.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smb_4.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smb_4.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(/images/box/box_smb_5.png) 32 repeat";
    box.style.backgroundImage = "url(/images/box/mid_smb_5.png)"
  });

  localStorage.setItem('ui', 'smb')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try {
    document.getElementById("mario").src = "/images/obj/mariosmb1.png"
    document.getElementById("luigi").src = "/images/obj/luigismb1.png"
  } catch (error) { };
  check_fav_logo();
}

function loadComment() {

  div = document.createElement("div");
  div.classList = "commentary";

  name_div = document.createElement("div");
  name_div.classList = "com_name_div";
  left_name_div = document.createElement("div");
  left_name_div.classList = "name_n_pfp";

  pp = document.createElement("img");
  pp.classList = "pp_com";
  pp.src = "/images/head/icon.png";
  pp.width = 64;
  pp.height = 64;

  left_name_div.appendChild(pp);

  name_span = document.createElement("span");
  name_span.classList = "com_name";
  name_span.textContent = "Rhubarb";
  left_name_div.appendChild(name_span);

  time = document.createElement("span");
  time.innerHTML = "posted at: 14:05 / 24/04/2024";
  time.classList = "infos";

  if ("Rhubarb" == document.getElementById("author").innerHTML) {
    author = document.createElement("span");
    author.classList = "author";
    author.style.marginLeft = "5px";
    author.textContent = "(Author)";
    left_name_div.appendChild(author);
  }

  com_content = document.createElement("p");
  com_content.innerHTML = "La route 216 (R-216) est une route régionale québécoise située sur la rive sud du fleuve Saint-Laurent. Elle dessert les régions administratives de l'Estrie, du Centre-du-Québec et de Chaudière-Appalaches.";
  com_content.classList = "comment_content";

  report = document.createElement("a");
  report.style.textAlign = "right";
  report_span = document.createElement("span");
  report_span.innerHTML = "Report comment";
  report_span.classList = "infos";
  report.appendChild(report_span);

  name_div.appendChild(left_name_div);
  name_div.appendChild(time);
  div.appendChild(name_div);
  div.appendChild(com_content);
  div.appendChild(report);
  document.getElementById("commentaries").appendChild(div);
};

function levelLink(id) {

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

    ui = localStorage.getItem('ui');

    div = document.createElement("div");
    div.classList = "level_link";
    content = document.createElement("div");
    content.classList = "level_link_content";

    if (ui == 'smw') {
      div.style.borderImage = "url(/images/box/box_smw_3.png) 32 repeat";
      div.style.backgroundImage = "url(/images/box/mid_smw_3.png)"
    } else if (ui == 'smb') {
      div.style.borderImage = "url(/images/box/box_smb_3.png) 32 repeat";
      div.style.backgroundImage = "url(/images/box/mid_smb_3.png)"
    } else {
      div.style.borderImage = "url(/images/box/border_orange.png) 32 repeat";
      div.style.backgroundImage = "url(/images/box/mid_orange.png)"
    };

    lvl_name = document.createElement("div");
    lvl_name.style.marginLeft = "10px";
    a = document.createElement("a");
    a.href = "/levels/?lvlid=" + id;
    span_name = document.createElement("span");
    span_name.classList = "level_name_link";
    a.style.marginTop = "10px";
    a.style.textAlign = "left";
    a.style.width = "max-content";
    span_name.innerHTML = level.name;
    a.appendChild(span_name);
    lvl_name.appendChild(a);
    smbx_version = document.createElement("span");
    smbx_version.innerHTML = "(" + level.version + ")";
    smbx_version.classList = "infos";
    smbx_version.style.marginLeft = "5px";
    smbx_version.style.fontSize = "75%";
    lvl_name.appendChild(smbx_version);

    top_div = document.createElement("div");
    top_div.classList = "top_div_level_link";
    top_div.style.height = "max-content";
    top_div.style.width = "max-content";
    top_div.appendChild(lvl_name);
    stars_div = document.createElement("div");
    stars_div.id = "lvl" + id;
    stars_div.style.marginLeft = "10px";
    top_div.appendChild(stars_div);
    span_by_name = document.createElement("div");
    span_by_name.innerHTML = "By:";
    span_by_name.classList = "infos";
    span_by_name.style.marginLeft = "10px";
    span_by_name.style.marginTop = "5px";
    span_by_name.style.marginRight = "5px";
    author = document.createElement("div");
    author.classList = "rows";
    author.style.justifyContent = "flex-start";
    author.appendChild(span_by_name);
    author_name = document.createElement("span");
    author_name.innerHTML = level.author
    author_name.classList = "infos";
    author_name.style.marginTop = "5px";
    author.appendChild(author_name);
    top_div.appendChild(author);

    date_div = document.createElement("div");
    date_div.style.justifyContent = "flex-start";
    span_date = document.createElement("span");
    span_date.innerHTML = "Uploaded at:";
    span_date.classList = "infos";
    date_div.appendChild(span_date);
    span_date.style.marginRight = "5px";
    span_date.style.marginLeft = "10px";
    span_up_date = document.createElement("span");
    span_up_date.innerHTML = level.release_date;
    span_up_date.classList = "infos";
    date_div.appendChild(span_up_date);
    top_div.appendChild(date_div);


    pp = document.createElement("img");
    pp.classList = "thumbnail";
    pp.src = '/files/levels/' + id + '/thumbnail.png';
    pp.style.width = "128px";
    pp.style.height = "128px";
    if (level.votes > 99) {
      pp.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 6px #14c2ff )");
      span_name.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 6px #14c2ff )");
    }

    content.appendChild(pp);
    content.appendChild(top_div);

    div.appendChild(content);
    document.getElementById("wlvlsgo").appendChild(div);
    if (level.votes > 99) {
      pres = true
    } else { pres = false }
    ShowStars(level.note, pres, "lvl" + id)
  });
}

function removeParamFromURL(url, param) {
  const [path, searchParams] = url.split('?');
  const newSearchParams = searchParams
    ?.split('&')
    .filter((p) => !(p === param || p.startsWith(`${param}=`)))
    .join('&');
  return newSearchParams ? `${path}?${newSearchParams}` : path;
}

function levelWindow(level) {

  ui = localStorage.getItem('ui');

  div = document.createElement("div");
  div.classList = "wlg";

  if (ui == 'smw') {
    div.style.borderImage = "url(/images/box/box_smw_3.png) 32 repeat";
    div.style.backgroundImage = "url(/images/box/mid_smw_3.png)"
  } else if (ui == 'smb') {
    div.style.borderImage = "url(/images/box/box_smb_3.png) 32 repeat";
    div.style.backgroundImage = "url(/images/box/mid_smb_3.png)"
  } else {
    div.style.borderImage = "url(/images/box/border_orange.png) 32 repeat";
    div.style.backgroundImage = "url(/images/box/mid_orange.png)"
  };

  top_div = document.createElement("div");
  top_div.classList = "top_div";

  name_div = document.createElement("div");
  name_div.classList = "name_div";
  name_div.id = "name_div";

  span_name = document.createElement("span");
  span_name.textContent = level.name;
  span_name.classList = "level_name";
  span_name.id = "level_name";
  document.title = level.name + " - MCRhubarb";

  name_div.appendChild(span_name);

  author = document.createElement("div");
  author.classList = "rows";
  span_by_name = document.createElement("span");
  span_by_name.textContent = "By:";
  span_by_name.style.marginRight = "5px";
  span_by_name.classList = "infos";

  span_author_name = document.createElement("span");
  span_author_name.textContent = level.author;
  span_author_name.classList = "infos";
  span_author_name.id = "author";
  author.appendChild(span_by_name);
  author.appendChild(span_author_name);

  votes_div = document.createElement("div");
  votes_div.classList = "rows";
  votes_div.style.paddingTop = "10px";

  votes_sp = document.createElement("span");
  votes_sp.innerHTML = "Votes: ";
  votes_sp.classList = "infos";

  votes_nb = document.createElement("span");
  votes_nb.innerHTML = level.votes;
  votes_nb.id = "votes_nb";
  votes_nb.classList = "infos";

  votes_div.appendChild(votes_sp);
  votes_div.appendChild(votes_nb);

  top_div.appendChild(name_div);
  top_div.appendChild(author);

  th_bbc = document.createElement("div");
  th_bbc.classList = "th_bbc";

  thumbnail = document.createElement("img");
  thumbnail.src = "/files/levels/" + level.id + "/thumbnail.png";
  thumbnail.style.width = "256px";
  thumbnail.style.heigth = "256px";
  thumbnail.classList = "thumbnail";

  div.appendChild(top_div);

  bbc = document.createElement("div");
  bbc.classList = "bbcode_place";

  bbcode = document.createElement("p");
  bbcode.innerHTML = BBcodeTranslate(level.bbcode);

  bbc.appendChild(bbcode);
  th_bbc.appendChild(thumbnail);
  th_bbc.appendChild(bbc);

  div.appendChild(th_bbc);

  bottom_div = document.createElement("div");
  bottom_div.classList = "th_bbc";
  desc_div = document.createElement("div");
  desc_div.style.height = "256px";
  desc_div.style.width = "60%";

  description = document.createElement("div");
  description.classList = "description";

  actions = document.createElement("div");
  actions.classList = "actions";

  infos_actions = document.createElement("div");
  infos_actions.classList = "actions_infos";

  span_description = document.createElement("p");
  span_description.innerHTML = "Description:";
  span_description.classList = "spandesc";

  description_content = document.createElement("p");
  description_content.innerHTML = level.description;

  description.appendChild(description_content)
  desc_div.appendChild(span_description)
  desc_div.appendChild(description)

  version_div = document.createElement("div");

  ver_img = document.createElement("img");
  ver_img.src = "/images/obj/gear.png";
  ver_img.style.marginRight = "10px";
  version_div.appendChild(ver_img);

  version_label = document.createElement("span");
  version_label.innerHTML = "SMBX Version: ";
  version_label.classList = "infos";

  version_span = document.createElement("span");
  version_span.innerHTML = level.version;
  version_span.classList = "infos";

  version_div.appendChild(version_label);
  version_div.appendChild(version_span);


  fs_div = document.createElement("div");

  fs_img = document.createElement("img");
  fs_img.src = "/images/obj/disk.png";
  fs_img.style.marginRight = "10px";
  fs_div.appendChild(fs_img);
  fs_label = document.createElement("span");
  fs_label.innerHTML = "File size: ";
  fs_label.classList = "infos";

  fs_span = document.createElement("span");
  fs_span.innerHTML = level.size;
  fs_span.classList = "infos";

  fs_div.appendChild(fs_label);
  fs_div.appendChild(fs_span);

  bottom_div.appendChild(desc_div);

  infos_actions.appendChild(fs_div);
  infos_actions.appendChild(version_div);

  rd_div = document.createElement("div");

  rd_img = document.createElement("img");
  rd_img.src = "/images/obj/calendar.png";
  rd_img.style.marginRight = "10px";
  rd_div.appendChild(rd_img);

  rd_label = document.createElement("span");
  rd_label.innerHTML = "Release date: ";
  rd_label.classList = "infos";

  rd_span = document.createElement("span");
  rd_span.innerHTML = level.release_date;
  rd_span.classList = "infos";

  rd_h = document.createElement("span");
  rd_h.innerHTML = level.release_hour;
  rd_h.classList = "infos";

  rd_at = document.createElement("span");
  rd_at.innerHTML = "at";
  rd_at.classList = "infos";
  rd_at.style.marginLeft = "5px";
  rd_at.style.marginRight = "5px";


  rd_div.appendChild(rd_label);
  rd_div.appendChild(rd_span);
  rd_div.appendChild(rd_at);
  rd_div.appendChild(rd_h);

  bottom_div.appendChild(desc_div);

  bottom_div.appendChild(desc_div);

  infos_actions.appendChild(fs_div);
  infos_actions.appendChild(version_div);
  infos_actions.appendChild(rd_div);

  dl_div = document.createElement("div");
  dl_div.style.textAlign = "right";
  download_link = document.createElement('a');
  download_link.id = "download_link";
  download_link.classList = "download";
  download_link.textContent = "Download the Level";
  download_link.href = "/files/levels/" + level.id + "/" + level.file;

  dl_div.appendChild(download_link)
  actions.appendChild(infos_actions)
  actions.appendChild(dl_div)
  bottom_div.appendChild(actions);
  div.appendChild(bottom_div);

  document.getElementById("wlg").appendChild(div);

  if (level.votes >= 100) {
    ShowStars(level.note, true, "name_div");
  } else {
    ShowStars(level.note, false, "name_div");
  }

  name_div.appendChild(votes_div);

  loadComment();
  loadComment();
  loadComment();

}

function verifySearch() {
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  search = urlParams.get('search');
  lvlid = urlParams.get('lvlid');
  if (search != null || lvlid == null) {
    div = document.createElement("div");
    span_results = document.createElement("span");
    span_results.innerHTML = 'Results for';
    span_results.classList = "level_name";
    span_results.style.marginRight = "10px"
    div.append(span_results)
    span_results_params = document.createElement("span");
    span_results_params.innerHTML = removeParamFromURL(search, 'search')
    span_results_params.classList = "level_name";
    div.append(span_results_params)

    document.getElementById("wlg").append(div)
  }
}

function BBcodeTranslate(text) {
  balises=['[img]','[/img]','[youtube]','[/youtube]']
  balises_b=['<img src=','>','<iframe width="426" height="240" src=','></iframe>']
  for (i = 0; i < balises.length;i++){
    text=text.replace(balises[i].replace('<','[').replace('>',']'),balises_b[i])
  };
  return text
}
function LoadLevel() {

  queryString = window.location.search
  urlParams = new URLSearchParams(queryString);
  id = urlParams.get('lvlid');

  file_path = "/files/levels/" + id + "/index.xml";

  if (id != null) {

    try {
      let xml_content = {};

      fetch(file_path).then(r => r.text()).then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
        xml_content.file = (xmlDoc.querySelector("file").textContent)
        xml_content.author = (xmlDoc.querySelector("author").textContent)
        xml_content.release_date = (xmlDoc.querySelector("release_date").textContent)
        xml_content.release_hour = (xmlDoc.querySelector("release_hour").textContent)
        xml_content.version = (xmlDoc.querySelector("version").textContent)
        xml_content.description = (xmlDoc.querySelector("description").textContent)
        xml_content.bbcode = (xmlDoc.querySelector("bbcode").textContent)
        xml_content.name = (xmlDoc.querySelector("name").textContent)
        xml_content.id = (xmlDoc.querySelector("id").textContent)
        xml_content.size = (xmlDoc.querySelector("size").textContent)
        xml_content.votes = (xmlDoc.querySelector("votes").textContent)
        xml_content.note = (xmlDoc.querySelector("note").textContent)
        levelWindow(xml_content)
      });
    } catch (error) {
      console.log('not found' + error)
    };

  } else {
    levelLink(1);
    levelLink(2);
    levelLink(3);
  }
}

function ShowStars(stars_nb, prestige, div_id) {
  initial_note = stars_nb
  stars_nb = Math.round(stars_nb)
  style = localStorage.getItem('ui')
  div = document.createElement("div");
  div.classList.add("stars")
  if (prestige == true) {
    pre = 'prestige_'
    sh_color = '#14c2ff'
  } else {
    pre = ''
    sh_color = '#f8f880'
  }
  if (stars_nb != 1) {
    for (let i = 0; i < stars_nb; i++) {
      if (i % 2 == 0) {
        var starimg = document.createElement("img");
        starimg.src = "../images/head/" + pre + "star_" + style + ".png";
        starimg.classList = "noselect";

        starimg.style.width, starimg.style.height = "32px", "32px";

      } else {
        var starimg = document.createElement("img");
        starimg.src = "../images/head/" + pre + "half_star_" + style + ".png";
        starimg.classList = "noselect";

        starimg.style.width, starimg.style.height = "32px", "32px";
      };
      if (i == stars_nb - 1) {
        break;
      }
      if (i % 2 == 0 || i == stars_nb - 2) {
        try {
          starimg.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 6px " + sh_color + ")");
        } catch { };
        div.appendChild(starimg);
      }
    };
  } else {
    var starimg = document.createElement("img");
    starimg.classList = "noselect";
    starimg.src = "../images/head/" + pre + "half_star_" + style + ".png";
    starimg.style.width, starimg.style.height = "32px", "32px";
    div.appendChild(starimg);
  };

  for (let j = div.childElementCount; j < 5; j++) {
    var starimg = document.createElement("img");
    starimg.classList = "noselect";
    starimg.src = "../images/head/" + pre + "no_star_" + style + ".png";
    starimg.style.width, starimg.style.height = "32px", "32px";
    div.appendChild(starimg);
  };
  note = document.createElement("span");
  note.id = "note";
  note.style.margin = "10px";
  note.textContent = initial_note;
  note.classList = "infos";

  div.appendChild(note);
  document.getElementById(div_id).appendChild(div);
}

function set_logo(logo) {
  if (logo == 'normal') {
    if (localStorage.getItem('ui') == 'smb') {
      document.getElementById("logo_img").src = "/images/logos/logo_smb.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "418px";
    } else if (localStorage.getItem('ui') == 'smb3') {
      document.getElementById("logo_img").src = "/images/logos/logo.png";
      document.getElementById("logo_img").style.height = "70px";
      document.getElementById("logo_img").style.width = "542px";
    } else if (localStorage.getItem('ui') == 'smw') {
      document.getElementById("logo_img").src = "/images/logos/logo_smw.png";
      document.getElementById("logo_img").style.height = "66px";
      document.getElementById("logo_img").style.width = "498px";
    }
  } else if (logo == 'alt') {
    if (localStorage.getItem('ui') == 'smb') {
      document.getElementById("logo_img").src = "/images/logos/logo_smb_alt.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "508px";
    } else if (localStorage.getItem('ui') == 'smb3') {
      document.getElementById("logo_img").src = "/images/logos/logo_alt.png";
      document.getElementById("logo_img").style.height = "70px";
      document.getElementById("logo_img").style.width = "638px";
    } else if (localStorage.getItem('ui') == 'smw') {
      document.getElementById("logo_img").src = "/images/logos/logo_smw_alt.png";
      document.getElementById("logo_img").style.height = "66px";
      document.getElementById("logo_img").style.width = "584px";
    }
  } else if (logo == 'bowser') {
    if (localStorage.getItem('ui') == 'smb') {
      document.getElementById("logo_img").src = "/images/logos/logo_smb_alt_bowser.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "514px";
    } else if (localStorage.getItem('ui') == 'smb3') {
      document.getElementById("logo_img").src = "/images/logos/logo_alt_bowser.png";
      document.getElementById("logo_img").style.height = "84px";
      document.getElementById("logo_img").style.width = "590px";
    } else if (localStorage.getItem('ui') == 'smw') {
      document.getElementById("logo_img").src = "/images/logos/logo_smw_alt_bowser.png";
      document.getElementById("logo_img").style.height = "102px";
      document.getElementById("logo_img").style.width = "590px";
    }
  }
}

function bg_buttons() {
  var ui = localStorage.getItem('ui')
  if (ui == 'smb3' || null) {
    document.getElementById("bg1b").src = "../images/bg/bg_icon.png";
    document.getElementById("bg1b").title = "Overworld hills";
    document.getElementById("bg2b").src = "../images/bg/bonus_icon.png";
    document.getElementById("bg2b").title = "Cave";
    document.getElementById("bg3b").src = "../images/bg/castle_icon.png";
    document.getElementById("bg3b").title = "Castle";
  } else if (ui == 'smb') {
    document.getElementById("bg1b").src = "../images/bg/hills_smb_icon.png";
    document.getElementById("bg1b").title = "Overworld hills";
    document.getElementById("bg2b").src = "../images/bg/cave_icon.png";
    document.getElementById("bg2b").title = "Bonus aera";
    document.getElementById("bg3b").src = "../images/bg/castle_smb_icon.png";
    document.getElementById("bg3b").title = "Bowser Castle";
  } else if (ui == 'smw') {
    document.getElementById("bg1b").src = "../images/bg/hills_icon.png";
    document.getElementById("bg1b").title = "Overworld hills";
    document.getElementById("bg2b").src = "../images/bg/bonus_smw_icon.png";
    document.getElementById("bg2b").title = "Bonus aera";
    document.getElementById("bg3b").src = "../images/bg/castle_smw_icon.png";
    document.getElementById("bg3b").title = "Castle";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function bg_check() {
  var x = localStorage.getItem('bg')

  if (x == 1 || x == null) {
    bg1();
  } else if (x == 2) {
    bg2();
  } else {
    bg3();
  }
}

function bg1() {
  localStorage.setItem('bg', 1)
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/hills_smw.png)";
    document.getElementById("top_layer_bg").style.height = "262px";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smw.png)";
    time_switch();
  } else if (x == 'smb') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/hills_smb.png)";
    document.getElementById("top_layer_bg").style.height = "432px";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smb.png)";
    time_switch();
  } else {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/bg.png)";
    document.getElementById("top_layer_bg").style.height = "300px";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom.png)";
    time_switch();
  }
}

function bg2() {
  localStorage.setItem('bg', 2)
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/bonus_smw.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smw_2.png)";
    time_switch();
  } else if (x == 'smb') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/cave.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smb_2.png)";
  } else {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/bonus.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_2.png)";
    time_switch();
  }
}

function bg3() {
  localStorage.setItem('bg', 3)
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/smw_castle.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smw_3.png)";
    time_switch();
  } else if (x == 'smb') {
    document.body.style.backgroundImage = "url(/images/bg/castle_smb_mid.png)";
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/castle_smb.png)";
    document.getElementById("top_layer_bg").style.height = "416px";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_smb_3.png)";
  } else {
    document.body.style.backgroundImage = "url(/images/bg/castle_smb3_mid.png)";
    document.getElementById("top_layer_bg").style.backgroundImage = "url(/images/bg/castle_smb3.png)";
    document.getElementById("top_layer_bg").style.height = "704px";
    document.getElementById("footer_bg").style.backgroundImage = "url(/images/bg/bottom_3.png)";
    document.getElementById("footer_bg").style.backgroundPosition = "0px 0px";
  }
}

function ui_start() {
  if (sessionStorage.getItem('index') == null) {
    sessionStorage.setItem('index', getRandomInt(4000))
  };
  try {
    localStorage.getItem('bg')
  } catch (error) {
    console.log('bg set to 1')
    localStorage.setItem('1', 'bg')
  };
  if (localStorage.getItem('moving') == null) {
    localStorage.setItem('moving', 'yes')
  };
  var x = localStorage.getItem('ui')
  if (x == 'smb') {
    smb()
  } else if (x == 'smb3') {
    smb3()
  } else {
    localStorage.setItem('ui', 'smw')
    smw()
  };
  try {
    document.getElementById("softwares_box_id").style.margin = 0;
    document.getElementById("softwares_box_id").style.maxWidth = "1200px";
    document.getElementById("softwares_box_id").style.height = "max-content";
  } catch (error) { };
}

function check_fav_logo() {
  if (localStorage.getItem('fav_logo') != null) {
    if (localStorage.getItem('fav_logo') == 'alt') {
      set_logo('alt')
    } else if (localStorage.getItem('fav_logo') == 'bowser') {
      set_logo('bowser')
    } else if (localStorage.getItem('fav_logo') == 'normal') {
      set_logo('normal')
    }
  }
  try {
    document.getElementById("start").style.paddingTop = document.getElementById("top_id").offsetHeight + "px";
  } catch (error) { };
  try {
    document.getElementById("box_left").style.paddingTop = document.getElementById("top_id").offsetHeight + "px";
  } catch (error) { }
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function upload_acc() {
  const photo_sel = document.getElementById("selectAvatar");
  var username = document.getElementById('username').value;
  if (username.length < 3) {
    document.getElementById("username_alert").style.display = "flex";
    document.getElementById("pref_up").style.display = "none";
    document.getElementById('profile_box').style.height = '576px';
  } else {
    localStorage.setItem('username', username);
    var pfp_img = document.getElementById("pfp_pr").src;
    localStorage.setItem('profile_picture', pfp_img)
    document.getElementById("pref_up").style.display = "flex";
    document.getElementById("username_alert").style.display = "none";
    var hei = document.getElementById('profile_box').clientHeight;
    document.getElementById('profile_box').style.height = '640px';
    check_dim();
  }
}

function load_acc() {
  var username = localStorage.getItem('username')
  var pfp = localStorage.getItem('profile_picture')
  document.getElementById('username').value = username;
  if (pfp == null) {
    document.getElementById("pfp_pr").src = '../images/head/default.png';
  } else {
    document.getElementById("pfp_pr").src = pfp;
  }
}

function load_acc_index() {
  var usrlang = navigator.language || navigator.userLanguage;
  var username = localStorage.getItem('username')
  var pfp = localStorage.getItem('profile_picture')
  try {
    if (username == null) {
      document.getElementById('profile_name').textContent = 'Create a profile';
    } else {
      document.getElementById('profile_name').textContent = username;
    }
    if (pfp == null) {
      document.getElementById("pfp_pr_index").src = 'images/head/default.png';
    } else {
      document.getElementById("pfp_pr_index").src = pfp;
    }
  } catch { }
}

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector("#pfp_pr").setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function check_dim() {
  const red_box = document.querySelectorAll("div.box_red");
  red_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 64).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 64).toString() + "px";
    box.style.width = wid;
  });
  const blue_box = document.querySelectorAll("div.box_blue");
  blue_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 64).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 64).toString() + "px";
    box.style.width = wid;
  });
  const orange_box = document.querySelectorAll("div.box_orange");
  orange_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 64).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 64).toString() + "px";
    box.style.width = wid;
  });
  const white_box = document.querySelectorAll("div.box_white");
  white_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 64).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 64).toString() + "px";
    box.style.width = wid;
  });
  const green_box = document.querySelectorAll("div.box_green");
  green_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 64).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 64).toString() + "px";
    box.style.width = wid;
  });
}

function show_description(id, size) {
  document.getElementById(id).style.height = size + "px";
  document.getElementById(id).style.filter = "none";
}
function hide_description(id) {
  document.getElementById(id).style.height = "0px";
  document.getElementById(id).style.filter = "blur(4px)";
}

function website_hover(id, size) {
  document.getElementById(id + '_img').addEventListener("mouseover", (event) => show_description(id + '_description', size));
  document.getElementById(id + '_img').addEventListener("mouseout", (event) => hide_description(id + '_description'));

}

function time_set() {
  try {
    var select = document.getElementById("time_select");
    var time = select.value;
    localStorage.setItem('time', time)
    document.getElementById("time_select").value = time;
    time_switch();
  } catch (error) { }
}
function time_switch() {
  var time = localStorage.getItem('time')
  var bg = localStorage.getItem('bg')
  var ui = localStorage.getItem('ui')
  if ((bg == 3) && (ui == 'smb' || 'smb3') && (ui != 'smw')) {
    //pass
  } else {
    if (time == 'night') {
      document.body.style.backgroundImage = "url(/images/bg/stars.gif)";
      document.getElementById("clouds_bg").style.opacity = "50%";
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.background = "linear-gradient(0deg, rgba(160, 208, 248, 1) 10%, rgba(214, 160, 255, 1) 90%)";
      document.getElementById("clouds_bg").style.opacity = "100%";
    }
    try {
      if (time != null) {
        document.getElementById("time_select").value = time;
      } else {
        document.getElementById("time_select").value = 'day';
      }
    } catch (error) { }
  }
  if (localStorage.getItem('time') == 'night') {
    document.getElementById("top_layer_bg").style.filter = "brightness(50%)"
    if (document.body.style.backgroundImage != 'url("/images/bg/stars.gif")') { document.body.style.backdropFilter = "brightness(50%)" }
    document.getElementById("footer_bg").style.filter = "brightness(50%)"
    if (ui == 'smb3') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#7c7c7c";
    } else if (ui == 'smb') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top_smb.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#74787c";
    } else if (ui == 'smw') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top_smw.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#7f7f7f";
    };
  } else {
    document.getElementById("top_layer_bg").style.filter = "brightness(100%)"
    document.body.style.backdropFilter = "brightness(100%)"
    document.getElementById("footer_bg").style.filter = "brightness(100%)"
    if (ui == 'smb3') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#f8f8f8";
    } else if (ui == 'smb') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top_smb.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#ffffff";
    } else if (ui == 'smw') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/cloud_top_smw.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#e8f0f8";
    };
  }
}

function cloud_button() {
  if (document.getElementById("clouds_moving_button").checked) {
    localStorage.setItem('moving', 'yes')
  } else {
    localStorage.setItem('moving', 'no')
  }
  document.getElementById('clouds_bg').style.animationPlayState = "paused";
  clouds_shift();
}

function set_clouds() {
  try {
    var moving = localStorage.getItem('moving')
    if (moving == "yes" || null) {
      document.getElementById('clouds_moving_button').checked = true;
    } else {
      document.getElementById('clouds_moving_button').checked = false;
    }
  } catch (error) { }
}

function clouds_shift() {
  var clouds = document.getElementById('clouds_bg')
  var moving = localStorage.getItem('moving')
  if (moving == "yes" || moving == null) {
    document.getElementById('clouds_bg').style.animationPlayState = "running";
  } else {
    document.getElementById('clouds_bg').style.animationPlayState = "paused";
  }
}