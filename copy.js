const array1= [1,5,2,4,6,12,17,9,24,29]
// const copiedArr = Array.from(array1)
// console.log(copiedArr)
// const copiedArr = {...array1}
const copiedArr = JSON.parse(JSON.stringify(array1))
console.log(copiedArr)