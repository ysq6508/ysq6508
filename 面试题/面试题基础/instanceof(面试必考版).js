// instanceof 的实现原理
function instance(l, r) {
    l = l._proto_

    while (l) {
        if (l === r.prototype) {
            return true
        }
        l = l._proto_
    }
    return false
}

console.log(instance([], Array));
console.log(instance({}, Object));
console.log(instance([], Object));


let a = [] // new Array()

// new 的五个步骤
// function Person() {
//     var  obj = {

//     }
//     Person.call(obj)
//     obj._proto_ = Person.prototype
//     return obj
// }