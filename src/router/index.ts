import { getRequestData } from '@plugins/axios'
import { AppModule } from '@/store/modules/app'
import router from './setRouter'
import { baseRoutes } from './routerPath'
import formatUserRouter from '@/router/formatUserRouter'

// 添加参数，避免多次循环导致的错误
var getUseRouters = null

// 合并当前所有的路由
const newRouters = (to: any, next: any) => {
  const routerConfig = baseRoutes.concat(getUseRouters)
  // 因'*'的路由存在baseRoutes里，所以放在最后不会影响其他
  router.addRoutes(routerConfig) // 动态添加路由
  next({ ...to, replace: true })
}

// 拿到用户当前的权限路由
const getUserLoginRouter = (callRes, callErr) => {
  getRequestData(`./static/json/routers.json`, 'get', {}).then((res: any) => {
    if (res) {
      AppModule.setUserRouter(res)
      let userRouter = formatUserRouter(res)
      callRes(userRouter)
    } else {
      callErr(res)
    }
  })
}

// 路由跳转之前
router.beforeEach((to, from, next) => {
  if (!getUseRouters && getUseRouters === null) {
    getUseRouters = []
    getUserLoginRouter((res: any) => {
      getUseRouters = res
      newRouters(to, next)
    }, (err: any) => {
      getUseRouters = []
      console.error(err)
    })
  }

  /* if (to.path !== '/login' && !localStorage.getItem('token')) {
    getUseRouters = null
    next({
      path: '/login'
    })
  } else */
  if (to.path === '' || to.path === '/') {
    next({
      path: '/index'
    })
  } else {
    next()
  }
})
// 路由跳转之后
router.afterEach((to, from) => {

})

export default router
