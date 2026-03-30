//Immediately Tnvoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB CONNECTED ${name}...`)
})("Aditya");