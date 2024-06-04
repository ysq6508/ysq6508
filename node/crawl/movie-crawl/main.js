// require函数是Node.js中用于导入模块的语法,返回该模块导出的对象或函数。前提要先npm i request-promise
// 引入http请求库,并将其赋值给request，之后可以用request函数发送请求，并返回响应内容
let request = require('request-promise');
// 引入cheerio库，将html字符串解析成jquery对象，方便操作.前提要先npm i cheerio
let cheerio = require('cheerio');  // 把html str变成内存中DOM对象

const DOUBAN_MOVIE_URL = 'https://movie.douban.com/chart';  // 细节：URL不变就用const声明并大写

async function main() {
    let html = await request({    // await 等待异步操作request函数执行完成，返回结果赋值给html
        url: DOUBAN_MOVIE_URL
    });                            // 细节：request函数的参数是一个对象，所以用大括号
    // console.log(html);

    // cheerio 在内存中实例化了DOM树  $  document
    // html str -> DOM树 -> 子查询
    let $ = cheerio.load(html)
    const movieList = []
    let movieNodes = $('#content.article.item')  // 去html上去选择content元素下的article元素下的所有item元素
                                                 // 类名选择器 #content.article.item
    // console.log(movieNodes);
    for(let i = 0;i < movieNodes.length;i++){
        let movieNode = movieNodes[i];
        let title = movieNode('.p12 a');
        console.log(title);
    }

    console.log(movieList);
}

main()










// “他有我拿”  （浏览器只是上网的代理proxy）
// 先发送一个HTTP请求  url   GET   https://m.douban.com/movie/
// 响应  html  字符串
// 解析html字符串，如果可以像css选择器一样，拿到了电影列表
// 最后将所有的电影对象组成数组，以json数组的方式返回，Done










/*
let request = require('request-promise') // 需要安装
let cheerio = require('cheerio') // 需要安装
let fs = require('fs')
const util = require('util')
let movies = []
let basicUrl = 'https://movie.douban.com/top250'
let once = function (cb) {
    let active = false
    if (!active) {
        cb()
        active = true
    }
}
function log(item) {
    once(() => {
        console.log(item)
    })
}
function getMovieInfo (node) {
    let $ = cheerio.load(node)
    let titles = $('.info .hd span')
    titles = ([]).map.call(titles, t => {
        return $(t).text()
    })
    let bd = $('.info .bd')
    let info = bd.find('p').text()
    let score = bd.find('.star .rating_num').text()
    return { titles, info, score }
}
    async function getPage (url, num) {
    let html = await request({
      url
    })
    console.log('连接成功！', `正在爬取第${num+1}页数据`)
    let $ = cheerio.load(html)
    let movieNodes = $('#content .article .grid_view').find('.item')
    let movieList = ([]).map.call(movieNodes, node => {
      return getMovieInfo(node)
    })
    return movieList
}
async function main () {
    let count = 25
    let list  = []
    for (let i = 0 ; i < count ; i++) {
        let url = basicUrl + `?start=${25*i}`
        list.push(... await getPage(url, i))
    }
    console.log(list.length)
    fs.writeFile('./output.json', JSON.stringify(list), 'utf-8', () => {
      console.log('生成json文件成功！')
    })
}
main()

*/





