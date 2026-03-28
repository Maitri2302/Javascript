const user ={
    username: "Maitri",
    age:23,
    welocmeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
};
// user.welocmeMessage()
// user.username="Sam"
// user.welocmeMessage()

// function chai(){
//     let username="maitri"
//     console.log(this.username)
// }
// chai()

// let chai1 = function(){
//     let userID=101
//     console.log(this);
// }
// chai1()

// let chai = () => {
//     let userPassword = 2111
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3))

// const subTwo = (num1,num2) => num1-num2
// console.log(subTwo(7,3))

// const pdtTwo = (num1,num2) => (num1*num2)
// console.log(pdtTwo(2,8))

//IIFE = immediately invoked function expression
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (user) => {
    console.log(`${user}, ENTER YOUR DETAILS`)
})('Sam')