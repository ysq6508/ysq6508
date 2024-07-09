const Koa = require('koa');
const app = new Koa();
const router = require('koa-route');

// 这种路由的方法常被分出去一个文件写，用的时候再引入，很优雅

const logger = (ctx, next) => {
    console.log(`${ctx.url} - ${ctx.method} - ${Date.now()}`);
    next() // 表示执行下一个中间件
}

const main = (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h2>首页</h2>'
}
const about = (ctx) => {
    ctx.type = 'html'
    ctx.body = '<a href="/">关于页面，点击去首页</a>'
}

// app.use(main)
app.use(logger)  // 同理router源码中肯定也存在ifelse判断是否next()
app.use(router.get('/', main)) // 只有请求根路径时main才会生效
app.use(router.get('/about', about)) 
app.use(logger)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});