// var [a,b] = [1,2]  // 数组的解构
// var {name, age} = {name: 'kobe', age: 39}   // 对象的解构

// // 解构的原理
// const colors = ['red','green','blue','pink']
// const [a,b,c,d] = colors
// a = colors[Symbol.iterator]().next().value



/* 字节面试题：使var [a,b] = {a: 1, b: 2}成立 */

Object.prototype[Symbol.iterator] = function() {
    return Object.values(this)[Symbol.iterator]()
}

var [a,b] = {a: 1, b: 2}

console.log(a,b);