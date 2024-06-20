const user ={
    username:"Gyani",
    Price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this) // gives the whole output Gyani and function content , sam and function content with username:"sam"
    }
}

//user.welcomeMessage()// Gyani , welcome to website
//user.username="sam"
//user.welcomeMessage()// sam, welcometo website      //comment out log(this)

console.log(this)// {}     //comment out above 3 consoles
//in console browser this is considered as window

//function chai(){
//    let username="Gyani"
//   console.log(this.username)// undefined
//}
//chai()

//const chai=function(){
//    let username="Gyani"
//   console.log(this.username);
//}

const chai= () =>{
    let username="Gyani"
    console.log(this.username); //if we remove username then output={}
}
chai()// undefined


//const addTwo(num1,num2) =>{
//   return num1+num2  // explicity return
//}

//const addTwo(num1,num2) => num1+num2
//const addTwo(num1,num2) =>(num1+num2)  // implicity return
//console.log(addTwo(3,4));//7
const addTwo(num1,num2) =>({username:"Gyani"})  //use compulsory parenthesis

console.log(addTwo(3,4))//  username:'Gyani'





