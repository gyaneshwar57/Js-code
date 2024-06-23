const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)  //0: intial value of accumulator
console.log(myTotal);

const shopping=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const priceTopay=shopping.reduce((acc, item)=>acc+item.price,0)

console.log(priceTopay);
