import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from './App.vue'
import router from './router/index'
import 'vant/lib/index.css'
import {
    Tabbar,
    TabbarItem,
    Search,
    Icon
} from 'vant'

const app = createApp(App)

app
    .use(Tabbar)
    .use(TabbarItem)
    .use(Search)
    .use(Icon)
app
    .use(router)
    .use(createPinia())
    .mount('#app')
