// for of
/**
 used for any array,obj etc
 let arr = [1,2,3,4]
for (const i of arr) {
    console.log(i)   // return 1,2,3,4 
}

       //MAPS
hold key value pair(order remail same and no duplicate values are its imp properties)
const map = new Map()
map.set('IN', "India")
map.set('US', "united states of america")

for (const [key,val] of map) {  // destructuring of array
    console.log(key ':-' value)
}

IMP -> object cannot be itterated using for of loop
object can be iterated by for in loop

const obj = {
    name: "mayank",
    age: 23
}
for(const key in obj){
   console.log(key)     // name , age
   console.log(obj[key])            // mayank , 23
}


for in loop also work in array but key is index not exact values of array (POINT TO NOTICE)
for map it do nothing bcoz map cannot be iterated

                // FOR EACH LOOP
const coding = ["mak","shiv","sap","dug"]
coding.forEach( function (item){
console.log(item)   return mak,shiv,sap,dug all data
})      
      OR
coding.forEach((val)=>{
    console.log(val)
    })  
    
    
                 OR
coding.forEach(printMe) // print all values here printMe is a function(explore)   

In 
coding.forEach((val,ind,arr)=>{   / here val,ind,arr also exist ind is idex and arr means every value of array has whole array(IMP)
    console.log(val)
    }) 

const code = [
    {
        lang: "a",
        file: "js"
    },
    {
        lang: "mak",
        file: "kumar"
    }
]
code.forEach((item) => {
 console.log(item.lang)    // print a   mak
})
 */
