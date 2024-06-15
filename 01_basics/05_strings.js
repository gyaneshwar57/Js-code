const name="hiteshhc"
const repoCount=50

//console.log(name+repoCount+" value")  // hitesh50 value
console.log(`my name is ${name} and my repo count is ${repoCount}`)// my name is hitesh and my repo count is 50


const gameName= new String('hitesh')// hitesh

console.log(gameName[0])
console.log(gameName.__prototype__) // {}

console.log(gameName.length) //8
console.log(gameName.charAt(2));// t
console.log(gameName.indexOf('t')); //2


const newString =gameName.substring(0,4)
console.log(newString) //hite

const anotherString=gameName.slice(-8,4)
console.log(anotherString) //ite    reverse

const newStringOne= "   hitesh   "
console.log(newStringOne);  //   hitesh
console.log(newStringOne.trim());//hitesh


const url=" https://gyani.com/gyani%20choudhary"
console.log(url.replace('20%','-')) // https://gyani.com/gyani-choudhary


console.log(gameName.split)





