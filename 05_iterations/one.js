//for

for (let i = 0; i < 10; i++) {
    const element = i;
    //  1 2 3 4 5 6 7 8 9
    if(element==5){
        console.log("5 is the best number");

     }
     console.log(element);////  1 2 3 4 5 5is the best number 6 7 8 9
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' +i*j); //1 to 10 tables
    }
    
}

let myArr=["flash","batman","superman"]
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element); //["flash","batman","superman"]
}

//break and continue
// for (let index = 1; index <=20; index++) {
//     if(index==5){

//         console.log(`Dtetected 5`);
//         break
//     }
//    console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5){

        console.log(`Dtetected 5`);
        continue
    }
   console.log(`value of i is ${index}`);
    
}






