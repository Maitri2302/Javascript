const array= [1,2,3,4,5]
const marvel_heroes = new Array("Captain America","Iron Man","Thor")
const dc_heroes= new Array("Superman", "Batman");

// console.log(array)
// consolle.log(heroes)
// arlray.push(9)
// array.push(10)
// array.pop()
// array.unshift(0)
// array.shift()
// console.log('A', array)
// console.log(array.slice(1,3)) 1,2
// console.log('B', array) 0,1,2,3,4,5
// console.log(array.splice(1,3)) 1,2,3
// console.log('C',array) 0,4,5

// marvel_heroes.push(dc_heroes)
// console.log('A', marvel_heroes)
 
const newArray = marvel_heroes.concat(dc_heroes)
console.log('B', newArray)
const newArray2 = [...marvel_heroes, ...dc_heroes]
console.log('C', newArray2)
const array2 = [1,2,3,4,[5,6],7,[8,9]]
const newarray2 = array2.flat(Infinity)
console.log(newarray2)
console.log(Array.isArray("Maitri"))
console.log(Array.from("Maitri"))

const newArr = array.join() 
console.log(newArr)
console.log(typeof (newArr))