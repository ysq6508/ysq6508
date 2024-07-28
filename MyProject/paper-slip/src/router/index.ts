import { createRouter, createWebHistory } from 'vue-router' 
import type { RouteRecordRaw } from 'vue-router'  // 引入类型定义，定义了路由记录的基本结构

// 二级路由
const rootRoutes: RouteRecordRaw[] = [
    {
        path: 'home', 
        name: 'Home', 
        component: () => import('@/views/home/HomePage.vue')
    },
    {
        path: 'community',
        name: 'Community', 
        component: () => import('@/views/community/CommunityPage.vue')
    },
    {
        path: 'member', 
        name: 'Member', 
        component: () => import('@/views/member/MemberPage.vue')
    },
    {
        path: 'shop', 
        name: 'Shop', 
        component: () => import('@/views/shop/ShopPage.vue')
    },
    {
        path: 'account', 
        name: 'Account', 
        component: () => import('@/views/account/AccountPage.vue')
    }
]

const routes: RouteRecordRaw[] = [
    {
        path: '/', 
        name: 'App', 
        component: () => import("@/views/TheRoot.vue"),
        redirect: '/home',
        children: rootRoutes
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
