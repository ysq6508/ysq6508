# Transformers AI 项目
- react
    了解react 一周可上手，学过，也写了这个项目
- worker.js
    js 对于界面操作外的复杂计算(AI, 压缩)，html5 提供了web worker子线程来单独通过消息机制完成任务
    - 执行太久 分钟为单位
        主线程不可能等这么久，无法交互 不属于event loop，浏览器提供的独立线程机制

- LLM 下载太慢了，前端提供体验反馈， 下载中...

- Percentage 组件
    - AI 用户体验  基于prompt工作 -> 要给大模型思考的时间
    - 需要两个参数：text模型文件、percentage进度条  使用es6的解构
    - ?? es6 的三元运算符快捷方式，阮一峰的es6手册
    - 进度条只显示两位小数 -> 包装类的概念

    面试官要听亮点/难点，细节和场景

- 介绍项目
    我的项目全面采用vue3 es6的风格，setup语法比选项式API更简洁，更好维护，不再受类式约束
    // 进度条 相关状态放在一起 -> 函数式组件的优势
    // vue2 选项式API 状态在data() { return {} }中  方法放在method  
    // 还有生命周期... computed 逻辑因为类的结构，分散开来像异地恋一样
    // setup，函数式，很自由，可以按逻辑(响应式状态 + 方法 + 生命周期写到一起)
    举个例子，进度条相关的逻辑 (响应式，生命周期等)和web worker的逻辑就分开来了，
    每个逻辑在一起，不受类的形式约束，更好维护

- web worker 多线程
- 面向对象封装和单例模式
    import { pipeline } from ''
    - pipeline('translate', model)
    - AI 工作封装起来 pipeline
        transformers.js nlp 库 几十种常见的nlp任务 pipeline 派出你要的
        哪个nlp任务 task model
    - pipeline 很漫长，耗内存 上单例模式
        只实例化一次的类
        静态方法，不需要new
        MyTranslationPipeline.getInstance()
    - initiate 多个模型文件要下载
    - ready 

- 这个基于transformer.js的React AI项目，实现了类似百度/谷歌翻译的功能
    前端独立完成 React 组件 + AI 翻译功能，这就是AI的强大，来自Huggingface.
    - react 函数式组件 + hooks 函数 封装了Pogress 和 LanguageSelector组件
    - web workers 多线程来打理AI任务
        - addEventListener('message', (e) => { } )
        - postMessage 消息机制
    - 封装了 MyTranslationPipeline单例类
    - pipeline
        - initate/progress/ready/update/complete 状态
            打理进度条展示LLM下载和加载过程
        - 翻译的功能
            pipe('translate', text)...

- 你为什么要学习AI 
    AI带来了前端用户体验的提升，我在关注OpenAI等大模型，coze 低代码AI应用及api调用，
    关注到 transformers.js 前端库，这个项目是学习项目，将react 和 AI nlp 任务结合