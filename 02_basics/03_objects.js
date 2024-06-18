//singleton
//object.create

//object literals
const mySym=Symbol("key1")// take symbol and define

const JsUser={
    name:"Gyani",
    age:23,
    [mySym]:"mykey1", //act as symbol and if we dnt use brackets, the output is mySym='mykey1' if we brackets then [symbol(key1)]:'mykey1'
    email:"Gyani@google.com",
    isLoggedin:false,
    lastLoginDays:["monday","saturday"]
}
//console.log(JsUser.email);// Gyani@google.com
//console.log(JsUser["email"])// Gyani@google.com
//console.log(JsUser[mySym])// mykey1

JsUser.email="gyani@gpt.com"
//Object.freeze(JsUser)
JsUser.email="gyani@micro.com"
//console.log(JsUser)// here the email comes gyani@gpt.com as output

JsUser.greeting=function(){
    console.log("hello");
}
JsUser.greetingTwo=function(){
    console.log(`hello user,${this.name}`); //this. is used when we want make same object as refrence
}
//console.log(JsUser.greeting);// [function (anonymous)] comes as an refrence not output
console.log(JsUser.greeting()); //hello
console.log(JsUser.greetingTwo());// hello user,Gyani


