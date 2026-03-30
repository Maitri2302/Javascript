 const user={
    username: "Aditya",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
 }
//  user.welcomeMessage()
//  user.username="AB"
//   user.welcomeMessage()
// console.log(this)

// function demo(){
//     console.log(this)
// }
// demo()

// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username="adi"
//     console.log(this.username)
// }
// chai()

// const addTwo = (a,b) => {
//     return a+b
// }

// const addTwo = (a,b) => a+b

// const addTwo = (a,b) => (a+b)
// console.log(addTwo(2,6))

const givename = (num1) => ({username:"hitesh"})
console.log(givename(7))

