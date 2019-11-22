/**
 * 路由守卫
 */
import router from './index'
import store from '../store'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    //判断是否注册过
    if (!store.state.isAccount) {
      next({
        name: 'initAccount'
      })
    } else {
      //判断是否登陆
      if (!store.state.isLogin) {
        next({
          name: 'login'
        })
      }
    }
    next()
  }
  else {
    next()
  }
})
// 页面离开出除loading
router.afterEach(() => {
  store.commit('loading', false)
})
