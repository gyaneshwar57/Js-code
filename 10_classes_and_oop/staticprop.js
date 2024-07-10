class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    createId(){
        return `123`
    }
}
const gyani=new User("gyani")
//console.log(gyani.createId());// 123


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
        
    
    }
}
const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe();// iphone








