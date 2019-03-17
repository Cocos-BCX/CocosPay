// import {
//   NewTronWeb,
//   NewBCX
// } from '../../utils/tools'
import utils from '../../../lib/utils'
import Alert from '../../components/kalert/function'
import {
  HISTORY_REQUEST_LIMIT,
  HISTORY_SHOW_LIMIT
} from '../../../lib/constants'
import I18n from '../../languages'
import CommonJs from '../../config/common'
import async from '../../../lib/mapTransaction/index';
let Background = chrome.extension.getBackgroundPage().background.default;
let NewBCX = new Background().NewBCX();
export default {
  namespaced: true,
  state: {
    name: '',
    address: '',
    privateKey: '',
    keystore: '',
    balance: 0,
    cpu: 0,
    bandWidth: 0,
    cocosPower: 0,
    frozenExpires: 0,
    assets: [],
  },
  actions: {
    //注册账户
    async loadBCXAccount({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData;
        await NewBCX.createAccountWithPassword({
          account: rootState.cocosAccount.accounts,
          password: rootState.cocosAccount.passwords,
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //退出登陆
    async logoutBCXAccount({
      commit,
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData;
        await NewBCX.logout().then((res) => {
          commit('loading', false, {
            root: true
          })
          resData = res;
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //修改密码
    async changePassword({
      commit,
      state,
      rootState
    }) {
      try {
        let resData;
        commit('loading', true, {
          root: true
        })
        await NewBCX.changePassword({
          oldPassword: rootState.Password.oldPassword,
          newPassword: rootState.Password.newPassword
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          resData = res;
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //私钥登录
    async setPrivateKeys({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData;
        await NewBCX.privateKeyLogin({
          privateKey: rootState.privateKeys,
          password: rootState.temporaryKeys,
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //登陆账户
    async loginBCXAccount({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData;
        await NewBCX.passwordLogin({
          account: rootState.cocosAccount.accounts,
          password: rootState.cocosAccount.passwords
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }

          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //查询账户状态
    async loadingBCXAccount({
      commit
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let data = await NewBCX.getAccountInfo()
        commit('loading', false, {
          root: true
        })
        // if (data.code !== 1) {
        //   console.log(data)
        //   Alert({
        //     message: data.message
        //   })
        // }
        return data
      } catch (e) {
        return e
      }
    },
    //查询账户信息
    async UserMessage({
      commit,
      state,
      rootState
    }) {
      let resData;
      commit('loading', true, {
        root: true
      })
      try {
        await NewBCX.queryAccountInfo({
          account: rootState.cocosAccount.accounts,
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //查询账户资产
    async UserAccount({
      commit,
      state,
      rootState
    }) {
      let resData;
      commit('loading', true, {
        root: true
      })
      try {
        await NewBCX.queryAccountBalances({
          unit: '',
          account: rootState.cocosAccount.accounts,
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //导出私钥
    async OutPutKey({
      commit,
      state,
      rootState
    }) {
      let resData;
      // commit('loading', true, {
      //   root: true
      // })
      try {
        await NewBCX.getPrivateKey().then(res => {
          // commit('loading', false, {
          //   root: true
          // })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },
    async loadAccount({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        const tronWeb = NewTronWeb()
        const accountData = await tronWeb.trx.getAccount(rootState.currentAccount.address)
        state.balance = utils.getTokenAmount(accountData.balance || 0)
        state.cocosPower = accountData.frozen && accountData.frozen.length > 0 ? accountData.frozen[0].frozen_balance : 0
        state.frozenExpires = accountData.frozen && accountData.frozen.length > 0 ? accountData.frozen[0].expire_time : 0
        state.assets = accountData.asset || []
        const resData = await tronWeb.trx.getAccountResources(rootState.currentAccount.address)
        state.bandWidth = resData.NetLimit ? resData.NetLimit : 0
        state.cpu = resData.EnergyLimit ? resData.EnergyLimit : 0
        commit('loading', false, {
          root: true
        })
      } catch (e) {
        state.balance = 0
        state.cocosPower = 0
        state.frozenExpires = 0
        state.assets = []
        state.bandWidth = 0
        state.cpu = 0
        Alert({
          message: rootState.curLng === 'zh' ? '加载失败' : 'load data error'
        })
        commit('loading', false, {
          root: true
        })
      }
    },
    async loadTransactionsByNode({
      commit,
      rootState
    }) {
      const tronWeb = NewTronWeb()
      const from = await tronWeb.trx.getTransactionsRelated(rootState.currentAccount.address, 'from', HISTORY_REQUEST_LIMIT)
      const to = await tronWeb.trx.getTransactionsRelated(rootState.currentAccount.address, 'to', HISTORY_REQUEST_LIMIT)
      // fix sort bug
      // gettransactionsfromthis & gettransactionstothis return result not sort or have no timestamp
      return (from.concat(to).sort((a, b) => b.raw_data.timestamp - a.raw_data.timestamp || b.raw_data.expiration - a.raw_data.expiration))
        .slice(0, HISTORY_SHOW_LIMIT)
      // return NewTronWeb().trx.getTransactionsRelated(
      //   rootState.currentAccount.address,
      //   'all',
      //   50)
    }
  }
}
