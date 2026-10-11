let myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())

// let myCreatedDate= new Date(2026,0,25);
let myCreatedDate= new Date(2026, 1, 28);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date();
newDate.toLocaleDateString('default',{
    weekday: "long",
})