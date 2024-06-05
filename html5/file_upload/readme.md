# html5 有哪些特性
- 语义化标签
    article header footer section ...
- video audio canvas
- 拖拽
- localStorage 存储
- orm表单增强对象 placeholder
- file对象

- 文件上传的两种用户体验
    1. 普通input type file 文件上传
        拿到change事件 event.target.files
    2. 拖拽式上传 新颖的用户体验
        drop event.preventDefault()
        event.dataTransfer.files
    3. 封装
        uploadFile 是一样的
        函数要和事件分离
        抽离共同点 files
    4. File 对象是HTML5新增的，它表示一个文件，可以获取文件名、大小、类型、修改时间等信息
        File对象可以帮助我们立马在本地处理文件，比如预览图片、上传文件等，上传到远程服务器
        File对象帮助JS用户跳出了浏览器的束缚，可以访问系统的文件内容
        先显示缩略图，反馈给用户
- 好的用户体验是不让用户犯错
    用户永远是对的，用户永远可以是小白

- cors 跨域 （面试常考！！）
    - JS 有同源策略（一个安全机制）
    - 127.0.0.1:5177 和 127.0.0.1:3000 都是本地
        但是端口不一样，也是跨域
