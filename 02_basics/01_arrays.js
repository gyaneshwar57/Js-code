//array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","nagaraj"]

const myArr2=new Array(1,2,3,4)
//console.log(myArr[0])

//                  Array methods
 // myArr.push(6)
//  console.log(myArr)// 0,1,2,3,4,5,6
 // myArr.pop()// removes last element
 // myArr.unshift(9)
 // console.log(myArr)// 9,0,1,2,3,4,5,6
//  myArr.shift()// removes starting element

//console.log(myArr.includes(9)) //false
//console.log(myArr.indexOf(9));  //-1  i.e, he doesn't the value

const newArr=myArr.join()

//console.log(myArr)  [0,1,2,3,4,5]
//console.log(newArr)  0,1,2,3,4,5,


//                  slice and splice

console.log("A",myArr)     //A [0,1,2,3,4,5]
const myn1=myArr.slice(1,3)
console.log(myn1);          //[1,2]
console.log("B",myArr);     //B [0,1,2,3,4,5]  

const myn2=myArr.splice(1,3)
console.log(myn2);           //[1,2,3]      
console.log("c",myArr);      //C [0,4,5]  removes slice  and it will manipulate the original value





