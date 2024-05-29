let data = {}

function a() {
    setTimeout(() => {    // 接口请求
        data = {name: 'ysq'}
        b()
    },1000)
}

function b() {
    console.log(data.name + '大美女');
}

a()
