let h1=document.querySelector("h1");

window.addEventListener("keydown",function(evt){
    if(evt.key==" "){
        h1.textContent="SPC"
    }
    else{
        h1.textContent=evt.key;
    }
})