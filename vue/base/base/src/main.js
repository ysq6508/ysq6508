// 引入vue
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
// 让vue读懂根组件App，再将根组件转变为真实的HTML挂载到ID为app的容器上面
createApp(App).mount('#app') 
