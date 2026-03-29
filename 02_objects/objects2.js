// const tinderUser = new Object();  way to construct objects using constructor
// console.log(tinderUser)

const tinderUser = {}
tinderUser.name = "Aditya"
tinderUser.ID = "AB21"
tinderUser.isLoggedIn = true;
console.log(tinderUser)

// const tinderUser = {
//     UserID: "AB21",
//     fullname: {
//         firstname : "Aditya",
//         lastname: "Bharadwaj"
//     }
// }
// console.log(tinderUser) 
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const obj1 = {1: "a", 2:"b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Rudra",
        email: "Rudra@gmail.com"
    },
    {
        id:2,
        name:"Aditya",
        email:"adityabharadwaj@outlook.com"
    },
    {
        id:3,
        name:"Shorya",
        email:"ShouryaRajput@gmail.com"
    }
]
console.log(users[1].name)

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Aditya Bharadwaj"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)

