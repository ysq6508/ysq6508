import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: () => import('../views/goods/Index.vue')
    },
    {
      path: '/comment',
      component: () => import('../views/comment/Index.vue')
    },
    {
      path: '/seller',
      component: () => import('@/views/seller/Index.vue')
    }
  ]
  
})

export default router
