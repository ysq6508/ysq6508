import axios from 'axios';
import { showToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'  //  Axios 的全局基础 URL
// 求类型为 POST 时，Axios 默认的 Content-Type 请求头,发送的数据将以 JSON 格式编码
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截


// 响应拦截
axios.interceptors.response.use(res => {
    if(res.status !== 200){  // 程序性错误
        showToast('服务器异常');
        return Promise.reject(res)
    } else {
        if (res.data.code !== '8000') {  // 逻辑性错误
            showToast(res.data.msg);
            return Promise.reject(res)
        }

        return res.data
    }
})

export default axios