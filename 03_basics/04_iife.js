//Immediately Invoked Function (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); // ()() is used to stop causing pollution in global scope
// use ; for using two iife

((name)=>{ //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Gyani') 












