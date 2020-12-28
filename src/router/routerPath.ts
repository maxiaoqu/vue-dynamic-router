import { RouteConfig } from 'vue-router'

import Index from '@/frameSkeleton/layout/index.vue'

// 基础页面路由
export const baseRoutes: RouteConfig[] = [
  {
    path: '/',
    name: '_index',
    redirect: '/index',
    meta: {
      title: '首页'
    }
  }, {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Home.vue')
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/frameSkeleton/login/index.vue')
  }, {
    path: '/401',
    name: '401',
    meta: {
      title: 'error401'
    },
    component: () => import('@/frameSkeleton/error/error401.vue')
  }, {
    path: '/403',
    name: '403',
    meta: {
      title: 'error403'
    },
    component: () => import('@/frameSkeleton/error/error403.vue')
  }, {
    path: '*',
    name: '404',
    meta: {
      title: 'error404'
    },
    component: () => import('@/frameSkeleton/error/error404.vue')
  }
]

// 大屏端页面路由
export const indexRoutes: RouteConfig[] = [
  {
    path: '/indexRoutes',
    name: 'indexRoutes',
    meta: {
      title: '大屏端风格'
    },
    redirect: '/indexRoutes/Admin1',
    component: Index,
    children: [{
      path: 'Admin1',
      name: 'Admin1',
      meta: {
        title: '大屏端1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home1',
      name: 'Home1',
      meta: {
        title: '大屏端2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]
