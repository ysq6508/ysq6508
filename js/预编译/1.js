let a = {
    age: 18
}
function test() {

}

// test.name      test.length 函数的参数列表长度
// test.[[scope]]  函数的作用域属性，但我们无法访问，给js引擎访问的  --隐式属性

// test()   -->  AO:{} 一个函数的调用一定会在v8中创建一个执行上下文对象Action Object