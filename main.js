function aB(img,link,color_t,color_b,text){
let button=document.createElement('div');
/*button.addEventListener("mouseover",function(){
button.style.boxShadow=color_t+" 0px 0px 40px";
});
button.addEventListener("mouseout",function(){
button.style.boxShadow="none";
});*/
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
/*
function slideMinia(from,to,direction){
let ind_minia_to;
let ind_minia_from=minia_index;
let minia_to=document.getElementById('minia-to');
let minia_from=document.getElementById('minia-from');
minia_to.src="minias/pr"+minias[ind_minia_to]+".webp";
minia_from.src="/minias/pr"+minias[ind_minia_from]+".webp";
if(direction="left"){
if(minia_index==0){ind_minia_to=minias.length;};
}else{
}
};
*/
