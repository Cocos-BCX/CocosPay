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
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
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
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: Transfer,
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
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
