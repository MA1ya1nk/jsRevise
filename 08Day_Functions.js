// function func(){
//     console.log("hello")
// }
// func // this is reference
// func()  // call

function add(num1,num2){
    console.log(num1+num2)
}
// add(3,4) // 7
// add(3,"4")  // 34
// add(3,"a")  // 3a

// function sub(num1,num2){ // you can also give some random initial value to parameters like num1=6 to avoid any error
//     return num1-num2;
// }
// const c=sub(4,3);
// console.log(c)

     // MOST MOST IMP
// function calculateCartPrice(...num1){ // array mai saari vaue chali jayegi (rest operator)
//     return num1
// }     
// console.log(calculateCartPrice(200,300,400))  // [ 200, 300, 400 ]

// function calculateCartPrice(val1,val2,...num1){ 
//     return num1
// }     
// console.log(calculateCartPrice(200,300,400,500))  // [ 400, 500 ]

function check(obj){
    console.log(`name is ${obj.name} and age is ${obj.age}`);
}
const obj = {
    name: "mayank",
    age: 21
}
check(obj)  // name is mayank and age is 21

// what if age is not present there so undefined print that'why type safety need to check