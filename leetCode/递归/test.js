//数组的合并
/*  1、


let arr = [1,2]
let arr2 = [3,4]

/*
let allArr = arr.concat(arr2)  //返回一个新数组,原数组arr不会变
console.log(allArr,arr); // [ 1, 2, 3, 4 ] [ 1, 2 ]

let allArr = [...arr,...arr2]
console.log(allArr);  // [ 1, 2, 3, 4 ]
*/


//解构
/*
let [a,b] = arr
console.log(a,b);


let arr3 = [1,2,3,4,5,6,7,8]
let [a,b,...c] = arr3
console.log(a,b,c); // 1 2 [ 3, 4, 5, 6, 7, 8 ]
console.log(...arr3); // 1 2 3 4 5 6 7 8

*/




/*  2、
let arr = [1,2,3,4,5,6,7]

// reduce通常用来做累加
// reduce接受两个参数，第一个是回调函数,第二个是pre初始值
let sum = arr.reduce(function (pre,item,index,arr) {  //pre是上一次reduce的执行结果，第一次reduce的pre就是传进去的值0
    return pre + item
},0)

console.log(sum);

*/



let arr = [1,2,3,4,5,6,7]

let res = arr.some((item) => {
    return item > 5
})

console.log(res); // true