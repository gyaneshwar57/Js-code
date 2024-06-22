//in map use [key,value] for iteration and in object use key for iteration
const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"rubby",
    swift:"swift by apple"
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]} `);
}

const programming =["js","rb","py","java","cpp"]
for (const key in object) {   //forIn
    console.log(programming[key]);  //js,rb,...
}

// const map=new Map()  //will have unique values
//  map.set('IN',"india")
//  map.set('USA',"united states of america")
//  map.set('Fr',"frmaance")

// for(const key in map){
//     console.log(map);  // not interable 
// }


 



