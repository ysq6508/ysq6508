// let a = 123
// console.log(typeof(a)); // number
// let b = '123'
// console.log(typeof(b)); // string
// let c = undefined
// console.log(typeof(c)); // undefined
// let d = null
// console.log(typeof(d)); // object

// console.log(a instanceof Number); // false

let a = 123
let b = {}
console.log(Object.prototype.toString.call(a)); // [object Number]
console.log(Object.prototype.toString.call(b)); // [object Object]