var numArray = [4,2,6,3,12,11,17,23,20,25,31,27,80]
//filter
// const evenNum = numArray.filter((num)=>{
//     if(num%2==0) return num
// })
//map
// const evenNumMap = numArray.map((num)=>{
//     if(num%2==0) return num
// })
// console.log("filter",evenNum)
// console.log("map",evenNumMap)

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
    },

]

const papi = students.filter((student)=>{
    if(student.cg < 3.00) return student.id
})

const purnoBaan = students.filter((student)=>{
    if(student.cg >= 3.00) return student
})
console.log("Log Khor",papi)
console.log("Future",purnoBaan)
