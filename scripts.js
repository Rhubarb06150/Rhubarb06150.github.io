function smw() {
  if (getRandomInt(255)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw_alt.png";
    document.getElementById("logo_img").style.height = "66px";
    document.getElementById("logo_img").style.width = "584px";
  }else if (getRandomInt(4000)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw_alt_bowser.png";
    document.getElementById("logo_img").style.height = "102px";
    document.getElementById("logo_img").style.width = "590px";
  }else{
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw.png";
    document.getElementById("logo_img").style.height = "66px";
    document.getElementById("logo_img").style.width = "498px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smw.png)";
  document.getElementById("top_layer_bg").style.height = "262px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds_smw.png)";
  document.getElementById("clouds_bg").style.height = "542px";
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
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smw_3.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smw_3.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smw_4.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smw_4.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smw_5.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smw_5.png)"
  });
  localStorage.setItem('ui', 'smw')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try{
  document.getElementById('mario').src='https://mcrhubarb.net/images/obj/mariosmw.png'
  document.getElementById('luigi').src='https://mcrhubarb.net/images/obj/luigismw.png'
  }catch (error){};

}
function smb3() {
  if (getRandomInt(255)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_alt.png";
    document.getElementById("logo_img").style.height = "70px";
    document.getElementById("logo_img").style.width = "638px";
  }else if (getRandomInt(4000)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_alt_bowser.png";
    document.getElementById("logo_img").style.height = "84px";
    document.getElementById("logo_img").style.width = "590px";
  }else{
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo.png";
    document.getElementById("logo_img").style.height = "70px";
    document.getElementById("logo_img").style.width = "542px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bg.png)";
  document.getElementById("top_layer_bg").style.height = "300px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds.png)";
  document.getElementById("clouds_bg").style.height = "532px";
  document.getElementById("clouds_bg").style.bottom = "100px";
  document.getElementById("top_id").style.borderImage = "url(https://mcrhubarb.net/images/bg/cloud_top.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(248,248,248)";
  if (document.URL.includes("/profile")) {
    const h1 = document.querySelectorAll('h1');
  }
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
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/border_orange.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_orange.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/border_green.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_green.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/border_white.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_white.png)"
  });
  localStorage.setItem('ui', 'smb3')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try{
  document.getElementById('mario').src='https://mcrhubarb.net/images/obj/mariosmb3.png'
  document.getElementById('luigi').src='https://mcrhubarb.net/images/obj/luigismb3.png'
  }catch (error){};
}

function smb() {
  if (getRandomInt(255)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb_alt.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "508px";
  }else if (getRandomInt(4000)==0){
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb_alt_bowser.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "514px";
  }else{
    document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb.png";
    document.getElementById("logo_img").style.height = "80px";
    document.getElementById("logo_img").style.width = "418px";
  }
  document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smb.png)";
  document.getElementById("top_layer_bg").style.height = "432px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/clouds_smb.png)";
  document.getElementById("clouds_bg").style.height = "478px";
  document.getElementById("clouds_bg").style.bottom = "96px";
  document.getElementById("top_id").style.borderImage = "url(https://mcrhubarb.net/images/bg/cloud_top_smb.png) 32 repeat";
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
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_1.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_2.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_2.png)"
  });
  const boxes__ = document.querySelectorAll('.box_orange');
  boxes__.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_3.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_3.png)"
  });
  const boxes___ = document.querySelectorAll('.box_green');
  boxes___.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_4.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_4.png)"
  });
  const boxes____ = document.querySelectorAll('.box_white');
  boxes____.forEach(box => {
    box.style.borderImage = "url(https://mcrhubarb.net/images/box/box_smb_5.png) 32 repeat";
    box.style.backgroundImage = "url(https://mcrhubarb.net/images/box/mid_smb_5.png)"
  });

  localStorage.setItem('ui', 'smb')
  try {
    bg_buttons();
  } catch (error) { }
  bg_check();
  try{
  document.getElementById("mario").src="https://mcrhubarb.net/images/obj/mariosmb1.png"
  document.getElementById("luigi").src="https://mcrhubarb.net/images/obj/luigismb1.png"
  }catch (error){};
}

