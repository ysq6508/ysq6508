let obj = {
    a: 1,
    // b: foo
}

function foo() {
    console.log(this.a)
}
foo.call(obj)
// obj.b()

Function.prototype.call2 = function (context) {
    context.fn = this // obj = { a: 1, fn: foo }
    context.fn()
}
foo.call2(obj)