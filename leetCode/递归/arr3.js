const arr = [1,2,[3,4,[5]]]

let str = arr.toString()
/*
let newArr = str.split(',')
console.log(newArr); // [ '1', '2', '3', '4', '5' ]
*/

const newArr = str.split(',').map((item) => {
    return Number(item)
})
console.log(newArr);