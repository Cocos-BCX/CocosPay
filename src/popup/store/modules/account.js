import utils from '../../../lib/utils'
import bcx from '../../utils/bcx'
import Alert from '../../components/kalert/function'
import {
  HISTORY_REQUEST_LIMIT,
  HISTORY_SHOW_LIMIT
} from '../../../lib/constants'
import I18n from '../../languages'
import CommonJs from '../../config/common'
import async from '../../../lib/mapTransaction/index';

let NewBCX = bcx.getBCXWithState();
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
          autoLogin: true
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
            // Alert({
            //   message: CommonJs.getI18nMessages(I18n).error[res.code]
            // })
          } else {
            commit('setAccountType', '', {
              root: true
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
    }, params) {
      commit('loading', true, {
        root: true
      })
      try {
        var resData
        setTimeout(() => {
          commit('loading', false, {
            root: true
          })
          if (!resData) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[150]
            })
          }
        }, 8000)
        await NewBCX.importPrivateKey({
          privateKey: rootState.privateKeys,
          password: rootState.temporaryKeys,
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            if (params && params.has_import && res.code !== 160) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).verify.walletPassword
              })
              resData = {
                code: 150
              }
              return resData
            }
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          } else {
            commit('setAccountType', 'wallet', {
              root: true
            })
          }
          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },
    async unlockAccount({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData
        await NewBCX.unlockAccount({
          password: rootState.cocosAccount.passwords
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1 && !rootState.loginNoAlert) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          commit('setLoginNoAlert', false, {
            root: true
          })
          resData = res
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
          } else {
            commit('setAccountType', 'account', {
              root: true
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
      commit('loading', true, {
        root: true
      })
      try {
        await NewBCX.getPrivateKey().then(res => {
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
  }
}
