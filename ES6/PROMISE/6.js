function a() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('a is ok');
            resolve('a')
        }, 1000)
    })
}

function b() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('b is ok');
           // resolve('b')
           resolve('b')
        }, 500)
    })
}

function c() {
    console.log('c is ok');
}

// race()只认那个最快的
// Promise.race([a(), b()]).then(() => {
//     c()
// })

// all() 认全部 先认快的 再认慢的
Promise.all([a(), b()]).then(() => {
    c()
})

// any() 随便认任意一个 
Promise.any([a(), b()]).then(() => {
    c()
})