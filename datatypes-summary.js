// primitive 7types
//string, Number, Boolean, Null, undefined, Unique
  
const score=22
const scoreValue=1.6
const isLoggedin=false
const outsideTemp=null
let userEmail; 

const id=Symbol('12')
const anotherId=Symbol('12')
console.log(id==anotherId) // false beacuse they are unique

  
const bigNumber=31243432554525245n

//Refrence (Non-primitive)

//Array, Objects, functions

const heros=["sakthiman","doga"]

//Objects
let myObj={
    name: "Gyani",
    age:23 ,  //Objects defined in curly brackets
}

const myFunction=function(){
    console.log("Hello");
}

console.log(typeof myFunction)  // output= function