import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ans/:id',
    name: 'answer',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnsView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/four',
    name: 'four',
    component: () => import(/* webpackChunkName: "about" */ '../views/FourStages.vue')
  },
  {
    path: '/senior',
    name: 'senior',
    component: () => import(/* webpackChunkName: "about" */ '../views/SeniorView.vue')
  },
  {
    path: '/outer',
    name: 'outer',
    component: () => import(/* webpackChunkName: "about" */ '../views/OuterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 改成 createWebHistory
  routes
})

export default router
