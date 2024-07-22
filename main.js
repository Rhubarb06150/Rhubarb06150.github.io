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
button.appendChild(img_div);
button.appendChild(p_link);
document.getElementById('main').appendChild(button);
};
function showThumbnail(link){
minia_bg=document.getElementById('minia_bg');
minia=document.getElementById('minia');
exit_minia=document.getElementById('exit-minia');
minia_bg.style.display="block";
minia.style.display="block";
exit_minia.style.display="block";
minia.src="/minias/"+link+".png";
}
function hideThumbnail(){
minia_bg=document.getElementById('minia_bg');
minia=document.getElementById('minia');
exit_minia=document.getElementById('exit-minia');
//minia_bg.style.display="none";
document.getElementById('minia-op').style.opacity="0.0";
exit_minia.display="none";
}
function addThumbnail(link){
let minia_preview=document.createElement("img");
minia_preview.classList="minia-preview";
minia_preview.id="minia-"+link;
minia_preview.src="/minias/"+link+".webp";
document.getElementById('gallery').appendChild(minia_preview);
minia_preview.addEventListener("click",function(){
	//minia_bg=document.getElementById('minia_bg');
	let minia=document.getElementById('minia-'+link);
	//minia_bg.style.display="block";
	minia.style.width="100vw";
	minia.style.height="100vh";
	minia.style.position="absolute";
	minia.style.top="0px";
	minia.style.left="0px";
});
}
