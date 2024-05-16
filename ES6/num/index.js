var s = '123'
var n = 123
var f = true
var u = undefined
var nu = null

//新增BigInt 普通数值类型计算最大值只能为2**53,，再多加一也不行，而BigInt可以对此进行计算
var big = 123n 
var n1 = 9007199254740992 + 1
console.log(n1); //仍为9007199254740992
var n2 = 9007199254740992n + 1n
console.log(n2) //9007199254740993n
