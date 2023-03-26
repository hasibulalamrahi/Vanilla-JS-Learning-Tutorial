//  console.log("Welcome to array-methods - 3rd phase")
//  console.log('Date - 26/3/2023')

//array-find 

var arrayr = [1,5,2,4,6,12,17,9,24,29]
var numToFind = 9
// const response = arrayr.find((num)=>{
//     if(num==numToFind) return num
// })
// console.log(response)

var users= [
    {
        id:1201,
        email:"nafis@gmail.com",
        hash: "sfdsadfadadadt02r32i43qre"
    },
    {
        id:1201,
        email:"monmoy123@gmail.com",
        hash: "sfdsadfadadadt02r32i43sww"
    },
    {
        id:1201,
        email:"srabontideb23@gmail.com",
        hash: "eewsadfadadadt02r32i43qre"
    },
    {
        id:1201,
        email:"bobmarleynowhere@gmail.com",
        hash: "ssewsadfadadadt02r32i43qre"
    },
    {
        id:1201,
        email:"yourcrAnin@gmail.com",
        hash: "sbdradfadadadt02r32i43qre"
    }
]

const userTofind = "hasib1234@gmail.com"

const response = users.find((x)=>{
    if(x.email==userTofind) return x

})
response ? console.log(response) : console.log("user not found")
