//for of 
["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);// 1 2 3 4 5 
}
 const greetings="hello world!"
 for(const greet of greetings){
    console.log(`each char is ${greet}`);
 }
//maps
 const map=new Map()  //will have unique values
 p.set('IN',"india")
 map.set('USA',"united states of america")
 map.set('Fr',"frmaance")
 console.log(map);
// for(const [key,value] of map){   //if we use key instead of [key,value] output:in array
//     console.log(key,':-',value)// IN:-india
// }

const myObject={
    game1:'NFS',
    game2:'spiderman'
}

//for(const [key,value] of myObject){
    //console.log(key,':-',value) //myOject is not iterable
//}




