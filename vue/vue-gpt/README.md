## 项目架构

- utils 文件夹
    - 封装常用的工具方法
    防抖节流
    gpt http请求

- LLM可以通过sdk, http 访问接口
    - http 复杂，好处是不需要搞后端
    - lib/gpt.js 封装chat 搞定
    - async-await
    - fastmock 模拟请求数据
        - url  https://api.302.ai/v1/chat/completions
        - fetch post
        - {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + api_key    <!--授权信息-->
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: messageList
            })
          }
