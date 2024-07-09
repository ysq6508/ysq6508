const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const main = (ctx) => {
    // ctx.response.type = 'html' // 若浏览器不按html来解析，就告诉浏览器我要给你返回一个html文件
    // const context = fs.readFileSync('./template.html') // 拿到一个Buffer流(十六进制的数据类型)，浏览器遇到Buffer流解析不出，会自动下载
    // const context = fs.readFileSync('./template.html', 'utf-8') // 或不要utf-8，在后面接.toString()
    // ctx.body = context

    // ctx.response.type = 'html'
    // ctx.res.writeHead(200, {'Content-Type': 'text/html'})
    ctx.type = 'html'
    const content = fs.createReadStream('./template.html') // 把文件创建为一个可读流(一个readStream的实例对象，但实质还是十六进制的Buffer流)
    ctx.body = content
}
app.use(main)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});