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
import async from '../../lib/mapTransaction/index';
let NewBCX = bcx.getBCXWithState();
let sysLang = (navigator.language || navigator.userLanguage).substr(0, 2);
sysLang = sysLang === "ZH" ? 'ZH' : 'EN'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wallet,
    account,
    trans
  },
  state: {
    loading: false,
    curLng: window.localStorage.getItem("lang_type") || sysLang,
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
    COCOSUsd: '',
    currencyList: []
  },
  mutations: {
    loading(state, loading) {
      state.loading = loading
      setTimeout(() => {
        state.loading = false
      }, 10000)
    },
    setKeys(state, privateKeys) {
      state.privateKeys = privateKeys
    },
    setCurLng(state, lang) {
      state.curLng = lang
    },
    setCOCOSUsd(state, COCOSUsd) {
      state.COCOSUsd = COCOSUsd
    },
    setCurrencyList(state, currencyList) {
      state.currencyList = currencyList
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
        await axios
          .get("https://api-cocosbcx.cocosbcx.net/backend/getParams")
          .then(async response => {
            
            nodes = response.data.data
            if (utils.browser().versions.gecko) {
              nodes = response.data.data.filter( item => {
                return item.name == "Main"
              });
            }
            
            let addNode = Storage.get("add_node")
            // nodes = response.data.data.filter(( item )=>{
            //   return item.name == 'Test'
            // })
            // nodes = [{
            //   chainId: "dc57c58b0366a06b33615a10fb624c380557f3642278d51910580ade3ab487fe",
            //   coreAsset: 'COCOS',
            //   faucetUrl: 'http://test-faucet.cocosbcx.net',
            //   name: 'Cocos - China - Beijing',
            //   type: '0',
            //   ws: 'ws://192.168.90.46:8149',
            //   choose: true,
            // }, ]
            
            if (addNode) {
              nodes = nodes.concat([addNode])
            }
            Storage.set("node", nodes);
            // let isHave = false
            // let chooseNodeChainId = Storage.get("choose_node").chainId;
            // console.log(chooseNodeChainId)
            // nodes.filter( item => {
            //   if (item.chainId == chooseNodeChainId) {
            //     isHave = true
            //   }
            // }) 
            // await NewBCX.init().then(res_url => {
            //   console.log('res_url ', res_url)
            // })
          })
          .catch(function (error) {
            console.log(error);
          });
          return nodes
        // await NewBCX.lookupWSNodeList({
        //   refresh:true,
        // }).then(res => {
        //   console.log('res')
        //   console.log(res)
        // })
      } catch (e) {
        console.log(e);
      }
    },
    async decodeMemo({
      commit
    }, memo) {
      try {
        return await NewBCX.decodeMemo(memo)
      } catch (e) {
        return e
      }
    },
    async addAPINode({
      commit
    }, params) {
      try {
        let resData
        await NewBCX.addAPINode({
          name: params.name,
          url: params.url
        }).then( res => {
            resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    async deleteAPINode({
      commit
    }, url) {
      try {
        let resData
        await NewBCX.deleteAPINode({
          url: url
        }).then( res => {
            resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    async lookupWSNodeList({
      commit
    }, url) {
      try {
        let resData
        await NewBCX.lookupWSNodeList({
          refresh:true,
        }).then(res => {
          resData = res
        })
        return resData
      } catch (e) {
        console.log(e);
      }
    },
    async switchAPINode({
      commit
    }, url) {
      try {
        let resData
        commit('loading', true, {
          root: true
        })
        await NewBCX.switchAPINode(url).then(res => {
          commit('loading', false, {
            root: true
          })
          resData = res
        }).catch( err => {
          commit('loading', false, {
            root: true
          })
        })
        return resData
      } catch (e) {
        console.log(e);
      }
    },
    async apiConfigChangeNode({
      commit
    }, params) {
      let resData
      try {
        await NewBCX.apiConfig({ 
          default_ws_node: params.default_ws_node,
          ws_node_list:[
            {
              url:params.ws_node_list[0].url,
              name:params.ws_node_list[0].name
            }, 
          ],
          networks:[
            {
              core_asset:"COCOS",
              chain_id:params.networks[0].name 
            }
          ],
          faucet_url: params.faucet_url,
          auto_reconnect:true,
          real_sub:true,
          check_cached_nodes_data:false
        }, true).then(res=>{
          resData = res
        });
        let getApiConfigResult = await NewBCX.getApiConfig()
        // 2019-12-19 修改结束
        return resData
      } catch (e) {
        console.log(e);
      }
    },
    async apiConfig({
      commit
    }, Node) {
      let resData
      try {
        // 2019-12-19 注释开始
        // await NewBCX.apiConfig({
        //   default_ws_node: 'ws://test.cocosbcx.net',
        //   ws_node_list: [{
        //     url: Node.ws,
        //     name: Node.name
        //   }],
        //   networks: [{
        //     core_asset: "COCOS",
        //     chain_id: Node.chainId
        //   }],
        //   faucetUrl: Node.faucetUrl ? Node.faucetUrl : Node.url,
        //   auto_reconnect: Node.connect ? Node.connect : false,
        //   worker: false
        // }).then(res=>{
        //   resData = res
        // });
        // 2019-12-19 注释结束

        // 2019-12-19 修改开始
        await NewBCX.apiConfig({
          // check_cached_nodes_data:false,
          // locale: Node.locale || "zh",
          // real_sub: Node.real_sub || true,
          faucet_url: Node.faucetUrl
        }).then(res=>{
          resData = res
        });
        // 2019-12-19 修改结束
        return resData
      } catch (e) {
        console.log(e);
      }
    },
    async init({
      commit
    }) {
      let resData
      try {
        commit('loading', true, {
          root: true
        })
        await NewBCX.init({
          refresh: true,
          real_sub:true,
          subscribeToRpcConnectionStatusCallback:res=>{
            console.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.info("subscribeToRpcConnectionStatusCallback res",res);
          }
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    // claimVestingBalance
    async claimVestingBalance({
      commit
    }, params) {
      try {
        let resData
        commit('loading', true, {
          root: true
        })
        await NewBCX.claimVestingBalance({
          id: params.id,
          amount: params.amount
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          resData = res
        }).catch( err => {
          commit('loading', false, {
            root: true
          })
        })
        return resData
      } catch (e) {
        console.log(e);
      }
    },
    async subscribeTo({}) {
      try {
        await NewBCX.subscribeToRpcConnectionStatus({
          callback: (back) => {
            // console.info("subscribeToRpcConnectionStatusCallback index", back);
          }
        })
      } catch (e) {

      }
    }

  },
  plugins: [createPersistedState()]
})
