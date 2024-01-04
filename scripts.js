function smw() {
  document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw.png";
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("logo_img").style.height = "33px";
    document.getElementById("logo_img").style.width = "249px";
  } else {
    document.getElementById("logo_img").style.height = "66px";
    document.getElementById("logo_img").style.width = "498px";
  }
  document.getElementById("hills_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smw.png)";
  document.getElementById("hills_bg").style.height = "262px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds_smw.png)";
  document.getElementById("clouds_bg").style.height = "542px";
  document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smw.png)";
  document.getElementById("top_id").style.borderImage = "url(https://mcrhubarb.net/images/bg/cloud_top_smw.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(240,240,240)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smw_1.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smw_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smw_2.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smw_2.png)"
  });
  localStorage.setItem('ui', 'smw')
}
function smb3() {
  document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo.png";
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("logo_img").style.height = "35px";
    document.getElementById("logo_img").style.width = "271px";
  } else {
    document.getElementById("logo_img").style.height = "70px";
    document.getElementById("logo_img").style.width = "542px";
  }
  document.getElementById("hills_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bg.png)";
  document.getElementById("hills_bg").style.height = "300px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds.png)";
  document.getElementById("clouds_bg").style.height = "532px";
  document.getElementById("clouds_bg").style.bottom = "100px";
  document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom.png)";
  document.getElementById("top_id").style.borderImage = "url(https://mcrhubarb.net/images/bg/cloud_top.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(248,248,248)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/border_blue.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_blue.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/border_red.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_red.png)"
  });
  localStorage.setItem('ui', 'smb3')
}

function smb() {
  document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb.png";
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("logo_img").style.height = "40px";
    document.getElementById("logo_img").style.width = "209px";
  } else {
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "418px";
  }
  document.getElementById("hills_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smb.png)";
  document.getElementById("hills_bg").style.height = "432px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds_smb.png)";
  document.getElementById("clouds_bg").style.height = "478px";
  document.getElementById("clouds_bg").style.bottom = "96px";
  document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smb.png)";
  document.getElementById("top_id").style.borderImage = "url(https://mcrhubarb.net/images/bg/cloud_top_smb.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(255,255,255)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_1.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_2.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_2.png)"
  });
  localStorage.setItem('ui', 'smb')
}

function ui_start() {
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    smw()
  } else if (x == 'smb') {
    smb()
  } else {
    smb3()
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
  } else {
    localStorage.setItem('username', username);
    var pfp_img = document.getElementById("pfp_pr").src;
    localStorage.setItem('profile_picture', pfp_img)
    document.getElementById("pref_up").style.display = "flex";
    document.getElementById("username_alert").style.display = "none";
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
    if (usrlang == 'fr-FR') {
      document.getElementById('profile_name').innerHTML = 'Pas de profil';
    } else {
      document.getElementById('profile_name').innerHTML = 'No profile';
    }
  } else {
    document.getElementById('profile_name').innerHTML = username;
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
    hei = (hei + 32).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 32).toString() + "px";
    box.style.width = wid;
  });
  const blue_box = document.querySelectorAll("div.box_blue");
  blue_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 32).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 32).toString() + "px";
    box.style.width = wid;
  });
  const orange_box = document.querySelectorAll("div.box_orange");
  orange_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 32).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 32).toString() + "px";
    box.style.width = wid;
  });
  const white_box = document.querySelectorAll("div.box_white");
  white_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 32).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 32).toString() + "px";
    box.style.width = wid;
  });
  const green_box = document.querySelectorAll("div.box_green");
  green_box.forEach(box => {
    var hei = box.clientHeight;
    while ((hei % 32) != 0) {
      hei++;
    }
    hei = (hei + 32).toString() + "px";
    box.style.height = hei;
    var wid = box.clientWidth;
    while ((wid % 32) != 0) {
      wid++;
    }
    wid = (wid + 32).toString() + "px";
    box.style.width = wid;
  });
}

function time_set() {
  var select = document.getElementById("time_select");
  var time = select.value;
  localStorage.setItem('time', time)
  document.getElementById("time_select").value = time;
  time_switch();
}
function time_switch() {
  var time = localStorage.getItem('time')
  if (time == 'night') {
    document.body.style.backgroundImage = "url('../images/bg/stars.gif')";
    document.getElementById("clouds_bg").style.opacity = "50%";
  } else {
    document.body.style.backgroundImage = "none";
    document.body.style.background = "linear-gradient(0deg, rgba(160, 208, 248, 1) 10%, rgba(214, 160, 255, 1) 90%)";
    document.getElementById("clouds_bg").style.opacity = "100%";
  }
  document.getElementById("time_select").value = time;
}

function language() {
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  var usrlang = navigator.language || navigator.userLanguage;
  if (usrlang == 'fr-FR') {
    try {
      document.getElementById('useful_links').textContent = "Liens utiles";
    } catch (error) { }
    try {
      if (document.URL.includes("/profile")) {
        document.title="Modifier le profil"
      }
      if (sPage == '404.html'){
        document.title="MCRhubarb - Erreur 404"
      }
      document.getElementById('profile_settings').textContent = "Modifier le profil";
      document.getElementById('usrname_input').textContent = "Nom d'utilisateur: ";
      document.getElementById('pfp_span').textContent = "Photo de profil: ";
      document.getElementById('acc_modify_succes').textContent = "Le profil à bien été mis à jour!";
      document.getElementById('back_to_main').textContent = "Retour a l'accueil";
      document.getElementById('acc_error').textContent = "Nom d'utilisateur vide ou pas assez long";
      document.getElementById('modify').innerHTML = "Modifier le profil";
      document.getElementById('website_style').textContent = "Style graphique:";
      document.getElementById('bg_time').textContent = "Temps du fond:";
      document.getElementById('day').innerHTML = "Jour";
      document.getElementById('night').innerHTML = "Nuit";
    } catch (error) { }
    try {
    } catch (error) { }
  }
}