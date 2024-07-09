const user={
    username: "Gyani",
    loginCount: 8,
    signedIn: true,

    getUserDetails :function(){
       // console.log("got user details");
       //console.log(`username: ${this.username}`);
        console.log(this);// {}
    }
}
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


function user(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greetings=function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}
const userOne=new user("Gyani",12,true)
const userTwo=new user("chai",11,false)
console.log(userOne.constructor)
console.log(userTwo);





