// 定义一些跟用户相关的接口
const router = require('koa-router')();
const jwt = require('../utils/jwt.js')
const { findNoteListByType, findNoteListByID } = require('../controllers/index.js');

router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
    // 获取前端传递的 note_type，去数据库中以该note_type字段读取数据返回给前端
    // console.log(ctx.request.query);
    const { note_type } = ctx.request.query
    try{
        const result = await findNoteListByType(note_type, ctx.userId)
        if(result.length){
            ctx.body = {
                code: '8000',
                data: result,
                msg: '查询成功'
            }
        }else{
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '当前分类没有数据'
            }
        }
    }catch(err){
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }    
})

router.get('/findNoteListByID', jwt.verify(), async (ctx) => {
    console.log(ctx.request.query);
    
    const { id } = ctx.request.query
    try{
        const result = await findNoteListByID(id)
        if(result.length){
            ctx.body = {
                code: '8000',
                data: result,
                msg: '查询成功'
            }
        }else{
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '该便签没有内容'
            }
        }
    }catch(err){
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }    
})

module.exports = router