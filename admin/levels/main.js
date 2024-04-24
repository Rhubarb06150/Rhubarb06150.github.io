function loadLevel(title,content,poster_id,poster_name,level_link){
    div=document.createElement('div');
    div.innerHTML='<a href='+level_link+'>'+'|'+title+'|'+'</a>'

    document.getElementById('levels').appendChild(div);
}