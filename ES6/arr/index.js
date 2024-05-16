var arr1 = [1,4,3,6,8,4,0]
var arr2 = [1,4,3,6,8,4,0]

//升序
//回调函数中赋予两个参数
arr1.sort((a,b) => {
    return a - b
})

//降序
// arr2.sort((a,b) => {
//     return b - a
// })
//相当于
arr2.sort((a,b) => b - a ) //省略花括号相当于省略return（如果代码只有一行）

console.log(arr2);