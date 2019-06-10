import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import defaultNetworks from '../config/networks'
import account from './modules/account'
import wallet from './modules/wallet'
import trans from './modules/trans'
import InternalMessage from '../../messages/InternalMessage'
import * as InternalMessageTypes from '../../messages/InternalMessageTypes'
import utils from '../../lib/utils'
import Storage from "../../lib/storage";
import axios from "axios";
import bcx from '../utils/bcx'
let NewBCX = bcx.getBCXWithState();
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wallet,
    account,
    trans
  },
  state: {
    loading: false,
    curLng: utils.getLanguage() || 'en',
    currentNetwork: {
      id: 1,
      name: 'TestNet',
      type: 'TestNet'
    },
    networks: defaultNetworks.networks,
    currentAccount: {
      address: '',
      name: '',
      privateKey: '',
      keystore: ''
    },
    cocosAccount: {
      accounts: '',
      passwords: '',
    },
    privateKeys: '',
    temporaryKeys: '',
    currentCreateAccount: {
      address: '',
      name: '',
      privateKey: ''
    },
    Password: {
      oldPassword: '',
      newPassword: ''
    },
    currentCreateVisible: false,
    isLogin: false,
    isAccount: false,
    cocosCount: '',
    callback: '',
    accountType: '',
    loginNoAlert: false,
  },
  mutations: {
    loading(state, loading) {
      state.loading = loading
    },
    setKeys(state, privateKeys) {
      state.privateKeys = privateKeys
    },
    setCurLng(state, lang) {
      state.curLng = lang
    },
    setCurrentNetwork(state, network) {
      state.currentNetwork = network
      InternalMessage.widthPayload(InternalMessageTypes.SETCURRENTNETWORK, {
          network: network
        })
        .send()
    },
    setCocosCount(state, cocos) {
      state.cocosCount = cocos
    },
    setLoginNoAlert(state, loginNoAlert) {
      state.loginNoAlert = loginNoAlert
    },
    setAccountType(state, accountType) {
      state.accountType = accountType
    },
    settemporaryKeys(state, temporaryKeys) {
      state.temporaryKeys = temporaryKeys
    },
    setPassword(state, Password) {
      state.Password = Password
    },
    setLogin(state, isLogin) {
      state.isLogin = isLogin
    },
    setIsAccount(state, isAccount) {
      state.isAccount = isAccount
    },
    setAccount(state, cocosAccount) {
      state.cocosAccount.accounts = cocosAccount.account;
      state.cocosAccount.passwords = cocosAccount.password
    },
    setCurrentAccount(state, account) {
      // fix changepassword bug
      state.currentAccount = Object.assign({}, account)
      InternalMessage.widthPayload(InternalMessageTypes.SETCURRENTACCOUNT, {
          address: account.address
        })
        .send()
    },
    setCurrentCreateAccount(state, account) {
      state.currentCreateAccount = account
    },
    setCurrentCreateVisible(state, bool) {
      state.currentCreateVisible = bool
    },
    updateNetwork(state, network) {
      state.networks = state.networks.map(ele => {
        if (ele.type === network.type) {
          ele = {
            ...ele,
            ...network
          }
        }
        return ele
      })
    },
    upgradeCurrentAccount(state, password) {
      if (state.currentAccount.privateKey) {
        const keystore = utils.encrypt(state.currentAccount.privateKey, password)
        state.currentAccount.keystore = keystore
        state.currentAccount.privateKey = ''
      }
    },
    changePassword(state, pwd) {
      const {
        oldpwd,
        newpwd
      } = pwd
      if (state.currentAccount.keystore) {
        let privateKey = utils.decrypt(state.currentAccount.keystore, oldpwd)
        state.currentAccount.keystore = utils.encrypt(privateKey, newpwd)
      }
    }
  },
  actions: {
    async nodeLists({
      commit
    }) {
      try {
        let nodes = [];
        axios
          .get("http://backend.test.cjfan.net/getParams")
          .then(response => {
            nodes = response.data.data;
            Storage.set("node", nodes);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }
    },
    async init({
      commit
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        await NewBCX.init().then((res) => {
          commit('loading', false, {
            root: true
          })
        })
      } catch (e) {
        return e
      }
    },
  },
  plugins: [createPersistedState()]
})
