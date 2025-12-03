/*
js says dont compare two different types of data types
eg console.log("2"===2)  => false
but typescript does not even allow such kind of check that's why it is stricter version
null>0 false
null == 0 false  always avoid such kind of conversions also undefines == 0 etc.
null>=0 true
          
       PRIMITIVE DATATYPE(7) {null, undefined, number, string, boolean, bigint,symbol}
Symbol is a datatype used to make unique and value can't be changes also use for hiding properties
eg  const id = Symbol('123')
BigInt store big number
let big = 123456789012345678901234567890n;
console.log(big);
here ending n says it is bigint

       NON PRIMITIVE
dynamic type bcoz no need mention datatype in a variable
datatype of function is FUNCTION(or object function)

        MEMORY
stack(primitive) and heap(non primitive)

let userOne={
  mail: "mk20040307@gmail.com",
  age: 22
}
let userTwo=userOne;
userTwo.age=23       IMP
console.log(userOne.age)  => 23 bcoz both are pointing to same memory in heap

*/