// 引入本地(node_mdoules)openai，并使用了 node-fetch 这个第三方库来处理 HTTP 请求
// package.json 项目描述文件 dependencies 项目依赖
// 前端 + 后端 + AI
// 类 require关键字
// 环境变量：系统环境变量  进程环境变量
// 引入并配置dotenv来加载.env文件中的变量
require('dotenv').config();
// console.log(process.env); 
const OpenAI = require('openai');
// 实例化OpenAI
// options 配置项
// AI全栈开发
// prompt -> GPT-API-free -> openai
//openai
const client = new OpenAI({
    // 收费：使用权限
    apikey: process.env.OPENAI_API_KEY, // 进程的环境变量中有OPENAI_API_KEY
    // proxy 代理
    baseURL: 'https://api.chatanywhere.tech/v1'
}
)

async function main(){
    // 做一些高下立判的事情，nlp任务
    // 根据用户发表的评论，正面、负面
    let prompt = `
        判断用户的评论情感上时正面的还是负面的
        评论：买的银色版真的好看，一天就到了，晚上就开始拿起来玩系统很丝滑流畅，
        做工扎实，手感细腻，很精致哦，华为一如既往的好品质
        情感：正面
        评论：随意降价，不予报价，服务态度差
        情感：负面
    `

    let myPrompt = `
        ${prompt}
        评论：实话说，iphone越来越没有新意了，你买我不推荐，散了
        情感：
    `
    // chat是聊天的方式，让它完成
    // completions AIGC open 生成正面或负面， LLM大模型来完成
    // AI 自然语言处理 GC 生成内容
    // create 创建一个对话
    // 返回一个JSON
    const chatCompletion = await client.chat.completions.create({
        // 聊天上下文 多轮 所以用数组
        // role 角色 user 用户向openai 问问题 content
        messages: [{ role: 'user', content: myPrompt}],
        // 选择相应的模型
        model: 'gpt-3.5-turbo',
        n: 1
    })
    console.log(chatCompletion.choices[0]);
}

main();