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


function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greetings=function(){
        console.log(`welcomel ${this.username}`);
    }
    return this
}
const userOne=new User("Gyani",12,true)
const userTwo=new User("chai",11,false)
console.log(userOne)
console.log(userTwo);

//empty obj created
//constructor funct created using new keyword
// this keyowrd will inject

