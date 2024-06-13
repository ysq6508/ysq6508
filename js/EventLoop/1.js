let a = 1
console.log(a);

setTimeout(() => {
    let b = 2
    console.log(b); // 2
    a++
    setTimeout(() =>{
        b++
    },2000)
    console.log(b); // 2
}, 1000);

console.log(a);  // 1

function bar() {
    console.log(bar);
}
bar()