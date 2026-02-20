// let t1=performance.now()

// for(let i=0;i<100; i++){
//     let para = document.createElement('para');
//     para.textContent="This is Para" + i;
//     document.body.appendChild(para); //document runs only in browserll
// }

// let t2=performance.now()

// console.log(t2-t1);

// let fragment = document.createDocumentFragment();

// for(let i=0;i<50;i++){
//     let paras=DocumentFragment.createElement('p');
//     paras.textContent="HI there, User"+i;
//     fragment.appendChild(paras);
// }
// document.body.appendChild(fragment);

let promise1= new Promise((resolve,reject)=>{
    let success= false;
    if(success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise rejected");
    }
});

promise1.then((message)=>{
    console.log("Message is: "+ message);
}).catch((error)=>{
    console.log("Error: "+error);
})

let promise2= new Promise((resolve,reject)=> {
    setTimeout(resolve,1000,"First");
})
let promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(reject, 4000, "Third");
})

Promise.all([promise2,promise3,promise4]).then((values)=> {
    console.log(values);
})
.catch((error)=> {
    console.error(error);
})