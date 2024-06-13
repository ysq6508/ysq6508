let a = 1

for(var i = 0; i < 1000; i++) {
    a++
}
console.log(a);

setTimeout(() => {            // 若放在JAVA中多线程执行，a就会由两个线程共同操作，会产生问题
    a++  
    console.log(a);
}, 100);