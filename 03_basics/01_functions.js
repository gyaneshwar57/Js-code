
function sayMyname(){
    console.log("G");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("i");
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
console.log(loginUserMessage("Gyani"));
















