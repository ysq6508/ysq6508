var s = 1
var s2 = '1'
console.log(s == s2); // true 用两个等号判断两个值是否相等时，v8会隐式转换将两个值变成同一类型
console.log(s === s2) // false 用三个等号判断，不会转换，类型不同就是不相等

var obj = {}
var obj2 = {}
console.log(obj == obj2); // false 两个对象的地址不同
console.log(obj === obj2); // false

var a = Symbol(123)
var a2 = Symbol(123)
console.log(a == a2); // false 

