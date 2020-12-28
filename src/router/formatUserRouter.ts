import Index from '@/frameSkeleton/layout/index.vue'
import Child from '@/frameSkeleton/layout/child.vue'

// 添加一级、二级路由的地址
const changeComponent = comp => {
  if (comp === 'Index') return Index
  else if (comp === 'Child') return Child
  else return () => import('@/views' + comp)
}

const formatUserRouter = (userRouter: any[]) => {
  userRouter.forEach((item: any) => {
    item.component = changeComponent(item.component)
    if (item.children && item.children.length !== 0) {
      item.children = formatUserRouter(item.children)
    }
  })
  return userRouter
}

export default formatUserRouter
