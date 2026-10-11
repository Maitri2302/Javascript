//for of
// const arr =[1,2,3,4,5]
// for(const val of arr){
//     console.log(val)
// }

// const greetings="Hello World"
// for(const greet of greetings){
//     console.log(`Eah character of greetings is ${greet}`)
// }

const map = new Map()
map.set('IN',"India")
map.set('US',"United States of Americs")
map.set('Uk',"United Kingdom")
// console.log(map);
// for(const [key,value] of map){
//     console.log(key,':-',value);
// }
for(const key in map){
    console.log(key)
}

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
// for (const key in myObject) {
//     console.log(key,':-',myObject[key]);
// }
// const programming=["js","java","c","cpp"]
// for(const lang in programming){
//     console.log(lang,':-',programming[lang])
// }

const programming=["js","java","c","cpp"]
// programming.forEach( function (val) {
//     console.log(val)
// })

// programming.forEach((val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const coding=[
    {
        languageNmae:"java",
        languagefileName:"java"
    },
    {
        languageNmae:"javascript",
        languagefileName:"js"
    },
    {
        languageNmae:"python",
        languagefileName:"py"
    }
]

// coding.forEach((item)=>{
//     console.log(item.languageNmae)
// })

//forEach doesn;t return values
// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const myNums=[1,2,3,4,5,6,7]
// const newNums=myNums.filter((num)=>num>4)
// const newNums=myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums)


// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// const newNums=myNums.map((num)=>num+10)
// console.log(newNums)

const newNums=myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(newNums)

const myNumbers=[1,2,3]
// const myTotal=myNumbers.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

// const myTotal = myNumbers.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"jscourse",
        price:2990
    },
    {
        itemName:"webdevcourse",
        price:1990
    },
    {
        itemName:"pycourse",
        price:2990
    },
    {
        itemName:"datasciencecourse",
        price:4990
    }
]
const price=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(price)