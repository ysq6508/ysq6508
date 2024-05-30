class Person {
    constructor() {
        this.name = 'Tom'  // 会被添加到实例上
    }
    // 静态方法 只有类自己能访问
    static getInstance() {    // 相当于在类的原型上添加了一个方法
        if(!Person.instance){
            Person.instance = new Person()
        }
        return Person.instance
    }
}

let p1 = Person.getInstance()
let p2 = Person.getInstance()