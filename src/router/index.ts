import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ans/:id',
    name: 'answer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnsView.vue')
  },
  {
    path: '/',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/four',
    name: 'four',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FourStages.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
