import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/noteClass'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: () => import('@/views/NoteClass.vue'),
      meta: {
        title: '便签分类'
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: () => import('@/views/NoteList.vue'),
      meta: {
        title: '便签列表'
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: () => import('@/views/NoteDetail.vue'),
      meta: {
        title: '便签详情'
      }
    },
    {
      path: '/notePublish',
      name: 'notePublish',
      component: () => import('@/views/NotePublish.vue'),
      meta: {
        title: '发布日记'
      }
    }
  ]
})

// 全局路由守卫
const whitePath = ['/login', '/register', '/noteClass']  // 白名单
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // console.log(to, from) 
  // 若不在白名单内
  if (!whitePath.includes(to.path)){
    // 若没有登录
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return;
    }
  }
  next()
  return;
})

export default router
