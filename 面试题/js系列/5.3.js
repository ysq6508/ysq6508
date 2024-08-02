let obj = {
    a: 1,
    b: {
        n: 2
    },
}

const obj2 = structuredClone(obj)
obj.b.n = 20

console.log(obj2);  // { a: 1, b: { n: 2 } }