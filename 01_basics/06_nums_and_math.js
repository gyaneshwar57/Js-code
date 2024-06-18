const score =400
console.log(score) // 400
const balance= new Number(100)
console.log(balance) // [number: 400]

console.log(balance.toString().length)// 3    //.toString() changed to string i.e, 400

console.log(balance.toFixed(2)); //400.00

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)) //23.9  convert to a specifeid precision

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// 10,00,000


//+++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)  // object [Math] {}
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.6))  //4
console.log(Math.min(4,5,6,7))// 4

console.log(Math.random())//   gives value between 0 and 1
console.log((Math.random()*10)+1);//  6.1755153477456
//console.log(Math.floor(Math.random()*10)+1)// 7


const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)// 19








