// 将一部分适合ai做的任务交给LLM
// 工作更高效，50%不用做了
// 引入openai库
const OpenAI = require('openai');  // 首字母大写，一个类；全部大写，一个常量
// 实例化OpenAI客户端对象
const client = new OpenAI({
    apiKey: 'sk-VBkGP4L7QbAk4Sx3K77mefYSzqbroS4WOmpKTTnaIcm9Dmsw', // 用于被允许访问 OpenAI 的 API 服务
    baseURL: 'https://api.chatanywhere.tech/v1'  // 表明希望与 chatanywhere 这个服务的版本 1 进行交互
})

async function main() {
    const chatCompletion = await client.chat.completions.create( // 创建对话完成请求
        {
            messages: [{role: 'user', content: '你是谁?'}],  // 参数是一个对象，包含了用户发送的消息和模型的名称
            model: 'gpt-3.5-turbo'
         }
    )
    console.log(chatCompletion.choices[0]); // 对话完成请求返回的结果中的第一个选择
}

main()