// 数组的扁平化 (面试常问)
const arr = [1,2,[3,4,[5]]]

/*

const newArr =  arr.flat()    // 相当于 arr.flat(1)
console.log(newArr); // [ 1, 2, 3, 4, [ 5 ] ]

//降维两次
const newArr =  arr.flat(2)
console.log(newArr); // [ 1, 2, 3, 4, 5 ]

//降维无穷次
const newArr =  arr.flat(Infinity)
console.log(newArr);

*/


//递归方法
function flatten(arr) {
    let res = []
    for(let i = 0;i < arr.length;i++){
        if(Array.isArray(arr[i])){                // ps：或用arr[i] instanceof Array，typeof只能判断原始类型
           res = res.concat(flatten(arr[i]))      // 或res = [...res,...flatten(arr[i])]
        }else{
            res.push(arr[i])
        }
    }
    return res;
}

console.log(flatten(arr));