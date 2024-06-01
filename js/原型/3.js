
// Car.prototype.produce = 'xiaomi'
// function Car() {
//     this.name = 'su7'
// }

// let car = new Car()

// /*
// car.name = '保时捷'
// car.produce = 'huawei'  // 根本不是修改原型上的produce,而是额外加的一个produce属性，导致原型上的produce被覆盖
// console.log(car);  // Car { name: '保时捷', produce: 'huawei' }
// */

// // car.nickname = '小粉'
// // console.log(car);

// // 给原型增加属性
// Car.prototype.nickname = '小粉'
// console.log(car.nickname);

// delete car.nickname
// console.log(car.nickname); // 小粉

// delete Car.prototype.nickname
// console.log(car.nickname);  // undefined


function Bus() {}

Car.prototype = {
    constructor: Bus
}
function Car() {
    
}

let car = new Car()
console.log(car.constructor);   // [Function: Car] 记录该对象是由谁来创建的
