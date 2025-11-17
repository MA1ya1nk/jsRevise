             // IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// function likhte hi execute karwana h
/*
why?
intantly database connection when page load
global var not pollute local
*/             
// (function chai(){  // this is named IIFE
//     console.log("db connected")
// })()// this () for executing the function

// if you define two function like this so use ";" otherwise through error

((name) => {
    console.log(`${name}`)  // return mak
})('mak')

