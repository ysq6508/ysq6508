// 引入本地(node_mdoules)openai 依赖node-fetch 等
// package.json 项目描述文件 dependencies
// 前端 + 后端 + AI
// 类 require关键字
const OpenAI = require('openai');
// 实例化OpenAI
// options 配置项
// AI全栈开发
// prompt -> GPT-API-free -> openai
const client = new OpenAI()({
    // 收费：使用权限
    api_key: 'sk-63432f1e3c7042f49fee24c2b354b0d2',
    // proxy 代理
    baseURL: 'https://api.chatanywhere.tech/v1'
}
)