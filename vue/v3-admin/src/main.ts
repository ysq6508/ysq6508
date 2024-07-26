import { createApp } from 'vue'
import './assets/style/common.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon,
    ElCheckbox,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
} from 'element-plus'
import 'element-plus/dist/index.css'
// import * as Data from './test.js'   // * as 语法，所有默认和命名导出
// import Data, {a, b} from './test.js'   // Data,是默认导出
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// console.log(Data);

const app = createApp(App)

// 加载ElementPlus图标不再选择按需加载，选择es6，代码可读性更好
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    console.log(key, component);
    
    app.component(key, component)
}

app
    .use(createPinia())
    .use(router)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElIcon)
    .use(ElCheckbox)
    .use(ElAvatar)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .mount('#app')
