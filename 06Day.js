/*
learn about array is ,or and from


        OBJECTS
object literals

const jsUser = {
   name: "Hitesh",
   age: 21,
   lastLogin: ["monday","tuesday"]
}
   why [] notation is necessary eg jsUser["name"]  here key always in "" bcoz objec store key-value in string format
   let you define a var   "full name": "mayank kumar" in object so you cant target it by jsUser.full name but jsUser["full name"]

                   SYMBOL(datatype)
     const mySym = Symbol("key1")  // defining symbol
     obj = {
      mySym: "myKey1" // this is bad way bcoz typeOf mySum will be string 
      [mySym]: "myKey1"  // this will show type Symbol  print syntax is different than normal obj[mySym]
     }              

   for freezing or preventing someone to change values

   Object.freeze(jsUser)Inserting a new pair in obj    obj.greeting = function(){
   console.log("hello")   // here you can even use other vals of object by this operator
   }
   NOTE  :  you can even create a function in object and access method  obj.func();


   
*/
// const obj = {
//    mail: "mk@gmail.com",
//    fullName : {  // object inside object
//     firstName: "mayank",
//     lastName: "kumar"
//    }
// }
// console.log(obj.mail + "  " + obj["mail"])
// console.log(obj.fullName?.lastName)   // here ? is for protection to check it exist or not
// console.log(obj["fullName"]["firstName"])


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3={obj1,obj2} 
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } it is not needed

// const obj4 = Object.assign(obj1,obj2);
// console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  this is what we needed
//   // OR
// const obj5 = Object.assign({},obj1,obj2);
// console.log(obj5)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  this is best way so obj1 and obj2 insert into object
// // obj1 and obj2 entering into {} but in above way obj2 is entering into obj1 (IMP)


// mostly use way and latest
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(obj1)) // [ '1', '2' ]  return keys in array format  IMP
// console.log(Object.keys(obj1))  // also valid
// console.log(Object.entries(obj1))  // [ [ '1', 'a' ], [ '2', 'b' ] ]

console.log(obj1.hasOwnProperty(6))
console.log(obj1.hasOwnProperty('1')) // return true if key exist else false