/*
              JAVASCRIPT EXECUTION CONTEXT(JS CODE EXECUTE KAISE HOTA H)
1. sabse pehle global execution context banta h jo "this" keyword mai hota h (for browser this contain window object
  execution context ofnode and browser is diiferent(js is single threded)
2. function execution context
3. eval execution context(good but not study yet)


   phases (two phase) 
memory creation phase(variables ke liye space allocate hoti h)
execution phase(operations perform like +,-etc)
    


       How this js code execute
let val1=10
let val2=5;
function addnum(num1,num2){
  let total=num1+num2
  return total
}       
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)

        STEPS
1. global execution(this allocate)
2. Memory phase
  val1->undefined
  val2->undefined
  addnum-> defination(whole func present in it)
  result1->undefined
  result2 -> undefined
3. execution phase
val1->10 value allocate
val2->5
result1 create a new environment similar to above all steps global execution and memory phase occur again
jitni baar function execute hote hain utni baar naya box create hota h called new exectional context
{
    1. Memory phase
     num1->undefined
     num2->undefined
     total->undefined 
    2.  execution phase
    num1-10
    num2-5
    total-15 and this total return in global execution contest

    }   

    most most important after the work of function finish this execution contest delete
    result1-15
    again similarly new variable environment mlega aur thread milega aur same process dubara hogi aur result2 mai 12 aayega aur new variable contest delete ho jayega


              CALL STACK
        SABSE NEECHE STACK MAI GLOBAL EXECUTION
        THEN JAISE HI koi new function aayega woh execute hoga phir hat jayega phir new func and so on.
        but sometime a function call another functon inside it so it also enter in call stack but also out efore main function as foolowing LIFO
                 
  */
let val1=10
let val2=5;
function addnum(num1,num2){
  let total=num1+num2
  return total
}       
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)