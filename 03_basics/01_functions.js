
function sayMyname(){
   // console.log("G");
    //console.log("y");
    //console.log("a");
    //console.log("n");
    //console.log("i");
}
//sayMyname()


//function addTwonumbers(num1,num2){
//    console.log(num1+num2);
//}
function addTwonumbers(num1,num2){
       //let result =num1+num2
      // return result
      return num1+num2
}

const result=addTwonumbers(3,4)//7 //if numbers are not given in parenthesis it gives NaN as output
//console.log("Result:",result);

function loginUserMessage(username){// if username="sam"  then output: sam just logged in
    if(!username){ /// if username===undefined  ouput:please enter a username nxtline: undefined // same output for both
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Gyani"))
//console.log(loginUserMessage("Gyani"));

function calculateCartPrice(val1,val2, ...num1){ ///rest operator ...
    return num1
}
//console.log(calculateCartPrice(200,400,500,600));//[200,400,500,600] val1,val2, ...num1


const user={
    username:"Gyani",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and ${anyobject.price}`);
}


//handleObject(user) // username is Gyani and price is 199
handleObject({
    username:"sam",
    price : 399
})                  // username is sam and price is 399

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
   return myNewArray[2]
}
console.log(returnSecondValue(myNewArray));         //400
//console.log(returnsecondValue([200,400,500,100]))// 400






















