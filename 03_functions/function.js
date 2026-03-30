function display(){
    console.log("Maitri")
}
display()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNumbers(num1, num2){
    return num1+num2
}
const res = addTwoNumbers(8,7)
// console.log(res)

function loginUserMeassage(username="sam"){
    if(username == undefined){
        console.log("Please enter a valid username")
        return
    }
    return `${username} just logged in`
}
const message=loginUserMeassage("hitesh")
console.log(message)

function calculateCartPrice(...num){ //rest operator
    return num
}
console.log(calculateCartPrice(200,400,700))

const user ={
    username:"aditya",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// handleObject({
//     username:"Raj",
//     price:"799"
// })

const newArr =[200,400,800]
function returnsecondValue(_anyArray){
    return _anyArray[1]
}
console.log(returnsecondValue(newArr))  

console.log(addtwo(6))
function addtwo(num){
    return (num+2)
}
// console.log(addtwo(6))

// console.log(addone(6)) ERROR
const addone = function(num){
    return (num+1)
}
// console.log(addone(6))