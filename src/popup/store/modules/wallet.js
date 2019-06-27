import InternalMessage from '../../../messages/InternalMessage'
import * as InternalMessageTypes from '../../../messages/InternalMessageTypes'
import utils from '../../../lib/utils'
import Alert from '../../components/kalert/function'
import bcx from '../../utils/bcx'
let NewBCX = bcx.getBCXWithState();
import CommonJs from '../../config/common'
import I18n from '../../languages'
export default {
  namespaced: true,
  state: {
    password: '',
    pwdhash: '',
    accountNo: 1,
    lockTime: 60 * 30, // 30 minute will autolock
    accounts: [],
    whiteList: [],
    contractWhiteList: [],
    NHOrderWhiteList: [],
    prompt: null,
  },

  mutations: {
    initAccount(state, account) {
      state.accounts = [account]
    },
    setPassword(state, password) {
      state.pwdhash = utils.hashPassword(password)
      state.password = ''
    },
    setLockTime(state, time) {
      state.lockTime = time
    },
    addAccount(state, account) {
      state.accounts = [...state.accounts, account]
      state.accountNo++
    },
    updateAccount(state, account) {
      state.accounts = state.accounts.map(ele => {
        if (account.address === ele.address) {
          ele = account
        }
        return ele
      })
    },
    removeAccount(state, account) {
      state.accounts = state.accounts.filter(ele => {
        return ele.address !== account.address
      })
    },

    addWhiteList(state, white) {
      state.whiteList = [...state.whiteList, white]
    },
    addContractWhiteList(state, white) {
      state.contractWhiteList = [...state.contractWhiteList, white]
    },
    addNHOrderWhiteList(state, white) {
      state.NHOrderWhiteList = [...state.NHOrderWhiteList, white]
    },
    removeNHOrderWhiteList(state, white) {
      state.NHOrderWhiteList = state.NHOrderWhiteList.filter(ele => {
        return ele.id !== white.id
      })
    },
    removeWhiteList(state, white) {
      state.whiteList = state.whiteList.filter(ele => {
        return ele.id !== white.id
      })
    },
    removeContractWhiteList(state, white) {
      state.contractWhiteList = state.contractWhiteList.filter(ele => {
        return ele.id !== white.id
      })
    },
    pushPrompt(state, prompt) {
      state.prompt = prompt
    },
    upgradeAccounts(state, password) {
      for (var i = 0, len = state.accounts.length; i < len; i++) {
        if (state.accounts[i].privateKey) {
          let keystore = utils.encrypt(state.accounts[i].privateKey, password)
          state.accounts[i].keystore = keystore
          state.accounts[i].privateKey = ''
        }
      }
    },
    changePasswordAccounts(state, pwd) {
      const {
        oldpwd,
        newpwd
      } = pwd
      for (var i = 0, len = state.accounts.length; i < len; i++) {
        if (state.accounts[i].keystore) {
          let privateKey = utils.decrypt(state.accounts[i].keystore, oldpwd)
          state.accounts[i].keystore = utils.encrypt(privateKey, newpwd)
        }
      }
    }
  },

  actions: {
    async setSeed({
      commit
    }, password) {
      InternalMessage.widthPayload(InternalMessageTypes.SET_SEED, password).send()
    },
    async lock() {
      InternalMessage.widthPayload(InternalMessageTypes.SET_SEED, '').send()
    },
    async isUnlocked() {
      return InternalMessage.signal(InternalMessageTypes.IS_UNLOCKED).send()
    },
    async setAutoLock({
      commit
    }, time) {
      await InternalMessage.widthPayload(InternalMessageTypes.SET_TIMEOUT, time).send()
      commit('setLockTime', time)
    },
    async pushPrompt({
      state,
      commit
    }, prompt) {
      if (state.prompt) state.prompt.responder && state.prompt.responder(null)
      commit('pushPrompt', prompt)
    },
    // 钱包模式注册
    async WalletBCXAccount({
      commit,
      state,
      rootState
    }) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData
        await NewBCX.createAccountWithWallet({
          account: rootState.cocosAccount.accounts,
          password: rootState.cocosAccount.passwords
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          } else {
            commit('setAccountType', 'wallet', {
              root: true
            })
          }
          resData = res
        })
        return resData
      } catch (e) {
        return e
      }
    },

    // 查看钱包账户
    async getAccounts({
      commit
    }) {
      try {
        return NewBCX.getAccounts()
      } catch (e) {
        return e
      }
    },
    // 切换钱包账户
    async setCurrentAccounts({
      commit
    }, account) {
      commit('loading', true, {
        root: true
      })
      try {
        let resData
        await NewBCX.setCurrentAccount(account).then(res => {
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
    // 删除钱包
    async deleteWallet({
      commit
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData
        await NewBCX.deleteWallet().then(res => {
          commit('loading', false, {
            root: true
          })
          commit('setAccountType', '', {
            root: true
          })
          resData = res
          if (res.code !== 1) {
            // Alert({
            //   message: CommonJs.getI18nMessages(I18n).error[res.code]
            // })
          }
        })
        return resData
      } catch (e) {
        return e
      }
    },
    // 私钥登录
    async importPrivateKey({
      commit,
      state,
      rootState
    }) {
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
              message: CommonJs.getI18nMessages(I18n).error[109]
            })
          }
        }, 8000)
        await NewBCX.importPrivateKey({
          privateKey: rootState.privateKeys,
          password: rootState.cocosAccount.passwords
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          if (res.code === 1) {
            commit('setIsAccount', true, {
              root: true
            })
            commit('setLogin', true, {
              root: true
            })
            if (rootState.accountType !== 'account') {
              commit('setAccountType', 'wallet', {
                root: true
              })
            }
          } else {
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
    // 查询账户状态
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
        return data
      } catch (e) {
        return e
      }
    },
    // 恢复钱包
    async RestoreWallet({
      commit,
      state,
      rootState
    }) {
      let resData
      commit('loading', true, {
        root: true
      })
      try {
        await NewBCX.restoreWallet({
          password: rootState.cocosAccount.passwords
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
    // 导出私钥
    async OutWalletPutKey({
      commit
    }) {
      let resData
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
    }
  },
}
