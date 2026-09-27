let btn=document.querySelector("#btn");
let fileinp=document.querySelector("#fileInp");

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change",function(evt){
    if(evt.target.files){
        btn.textContent=evt.target?.files[0].name
        console.log(evt.target.files[0].name)
    }
});