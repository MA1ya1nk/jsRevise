/*
let date=new Date()   type is object(IMP)
console.log(date.toDateString());   Fri Nov 14 2025
console.log(date.toString())      Fri Nov 14 2025 19:43:25 GMT+0530 (India Standard Time)



let myDate = new Date(2023, 0, 23)   return jan 23 2023{0 is array of months}
let myDate = new Date(2023, 0, 23, 5, 3)   return jan 23 2023 5:03:00


let timeStamp = Date.now()   return time in millisecond  divide by 1000 for seconds
timeStamp has lot of methosa like .getMonth,getHour etc

   ARRAY
it does shallow copy so any changes in array changes the actual array
arr.includes(9)  returns true/false exist or not
let arr = [1,2,3,4]
console.log(indexOf(6))   return -1;

const newArr = myArr.join()   convert array into string

splice actually changes the actual array but slice not


int marvel = ["thor","hulk"]
int dc = ["flash","superman"]
marvel.push(dc)
console.log(marvel)  nor marvel=["thor","hulk",["flash","superman"]]   actually put whole array bcoz array can take any data type

const allHero=marvel.concat.dc  concat return new array

IMP
const new_hero=[...marvel, ...dc]    spread operator


*/
let arr = [1,2,3,4,5]
let arr2 = arr.pop()
console.log(arr2)