var load=function(win){return{onLoading:function(){if(!document.getElementById("box")){var box=document.createElement("div");document.body.appendChild(box),box.id="box",box.innerHTML="<div id='box1'>loading...</div><div id='box2'></div>"}},close:function(){if(document.getElementById("box")){var box=document.getElementById("box");document.body.removeChild(box)}},addMethod:function(){}}}();