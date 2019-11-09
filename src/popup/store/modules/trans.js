import I18n from '../../languages'
import bcx from '../../utils/bcx'
import CommonJs from '../../config/common'
import Alert from '../../components/kalert/function'

let NewBCX = bcx.getBCXWithState();
export default {
  namespaced: true,

  state: {
    tranferInfo: {
      toAccount: '',
      amount: '',
      memo: '',
      coin: ''
    },
    tranferList: {
      limit: '',
      startId: '',
      endId: ''
    },
  },

  mutations: {
    setAccount(state, tranferInfo) {
      state.tranferInfo = tranferInfo;
    },
    setTranferList(state, tranferList) {
      state.tranferList = tranferList
    }
  },
  actions: {
    // transfer Asset
    async tranferBCX({
      commit,
      state,
      rootState
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData;
        await NewBCX.transferAsset({
          fromAccount: rootState.cocosAccount.accounts,
          toAccount: state.tranferInfo.toAccount,
          amount: state.tranferInfo.amount,
          memo: state.tranferInfo.memo,
          assetId: state.tranferInfo.coin,
          isPropose: false,
          onlyGetFee: false
        }).then(res => {
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
    //get transfer asset fee
    async tranferBCXFree({
      commit,
      state,
      rootState
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData;
        await NewBCX.transferAsset({
          fromAccount: rootState.cocosAccount.accounts,
          toAccount: state.tranferInfo.toAccount,
          amount: state.tranferInfo.amount,
          memo: state.tranferInfo.memo,
          assetId: state.tranferInfo.coin,
          isPropose: false,
          // onlyGetFee: true
        }).then(res => {

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
    // queryTransactionBaseFee
    async queryTranferRate({
      commit
    }, params) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData;
        await NewBCX.queryTransactionBaseFee({
          transactionType: 'transfer',
          feeAssetId: params.feeAssetId,
        }).then(res => {
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
    //decodeMemo
    async decodeMemo({
      commit,
      state
    }, params) {
      return await NewBCX.decodeMemo(params)
    },
    //callContractFunction
    async callContractFunction({
      commit,
      state
    }, params) {
      try {
        commit('loading', true, {
          root: true
        })
        params.onlyGetFee = false
        let resData;
        await NewBCX.callContractFunction(params).then(res => {
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
    // buy NHAsset
    async fillNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.fillNHAssetOrder(params).then(res => {
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
    //cancelNHAssetOrder
    async cancelNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.cancelNHAssetOrder(params).then(res => {
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
    //creatNHAssetOrder
    async creatNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.creatNHAssetOrder(params).then(res => {
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

    // registerCreator
    async registerCreator() {
      try {
        let resData;
        await NewBCX.registerCreator().then(res => {
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          console.log("registerCreatorrrr", res);
          resData = res;
        })
        return resData
      } catch (e) {
        return e
      }
    },

    //creatWorldView
    async creatWorldView({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.creatWorldView(params).then(res => {
          console.log("creatWorldView---trans", res);
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

    //creatNHAsset
    async creatNHAsset({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.creatNHAsset(params).then(res => {
          console.log("creatNHAsset", res);
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

    //deleteNHAsset
    async deleteNHAsset({
      commit,
      state
    }, params) {
      try {
        let resData;
        // let NHAssetIds = '4.2.57326'

        await NewBCX.deleteNHAsset({
          NHAssetIds: params.NHAssetIds
        }).then(res => {
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
    //publishVotes
    async publishVotes({
      commit,
      state
    }, params) {
      try {
        let resData;
        // let NHAssetIds = '4.2.57326'
        console.log(params);
        console.log(params.type);
        console.log(params.vote_ids);
        console.log(params.votes);
        console.log(NewBCX);
        
        
        await NewBCX.publishVotes({
          type: params.type.toString(),
          vote_ids:params.vote_ids,
          votes:params.votes.toString()
        }).then(res => {
          console.log(res);
          
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
    //transferNHAsset
    async transferNHAsset({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.transferNHAsset({
          toAccount: params.toAccount,
          NHAssetIds: params.NHAssetIds
        }).then(res => {
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
    //callContractFunctionFree
    async callContractFunctionFree({
      commit,
      state
    }, params) {
      try {
        commit('loading', true, {
          root: true
        })
        params.onlyGetFee = true
        let resData;
        await NewBCX.callContractFunction(params).then(res => {
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
    // queryAsset
    async queryAsset({
      commit
    }, params) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData
        await NewBCX.queryAssets({
          assetId: params.assetId,
        }).then(res => {
          commit('loading', false, {
            root: true
          })
          if (res.code !== 1) {
            Alert({
              message: CommonJs.getI18nMessages(I18n).error[res.code]
            })
          }
          resData = res.data[0]
        })
        return resData
      } catch (e) {

      }
    },
    //queryTranferList
    async queryTranferList({
      commit,
      state,
      rootState
    }) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData = [];
        let params = {
          account: rootState.cocosAccount.accounts,
          limit: state.tranferList.limit,
          startId: state.tranferList.startId || '',
          endId: state.tranferList.endId || ''
        }
        if (!params.endId) {
          delete params.endId
        }
        if (!params.startId) {
          delete params.endId
        }
        await NewBCX.queryAccountOperations(params).then(res => {
          console.log(res);

          commit('loading', false, {
            root: true
          })
          if (res.code === 1) {
            res.data.map((item) => {
              if (item.type === 'transfer' || item.type === 'call_contract_function' || item.type === 'transfer_nh_asset') {
                resData.push(item)
              }
            })
          } else {
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
  }
}
