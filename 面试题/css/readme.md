# 1. 说说你对盒子模型的理解
- 是什么
浏览器在渲染页面时，会将容器渲染成包含content、padding、border、margin四部分的矩形

- 特点
1. 标准盒模型：Chrome认为width只是content宽度
2. IE盒模型：IE认为width是content宽度+padding

- 切换方法
box-sizing: border-box || content-box;

# css选择器有哪些？优先级？
1. id
2. 类名
3. 标签
4. 后代选择器
5. 子集选择器
6. 兄弟选择器
7. 群组选择器
important > 行内 > id > class > (后代选择器,子集选择器,兄弟选择器) > 标签
8. 属性选择器
9. 伪类选择器
10. 伪元素选择器

# 3. 说说 em、rem、vw、vh、px 的区别
- 是什么
css3之前，px、em、%         css3创建了新的单位 rem、vw、vh，为了在不同的场景下做更好的适配

- 区别：
    1. 绝对单位：px
    2. 相对单位：em 相对于父容器的字体大小，rem 相对于根元素（html）的字体大小

# 4. css中有哪些方式可以隐藏一个元素，区别？
1. display:none         无文档流，不触发事件，会回流重绘
2. width:0;height:0;    有文档流，不触发事件，会回流重绘
3. opacity:0            有文档流，触发事件，不会回流，会重绘
4. visibility:hidden    有文档流，不触发事件，不会回流，会重绘
5. clip-path:           有文档流，不触发事件，不会回流，会重绘

# 5. 谈谈你对bfc的理解
- 是什么
    BFC叫做块级格式化上下文，是一种特殊的容器，拥有一套自己的渲染规则

- 规则：
    1. BFC容器内部子容器依旧遵从块级、行内块、行内的排列
    2. BFC容器在计算高度时，会将浮动元素的高度也计算在内  -> 清除浮动
    3. BFC容器的margin-top   不会跟子容器的margin-top重叠

- 触发条件
    overflow: hidden || xxx
    float: right || left
    display: table-xxx || inline-block || flex || grid
    position: absolute || fixed

- 应用场景
    1. 清除浮动
    2. 防止margin重叠

# 6. 元素水平垂直居中的方法有哪些
- 已知父子容器宽高: margin

- 未知父容器,已知子容器: margin + calc  ||  position + margin负值  ||  position + margin: auto

- 未知父子容器宽高: position + transform  ||  flex + align-items + justify-content  
                ||  table-cell + vertical-align + text-align(子容器非块级)

# 7. 说说flexbox
- 是什么
    弹性布局是css中一种简便高效的布局方式，弹性容器中有主轴(默认为X轴)和交叉轴(Y轴)的概念，主轴方向也可以修改，子容器默认在主轴上排列

- 属性：
父容器上： flex-direction  flex-wrap flex-flow align-content
子容器上:  order：决定了项目在容器中的显示位置，而不影响其源代码中的实际顺序，更高的值更靠后
          {flex-grow                 }
          {flex-shrink               }     ->  felx: 0 0 100px
          {flex-basis 设置初始尺寸    }
          align-self

- 应用场景：
1. 三栏布局
2. 居中

# 8. 如何实现三栏布局
- 弹性
- 浮动 (圣杯，双飞翼)
- grid
- table
- position

# 9. css3新增了什么属性
1. border-radius
2. box-shadow
3. border-omage
4. 背景
5. 动画过渡 transition
6. transform 改变位置
7. animation 一次性设置多个与动画相关的属性
8. 渐变

# 10. css画三角形，梯形？  
- 裁剪 clip-path: polygon(0 0, 100% 0, 0 100%);
- 边框 border-color: transparent transparent black transparent
- 拼接 (比如直角梯形可由正方形和三角形拼接)

# 11. 画一条0.5px的线
- 缩放
