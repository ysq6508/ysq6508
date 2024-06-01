// var obj = {}
// var arr = []
// var date = new Date() // js内置函数，得到一个时间对象

// Person.prototype  函数的原型 {} 祖先

Person.prototype.lastName = 'yan'  // 往原型这个对象上添加属性
Person.prototype.say = function() {
    console.log('hello');
}
function Person() {
    this.name = 'shuqing'
}

Person.length //获取函数接收参数的个数

let p = new Person()
console.log(p); // Person { name: 'shuqing' }
console.log(p.lastName); // yan
p.say() // hello
