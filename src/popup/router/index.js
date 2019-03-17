import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home'
import CreateWallet from '../pages/createWallet'
import CreateAccount from '../pages/createAccount'
import Unlock from '../pages/unlock'
import Login from '../pages/login'
import Agreement from '../pages/agreement'
import InitAccount from '../pages/initAccount'
import ImportAccount from '../pages/importAccount'
import OrderDeatil from '../pages/orderDeatil'
import Recharge from '../pages/recharge'
import Transfer from '../pages/transfer'
import Resource from '../pages/resource'
import Settings from '../pages/settings'
import Language from '../pages/settings/language'
import LockSetting from '../pages/settings/lockSetting'
import ModifyPassword from '../pages/settings/modifyPassword'
import Network from '../pages/settings/network'
import About from '../pages/settings/about'
import WhiteList from '../pages/settings/whiteList'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/unlock',
    name: 'unlock',
    component: Unlock,
    // meta: {
    //   requiresKeystore: true
    // }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      // requiresAuth: true
      isLogin: true
    }
  },
  {
    path: '/createWallet',
    name: 'createWallet',
    component: CreateWallet
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: CreateAccount
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: Agreement
  },
  {
    path: '/initAccount',
    name: 'initAccount',
    component: InitAccount,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/importAccount',
    name: 'importAccount',
    component: ImportAccount
  },
  {
    path: '/orderDeatil',
    name: 'OrderDeatil',
    component: OrderDeatil
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: Recharge,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: Transfer,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/network',
    name: 'network',
    component: Network,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/language',
    name: 'language',
    component: Language,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/lockSetting',
    name: 'lockSetting',
    component: LockSetting,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/modifyPassword',
    name: 'modifyPassword',
    component: ModifyPassword,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/whiteList',
    name: 'whiteList',
    component: WhiteList,
    // meta: {
    //   requiresAuth: true
    // }
  }
]

export default new Router({
  routes: routes
})
