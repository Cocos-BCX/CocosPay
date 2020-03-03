<template>
  <section>
    <app-header @refresh="refreshAccount" />
    <vue-drawer-layout
      ref="drawer"
      class="drawer"
      @mask-click="closeDrawer"
      :z-index="10"
      :drawer-width="310"
    >
      <div class="drawer-content" slot="drawer">
        <!-- drawer-content -->
        <div class="token-title">
          <span class="token-user">{{$t('title.coin')}}</span>
          <span class="close-drawer" @click="closeDrawer">
            <v-icon name="times" scale="1.4"></v-icon>
          </span>
        </div>
        <div class="assets" id="tokenScroller">
          <ul>
            <li v-for="(item, index) in accountList" :key="index">
              <div class="asset-name">
                <img src="/icons/48px.png" width="30" height="30" alt />
                <span v-if="currentNodeName == 'Test'">{{item[0]}}({{$t('title.test')}})</span>
                <span v-if="currentNodeName == 'Main'">{{item[0]}}</span>
              </div>
              <span class="asset-value">{{item[1]}}</span>
            </li>
          </ul>
          <div class="receiveGAS">
            <div class="contentGAS">
              <ul class="amountContainer">
                <p class="title">GAS</p>
                <p class="percentage">{{totalGASPercentage}}</p>
              </ul>
              <ul class="progressBar">
                <li class="already" :style="{width: totalGASPercentage}"></li>
              </ul>
            </div>
            <!-- <a href="javascript:;" class="receiveBtn" @click="claimVestingBalanceAjax()">立即领取</a>
            <input class="receiveBtn" @click="claimVestingBalanceAjax()" value="立即领取"> -->
            <p class="receiveBtn" @click="claimVestingBalanceAjax()">{{$t('button.receiveImmediately')}}</p>
          </div>
        </div>
      </div>
      <div slot="content">
        <!-- main-content -->
        <section class="app-container">
          <div class="eos-info">
            <div class="more">
              <span>
                <img @click="openDrawer" src="/images/stop-circle.png" alt />
              </span>
            </div>
            <div
              class="account-container"
              @click="accountExpand = !accountExpand"
              v-click-outside="onClickAccountOutside"
            >
              <div class="account">
                <div class="current-account">{{ cocosAccount.accounts }}</div>
                <v-icon class="account-arrow" v-if="accountType === 'wallet'" name="angle-down" />
              </div>
              <ul
                class="account-list"
                v-show="accountExpand && accountType === 'wallet'"
                id="accountScroller"
              >
                <li
                  v-for="(item, index) in accounts"
                  @click.prevent="chooseAccount(item,index)"
                  :key="index"
                >
                  <div class="selected" v-if="item === cocosAccount.accounts">
                    <v-icon class="account-arrow" name="check" />
                  </div>
                  <div class="account-item">
                    <div class="account-name">{{item}}</div>
                  </div>
                </li>
                <div class="dashed-line" v-if="accounts.length > 0"></div>
                <li
                  class="text-center operate-item"
                  @click="$router.push({name:'importAccount'})"
                >{{$t('button.importAccount')}}</li>
              </ul>
            </div>
            <div
              class="more pull-left"
              v-click-outside="onClickMoreOutside"
              @click="moreExpand = !moreExpand"
            >
              <span class="more-btn">
                <img src="/images/list-ul.png" alt />
              </span>
              <ul class="more-list" v-show="moreExpand">
                <!-- <li @click="nameVisible = true">
                  <img class="icon-img" src="/images/edit-icon.png" style="margin-right: 4px;">
                  {{$t('button.editAccountName')}}
                </li>-->
                <li>
                  <a
                    :href="`${accountDetail}/${cocosAccount.accounts}/${accountDetailTail}`"
                    target="_blank"
                  >
                    <img class="icon-img" src="/images/look-icon.png" />
                    {{$t('button.lookAccount')}}
                  </a>
                </li>
                <!-- <li @click="$router.push({name:'importAccount'})" v-if="accountType === 'wallet'">
                  <img class="icon-img" src="/images/edit-icon.png" style="padding-right:5px">
                  {{$t('button.importAccount')}}
                </li>-->
                <li @click="OutPutKeys()">
                  <img class="icon-img" src="/images/export-icon.png" />
                  {{$t('button.exportPrivateKey')}}
                </li>
                <li @click="removePasswordShow = true">
                  <img class="icon-img" src="/images/delete-icon.png" />
                  {{accountType === 'account' ? $t('button.removeAccount') : $t('button.deletedWallet')}}
                </li>
              </ul>
            </div>
          </div>
          <div class="eos-main">
            <img class="eos-logo" src="/icons/logo-middle.png" />
            <h2 class="eos-style mt10 eos-style-color">
              {{cocosCount || 0}} COCOS
              <span class="test-coin" v-if="currentNodeName== 'Test'">({{$t('title.test')}})</span>
            </h2>
            <p class="currency">≈{{COCOSCurrency || 0}}{{currentUnit}}</p>
            <div class="btn-group" style="justify-content: space-around;">
              <el-button class="gradual-button charge" @click="goRecharge">{{$t('button.collection')}}</el-button>
              <el-button class="gradual-button charge" @click="goTransfer">{{$t('button.transfer')}}</el-button>
              <!-- <el-button
                class="gradual-button three-btn"
                @click="goResource"
              >{{$t('button.resource')}}</el-button>-->
            </div>
            <div class="translate-log-title mt15">
              <div class="log-line"></div>
              <div class="log-title">{{$t('title.history')}}</div>
            </div>
          </div>
          <!-- <div class="translate-container">
            <div
              id="perfect-scroll-wrapper"
              class="translate-list"
              ref="scrollWrapper"
              infinite-wrapper
            >
              <action-item v-for="(item, index) in tranfers" :data="item" :key="index"/>
              <infinite-loading
                ref="infiniteLoading"
                @infinite="infiniteHandler"
                spinner="waveDots"
              >
                <span slot="no-more">{{$t('message.noMoreRecord')}}</span>
                <span slot="no-results"></span>
              </infinite-loading>
              <p v-if="noResult" class="no-result text-center">{{$t('message.noRecord')}}</p>
            </div> 
          </div>-->
          <div class="translate-container">
            <div id="perfect-scroll-wrapper" class="translate-list" v-loading="!tranfers.length">
              <action-item v-for="(item, index) in tranfers" :data="item" :key="index" />
              <p
                class="no-result text-center"
                v-if="tranfers.length > 5"
              >{{$t('message.noMoreRecord')}}</p>
            </div>
          </div>
          <k-dialog
            :visible="keyShow"
            :title="$t('button.exportPrivateKey')"
            @close="closeKeyDialog"
          >
            <div class="warning-tip">{{$t('message.warningPrivateKey')}}</div>
            <div class="key-container" v-if="!hiding">{{currentAccountPrivateKey}}</div>
            <el-form class="mt20" v-else ref="form" :model="formData" :rules="formRules">
              <el-form-item prop="password">
                <el-input
                  v-model="formData.password"
                  type="password"
                  :placeholder="$t('placeholder.password')"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="text-center">
              <el-button
                v-if="!hiding"
                v-clipboard:copy="currentAccountPrivateKey"
                v-clipboard:success="copySuccess"
                v-clipboard:error="copyError"
                type="primary"
              >{{$t('button.copy')}}</el-button>
              <el-button
                v-else
                type="primary"
                @click="validatePassword('form')"
              >{{$t('button.sure')}}</el-button>
            </div>
          </k-dialog>
        </section>
      </div>
    </vue-drawer-layout>
    <!-- create account -->
    <el-dialog
      top="15vh"
      center
      :title="$t('title.createAccount')"
      @closed="closedDialog"
      :visible.sync="currentCreateVisible"
    >
      <div class="warm-tip">{{$t('message.savePrivateKey')}}</div>
      <section class="privateKey-area">{{currentCreateAccount.privateKey}}</section>
      <div class="warm-tip">{{$t('message.privateKeyOnly')}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          v-clipboard:copy="currentCreateAccount.privateKey"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
        >{{$t('button.copyPrivate')}}</el-button>
        <!-- <el-button
          class="full-btn gradual-button mt20"
          style="margin-left: 0 !important;"
          @click="sureCreateAccount"
        >{{$t('button.sureCreateAccount')}}</el-button>-->
      </span>
    </el-dialog>
    <!-- 私钥 -->
    <el-dialog
      top="15vh"
      center
      :title="$t('button.exportPrivateKey')"
      @closed="closedAccountDialog"
      :visible.sync="accountKey"
    >
      <div class="warm-tip">{{$t('message.savePrivateKey')}}</div>
      <section v-if="!privateKey">
        <el-input
          class="mt30"
          :placeholder="accountType === 'account' ? $t('placeholder.password') : $t('placeholder.temporary')"
          v-model="password"
          type="password"
        ></el-input>
        <el-button class="mt30 full-btn" type="primary" @click="getLogin()">{{$t('button.confirm')}}</el-button>
      </section>
      <section v-if="privateKey">
        <section v-if="active_private_key" class="privateKey-area">{{active_private_key}}</section>
        <!-- <div class="warm-tip">{{$t('message.privateKeyOnly')}}</div> -->
        <el-button
          class="full-btn"
          type="primary"
          v-clipboard:copy="active_private_key"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
          v-if="active_private_key"
        >{{$t('button.copy')}}{{$t('button.assetPrivateKey')}}</el-button>
        <section v-if="owner_private_key" class="privateKey-area">{{owner_private_key}}</section>
        <el-button
          class="full-btn"
          type="primary"
          v-clipboard:copy="owner_private_key"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
          v-if="owner_private_key"
        >{{$t('button.copy')}}{{$t('button.accountPrivateKey')}}</el-button>
      </section>
    </el-dialog>
    <el-dialog top="15vh" center :title="$t('title.editorAccount')" :visible.sync="nameVisible">
      <el-form :model="newAccountNameForm" :rules="newAccountNameRules">
        <el-form-item prop="newAccountName">
          <el-input v-model="newAccountNameForm.newAccountName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="cancel-btn gradual-button mt20"
          style="margin-left: 0 !important;"
          @click="nameVisible = false"
        >{{$t('button.cancel')}}</el-button>
        <el-button class="confirm-btn" type="primary" @click="modifyName">{{$t('button.save')}}</el-button>
      </span>
    </el-dialog>
    <!-- remove password -->
    <k-dialog
      :visible="removePasswordShow"
      :title="$t('title.removeAccount')"
      @close="removePasswordShow = false"
    >
      <div class="warning-tip">{{$t('confirm.removeAccount')}}</div>
      <!-- <el-form class="mt20" ref="removeForm" :model="formData" :rules="formRules">
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            :placeholder="$t('placeholder.password')"
          ></el-input>
        </el-form-item>
      </el-form>-->
      <div slot="footer" class="text-center">
        <el-button
          class="full-btn"
          type="primary"
          @click="removeCurrentAccount('removeForm')"
        >{{$t('button.sure')}}</el-button>
      </div>
    </k-dialog>
  </section>
</template>
<script>
import AppHeader from "../../components/app-header";
import { mapState, mapMutations, mapActions } from "vuex";
import store from "../../store";
import defaultNetworks from "../../config/networks";
import KDialog from "../../components/dialog/DialogComponent";
import PerfectScrollbar from "perfect-scrollbar";
import ActionItem from "../../components/action-item";
import InfiniteLoading from "vue-infinite-loading";
import { createAccountName } from "../../utils/tools";
import vClickOutside from "v-click-outside";
import utils from "../../../lib/utils";
import InternalMessage from "../../../messages/InternalMessage";
import * as InternalMessageTypes from "../../../messages/InternalMessageTypes";
import { apis } from "../../../lib/BrowserApis";
import Prompt from "../../../models/prompt/Prompt";

import Storage from "../../../lib/storage";
export default {
  name: "home",
  components: {
    KDialog,
    AppHeader,
    ActionItem,
    InfiniteLoading
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.passwordNull")));
      } else {
        callback();
      }
    };
    let accountDetail = "";
    let accountDetailTail = "";
    if ("developmentNewTest" === process.env.NODE_ENV) {
     accountDetail = "https://www.cocosabc.com/accounts/account"
      // accountDetail = "https://explorer.cocosbcx.io/address";
      // accountDetail = "http://easywallet.pro/terminal/#/account";
      // accountDetailTail = "lastOperation";
    } else {
      // accountDetail = "https://explorer.cocosbcx.io/address";
      accountDetail = "https://www.cocosabc.com/accounts/account"
    }

    return {
      currentNodeName: Storage.get("choose_node").name,

      tokenScroller: null,
      transactionsScroller: null,
      accountScroller: null,
      accountExpand: false,
      moreExpand: false,
      hiding: true,
      keyShow: false,
      removePasswordShow: false,
      accountDetail: accountDetail,
      accountDetailTail: accountDetailTail,
      newAccountNameForm: {
        newAccountName: ""
      },
      newAccountNameRules: {
        newAccountName: [
          {
            required: true,
            message: this.$i18n.t("verify.accountNull"),
            trigger: "blur"
          }
        ]
      },
      accountKey: false,
      nameVisible: false,
      pageVo: {
        page: 1,
        pageSize: 4
      },
      formData: {
        password: ""
      },
      transactions: [],
      transactionsAll: [],
      total: 0,
      noResult: false,
      formRules: {
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      currentAccountPrivateKey: "",
      cocosInfo: {},
      tranfers: [],
      accounts: [],
      active_private_key: "",
      owner_private_key: "",
      is_lock: false,
      timer: null,
      password: "",
      privateKey: false,
      accountList: [],

      currentExchange: {},
      currentUnit: '',
      COCOSCurrency: '',

      myAvailableGAS: '',
      totalGAS: '',
      totalGASPercentage: '',

      asset_id_cocos: '',
      receiveCOCOS: '',
      asset_id: '',
      receiveGAS: ''
    };
  },
  computed: {
    ...mapState(["currentAccount", "currentCreateAccount", "accountType"]),
    ...mapState("account", ["balance", "assets"]),
    ...mapState("wallet", ["pwdhash"]),
    ...mapState("trans", ["tranferList"]),
    ...mapState(["cocosAccount", "cocosCount", "COCOSUsd", "currencyList"]),
    currentCreateVisible: {
      get() {
        return this.$store.state.currentCreateVisible;
      },
      set(val) {
        this.setCurrentCreateVisible(val);
      }
    }
    // accountDetail() {
    //   let network = defaultNetworks.networks.find(
    //     ele => ele.type === store.state.currentNetwork.name
    //   );
    //   return network && network.AccountDetailUrl;
    // }
  },
  created() {
    this.currentExchange = this.currencyList.filter( item => {
      return item.currencyT == Storage.get("currentCurrency")
    })
    this.currentUnit = this.currentExchange[0].currencyT
  },
  mounted() {
    this.$i18n.locale = window.localStorage.getItem("lang_type") || "EN";
    this.transactionsScroller = new PerfectScrollbar(
      "#perfect-scroll-wrapper",
      {
        minScrollbarLength: 40,
        maxScrollbarLength: 40
      }
    );
    // console.log(this.$i18n.locale);
    // let isDelete = window.localStorage.getItem("delAccount");
    // if (!isDelete) {
    //   this.removeCurrentAccount();
    //   window.localStorage.setItem("delAccount", "sure");
    // }
    this.subscribeTo();
    // this.loadAccount();
    this.nodeLists();
    this.loadData();
    // this.tokenScroller = new PerfectScrollbar("#tokenScroller", {
    //   minScrollbarLength: 40,
    //   maxScrollbarLength: 40
    // });

    // this.accountScroller = new PerfectScrollbar("#accountScroller", {
    //   minScrollbarLength: 40
    // });
    // fix drawer issue
    const drawerWrap = document.getElementsByClassName("drawer-wrap")[0];
    this.$nextTick(() => {
      drawerWrap.style.left = "-300px";
    });
  },
  directives: {
    clickOutside: vClickOutside.directive
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
      "setAccountType"
    ]),
    ...mapMutations("trans", ["setTranferList"]),
    ...mapMutations("wallet", ["addAccount", "removeAccount", "updateAccount"]),
    ...mapActions("account", [
      "loadAccount",
      "loadingBCXAccount",
      "UserMessage",
      "UserAccount",
      "OutPutKey",
      "logoutBCXAccount",
      "loginBCXAccount",
      "unlockAccount",
      "queryVestingBalance"
    ]),
    ...mapActions("wallet", [
      "deleteWallet",
      "getAccounts",
      "setCurrentAccounts"
    ]),
    ...mapActions(["nodeLists", "init", "subscribeTo", "claimVestingBalance"]),
    ...mapActions("trans", ["queryTranferList", "transferNHAsset"]),
    scrollTopList() {
      this.$el.querySelector("#perfect-scroll-wrapper").scrollTop = 0;
      this.transactionsScroller.update();
    },
    cocosCountFormate: function(val){
      if(this.currentNodeName == "Test") {
        this.COCOSCurrency = 0
        return false
      }
      this.COCOSCurrency = Number(val) * Number(this.COCOSUsd) * Number(this.currentExchange[0].exchange)
      let pointIndex = String(this.COCOSCurrency).indexOf(".")
      if(5 - pointIndex > 0) {
        this.COCOSCurrency = this.COCOSCurrency.toFixed(5 - pointIndex)
      } else {
        this.COCOSCurrency.toFixed(4)
      }
    },
    loadData() {
      let _this = this
      this.scrollTopList();
      this.loadingBCXAccount().then(res => {
        if (res && res.locked) {
          this.$router.replace({ name: "unlock" });
        } else {
          this.transferList();
          this.transferNHAsset();
          this.UserAccount().then(res => {
            if (res.code === 1) {
              if (res.data.GAS) {
                _this.myAvailableGAS = res.data.GAS.toFixed(5) || 0
              }
              this.accountList = Object.entries(res.data);
              this.accountList = this.accountList.filter( item => {
                return item[0] != "GAS"
              })
                let cocosLock = 0
                if (res.asset_locked.locked_total['1.3.0']) {
                  cocosLock = res.asset_locked.locked_total['1.3.0'] || 0
                }
                let myCOCOS = Number(res.data.COCOS - cocosLock).toFixed(5)
                this.cocosCountFormate(myCOCOS || 0)
                this.setCocosCount(myCOCOS || 0);
                this.queryVestingBalanceAjax()
            } else {
              _this.$kalert({
                message:  _this.$i18n.t("chainInterfaceError[500]")
              });
            }
          });
          clearInterval(this.timer);
          this.timer = setInterval(() => {
            this.transferList();
            this.UserAccount().then(res => {
              if (res.code === 1) {
                if (res.data.GAS) {
                  _this.myAvailableGAS = res.data.GAS.toFixed(5) || 0
                }
                this.accountList = Object.entries(res.data);
                this.accountList = this.accountList.filter( item => {
                  return item[0] != "GAS"
                })
                let cocosLock = 0
                if (res.asset_locked.locked_total['1.3.0']) {
                  cocosLock = res.asset_locked.locked_total['1.3.0'] || 0
                }
                let myCOCOS = Number(res.data.COCOS - cocosLock).toFixed(5)
                this.cocosCountFormate(myCOCOS || 0)
                this.setCocosCount(myCOCOS || 0);
                this.queryVestingBalanceAjax()
              } else {
                  _this.$kalert({
                    message:  _this.$i18n.t("chainInterfaceError[500]")
                  });
              }
            });
          }, 5000);
          this.getAccounts().then(res => {
            this.accounts = res.accounts;
            this.setAccountType(res.current_account.mode);
          });
        }
        // this.UserAccount().then(res => {
        //   if (res.code === 1) {
        //     this.cocosCount = res.data.COCOS;
        //   }
        // });
      });
    },
    async claimVestingBalanceAjax(){
      console.log("======")
      let _this = this
      this.closeDrawer()
      let claimVestingBalanceAsset = await this.claimVestingBalance({
        id: _this.asset_id,
        amount: _this.receiveGAS
      })
      if (claimVestingBalanceAsset.code == 1) {
        _this.$kalert({
          message: _this.$i18n.t("alert.SuccessfulReceiving")
        });
        _this.queryVestingBalanceAjax()
      } else {
        
        this.$kalert({
          message: _this.codeErr(claimVestingBalanceAsset)
        });
        
      }
      
    },
    queryVestingBalanceAjax(){
      let _this = this
      // this.UserMessage().then( res => {
      //   console.log("UserMessage")
      //   console.log(res)
      // })
      this.queryVestingBalance().then( res => {
        if (res.code == 1) {
          
          _this.totalGAS = Number(_this.myAvailableGAS)
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type == "cashback_gas") {
              _this.totalGAS = (Number(_this.totalGAS) + Number(res.data[i].return_cash)).toFixed(5)
              _this.receiveGAS = res.data[i].available_balance.amount
              _this.asset_id = res.data[i].id
              break;
            }
          }
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type == "cashback_vb") {
              _this.receiveCOCOS = res.data[i].available_balance.amount
              _this.asset_id_cocos = res.data[i].id
              break;
            }
          }
          _this.totalGASPercentage = (_this.myAvailableGAS/_this.totalGAS * 100.00).toFixed(0) + '%'
        }
      })
    },
    listShow() {
      let _this = this
      this.UserAccount().then(res => {
        if (res.code === 1) {
          this.accountList = Object.entries(res.data);
          this.accountList = this.accountList.filter( item => {
            return item[0] != "GAS"
          })
          this.queryVestingBalanceAjax()
        } else {
            _this.$kalert({
              message:  _this.$i18n.t("chainInterfaceError[500]")
            });
        }
      });
    },
    transferList() {
      this.setTranferList({
        limit: 50,
        startId: "1.11.0",
        endId: ""
      });
      this.queryTranferList().then(res => {
        this.tranfers = res;
      });
    },
    //倒出私钥
    OutPutKeys() {
      this.accountKey = true;
      this.password = "";
    },
    showPrivateKey() {
      let _this = this
      this.OutPutKey().then(res => {
        if (res.code === 1) {
          this.active_private_key = res.data.active_private_keys[0];
          this.owner_private_key = res.data.owner_private_keys[0];
          this.privateKey = true;
        } else {
            _this.$kalert({
              message:  _this.$i18n.t("chainInterfaceError[500]")
            });
        }
      });
    },
    getLogin() {
      let _this = this
      if (!this.password) {
        this.$kalert({
          message: this.$i18n.t("verify.passwordNull")
        });
        return;
      }
      this.setAccount({
        account: this.cocosAccount.accounts,
        password: this.password
      });
      if (this.accountType === "account") {
        this.loginBCXAccount().then(res => {
          this.setAccount({
            account: this.cocosAccount.accounts,
            password: ""
          });
          if (res.code === 1) {
            this.showPrivateKey();
          } else {
            if (res.message.indexOf("wrong password") > -1 || res.message.indexOf("password error") > -1 ) {
              this.$kalert({
                message:  this.$i18n.t("error[105]")
              });
            } else {
              this.$kalert({
                message:  _this.$i18n.t("chainInterfaceError[500]")
              });
            }
          }
        });
      } else {
        this.unlockAccount().then(res => {
          this.setAccount({
            account: this.cocosAccount.accounts,
            password: ""
          });
          if (res.code === 1) {
            this.showPrivateKey();
          } else {
            if (res.message.indexOf("wrong password") > -1 || res.message.indexOf("password error") > -1 ) {
              this.$kalert({
                message:  this.$i18n.t("error[105]")
              });
            } else {
              this.$kalert({
                message:  _this.$i18n.t("chainInterfaceError[500]")
              });
            }
          }
        });
      }
    },
    closedAccountDialog() {
      this.accountKey = false;
      this.privateKey = false;
    },
    closedDialog() {
      this.setCurrentCreateAccount({ privateKey: "", address: "", name: "" });
    },
    copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
      setTimeout(() => {
        this.keyShow = false;
        this.hiding = true;
        this.formData.password = "";
      }, 1000);
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    onClickMoreOutside() {
      this.moreExpand = false;
    },
    onClickAccountOutside() {
      this.accountExpand = false;
    },
    modifyName() {
      this.currentAccount.name = this.newAccountNameForm.newAccountName;
      this.updateAccount(this.currentAccount);
      this.newAccountNameForm.newAccountName = "";
      this.nameVisible = false;
    },
    createAccount() {
      const account = utils.generateAccount();
      this.setCurrentCreateAccount({
        privateKey: account.privateKey,
        address: account.address,
        name: createAccountName()
      });
      this.setCurrentCreateVisible(true);
    },
    importAccount() {
      this.$router.push({ name: "importAccount" });
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
      });
      // if (this.accountType === "account") {
      //   this.logoutBCXAccount().then(res => {
      //     if (res.code === 1) {
      //       this.setLogin(false);
      //       this.setIsAccount(false);
      //       this.setAccount({
      //         account: "",
      //         password: ""
      //       });
      //       this.$router.replace({ name: "initAccount" });
      //     }
      //   });
      // } else {
      //   this.deleteWallet().then(res => {
      //     if (res.code === 1) {

      //       this.$router.replace({ name: "initAccount" });
      //     }
      //   });
      // }

      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     if (utils.hashPassword(this.formData.password) === this.pwdhash) {
      //       this.removeAccount(this.currentAccount);
      //       this.formData.password = "";
      //       this.removePasswordShow = false;
      //       if (this.accounts.length > 0) {
      //         this.setCurrentAccount(this.accounts[0]);
      //         this.selectAccount(this.accounts[0]);
      //       } else {
      //         this.setCurrentAccount({});
      //         this.$router.replace({ name: "initAccount" });
      //       }
      //     } else {
      //       this.$kalert({
      //         message: this.$i18n.t("alert.passwordError")
      //       });
      //     }
      //   }
      // });
    },
    chooseAccount(account, index) {
      let _this = this
      this.setCurrentAccounts({ account }).then(res => {
        if (res.code === 1) {
          this.setAccount({
            account: account,
            password: ""
          });
        } else {
            this.$kalert({
              message:  _this.$i18n.t("chainInterfaceError[500]")
            });
        }
        this.loadData();
      });
    },

    goRecharge() {
      this.$router.push({ name: "recharge" });
    },
    goTransfer() {
      this.$router.push({ name: "transfer" });
    },
    jumpTransfer(key) {
      this.$router.push({ name: "transfer", params: { assetKey: key } });
    },
    goResource() {
      this.$router.push({ name: "resource" });
    },
    validatePassword(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (utils.hashPassword(this.formData.password) === this.pwdhash) {
            // request private key
            const keystore = this.currentAccount.keystore;
            InternalMessage.widthPayload(InternalMessageTypes.DECRYPTKEYSTORE, {
              keystore: keystore
            })
              .send()
              .then(res => {
                const { privateKey } = res;
                this.currentAccountPrivateKey = privateKey;
                this.hiding = false;
              });
          } else {
            this.$kalert({
              message: this.$i18n.t("alert.passwordError")
            });
          }
        }
      });
    },
    closeKeyDialog() {
      this.keyShow = false;
      this.hiding = true;
      this.formData.password = "";
    },
    openDrawer() {
      this.listShow();
      this.$refs.drawer.toggle(true);
    },
    closeDrawer() {
      this.$refs.drawer.toggle(false);
    },
    refreshAccount() {
      this.loadData();
      // this.loadAccount();
      // this.refreshTransactions();
    },
    async infiniteHandler($state) {
      if (!this.tranfers.length) {
        this.setTranferList({
          limit: 50,
          startId: "1.11.0",
          endId: ""
        });
        await this.queryTranferList().then(res => {
          this.tranfers = this.tranfers.concat(res);
          $state.loaded();
        });
      } else {
        if (
          this.tranferList.endId === this.tranfers[this.tranfers.length - 1].id
        ) {
          this.tranfers.splice(this.tranfers.length - 1, 1);
          $state.complete();
          return;
        } else {
          this.setTranferList({
            limit: 5,
            startId: "1.11.0",
            endId: this.tranfers[this.tranfers.length - 1].id
          });
          await this.queryTranferList().then(res => {
            this.tranfers = this.tranfers.concat(res);
            $state.loaded();
          });
        }
      }

      // if (this.transactionsAll.length === 0) {
      //   const result = await this.loadTransactionsByNode();
      //   this.total = result.length;
      //   this.transactionsAll = result;
      // }
      if (this.transactions.length === this.total) {
        $state.complete();
      } else {
        this.transactions = this.transactions.concat(
          this.transactionsAll.slice(
            this.transactions.length,
            this.transactions.length + 10
          )
        );
        $state.loaded();
      }
      this.$store.commit("loading", false);
      this.$nextTick(() => {
        this.transactionsScroller.update(this.$refs.scrollWrapper);
      });
    },
    refreshTransactions() {
      this.pageVo.page = 1;
      this.transactions = [];
      this.transactionsAll = [];
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset");
      });
    },
    // 错误提示
    codeErr(res){
      let _this = this;
      let message = ""
      if (res.code == 112) {
        message = _this.$i18n.t('error[112]')
      } else if (res.code == 105) {
        message = _this.$i18n.t('error[112]')
      } else if (res.code == 402) {
        return false
      } else {
        if (res.message.indexOf('Parameter is missing') > -1) {
          message = _this.$i18n.t('error[307]')
        } else if (res.message.indexOf("world view name can't start whith a digit")>-1) {
          message = _this.$i18n.t('error[302]')
        } else if (res.message.indexOf("Please login first")>-1) {
          message = _this.$i18n.t('error[302]')
        } else if (res.message.indexOf('Insufficient Balance') > -1) {
          message = _this.$i18n.t('alert.transferFail')
        } else if (res.message.indexOf('You\'re not a nh asset creator')>-1) {
          message = _this.$i18n.t('error[303]')
        } else if (res.message.indexOf("world view name can't start whith a digit")>-1) {
          message = _this.$i18n.t('error[302]')
        } else if (res.message.indexOf("Most likely a uniqueness constraint is violated")>-1) {
          message = _this.$i18n.t('error[304]')
        } else if (res.message.indexOf("missing required owner authority")>-1) {
          message = _this.$i18n.t('error[304]')
        } else if (res.message.indexOf("locked->value >= 0")>-1) {
          message = _this.$i18n.t('error[305]')
        } else if (res.message.indexOf("Wrong password")>-1) {
          message = _this.$i18n.t('error[105]')
        } else if (res.message.indexOf("Account does not exist")>-1) {
          message = _this.$i18n.t('error[306]')
        } else if (res.message.indexOf("No reward available")>-1) {
          message = _this.$i18n.t('error[307]')
        } else if (res.message.indexOf("Please try again")>-1) {
          // 请在5秒钟后再试
          // Please try again in 5 seconds
          message = _this.$i18n.t('error[181]')
        } else {
          message = _this.$i18n.t('chainInterfaceError[500]')
        }
      }
      
      return message
    }
  },
  destroyed() {
    if (this.timer) clearInterval(this.timer);
  },
  watch: {
    transactions: function(transactions) {
      this.noResult = !(transactions.length > 0);
    },
    nameVisible: function(visible) {
      if (visible) {
        this.newAccountNameForm.newAccountName = this.currentAccount.name;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
@import "../../styles/home.scss";
.privateKey-area {
  background-color: $bg-shallow;
  font-size: 12px;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}
.currency{
  width: 100%;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size:16px;
  font-weight:400;
  color: #7147FE;
  margin-bottom: 8px;
}


.receiveGAS{
  padding: 0 15px;
  margin-top: 20px;
  height:76px;
  background:rgba(245,247,250,1);
  border-radius:4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contentGAS{
  width: 130px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-left: 20px;
}
.contentGAS .amountContainer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-top: 0;
}
.contentGAS .amountContainer .title{
  height: 20px;
  line-height: 20px;
  font-size:14px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.contentGAS .amountContainer .title{
  height: 20px;
  line-height: 20px;
  font-size:14px;
  font-weight:400;
  font-weight:400;
  color:rgba(113,71,254,1);
}
.contentGAS .amountContainer .percentage{
  height: 20px;
  line-height: 20px;
  font-size:14px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.contentGAS .progressBar{
  width: 100%;
  height: 10px;
  background:rgba(189,203,237,1);
  border-radius:5px;
  position: relative;
  margin-top: 10px;
  padding: 0;
}
.contentGAS .progressBar .already{
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  background:rgba(72,105,220,1);
  border-radius:5px;
  padding: 0;
}
.receiveBtn{
  width:80px;
  height:32px;
  line-height: 32px;
  background:rgba(72,105,220,1);
  border-radius:17px;
  font-size:12px;
  font-weight:400;
  color:rgba(255,255,255,1);
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  outline:none;
}
</style>
