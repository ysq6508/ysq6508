/*
* 废弃版vite.config.ts文件，性能不好
*/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入一个自动加载vue组件的插件
import Components from 'unplugin-vue-components/vite'
// 自动导入样式的解析器
import { VantResolver } from '@vant/auto-import-resolver'

// 工程化工具
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
