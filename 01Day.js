// const,let,var

/*
  let name="Mayank"
  let rollNo=40
  console.table([name,rollNo])  //  this print values in tabular form(type object)
*/

// tc39 and mdn are imp documentation
// bigint for storing large value
// let name; => undefined        means initialize but not defined
// null => not 0 but empty     but object 

// symbol is a datatype for UNIQUENESS


// console.log(a); // undefined
// var a = 5;

// console.log(b)  return error
// let b=3;

/*
| Feature        | var             | let       | const     |
| -------------- | --------------- | --------- | --------- |
| Scope          | Function        | Block     | Block     |
| Hoisted        | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | ✅ Yes          | ❌ No    | ❌ No     |
| Re-assignment  | ✅ Yes          | ✅ Yes   | ❌ No     |
| Block Safe     | ❌ No           | ✅ Yes   | ✅ Yes    |

Hoisting is JavaScript’s behavior of moving variable and function 
declarations to the top of their scope during the compilation phase.

eg() // work perfectly fine bcoz of hoisting
function eg()

eg2() // error
const eg2= function()
*/