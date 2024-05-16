/* 1、
// console.log(myName);
let myName = '美女'  //let声明的变量不能提升，也不会出现在window里
if(1){
    console.log(myName); //块级作用域里有myName，就不会去访问全局的myName
    let myName = '笑笑'
}
*/


/* 2、 报错 不能改变const基本类型的值 Assignment to constant variable.
const abc = 123
abc = 234
*/

/* 2、
const obj = { //obj为引用类型，执行上下文中obj的值为obj的地址，const紧盯的是obj的地址
    age: 18
}
obj.age = 20 //age可以被修改，因为并没有改变obj的地址
console.log(obj);
*/