import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface AppState {
  userRouter: any[]
}

/*
@Module()
  参数一：module名称，开启命名空间后会以name为命名空间
  参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网
  参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
  参数四：挂载的store目标
*/
@Module({ name: 'app', dynamic: true, namespaced: true, store })

class App extends VuexModule implements AppState {
  // state
  public userRouter = []

  // get
  get getUserRouter() {
    return this.userRouter
  }

  // mutations
  @Mutation
  private SET_USRROUTR(userRouter: any[]) {
    this.userRouter = userRouter
  }

  // actions
  @Action
  public setUserRouter(userRouter: any[]) {
    this.SET_USRROUTR(userRouter)
  }
}

export const AppModule = getModule(App)
