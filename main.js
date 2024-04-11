function AddElement(title,content){
    div=document.createElement("div");
    div.classList="element";

    title_div=document.createElement("div");
    title_div.classList="title";
    title_span=document.createElement("span");
    title_span.innerHTML = title
    title_div.appendChild(title_span);

    content_div=document.createElement("div");
    content_div.classList="element_content";
    content_content=document.createElement("p");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);

    div.appendChild(title_div);
    div.appendChild(content_div);
    document.getElementById("elements").appendChild(div);
}