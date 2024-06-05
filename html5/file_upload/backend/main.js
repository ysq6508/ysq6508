// node的后端开发框架
// node 里的关键字，引入一个模块，模块化的关键字
// 前端早期是没有模块化机制，前端运行一个脚本
// 后端多个文件多个库
// 后端比前端复杂，node模块化系统，叫CommonJS
const express = require('express');
const cors = require('cors');  // 允许跨域的模块
// 后端应用
const app = express();
app.use(cors);
// http 是基于请求响应的简单协议
app.get('/users',(req,res) => {

    res.send('hellouser')
})

app.listen(3000,() => {
    console.log('server is running');
})
