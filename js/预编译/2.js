function a(){
    function b(){
        var b = 22
        console.log(a)
    }
    var a = 111
    b()
}
var glob = 100
a()

//  a的定义   a.[[scope]]  ---->  0: GO{}   // 在a的作用域中一定可以访问GO
//  a的执行   a.[[scope]]  ---->  0: aAO{}  1: GO{}

// 作用域链