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

    // store.dispatch('wallet/isUnlocked').then(unlocked => {
    //   if (unlocked) {
    //     if (!store.state.currentAccount.address && to.name !== 'initAccount') {
    //       next({
    //         name: 'initAccount'
    //       })
    //     } else {
    //       next()
    //     }
    //   } else {
    //     next({
    //       name: 'initAccount'
    //     })
    //   }
    // })
    next()
  }
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   store.dispatch('wallet/isUnlocked').then(unlocked => {
  //     if (unlocked) {
  //       if (!store.state.currentAccount.address && to.name !== 'initAccount') {
  //         next({
  //           name: 'initAccount'
  //         })
  //       } else {
  //         next()
  //       }
  //     } else {
  //       next({
  //         name: 'initAccount'
  //       })
  //     }
  //   })
  // } else if (to.matched.some(record => record.meta.requiresKeystore)) {
  //   if (!store.state.wallet.pwdhash && !store.state.wallet.password) {
  //     next({
  //       name: 'createWallet'
  //     })
  //   } else {
  //     next()
  //   }
  else {
    next()
  }
})
// 页面离开出除loading
router.afterEach(() => {
  store.commit('loading', false)
})
