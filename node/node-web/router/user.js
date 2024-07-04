const router = require('koa-router')()

router.get('/user', (ctx) => {
    ctx.body = {
        name: '晏淑晴',
        sex: '女'
    }
})

router.get('/home', (ctx) => {
    ctx.body = 'this is my home'
})

module.exports = router // 抛出路由