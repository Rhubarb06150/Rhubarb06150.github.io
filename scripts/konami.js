var allowedKeys={37:'left',38:'up',39:'right',40:'down',65:'a',66:'b'};
var konamiCode=['up','up','down','down','left','right','left','right','b','a'];
var konamiCodePosition=0;
let bonus=new Audio("/files/rhb.mp3");
document.addEventListener('keydown',function(e){
var key=allowedKeys[e.keyCode];
var requiredKey=konamiCode[konamiCodePosition];
if (key==requiredKey){
konamiCodePosition++;
if (konamiCodePosition==konamiCode.length){
bonus.currentTime=0;
bonus.play();
console.log("Salut Rhubarb :D");
document.getElementById('rhb-bg').removeAttribute("hidden");
konamiCodePosition=0;
divs=document.querySelectorAll("p,h1,.win");
for(const div of divs){
if(div.id!="rhb-bg"&&div.id!="box"){
div.style.animation="maite-anim "+Math.floor(Math.random()*30)/10+"s infinite";
};
};
maite=document.getElementById('maite').src="/files/objs/rhb-app.webp";
};
}else{
konamiCodePosition = 0;
}
});

