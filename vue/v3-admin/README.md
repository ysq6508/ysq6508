# Vue Element Plus 后台管理系统

- vue-router
    - RouteRecordRaw 类型
        meta 可选类型 通常用于存储与路由相关的元数据，比如页面标题title、是否需要登录权限needsLogin role
    - NProgress
        beforeEach start
        afterEach done

- 按需加载 Element Plus
- elmentPlus 图标字体库
    - elementPlus 组件库
    - 需要自己另外导入而不是提前自动导入
        - 企业级，有自己的设计师，图标要用自己的，所以没必要用ElementPlus的，更小

- es6 模块化语法点
    - import 的本意是将依赖模块中的相应功能引入当前模块，并在当前模块取个代表名字
    - export + export default
    - * as语法：所有默认和命名导出
    - import XXX, {x, y, z} ：前者是默认值，后者按需
    - import XX from '' 最简单
    - import type 类型定义引入 用ts 开发的时候

    
- es6 的代码可读性
    - for of
    - 解构
    - Object.entries() 对象变为二维数组，且每项都是key, value，在一次性批量导入图标库中很方便

- ts 功能点
    - type 和 interface 都要到位
