# uniapp 的生命周期

- vue的生命周期

- uni 自带的生命周期 （应用生命周期，放在整个应用外 App.vue 或 main.js 上使用）
1. onLaunch 初始化完成触发一次
2. onShow 页面被渲染完成触发一次（比如后台切换前台的时候）
3. onHide （比如前台切换后台的时候）
4. onError 当 uni-app 报错时触发