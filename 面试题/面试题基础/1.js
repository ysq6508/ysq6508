// let a = 1
// let b = 1
// console.log(a === b);

// let a = Symbol(1)
// let b = Symbol(1)
// console.log(a === b);

// let a = 1 // new Number(1)
// a.b = 2 // new Number(1).b = 2
// console.log(a.b); // undefined    delete new Number(1).b

// let a = {
//     n: 1
// }

// const a = []
// a = []
// console.log(a); // error  若a是引用类型，则不能修改地址；若a是原始类型，则不能修改值

/*
function test(person) {
    person.age = 26
    person = {
        name: 'test',
        age:30
    }
    return person;
}

const p1 = {
    name: 'John',
    age: 25
}
const p2 = test(p1)
console.log(p1); // { name: 'John', age: 26 }
console.log(p2); // { name: 'test', age: 30 }
*/

function foo(x, y) {
    x = {
        n: 1
    }
    y.n = 2
}

const obj = { // 是obj不能改变地址，而不是指向的对象本身不能改变
    n: 1,
    bar: {
        n: 1
    }
}
foo(obj, obj.bar)
console.log(obj); // { n: 1, bar: { n: 2 } }