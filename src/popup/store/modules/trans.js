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
    //代币转账
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
    //获取转账手续费
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
          onlyGetFee: true
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
    // 查询手续费
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
    //解析memo
    async decodeMemo({
      commit,
      state
    }, params) {
      return await NewBCX.decodeMemo(params)
    },
    //合约调用
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
    //购买NH资产
    async fillNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.fillNHAssetOrder(params).then(res => {
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
    //取消NH资产订单
    async cancelNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.cancelNHAssetOrder(params).then(res => {
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
    //创建NH订单
    async creatNHAssetOrder({
      commit,
      state
    }, params) {
      try {
        let resData;
        await NewBCX.creatNHAssetOrder(params).then(res => {
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
    //转移NH资产
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
    //合约手续费查询
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
    //查询链上资产精度
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
    //查询转账列表
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
