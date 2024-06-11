// 参数不定
// 柯里化，闭包的使用场景
// es6特性  ①箭头函数 省略function(简约) 
// ②... rest 运算符
// const curry = (fn, ...args) => {
//     console.log(args);  // [ 1, 2 ]
// }

function add1(x, y, z, m) {
    return x + y + z + m;
}

// curry(add1, 1, 2)




// const curry = (fn) => {

const curry = function(fn) {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
curry(add1, 1, 2)
