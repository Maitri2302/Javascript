// let para = document.getElementById("Para1");
// console.log(para);
// let class1= document.getElementsByClassName("Header1")
// console.log(class1)
// let p=document.getElementsByTagName('p')
// console.log(p)

// let para=document.querySelector('#Para1');
// console.log(para)
// let class1= document.querySelector('.Header1')
// console.log(class1)
// let para1 = document.querySelector("p");
// console.log(para1);
//runs only in browser

let element = document.createElement('h1');
element.textContent = "My name is Maitri";

let bodyTag = document.querySelector('body');
bodyTag.appendChild(element);
