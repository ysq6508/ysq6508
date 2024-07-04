const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const data = {
    id: 1,
    name: '刘笑笑',
    age: 18
}

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    if(reqUrl.pathname === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'}) // 响应头
        res.end('<h2>hhh<h2>'); // 响应给客户端
    } else if(reqUrl.pathname === '/user'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    } else if(reqUrl.method = 'POST' && reqUrl.pathname === '/login') {
        // 拿到前端传递的参数
        // 去数据库里面校验该参数合法性
        res.end('登陆成功');
    } else {
        // res.end('404');
        const _url = path.resolve(__dirname, 'assets/404.html')
        const content = fs.readFileSync(_url, {encoding: 'utf-8'})
        // console.log(content);
        // res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content); // 响应给客户端
    }
    
})

server.listen(3000, () => {
    console.log('server is running on port 3000');
})