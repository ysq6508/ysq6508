# AI全栈项目

## 前后端联调

- 前端
    - 利用bootstrap css框架快速完成界面搭建
    - container 框架
    - row 一行 块级12列
    - col-md-6 列宽，宽度为6例
    - col-md-offset-3 3个单位的偏移量
    Layout 布局

    - table语义化
        table
            thead
                tr
                    th
            tbody
                tr
                    td

    - 需要动态获取数据 DOM 编程

    - tbody

    fetch

- 后端
    提供数据 npm i node package management
    json-server 帮助把jsaon文件快速变成后端数据
    package 
    - json 是对象字面量，同时也是前后端数据格式
    - npm init -y 初始化为后端
    - npm i json-server
    - json-server 是一个package
    - npm run dev dev script-name 启动一个脚本程序
        package.json 项目描述文件
        scripts 

    - 前后端是分离 
        html js fetch 页面动态
        json-server 数据接口
        端口都不一样 3000 后端服务 5173 前端
    - js 一统江湖 (即前后端都用js)
    - 把界面做到小企业级别，后端使用轻量级的json-server
    - 这个后端方案是前端要会的
        用json文件伪造下数据，到时候只用把localhost改成后端给的线上地址就可以了

- AI
    openai的能力
- 走向AI Native  AI全栈工程师
- 请问有哪些同学是老乡？ 这些同学来自哪个省份

- form 表单
    - 标签使用到位  无障碍访问
        input name 提交数据的名字
        label(for) + input(id) 为了盲人 (读屏器)
    - html5 版本中增强了威力
        placeholder
    - 表单是用来提交数据的
       dom form value + ajax 手动提交