const tinderUser=new Object()// singleton obeject
//const tinderUser={} // non
tinderUser.id="323"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);//{id: '323', name:'sammy'......}

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gyani",
            lastname:"surya",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);// Gyani

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3={obj1,obj2}// gives separate separate values
//const obj3=Object.assign({},obj1,obj2)//{1:"a", 2:"b", 3:"a", 4:"b"}// {}=target obj1,obj2=source
//console.log(obj3);             //Object.assign()= static method copies all enumerable own properties from one or more objects

const obj3={ ...obj1, ...obj2}// combined output
                // objects in object
const users=[
    {
        id:1,
        email:"h@cd.com"

    },

    {
        id:1,
        email:"h@cd.com"
    }
]
users[1].email
console.log(tinderUser);   // { id: '323', name: 'sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] we can use .values which gives value of key
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true 














