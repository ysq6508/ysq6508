// 只有一句代码 返回值 本身
const curry = (fn, ...args) => 
    // console.log(args);
    // console.log(args.length, fn.length); // 1 4
    args.length >= fn.length
    ? fn(...args)
    : (...args2) => curry(fn, ...args, ...args2);
    // return fn(args);

// 原函数
// 柯里化，慢慢收集
const add = (x, y, z, m) => {
    return x + y + z + m;
}

console.log(curry(add, 1)(2)(3)(4));