<template>
  <div id="app">
    <div class="loading" v-show="loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
        <path
          d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
        ></path>
      </svg>
    </div>
    <transition>
      <router-view :key="key"/>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { COCOSconversion, ExchangeRate } from "../lib/BusinessInterface"
import Storage from "../lib/storage";
import bcx from './utils/bcx'
export default {
  name: "root",
  created(){
    let isVersionUpdate = localStorage.getItem('isVersionUpdate')
    if (isVersionUpdate) {
    } else {
      this.removeCurrentAccount()
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentAccount",
      "setCurrentCreateAccount",
      "setCurrentCreateVisible",
      "setLogin",
      "setIsAccount",
      "setAccount",
      "setCocosCount",
      "setAccountType",
      "setCOCOSUsd",
      "setCurrencyList"
    ]),
    ...mapActions("wallet", ["deleteWallet"]),
    ...mapActions("account", ["logoutBCXAccount"]),
    COCOSconversionAjax(){
      let _this = this
      COCOSconversion().then( res => {
        _this.setCOCOSUsd(res.data[0].price_usd)
        
        _this.ExchangeRateAjax()
      })
    },
    ExchangeRateAjax(){
      ExchangeRate().then( res => {
        console.log("ExchangeRate")
        if (res.status == '200') {
          let currencyList = res.data.data.result
          let currencyListStore = []
          for (let i = 0; i < currencyList.length; i++) {
            let currencyListStoreEle = {}
            if (currencyList[i].currencyT == 'USD') {
              currencyListStoreEle.currencyT = currencyList[i].currencyT
              currencyListStoreEle.currencyT_Name = currencyList[i].currencyT_Name
              currencyListStoreEle.exchange = "1"
            } else {
              currencyListStoreEle.currencyT = currencyList[i].currencyT
              currencyListStoreEle.currencyT_Name = currencyList[i].currencyT_Name
              currencyListStoreEle.exchange = currencyList[i].exchange
            }
            currencyListStore.push(currencyListStoreEle)
          }
          Storage.set("currentCurrency", "CNY")
          this.setCurrencyList(currencyListStore)
          // console.log(res.data[0].price_usd)
        }
      })
    },
    removeCurrentAccount(formName) {
      Promise.all([this.deleteWallet(), this.logoutBCXAccount()]).then(res => {
      window.localStorage.setItem("delAccount", "sure");
        this.setLogin(false);
        this.setIsAccount(false);
        this.setAccount({
          account: "",
          password: ""
        });
        this.$router.replace({ name: "initAccount" });
        localStorage.setItem('isVersionUpdate', true)
      });
    },
    
  },
  computed: {
    ...mapState(["loading", "COCOSUsd", "currencyList"]),
    key: function() {
      return this.$route.name !== undefined
        ? this.$route.name + "" + new Date()
        : this.$route + "" + new Date();
    }
  }
};
</script>
<style lang="scss" scoped>

.el-select .el-input .el-select__caret{
  color: #000 !important;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.icon {
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  width: 1em;
  height: 1em;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 40px;
  color: #616161;
  z-index: 10;
}
.loading .icon {
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}
</style>
