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
  // 그 외 매칭되지 않는 경로는 404로 리다이렉트
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 뒤로가기/앞으로가기 시에는 저장된 위치로 복원
    if (savedPosition) {
      return savedPosition
    }
    // 그 외의 경우 항상 페이지 최상단으로 스크롤
    return { top: 0 }
  }
})

export default router
