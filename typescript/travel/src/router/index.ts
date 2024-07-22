import { createRouter, createWebHistory } from 'vue-router'
// RouteRecordRaw 约定路由的类型
import type { RouteRecordRaw } from "vue-router"
// vue3 98% 的代码是用ts写的，而不是js
// ts是js的plus 减少js开发90%以上的错误，都来自类型的缺失
// js 写起来跟java一样
// 静态编译，类型检测
// 直接用js写没问题，加上一些别的
const rootRoutes: RouteRecordRaw[] = [{
    path: '/',
    // meta: {  }    // RouteRecordRaw的可选属性
    component: () => import('@/views/HomePage/HomePage.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes: rootRoutes
})

export default router

