import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app
.use(router)  // 将路由中间件Vue Router注册到 Vue 应用中
.mount('#app')
