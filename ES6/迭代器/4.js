function forOf(obj,cb) {
    if(obj[Symbol.iterator]){
        throw new TypeError(obj + 'must be iterable')
    }

    let iterator = obj[Symbol.iterator]()
    let res = iterator.next()
    while(!res.done) {
        cb(res.value)
        res = iterator.next()
    }

}

var colors = ['red','green','blue','pink']
forOf(colors,function(value) {
    console.log(value);
})