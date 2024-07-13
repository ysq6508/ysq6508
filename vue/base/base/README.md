# Vue
单页应用框架，整个项目只有一个HTML文件
你看到的多个页面，只不过是多个代码片段在一个html里面生效

# 指令
v-text 后面接要显示的文本内容，效果等同于{{}}
v-html 后面接富文本
v-on 给一个dom绑定事件
 - v-on:click 相当于 @click
v-bind 给一个dom绑定属性
 - 可简写成 :
v-if="a" a为true时，dom显示，false时，dom隐藏
v-if 直接移除dom结构 (适用于后台管理系统，根据权限显示不同界面)
v-show 通过css的display:none隐藏dom (如果要频繁显示或隐藏，v-show性能更好，只需要改css)

ref()可以接收原始类型，但reactive()只能接收引用类型