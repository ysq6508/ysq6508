class Person {
    constructor() {
        this.name = 'Tom'  // 会被添加到实例上
    }
    // 静态方法 只有类自己能访问
    static getInstance() {    // 相当于在类的原型上添加了一个方法
        let instance = null;
        return function () {
            if(!instance){
                instance = new Person()
            }
            return instance
        }
    }
}

const simple = Person.getInstance()
let p1 = simple()
let p2 = simple()