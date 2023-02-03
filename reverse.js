// var a ="This is Boy"
// console.log(a.split("").reverse().join("").split(" ").reverse().join(" "))

var a=[1,2,3,4,5,6]
// let sum=0;    //map
// b.map((e)=>{return sum+=e})
// console.log(sum)

let s=a.reduce((a,b)=>{
    return a+b
})
console.log(s)