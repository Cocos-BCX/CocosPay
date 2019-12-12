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
    //createAccountWithPassword
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
        // console.log("loadBCXAccount => createAccountWithPassword   账户模式")
        // console.log("createAccountWithPassword============params")
        // console.log(rootState.cocosAccount.accounts)
        // console.log(rootState.cocosAccount.passwords)
        await NewBCX.createAccountWithPassword({
          account: rootState.cocosAccount.accounts,
          password: rootState.cocosAccount.passwords,
          autoLogin: true
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            // Alert({
            //   message: CommonJs.getI18nMessages(I18n).error[res.code]
            // })
            
            if (res.message.indexOf('illegal request parameter') > -1) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).chainInterfaceError[400001]
              });
            } else if (res.message.indexOf('not cheap') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[400002]
              });
            } else if (res.message.indexOf('the account name already exists') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[400003]
              });
            } else if (res.message.indexOf('no auth') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401001]
              });
            } else if (res.message.indexOf('You already register too many free account') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401002]
              });
            } else if (res.message.indexOf('Account creation limit reached') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401003]
              });
            } else {
              // Alert({
              //   message:res.message
              // })
              if (CommonJs.getI18nMessages(I18n).error[res.code]) {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[res.code]
                })
              } else {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[0]
                })
              }
            }
            
          }
          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },
    //logout
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
    //changePassword
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
    //login with private key
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
        // console.log("setPrivateKeys => importPrivateKey")
        // console.log("importPrivateKey=======================params")
        // console.log(rootState.privateKeys)
        // console.log(rootState.temporaryKeys)
        await NewBCX.importPrivateKey({
          privateKey: rootState.privateKeys,
          password: rootState.temporaryKeys,
        }).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            if (params && params.has_import && res.code !== 160) {
              // Alert({
              //   message: CommonJs.getI18nMessages(I18n).verify.walletPassword
              // })
              resData = {
                code: 150
              }
              Alert({
                message: CommonJs.getI18nMessages(I18n).error[res.code]
              })
              return resData
            } else {
              
              if (CommonJs.getI18nMessages(I18n).error[res.code]) {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[res.code]
                })
              } else {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[0]
                })
              }
            }
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
    //login
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
        // console.log("loginBCXAccount => passwordLogin")
        // console.log("=======passwordLogin==========params=======")
        // console.log(rootState.cocosAccount.accounts)
        // console.log(rootState.cocosAccount.passwords)
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
    // get account status
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
    //get account info
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
    //queryAccountBalances
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
    // getPrivateKey
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
            
            if (res.message.indexOf('illegal request parameter') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[400001]
              });
            } else if (res.message.indexOf('not cheap') > -1) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).chainInterfaceError[400002]
              });
            } else if (res.message.indexOf('the account name already exists') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[400003]
              });
            } else if (res.message.indexOf('no auth') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401001]
              });
            } else if (res.message.indexOf('You already register too many free account') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401002]
              });
            } else if (res.message.indexOf('Account creation limit reached') > -1) {
              Alert({
                message:  CommonJs.getI18nMessages(I18n).chainInterfaceError[401003]
              });
            } else {
              // Alert({
              //   message: CommonJs.getI18nMessages(I18n).error[res.code]
              // })
              if (CommonJs.getI18nMessages(I18n).error[res.code]) {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[res.code]
                })
              } else {
                Alert({
                  message: CommonJs.getI18nMessages(I18n).error[0]
                })
              }
            }
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
