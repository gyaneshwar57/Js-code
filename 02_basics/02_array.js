const marvel_heros=["thor","ironman","spider"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)// ["thor","ironman","spider",["superman","flash","batman"]]
//console.log(marvel_heros[3][1]);// flash


const allHeros=marvel_heros.concat(dc_heros)// ["thor","ironman","spider","superman","flash","batman"]

//console.log(allHeros);
 
// spread elemnts
const al_new_heros=[...marvel_heros, ...dc_heros]  //["thor","ironman","spider","superman","flash","batman"]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Gyani"));//false
console.log(Array.from("Gyani"));// ["g","y","a","n","i"]
console.log(Array.from({name:"Gyani"}));// [] interesting beacuse it is unable to change the keys

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));//[100,200,300]







