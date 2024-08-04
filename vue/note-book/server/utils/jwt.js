const jwt = require('jsonwebtoken')

function sign(option) {
    return jwt.sign(option, '666', {
        expiresIn: 86400     // 1天后过期
    })   // 第一个参数对象信息，第二个参数签名
}

function verify() {
    return async(ctx, next) => {
      let jwtToken = ctx.req.headers.authorization
      if (jwtToken) {
        // 判断 token 是否合法
        try {
          const decoded = jwt.verify(jwtToken, '666')
          if (decoded.id) { // 合法
            ctx.userId = decoded.id
            await next()
          }
        } catch (e) {

          ctx.body = {
            status: 401,
            msg: 'token失效'
          }
        }
      } else {
        ctx.body = {
          status: 401,
          msg: '请提供token'
        }
      }
    }
  }


module.exports = {
    sign,
    verify
}