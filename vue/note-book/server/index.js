const Koa = require('koa');
const app = new Koa()
const cors = require('@koa/cors') // 解决跨域问题
const {bodyParser} = require('@koa/bodyparser') // 解决koa无法直接解析出post请求的请求体数据的问题

const userRouter = require('./router/user.js')
const noteRouter = require('./router/note.js')

// const main = (ctx) => {
//     // if(ctx.url == '/user/login')
// }
// app.use(main)

app.use(cors()) // 告诉浏览器不要破坏我的响应
app.use(bodyParser())  // 辅助koa解析PPOST传递的参数

app.use(userRouter.routes(), userRouter.allowedMethods()); 
app.use(noteRouter.routes(), noteRouter.allowedMethods());

app.listen(3000,() => {
    console.log('项目已启动');
    
})