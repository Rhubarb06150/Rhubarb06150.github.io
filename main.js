function AddElement(title, infos, content,div_id) {
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
    if (div_id!=null){
        content_div.id=div_id;
    };

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    document.getElementById("elements").appendChild(div);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function LoadUser() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    userid = urlParams.get('id');
};

function RanPokey(div_id) {
    center=document.createElement("center")
    length = getRandomInt(7) + 2;
    pokey_div = document.createElement("div");
    pokey_div.style.display = "flex";
    pokey_div.style.flexDirection = "column";
    pokey_div.style.width="max-content";
    for (i = 0; i < length; i++) {
        img=document.createElement("img");
        img.style.width="16px";
        img.style.height="16px";
        if (i==0){
            img.src="/images/npcs/pokey-head.png"
        }else{
            img.src="/images/npcs/pokey-body.png"
        }
        pokey_div.appendChild(img);
    };
    center.appendChild(pokey_div)
    document.getElementById(div_id).appendChild(center);
};