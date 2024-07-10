// let myName="Gyani  "

// console.log(myName.trueLength)
let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.gyani=function(){
    console.log(`gyani is present in all objects`);
}
Array.prototype.heygyani=function(){
    console.log(`gyani is present in all objects`);
}

//heroPower.gyani()
//myHeros.gyani()
//heroPower.heygyani()
//heroPower.heygyani()


//Inheritance
const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'Js assignment',
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=user
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Gyani   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
   
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"Gyani".trueLength()
"icseTea".trueLength()