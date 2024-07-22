import { createApp } from 'vue'
import '@/assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { 
    Tabbar, 
    TabbarItem 
} from 'vant'
import 'vant/lib/index.css'

const pinia = createPinia();

const app = createApp(App)
app
    .use(Tabbar)
    .use(TabbarItem)
app
    .use(router)  // 将路由中间件Vue Router注册到 Vue 应用中
    .use(pinia)
app
    .mount('#app')