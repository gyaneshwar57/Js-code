const userEmail="G@ai" //""

if(userEmail){
    console.log("got email"); //executes for "G@ai"
}else{
    console.log("dont have email"); //executes for ""
}


//falsy values
//false,0,-0,BigInt 0n,"", null, undefined, NaN //other than this all are truthy values

//truthy values
// "0", 'false', " ", [], {}, function(){}


// if(userEmail.length===0){
//     console.log("array is empty"); // array is empty
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){ //Object.keys(empty) is array
    console.log("object is empty"); // object is empty
}

// Nullish Coalescing operator(??): null undefined
let val1;
val1=5??10    //5 
val1=null ?? 10 // 10
va11=undefined ?? 15  /15

val1=null ??10 ??20 //10
console.log(val1);

//Terniary Operator

//condition ? true : false
const iceteaPrice=100
iceteaPrice >=80 ? console.log("less than 80") :console.log("more than 80") //less than 80






