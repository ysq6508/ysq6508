/*
1、变量提升test

showName() //打印出了那句话 (还没定义，应该报错，但没报错)
console.log(myName); //undefined (还没定义，应该报错，但没报错)
//函数或变量在定义之前能执行，而在没有定义的变量就会报错

var myName = '晴晴'

function showName() {
    console.log('函数showName被执行');
}
*/

//完整的函数声明，未赋值
function foo() {
    console.log('foo');
}
//函数表达式 声明+赋值
var bar = function() {
    console.log('bar');
}