function set_logo(logo){
  if (logo=='normal'){
    if (localStorage.getItem('ui')=='smb'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "418px";
    }else if (localStorage.getItem('ui')=='smb3'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo.png";
      document.getElementById("logo_img").style.height = "70px";
      document.getElementById("logo_img").style.width = "542px";
    }else if (localStorage.getItem('ui')=='smw'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw.png";
      document.getElementById("logo_img").style.height = "66px";
      document.getElementById("logo_img").style.width = "498px";
    }
  }else if (logo=='alt'){
    if (localStorage.getItem('ui')=='smb'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb_alt.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "508px";
    }else if (localStorage.getItem('ui')=='smb3'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_alt.png";
      document.getElementById("logo_img").style.height = "70px";
      document.getElementById("logo_img").style.width = "638px";
    }else if (localStorage.getItem('ui')=='smw'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw_alt.png";
      document.getElementById("logo_img").style.height = "66px";
      document.getElementById("logo_img").style.width = "584px";
    }
  }else if (logo=='bowser'){
    if (localStorage.getItem('ui')=='smb'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smb_alt_bowser.png";
      document.getElementById("logo_img").style.height = "80px";
      document.getElementById("logo_img").style.width = "514px";
    }else if (localStorage.getItem('ui')=='smb3'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_alt_bowser.png";
      document.getElementById("logo_img").style.height = "84px";
      document.getElementById("logo_img").style.width = "590px";
    }else if (localStorage.getItem('ui')=='smw'){
      document.getElementById("logo_img").src = "https://mcrhubarb.net/images/logos/logo_smw_alt_bowser.png";
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
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smw.png)";
    document.getElementById("top_layer_bg").style.height = "262px";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smw.png)";
    time_switch();
  } else if (x == 'smb') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/hills_smb.png)";
    document.getElementById("top_layer_bg").style.height = "432px";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smb.png)";
    time_switch();
  } else {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bg.png)";
    document.getElementById("top_layer_bg").style.height = "300px";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom.png)";
    time_switch();
  }
}

function bg2() {
  localStorage.setItem('bg', 2)
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bonus_smw.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smw_2.png)";
    time_switch();
  } else if (x == 'smb') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/cave.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smb_2.png)";
  } else {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bonus.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_2.png)";
    time_switch();
  }
}

function bg3() {
  localStorage.setItem('bg', 3)
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/smw_castle.png)";
    document.getElementById("top_layer_bg").style.height = "100%";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smw_3.png)";
    time_switch();  
  } else if (x == 'smb') {
    document.body.style.backgroundImage = "url(https://mcrhubarb.net/images/bg/castle_smb_mid.png)";
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/castle_smb.png)";
    document.getElementById("top_layer_bg").style.height = "416px";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_smb_3.png)";
  } else {
    document.body.style.backgroundImage = "url(https://mcrhubarb.net/images/bg/castle_smb3_mid.png)";
    document.getElementById("top_layer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/castle_smb3.png)";
    document.getElementById("top_layer_bg").style.height = "704px";
    document.getElementById("footer_bg").style.backgroundImage = "url(https://mcrhubarb.net/images/bg/bottom_3.png)";
    document.getElementById("footer_bg").style.backgroundPosition = "0px 0px";
  }
}

function ui_start() {
  try{
    localStorage.getItem('bg')
  } catch (error){
    console.log('bg set to 1')
    localStorage.setItem('1','bg')
  };
  if (localStorage.getItem('moving')==null){
    localStorage.setItem('moving','yes')
  };
  var x = localStorage.getItem('ui')
  if (x == 'smw') {
    smw()
  } else if (x == 'smb') {
    smb()
  } else {
    localStorage.setItem('ui','smb3')
    smb3()
  };
  try{
    document.getElementById("softwares_box").style.margin=0;
  } catch (error) {};
  
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

function mc_head(){
  const input = document.getElementById("mcname");
  const inputValue = input.value;
  open('https://render.skinmc.net/3d.php?user='+inputValue+'&vr=-10&hr0&hrh=25&aa=true&headOnly=true&ratio=10')
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
      document.body.style.backgroundImage = "url(https://mcrhubarb.net/images/bg/stars.gif)";
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