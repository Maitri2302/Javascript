const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(val)
}
const greeting="Hello World"
for (const letters of greeting) {
    console.log(`Each char is ${letters}`)
}
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
console.log(map)

for (const key of map) {
    console.log(key)
}

for(const [key,value] of map){
    console.log(key,':-',value)
}

//for in loops
const myObj={
    'game1':"Candy Crush",
    'game2' : "Clash of Clans"
}
for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

const lang=["cpp","js","py","ruby"]
for(const key in lang){
    console.log(key);
    console.log(lang[key])
}

// const map2=new Map()
// map.set('js',"Javascript")
// map.set('cpp',"C++")
// map.set('json',"javascript object notation")
// for(const key in Map){
//     console.log(key)
// }

 const code=["js","ruby","cpp","python"]
// code.forEach( function (item) {
//     console.log(item)
// } )

// code.forEach((val)=>{
//     console.log(val)
// })

// function printMe (item){
//     console.log(item)
// }
// code.forEach(printMe)

code.forEach((item, index, arr)=> {
    console.log(item,index,arr)
})

const codingLang=[
    {
        langName:"javascript",
        langNotation:"js"
    },
    {
        langName:"C++",
        langNotation:"Cpp"
    },
    {
        langName:"python",
        langNotation:"py"
    }
]
codingLang.forEach( (item) => {
    console.log(item.langNotation)
    console.log(item.langName)
} )

//for each
const values = coding.forEach((item)=>{
    console.log(item)
    return item
})
console.log(values)