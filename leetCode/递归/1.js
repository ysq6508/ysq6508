//阶乘 5!

// 对这个问题来说，相比起来for循环性能更好，因为递归的栈空间会不断被堆积
// function mul(n) {
//     let res = 1
//     for(let i = 2;i <= n;i++){
//         res *= i
//     }
//     return res
// }

function mul(n) {
    if(n === 1){
        return 1;
    }
    return n*mul(n-1);
}
 console.log(mul(5));