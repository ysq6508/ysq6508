- Vue 单页应用框架
    整个项目不管多庞大，都只有一个html文件
    对比Javaweb是切换多个html，Vue是切换多个div
        当我想显示首页页面时，首页对应的div生效被，其他页面对应的div失效，
        反之其他页面对应的div生效，首页对应的div失效


- 目录解释
1. .vscode:  VSCode编辑器自动生成的一个文件，没什么用
2. node_modules:  整个项目运行所需要的第三方依赖包
3. public:  就存放了一个vue的小图标
4. src:  专门用来开发项目的地方，我们所有的代码都写在src里
5. .gitignore:  git忽略文件，用来告诉git哪些文件不需要被git管理
6. package.json:  项目配置文件（一个项目的"说明书"），里面包含了项目的一些基本信息
    - dependencies: 开发环境下的依赖
    - devDependencies: 运行环境的依赖
7. package-lock.json:  项目依赖包版本信息、来源地址，一般不用管
    


- Local: http://localhost:5173/
    项目被运行在了这个地址，出现这个页面说明项目已经成功运行了