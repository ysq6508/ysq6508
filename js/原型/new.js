foo.prototype.b = 2
function foo() {
    
/*  new创建对象的四个步骤
    // 1
    var this = {
        // 2
        a: 1
    }
    // 3
    this.__proto__ = foo.prototype
    // 4
    return this

*/

    this.a = 1
}

let f = new foo()