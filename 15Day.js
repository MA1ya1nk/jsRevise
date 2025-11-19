/*
forEach loop does not return any values so cannot be store in a variable

                     FILTER
it return actual values 

const arr = [2,3,4,5,6]
const values = arr.filter( (num) => num>4)
console.log(values)    print 5  6

but const arr = [2,3,4,5,6]
const values = arr.filter( (num) => {
    num>4
})   return empty array [] bcoz if we use this notification so use   return before num>4(IMP)
console.log(values)

                    //MAP
const myNum = [1,2,3,4,5]
const newNum = myNum.map( (num) => num+10)
console.log(newNum)         // [11,12,13,14,15]

                // CHAINING
const newNum2 = myNum.map( (num) => num*10).map( (num) => num+10)  // first map value pass on to second map
console.log(newNum2)      // [20,30,40,50,60]

you can do even more chaining and even filter can be 


                // REDUCE(IMP)
const arr = [1,2,3]
const total = arr.reduce( function(acc,val){
   return acc + val
},0)  // here 0 can be off any value
console.log(total)  return 6

working 
acc=0 val=ar[0]=1
acc=1 val=2
acc=3 val=3
sum and return =6

const total = arr.reduce( (acc,val) => acc+val,0)
console.log(total)  print 6





              ONE SHOT FIRST FINISH HERE
*/