// let h=document.querySelector("h1")
// h.remove();
let h1=document.createElement("h1");
h1.textContent="Hello";
//document.body.appendChild(h1);
document.querySelector("body").prepend(h1);
h1.style.backgroundColor="cyan";