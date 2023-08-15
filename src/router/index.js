import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home')
  },
  {
    path: '/home',
    component: () => import('../views/home'),
    meta: { title: '首页' }
  },
  {
    path: '/cart',
    component: () => import('../views/cart'),
    meta: { title: '购物车' }
  },
  {
    path: '/order',
    component: () => import('../views/order'),
    meta: { title: '订单' }
  },
  {
    path: '/mine',
    component: () => import('../views/mine'),
    meta: { title: '我的' }
  },
  {
    path: '/store',
    component: () => import('../views/store'),
    meta: { title: '店铺' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router