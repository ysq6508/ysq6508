/*
let arr = ['a','b','c','d']
let [a,b,c,d] = arr
console.log(a,b,c,d);
*/

// let arr = ['a','b',['c','d']]
// let [a,b,[c,d]] = arr
// console.log(a,b,c,d);

// let arr = [1,2,3,4,5]
// let [a,b] = arr
// console.log(a,b);

/*
let arr = [1,2,3,4,5]
let [a,b,...c] = arr //...相当于剩下的元素全部给c
console.log(c);
*/

/*
let arr = [1,2,3,4,5,6]
// let [a,b,c,d,e,f] = arr
let [a,b,c,d,e,f = 100] = arr
console.log(f);
*/

/*
let obj = {
    a: 1,
    b: 2,
    c: {
        n: 3
    }
}

let {a,b,c,c: {n}} = obj 
*/ 

/*
let user = {
    username: '小晏',
    age: 18
}
let {username,age} = user
// 上面那条语句相当于 let {username: username,age: age} = user，key和value相同时省略value不写

console.log(usename,age);
*/

let str = 'Hello'
let [a,b,c,...d] = str

console.log(a,b,c,d);


