const coding=["js","ruby","java","python","cpp"]

const values =coding.forEach((item)=>{
    //console.log(item)
    return item
})
//console.log(values);//undefined because forEach doent return
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num>4
// })
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)// [5,6,7,8,9,10]
 
//create
// const books=[{},{},{}]
//const userBooks=books.filter((bk)=>bk.genre==='History)
//const usrBooks=books.filter((bk)=>{
//   return bk.publish>=2000
//}) use reutrn in scope
//console.log(userBooks);
