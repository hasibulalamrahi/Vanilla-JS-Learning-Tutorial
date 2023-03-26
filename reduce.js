
const numArr = [1,2,6,12,15,13,15,11,23,14]
const initSum = 0
// const sum = numArr.reduce((prev,pres)=>{
//     return prev+pres
// },initSum)
// console.log(sum)

var students = [
    {
        id:1603101,
        name:"Rahim",
        semester:"3-1",
        cg:2.87
    },
    {
        id:1603102,
        name:"Karim",
        semester:"3-1",
        cg:3.47
    },
    {
        id:1603103,
        name:"Jamil",
        semester:"3-1",
        cg: 3.15
    },
    {
        id:1603104,
        name:"Shamil",
        semester:"3-1",
        cg: 3.25
    },
    {
        id:1603105,
        name:"Kamil",
        semester:"3-1",
        cg: 2.65
    },
    {
        id:1603106,
        name:"Mamil",
        semester:"3-1",
        cg: 2.90
    }

]

const totalCG = students.reduce((prev,pres)=>{
    return prev+pres.cg
},0)
console.log(totalCG/students.length)