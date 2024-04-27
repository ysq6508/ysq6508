let str  = 'hello world'

let len = str.length

// console.log(str.charAt(6));
// console.log(str[6]);
// let newStr = str + ' Tom'

// //字符串没有一个方法能直接删除掉某个元素,为达该目的：1、字符串转数组，数组利用特定方法删掉指定元素后，再转为字符串
// let strArr = str.split('') //字符串变成数组
// strArr.splice(1,1) //删掉指定元素
// console.log(strArr.join('')); //以''为连接再转为字符串

// //2、手搓一个
// function spliceStr(str,index){
//     let  newStr = ''
//     for(let i = 0;i < str.length;i++){
//         if(i !== index){
//             newStr += str[i]
//         }
//     }
//     return newStr
// }
// console.log(spliceStr(str,1));

console.log(str.slice(1,3)); //切下下标区间[1,3)的元素，原字符串不受影响










// let arr = ['a','b','c','d']
// arr.splice(1,1) //splice方法只能用于数组，返回值是被删掉的元素
// console.log(arr)