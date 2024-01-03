function smw(){
  document.getElementById("logo_img").src="images/logos/logo_smw.png";
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("logo_img").style.height="33px";
    document.getElementById("logo_img").style.width="249px";
  }else{
    document.getElementById("logo_img").style.height="66px";
    document.getElementById("logo_img").style.width="498px";
  }
  document.getElementById("hills_bg").style.backgroundImage = "url(images/bg/hills_smw.png)";
  document.getElementById("hills_bg").style.height = "262px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(images/bg/clouds_smw.png)";
  document.getElementById("clouds_bg").style.height= "542px";
  document.getElementById("footer_bg").style.backgroundImage = "url(images/bg/bottom_smw.png)";
  document.getElementById("top_id").style.borderImage = "url(images/bg/cloud_top_smw.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(240,240,240)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box=>{
    box.style.borderImage = "url(images/box/box_smw_1.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_smw_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box=>{
    box.style.borderImage = "url(images/box/box_smw_2.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_smw_2.png)"
  });
  localStorage.setItem('ui', 'smw')
  }
function smb3(){
  document.getElementById("logo_img").src="images/logos/logo.png";
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("logo_img").style.height="35px";
    document.getElementById("logo_img").style.width="271px";
  }else{
    document.getElementById("logo_img").style.height="70px";
    document.getElementById("logo_img").style.width="542px";
  }
  document.getElementById("hills_bg").style.backgroundImage = "url(images/bg/bg.png)";
  document.getElementById("hills_bg").style.height = "300px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(images/bg/clouds.png)";
  document.getElementById("clouds_bg").style.height = "532px";
  document.getElementById("clouds_bg").style.bottom = "100px";
  document.getElementById("footer_bg").style.backgroundImage = "url(images/bg/bottom.png)";
  document.getElementById("top_id").style.borderImage = "url(images/bg/cloud_top.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(248,248,248)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box=>{
    box.style.borderImage = "url(images/box/border_blue.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_blue.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box=>{
    box.style.borderImage = "url(images/box/border_red.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_red.png)"
  });
  localStorage.setItem('ui', 'smb3')
}

function smb(){
  document.getElementById("logo_img").src="images/logos/logo_smb.png";
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("logo_img").style.height="40px";
  document.getElementById("logo_img").style.width="209px";
  }else{
    document.getElementById("logo_img").style.height="80px";
  document.getElementById("logo_img").style.width="418px";
  }
  document.getElementById("logo_img").style.height="80px";
  document.getElementById("logo_img").style.width="418px";
  document.getElementById("hills_bg").style.backgroundImage = "url(images/bg/hills_smb.png)";
  document.getElementById("hills_bg").style.height = "432px";
  document.getElementById("clouds_bg").style.backgroundImage = "url(images/bg/clouds_smb.png)";
  document.getElementById("clouds_bg").style.height = "478px";
  document.getElementById("clouds_bg").style.bottom = "96px";
  document.getElementById("footer_bg").style.backgroundImage = "url(images/bg/bottom_smb.png)";
  document.getElementById("top_id").style.borderImage = "url(images/bg/cloud_top_smb.png) 32 repeat";
  document.getElementById("top_id").style.backgroundColor = "rgb(255,255,255)";
  const boxes = document.querySelectorAll('.box_blue');
  boxes.forEach(box=>{
    box.style.borderImage = "url(images/box/box_smb_1.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_smb_1.png)"
  });
  const boxes_ = document.querySelectorAll('.box_red');
  boxes_.forEach(box=>{
    box.style.borderImage = "url(images/box/box_smb_2.png) 32 repeat";
    box.style.backgroundImage = "url(images/box/mid_smb_2.png)"
  });
  localStorage.setItem('ui', 'smb')
}

function ui_start(){
  var x = localStorage.getItem('ui')
  if (x == 'smw'){
    smw()
  } else if (x == 'smb'){
    smb()
  } else{
    smb3()
  }
}