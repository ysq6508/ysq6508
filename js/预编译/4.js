function fn(a) {
    console.log(a);  // f
    var a = 123
    console.log(a);  // 123
    function a() {}
    console.log(a);  // 123
    // 函数表达式
    var b = function() {}  
    console.log(b);  // function() {}
    // 函数声明
    function c() {} 
    var c = a
    console.log(c);  // 123
}
fn(1)