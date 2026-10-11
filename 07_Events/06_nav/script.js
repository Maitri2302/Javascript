document.querySelector("#nav").addEventListener("click",function(){
    alert("clicked");
})


document.querySelector("#abc").addEventListener("click",function(dets){
    dets.target.classList.toggle("lt");
});

let inp=document.querySelector("input")
let span=document.querySelector("span");

inp.addEventListener("input",function(){
    if(20-inp.value.length>=0){
        span.textContent=20-inp.value.length;
    }    
    else {
        span.style.color="red";
    }
})