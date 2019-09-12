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
                <span>{{item[0]}}({{$t('title.test')}})</span>
              </div>
              <span class="asset-value">{{item[1]}}</span>
            </li>
          </ul>
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
            <h2 class="eos-style mt15">
              {{cocosCount || 0}} COCOS
              <span class="test-coin">({{$t('title.test')}})</span>
            </h2>
            <div class="btn-group" style="justify-content: space-around;">
              <el-button class="gradual-button charge" @click="goRecharge">{{$t('button.recharge')}}</el-button>
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
        >{{$t('button.copy')}}active_key</el-button>
        <section v-if="owner_private_key" class="privateKey-area">{{owner_private_key}}</section>
        <el-button
          class="full-btn"
          type="primary"
          v-clipboard:copy="owner_private_key"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
          v-if="owner_private_key"
        >{{$t('button.copy')}}owner_key</el-button>
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
      accountDetail = "https://explorer.cocosbcx.io/address";
      // accountDetail = "http://easywallet.pro/terminal/#/account";
      // accountDetailTail = "lastOperation";
    } else {
      accountDetail = "https://explorer.cocosbcx.io/address";
    }

    return {
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
      accountList: []
    };
  },
  computed: {
    ...mapState(["currentAccount", "currentCreateAccount", "accountType"]),
    ...mapState("account", ["balance", "assets"]),
    ...mapState("wallet", ["pwdhash"]),
    ...mapState("trans", ["tranferList"]),
    ...mapState(["cocosAccount", "cocosCount"]),
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
  async created() {},
  mounted() {
    this.$i18n.locale = window.localStorage.getItem("lang_type")||"ZH";
    this.transactionsScroller = new PerfectScrollbar(
      "#perfect-scroll-wrapper",
      {
        minScrollbarLength: 40,
        maxScrollbarLength: 40
      }
    );
    console.log(this.transactionsScroller);
    console.log(this.$i18n.locale);

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
      "unlockAccount"
    ]),
    ...mapActions("wallet", [
      "deleteWallet",
      "getAccounts",
      "setCurrentAccounts"
    ]),
    ...mapActions(["nodeLists", "init", "subscribeTo"]),
    ...mapActions("trans", ["queryTranferList", "transferNHAsset"]),
    scrollTopList() {
      this.$el.querySelector("#perfect-scroll-wrapper").scrollTop = 0;
      this.transactionsScroller.update();
    },
    loadData() {
      this.scrollTopList();
      this.loadingBCXAccount().then(res => {
        if (res && res.locked) {
          this.$router.replace({ name: "unlock" });
        } else {
          this.transferList();
          this.transferNHAsset();
          this.UserAccount().then(res => {
            if (res.code === 1) {
              this.accountList = Object.entries(res.data);
              this.setCocosCount(res.data.COCOS);
            }
          });
          clearInterval(this.timer);
          this.timer = setInterval(() => {
            this.transferList();
            this.UserAccount().then(res => {
              if (res.code === 1) {
                this.accountList = Object.entries(res.data);
                this.setCocosCount(res.data.COCOS);
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
    listShow() {
      this.UserAccount().then(res => {
        if (res.code === 1) {
          this.accountList = Object.entries(res.data);
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
      this.OutPutKey().then(res => {
        if (res.code === 1) {
          this.active_private_key = res.data.active_private_keys[0];
          this.owner_private_key = res.data.owner_private_keys[0];
          this.privateKey = true;
        }
      });
    },
    getLogin() {
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
      this.setCurrentAccounts({ account }).then(res => {
        if (res.code === 1) {
          this.setAccount({
            account: account,
            password: ""
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
</style>
