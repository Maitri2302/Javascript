let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="red"
})
 
let inp=document.querySelector("input")
inp.addEventListener("input",function(e){
    if(e.data !== null){
        console.log(e.data);
    }
})

let sel=document.querySelector("select");
let heading=document.querySelector("#device");

sel.addEventListener("change",function(evt){
    heading.textContent=`${evt.target.value} selected`;
})



