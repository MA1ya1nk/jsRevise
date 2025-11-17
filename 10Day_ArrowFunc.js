const users = {
     username: "mayank",
     welcomeMessage: function(){
          console.log(`${this.username}, welcome to website`)  // this refer to current obj so all values of current object can be accessed using this keyword
         // above if you direclt use ${username} it through error of username not defined  (IMP)
         console.log(this)  // { username: 'mayank', welcomeMessage: [Function: welcomeMessage] }
     }

}
// users.welcomeMessage()  // mayank, welcome to website
// users.username="mak"
// users.welcomeMessage()
// console.log(this)  // {}
// in browser like chrome it return window object(M.M IMP) return global object in browser


// function chai(){
//     const username="mak"
//     console.log(this.username)  // undefined so we can use this keyword in object only not in function
//     console.log(this) // it is not empty obj it has lot of values but not function values
// }
// chai()

 // Arrow func

 const func = () => {
    console.log(this) // by arrow function it return {}
 }
 // func()

// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(2,3))  // return 5 it is called implicit

const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(6,3))  // return 9


const func1 = () => ({username: "mak"})  // to paas an obj through func use {}
console.log(func1())  // { username: 'mak' }
