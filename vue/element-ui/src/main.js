import { createApp } from 'vue'
import { createPinia } from 'pinia' // 仓库

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import './assets/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')
