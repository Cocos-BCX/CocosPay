import Vue from 'vue'
import Router from 'vue-router'

import Language from '../pages/settings/language'
import MonetaryUnit from '../pages/settings/monetaryUnit'
import LockSetting from '../pages/settings/lockSetting'
import ModifyPassword from '../pages/settings/modifyPassword'
import Network from '../pages/settings/network'
import About from '../pages/settings/about'
import WhiteList from '../pages/settings/whiteList'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/unlock',
    name: 'unlock',
    component: (r) => {
      require(['../pages/unlock'], r)
    },
  },
  {
    path: '/unlockActive',
    name: 'unlockActive',
    component: (r) => {
      require(['../pages/unlockActive'], r)
    },
  },
  {
    path: '/home',
    name: 'home',
    component: (r) => {
      require(['../pages/home'], r)
    },
    meta: {
      isLogin: true
    }
  },
  {
    path: '/createWallet',
    name: 'createWallet',
    component: (r) => {
      require(['../pages/createWallet'], r)
    },
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: (r) => {
      require(['../pages/createAccount'], r)
    },
  },
  {
    path: '/login',
    name: 'login',
    component: (r) => {
      require(['../pages/login'], r)
    },
  },
  {
    path: '/initAccount',
    name: 'initAccount',
    component: (r) => {
      require(['../pages/initAccount'], r)
    },
  },
  {
    path: '/importAccount',
    name: 'importAccount',
    component: (r) => {
      require(['../pages/importAccount'], r)
    },
  },
  {
    path: '/orderDeatil',
    name: 'OrderDeatil',
    component: (r) => {
      require(['../pages/orderDeatil'], r)
    },
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: (r) => {
      require(['../pages/recharge'], r)
    },
    meta: {
      isLogin: true
    }
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: (r) => {
      require(['../pages/transfer'], r)
    },
    meta: {
      isLogin: true
    }
  },
  {
    path: '/resource',
    name: 'resource',
    component: (r) => {
      require(['../pages/resource'], r)
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: (r) => {
      require(['../pages/settings'], r)
    },
  },
  {
    path: '/network',
    name: 'network',
    component: Network,
  },
  {
    path: '/language',
    name: 'language',
    component: Language,
  },
  {
    path: '/monetaryUnit',
    name: 'monetaryUnit',
    component: MonetaryUnit,
  },
  {
    path: '/lockSetting',
    name: 'lockSetting',
    component: LockSetting,
  },
  {
    path: '/modifyPassword',
    name: 'modifyPassword',
    component: ModifyPassword,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/whiteList',
    name: 'whiteList',
    component: WhiteList,
  }
]

export default new Router({
  routes: routes
})
