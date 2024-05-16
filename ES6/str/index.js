let str = '2357078540@qq.com'

console.log(str.includes('@qq.com')); //true
if(str.includes('@qq.com')){
    console.log('这是一个QQ邮箱');
}

let str2 = '2357078540@qq.com123'
console.log(str2.endsWith('@qq.com'));//false