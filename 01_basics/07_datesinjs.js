//dates

let myDate=new Date()
console.log(myDate.toString())//Mon jun 01 2024 12:05:19 GMT+0000
console.log(myDate.toDateString())//Mon jun 01 2024
console.log(myDate.toLocaleString())// 1/6/2024, 12:05:19 pm

//let myCreateDate=new Date(2023,0,23)//  year,month,day
//let myCreateDate=new Date(2023,0,23,5,3)// 1/23/2024 5:03:00 AM  for .toLocaleString
//console.log(myCreateDate.toDateString());// mon Jan 23 2023

let myCreateDate= new Date("01-14-2023")// 1/14/2023 12:00:00 AM
let myTimeStamp=Date.now()

//console.log(myTimeStamp);           // 1677672645299
//console.log(myCreateDate.getTime());// 1673654400000
//console.log(math.floor(Date.now()/1000)) //167762733 in seconds

let newDate=new Date()
console.log(newDate.getMonth)// 2

//`${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday: "long",
})