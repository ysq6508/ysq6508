const Koa = require('koa');
const app = new Koa();

const main = (ctx) => {          // koa将两个对象合二为一
    // console.log(ctx);

    // console.log(ctx.request); // 与原生node的res是一样的

    // ctx.res.end('hello')
    // ctx.response.body = 'hello Koa'
    // ctx.body = 'hello Koa!'    

    // console.log(ctx.req.url);
    // console.log(ctx.request.url);
    console.log(ctx.url);
   
}
app.use(main)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});