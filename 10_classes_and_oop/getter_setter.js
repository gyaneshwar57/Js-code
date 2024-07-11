class User{// use mostly this method for getter and setter
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email=value
    }
    get password(){
        return `${this._password}gyani`
    }
    set password(value){
        this._password=value

    }
}
const gyani=new User("gyani@gi.ai","123")
console.log(gyani.email);