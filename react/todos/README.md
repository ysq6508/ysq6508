# Todos App

- 先搭建好组件树  组件思想 
    - 开发、交流、互动、汇报的基本单位
    - DOM树太微观，不好衡量
    - 组件树很好表达页面的构成和功能
    - 根组件部署一切 react/vue
    - 父子组件
    - 容器组件
        搭配循环列表加上两个组件

- 性能优化
    - 页面的加载速度
        - 生成DOM树
        - 渲染CSSOM树
        - script 放到底部去
        - DOM + CSSOM = 渲染树
        - 布局树 （渲染树 + 盒子模型 + bfc + zIndex）
        - GPU 去绘制页面 像素 静态页面
    
    - css 选择器
        * ， 标签， 从右到左匹配的

- 数据流设计

- 响应式开发

- es6 适合大型企业级项目开发 支持传统面向对象
    - 使用了类式组件： class声明一个类  class App extends Component
    <App/>
    - render() 覆盖 Component 抽象的 render 方法提供JSX

- vue 与 react区别
    - vue 有各种指令
    - react 不支持双向绑定
        - 表单受控组件 this.state.inputText控制
        - 单向的数据绑定 value={}
        - onChange 事件