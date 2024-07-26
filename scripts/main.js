function aB(img,link,color_t,color_b,text){
let button=document.createElement('div');
button.addEventListener("click",function(){open(link)});
button.classList="button";
button.style.background="linear-gradient(180deg, "+color_t+" 0%,"+color_b+" 100%)";
button.style.width="256px";
let img_div=document.createElement('img');
img_div.src=img;
img_div.style.width="64px";
button.appendChild(img_div);
let p_link=document.createElement('p');
p_link.style.marginTop="16px";
p_link.style.marginLeft="32px";
p_link.innerHTML=text;
p_link.style.fontSize="30px";
button.appendChild(img_div);
button.appendChild(p_link);
document.getElementById('main').appendChild(button);
};
