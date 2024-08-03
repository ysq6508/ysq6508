// 定义一些跟用户相关的接口
const router = require('koa-router')();
const { userLogin, userFind, userRegister } = require('../controllers/index.js');

router.prefix('/user')  // 路由前缀

router.post('/login', async (ctx) => {
    // 获取到前端传递的账号密码
    const { username, password } = ctx.request.body
    try {
        // 去数据库中校验
        const result = await userLogin(username, password)
        // console.log(result);
        if(result.length) {
            let data = {
                id: result[0].nickname,
                nickname: result[0].nickname,
                username: result[0].username
            }

            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch(error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.post('/register', async (ctx) => {
    const { username, password, nickname } = ctx.request.body
    if(!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            msg: '账号密码或者昵称不能为空'
        }
        return;
    }

    try{
        // 校验账号是否存在
        const findRes = await userFind(username)
        if(findRes.length){
            ctx.body = {
                code: '8003',
                data: 'error',
                msg: '账号已存在'
            }
            return;
        }

        // 往数据库里写入数据
        const registerRes = await userRegister({username, password, nickname})
        // console.log(registerRes);
        if(registerRes.affectedRows) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '注册成功'
            }
        }else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '注册失败'
            }
        }
    } catch(error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
    
})

module.exports = router