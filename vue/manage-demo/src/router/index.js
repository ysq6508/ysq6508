import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
   {
    path: '/login',
    component: () => import('../views/Login.vue')
   },
   {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/category'
      },
      {
        path: '/home/category',
        component: () => import('../views/pages/Catagory.vue')
      },
      {
        path: '/home/add-book',
        component: () => import('../views/pages/AddBook.vue')
      },
      {
        path: '/home/borrow',
        component: () => import('../views/pages/Borrow.vue')
      },
      {
        path: '/home/search',
        component: () => import('../views/pages/Search.vue')
      }
    ]
   }
  ]
})

export default router
