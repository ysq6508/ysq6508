// 封装一个函数用来连接数据库
const mysql = require('mysql2/promise');
const config = require('../config/index.js');

// 线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

const allServices = {
    async query(sql, values){
        try{
            // 通过线程池连接mysql
            const conn = await pool.getConnection()
            // 对连接执行某些操作
            const [rows, fields] = await conn.query(sql, values)
            // 释放连接
            pool.releaseConnection(conn);
            return Promise.resolve(rows)

        } catch (error) {
            return Promise.reject(error)  // 所以query后面接.then能拿到error的值
        }
    }
}

// 登录
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}" and password="${password}"`
    return allServices.query(_sql)  // 返回一个Promise对象
}

// 查找账号
const userFind = (username) => {
    let _sql = `select * from users where username="${username}"`
    return allServices.query(_sql)
}

// 注册
const userRegister = (values) => {
    let _sql = `insert into users (username, password, nickname) values ('${values.username}', '${values.password}', '${values.nickname}')`
    return allServices.query(_sql)
}

// 根据分类查找便签列表
const findNoteListByType = (type, id) => {
    let _sql = `select * from note where note_type="${type}" and userId="${id}"`
    return allServices.query(_sql)
}

// 根据id查找便签列表
const findNoteListByID = (id) => {
    let _sql = `select * from note where id="${id}"`
    return allServices.query(_sql)
}

// 发布日记
const publishNote = (title, type, img, content, nickname, id) => {
    let _sql = `insert into note (title, note_type, head_img, note_content, nickname, userId) values ('${title}', '${type}', '${img}', '${content}', '${nickname}', '${id}')`
    return allServices.query(_sql)
}

module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteListByID,
    publishNote
}