/*
*  对象
*/
let obj = {
    a: 1,
    b: {
        n: 2
    }
}

// let obj2 = Object.create(obj) 
// console.log(obj2.a);// 通过原型链继承到


// let obj2 = {...obj}
// obj.a = 10
// console.log(obj2.a); // 1
// obj.b.n = 20
// console.log(obj2); // 20


// let obj2 = Object.assign({},obj)
// obj.b.n = 20
// console.log(obj2); // 20


/*
*  数组
*/
// let arr = [1, 2, 3, 4, {n: 5}]
// let arr2 =    // [...arr]  // arr.slice()  //[].concat(arr)
// arr[0] = 11
// arr[4].n = 50
// console.log(arr2); // [ 1, 2, 3, 4, { n: 50 } ]


// 浅拷贝的手写实现
function copy(obj) {
    let newObj = {}
    for(let key in obj) {     // for in能遍历到对象上的隐式属性
        if(obj.hasOwnProperty(key)){    // 过滤掉隐式拥有的属性
            newObj[key] = obj[key]
        }
    }
    return newObj
}

let obj2 = copy(obj)
console.log(obj2);