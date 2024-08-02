const obj = {
    a: 1,
    b: {
        n: 2
    }
}

// JS 的管道通讯：提供一个端口进行发送另一个接收
function deepClone(obj) {
    return new Promise((resolve) => {
        const { port1, port2} = new MessageChannel();
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            // console.log(msg.data); // { a: 1, b: { n: 2 } }
            // return msg.data
            resolve(msg.data)
        }
    })
    
}
deepClone(obj).then(res => {
    console.log(res);
})
