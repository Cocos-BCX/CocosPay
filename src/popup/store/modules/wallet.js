import InternalMessage from '../../../messages/InternalMessage'
import * as InternalMessageTypes from '../../../messages/InternalMessageTypes'
import utils from '../../../lib/utils'

export default {
  namespaced: true,
  state: {
    password: '',
    pwdhash: '',
    accountNo: 1,
    lockTime: 60 * 30, // 30 minute will autolock
    accounts: [],
    whiteList: [],
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
    removeWhiteList(state, white) {
      state.whiteList = state.whiteList.filter(ele => {
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
    }
  }
}
