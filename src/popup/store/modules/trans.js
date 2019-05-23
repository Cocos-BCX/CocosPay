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
    async callContractFunction({
      commit,
      state
    }, params) {
      try {
        commit('loading', true, {
          root: true
        })
        let resData;
        await NewBCX.callContractFunction(params).then((res) => {
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
    //查询转账列表
    async queryTranferList({
      commit,
      state,
      rootState
    }) {
      try {
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
        await NewBCX.queryAccountOperations(params).then((res) => {
          commit('loading', false, {
            root: true
          })
          if (res.code === 1) {
            res.data.map((item) => {
              if (item.type === 'transfer') {
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
