function foo() {
    var a = 1
    let b = 2
    {
        let b = 3
        var c = 4
        let d = 5
        console.log(a);  // 1   var变量只有全局作用域和函数作用域，没有针对块级的作用域
        console.log(b);  // 3   而let有 
    }
    console.log(b);  // 2
    console.log(c);  // 4
    console.log(d);  // error
}