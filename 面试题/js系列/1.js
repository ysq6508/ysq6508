let arr = [1, 2, 3, 4, 5, 6]

// arr.splice(3, 0, 0) // 3后面插入0  参数：要插入的下标位置、长度、要插入的元素
// arr.splice(2, 1) // 删除3
// console.log(arr)

// let newArr = arr.concat(7)  // 拼接，可加数字或数组，返回新数组
// console.log(newArr)

// let newArr = arr.slice(1, 4)  // 截取出左闭右开那段，返回新数组
// console.log(newArr)

// let res = arr.find((val, i, arr) => {
//     return val < 3  // 返回第一个大于3的元素
// })
// console.log(res); // 1

// arr.forEach((val, i, arr) => {
//     if(i > 2) {
//         return
//     }
//     arr[i] = val * 10
// })
// console.log(arr)

// // Map会返回新数组，且map的回调里一定要写return
// let newArr = arr.map((val, i, arr) => {
//     return val*10
// })

// 两个参数，第一个参数是回调函数（上一次回调的返回值，当前值，当前下标，原数组），第二个参数是给的pre初始值
// 常用来累加
// let sum = arr.reduce((pre, cur, i, arr) => {
//     return pre + cur
// }, 0)
// console.log(sum)

// 是否每一项都满足返回条件
// let res = arr.every((val, i, arr) => {
//     return val > 1
// })
// console.log(res)

// 是否有一项满足返回条件  
// 所以也能用来查找 return val = 3
// let res = arr.some((val, i, arr) => {
//     return val > 3
// })
// console.log(res)

// 过滤，返回满足条件的元素组成的数组
// let res = arr.filter((val, i, arr) => {
//     return val % 2 === 0
// })
// console.log(res)

// console.log(arr.join('-'));

let newArr = arr.toReversed().reverse()
console.log(newArr)