import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Bot from '../pages/Bot.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home',
                redirect: '/home/suggest'
            },
            {
                path: '/home/newest',
                component: () => import('../pages/home/Newst.vue')
            },
            {
                path: '/home/suggest',
                component: () => import('../pages/home/Suggest.vue')
            },
        ]
    },
    {
        path: '/bot',
        component: Bot
    },
    {
        path: '/hot',
        component: () => import('../pages/Hot.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router