# ajax (全称async javaScript and xml)
一种异步的创建交互式网页


# readyState  -- ajax的状态
0 -- xhr刚创建    ‘xhr = new XMLHttpRequest()被执行的时候’
1 -- open执行     
2 -- 请求发送出去，响应头被接收
3 -- 响应体正在解析
4 -- 解析完成


# status (http响应状态码)
2xx (成功状态码)
3xx (指示客户端需要采取进一步的操作才能完成请求)
4xx (指出客户端的请求中存在错误，服务器无法处理)
5xx (服务器在处理请求的过程中发生了错误)