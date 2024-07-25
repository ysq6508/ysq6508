import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'  // 进度条样式
import Home from '../views/home.vue'
import { usePermissStore } from '../store/permiss' 

// 不用createWebHashHistory的原因(比较createWebHistory和createWebHashHistory)
// 自己人用的，没有兼容性问题
// 移动端用户项目也不需要怎么考虑兼容性
// 用户端PC 项目 连弹性布局都要考虑兼容性

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '首页',
                    noAuth: true   // 这个页面不需要登录
                },
                component: () => import('../views/dashboard.vue')
            },
            {
                path: '/system-user',
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '11'
                },
                component: () => import('../views/system-user.vue')
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '基础表格',
                    permiss: '31'
                },
                component: () => import('../views/basetable.vue')
            }
        ]
    },
    {
        path: '/login',
        meta: {    // meta字段通常用于存储与路由相关的元数据，比如页面标题、是否需要登录权限等
            title: '登录',
            noAuth: true
        },
        component: () => import('../views/login.vue')
    },
    {
        path: '/403',
        meta: {
            title: '403 Forbidden',
            noAuth: true
        },
        component: () => import('../views/403.vue')
    },
    {
        path: '/404',
        meta: {
            title: '404 Not Found',
            noAuth: true
        },
        component: () => import('../views/404.vue')
    },
    {
        path: '/:path(.*)',   // 没有匹配 404收场
        redirect: '/404',
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {    // 每当路由即将改变时，这个函数就会被调用
    NProgress.start();
    const role = localStorage.getItem('username')  // 是否登录
    const permissStore = usePermissStore()
    // 鉴权 分角色 403(Forbidden页面)
    if(to.meta.title) {
        // 如果存在并且该 title 不是 undefined 或 null，那么它会将 to.meta.title 的值（预期为字符串）赋给当前页面的标题
        document.title = to.meta.title as string
    }

    // 未登录且需要登录
    if(!role && to.meta.noAuth !== true) {
        next('/login')
        // 登录了 访问的页面要鉴权， 未登录且不需要登录
    } else if(
        // 这个页面要检验permiss
        typeof to.meta.permiss == 'string' && !permissStore.key.includes(to.meta.permiss) 
    ) {
        next('/403')
    } else {
        // 未登录且不需要登录 要鉴权且有权限的 直接放行
        next()
    }
    
})

router.afterEach(() => {  // 路由改变后即页面完成跳转之后
    NProgress.done();     // 用于标记进度条的结束，通常是用来关闭或重置进度条的状态
})

export default router