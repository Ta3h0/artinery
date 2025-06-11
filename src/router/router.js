// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Login from '../login/Login.vue'
import ErrorPage from '../components/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  // BASE_URL에 '/artinery/'가 들어가도록 설정
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
