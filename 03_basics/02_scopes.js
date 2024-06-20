//var c=300  //30
let a=300
if(true){
    let a=10
    const b=20
    console.log("INNER:",a); //10
}



console.log(a);  //300
//console.log(b);// b not defined for using var
//console.log(c);


function one(){
    const username="Gyani"
    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);// web site not dfined
    two()// Gyani
}
//one() //if we comment out two() it will not execute

if(true){
    const username="Gyani"
    if(username==="GYani"){
        const website="youtube"
        //console.log(username+website); //Gyani youtube
    }
    //console.log(website); not defined
}
//console.log(username);   not defined

//+++++++++++++++++++++++++++ interesting+++++++++++++++++++
addone(5)//it will get 6 if use console log
function addone(num){
    return num+1
}


adTwo(5) // not defined
const adTwo=function(num2){
    return num+2
}










