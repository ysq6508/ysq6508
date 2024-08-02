const obj = {
    a: 1,
    b: {
        n: 2
    }
}

// 递归
function deepClone(obj) {
    const newObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                newObj[key] = deepClone(obj[key])
            }else{
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

const obj2 = deepClone(obj)
obj.b.n = 20
console.log(obj2);