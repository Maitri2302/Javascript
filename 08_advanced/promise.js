const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
         let error=true
        // let error=false
        if(!error){
            resolve({
                username:"Aditya",password:"21-11"
            })
        } else {
            reject('ERROR:Something went wrong')
        }

    },2000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
         let error=true
        if(!error){
            resolve({
                username:"Maitri",password:"12-11"
            })
        } else {
            reject('ERROR:Something went wrong')
        }

    },2000)
});

// async function consumedPromiseFive() {
//     const response=await promiseFive
//     console.log(response)
// }

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllUsers()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error)
//     }
// }

// getAllUsers() 

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
