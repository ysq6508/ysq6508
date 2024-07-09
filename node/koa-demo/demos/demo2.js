const Koa = require('koa');
const app = new Koa();

const main = (ctx) => {
    if (ctx.request.header.accept === 'xml') {
        ctx.body = '<data>helloworld<data/>'
    } else if(ctx.request.accepts('html')){  // 但凡request.head.accept里有跟html挨边的
        ctx.body = '<p>helloworld</p>'
    }
}
app.use(main)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});