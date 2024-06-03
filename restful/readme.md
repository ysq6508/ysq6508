# 全栈必考 restful

- 为什么要做一个网站？
    老板娘 介绍和展示自己的产品和内容
    技术 网站的概念 一切皆资源
        resource 向外暴露 restful


- db.json 
    - 存放json数据
    - json-server 后端数据   （用于开发和测试阶段模拟后端数据交互）
    - 资源

- db.json 资源文件
    - 通过 http 服务 来访问
    - json-server
        http://localhost:3000/users    restful 设计原则
        http://localhost:3000/posts 


## restful 网站开发世界
    - db.json 资源  json 文件的方式
        - posts
        - users
    - restful 定义了资源的提供方式
        名词 + 动词  组成资源暴露的方式
        资源 名词 posts
        - Method   GET方式对资源进行读取
        - url      http://localhost:3000/posts

    HTTP动作
    GET 读操作 详情  http://localhost:3000/posts/:id   url中动态部分前加一个冒号来表示动态参数
    POST 写操作（新增）  http://localhost:3000/posts
    修改 一个用户  http://localhost:3000/users/7

- postman 是什么？
    http 请求的模拟工具

-  http 协议
    POST   http://localhost:3000/users   {id: 4}  {id:4}201
    http 协议是基于请求响应的简单协议
    - 请求
        请求行  http Method[GET|POST|PATCH|PUT|DELETE] + URL（统一资源定位符）
                    （PATCH部分修改 PUT全部修改）
        请求头 Cookie
        请求体  表单数据

    - 响应
        响应头  http 状态码
        响应体  json数据
