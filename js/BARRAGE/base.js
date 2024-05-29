/*
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(){      // Person的原型上添加方法
    console.log(this.name + ' say hello');
}

Person.eat = function(){      // Person上添加方法，p访问不到eat方法 
    console.log(this.name + ' eat food');
}

Person.prototype.sex = 'female'       // Person的原型上添加属性

Person.prototype.addAge = function(){      
    this.age++;
}

let p = new Person('小曹',18);
p.addAge();   // Person { name: '小曹', age: 19 }
console.log(p);
console.log(p.sex);  // female
*/




class Person{
//    count = 1   // 等同于在构造器中放 this.count = 1， 注意要放在类的最顶端
    #count = 1    // 私有  只能在类里面生效，比如它在自己的run方法里可用

    //构造器
    // constructor(name,age){
    //     this.name = name;
    //     this.age = age;
    // }

    run() {
        console.log(this.name + ' is running ' + this.#count);
    }

     static eat() {      // 添加static后，只能被类访问，实例对象访问不到eat方法
        console.log(this.name + ' eat food');
    }

    get sex() {         // 加get关键字 属性
        return 'female';
    }

    set addAge(val) {    // 加set关键字 直接把函数名当属性来用
        this.age = val
    }
}
let p = new Person('笑笑',18)
console.log(typeof Person); // 这个类本质上还是个function
p.run();
console.log(p.sex);
p.addAge = 20
console.log(p);
// console.log(p.count);
