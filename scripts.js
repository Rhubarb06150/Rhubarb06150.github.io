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
  check_fav_logo(); 1
}

function ShowStars(stars_nb, prestige) {
  initial_note=stars_nb
  stars_nb=Math.round(stars_nb)
  style = localStorage.getItem('ui')
  div = document.createElement("div");
  div.classList.add("stars")
  if (prestige == true) {
    pre = 'prestige_'
    sh_color = '#14c2ff'
  } else {
    pre = ''
    sh_color = '#f8c810'
  }
  if (stars_nb != 1) {
    for (let i = 0; i < stars_nb; i++) {
      if (i % 2 == 0) {
        var starimg = document.createElement("img");
        starimg.src = "../images/head/" + pre + "star_" + style + ".png";
        starimg.style.width, starimg.style.height = "32px", "32px";

      } else {
        var starimg = document.createElement("img");
        starimg.src = "../images/head/" + pre + "half_star_" + style + ".png";
        starimg.style.width, starimg.style.height = "32px", "32px";
      };
      if (i == stars_nb - 1) {
        break;
      }
      if (i % 2 == 0 || i == stars_nb - 2) {
        try {
          starimg.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 2px " + sh_color + ")");
        } catch { };
        div.appendChild(starimg);
      }
    };
  } else {
    var starimg = document.createElement("img");
    starimg.src = "../images/head/" + pre + "half_star_" + style + ".png";
    starimg.style.width, starimg.style.height = "32px", "32px";
    div.appendChild(starimg);
  };

  for (let j = div.childElementCount; j < 5; j++) {
    var starimg = document.createElement("img");
    starimg.src = "../images/head/" + pre + "no_star_" + style + ".png";
    starimg.style.width, starimg.style.height = "32px", "32px";
    div.appendChild(starimg);
  };
  note=document.createElement("span");
  note.id="note"
  note.textContent=initial_note;

  div.appendChild(note);
  document.getElementById("upload_win").appendChild(div);
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
  if (x == 'smw') {
    smw()
  } else if (x == 'smb') {
    smb()
  } else {
    localStorage.setItem('ui', 'smb3')
    smb3()
  };
  try {
    document.getElementById("softwares_box_id").style.margin = 0;
    document.getElementById("softwares_box_id").style.maxWidth = "1200px";
    document.getElementById("softwares_box_id").style.height = "max-content";
  } catch (error) { };

  check_fav_logo();
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
  if (username == null) {
    document.getElementById('profile_name').textContent = 'No profile';
  } else {
    document.getElementById('profile_name').textContent = username;
  }
  if (pfp == null) {
    document.getElementById("pfp_pr_index").src = 'images/head/default.png';
  } else {
    document.getElementById("pfp_pr_index").src = pfp;
  }
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
    document.body.style.backdropFilter = "brightness(50%)"
    document.getElementById("footer_bg").style.filter = "brightness(50%)"
    if (ui == 'smb3') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#7c7c7c";
    } else if (ui == 'smb') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top_smb.png) 32 repeat";
      document.getElementById("top_id").style.backgroundColor = "#74787c";
    } else if (ui == 'smw') {
      document.getElementById("top_id").style.borderImage = "url(/images/bg/dark_cloud_top_smb.png) 32 repeat";
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