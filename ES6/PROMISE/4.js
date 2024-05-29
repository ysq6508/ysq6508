function xq() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log('刘笑笑相亲了');
        resolve('相亲成功')     // 成功
    },2000)
    })
}

function marry() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log('刘笑笑结婚了');
        resolve('新婚快乐！')
    },1000)
    })
}

function baby() {
    console.log('笑儿出生了');
}

/*
xq().then(() => {
    marry().then(() => {
        baby()
    })
})
*/


xq()
.then((res) => {
    console.log(res);
    return marry()
})
.then((res2) => {
    console.log(res2);
    baby()
})
