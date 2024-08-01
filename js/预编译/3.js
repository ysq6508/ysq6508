// console.log(a);  // 声明提升 undefined
// var a = 10;

// 相当于
// var a
// console.log(a);
// a = 10

// test();
// function test() {
//     console.log(a);  // undefined
//     var a = 20;
//     console.log(a);  // 20
// }

var a = 10;
function fn(a) {
    var a = 2;
    function a() {}
    console.log(a);    // 2
}
fn(3)