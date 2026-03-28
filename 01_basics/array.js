const array= [1,2,3,4,5]
const heroes = new Array("Captain America","Iron Man","Thor")

// console.log(array)
// console.log(heroes)
// array.push(9)
// array.push(10)
// array.pop()
// array.unshift(0)
// array.shift()
// console.log('A', array)
// console.log(array.slice(1,3))
// console.log('B', array)
// console.log(array.splice(1,3))
// console.log('C',array)

// array.push(heroes)
// console.log('A', array)
const newArray = array.concat(heroes)
console.log('B', newArray)
const newArray2 = [...array, ...heroes]
console.log('C', newArray2)
console.log(Array.isArray("Maitri"))
console.log(Array.from("Maitri"))