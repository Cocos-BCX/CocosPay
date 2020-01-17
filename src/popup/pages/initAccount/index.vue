<template>
  <section>
    <logo-header />
    <section class="app-container">
      <section class="select-lang no-bg">
        <el-select class="nodes-select" v-model="chooseName" @change="changeNode">
          <!-- <el-option
            v-for="(item, index) in langs"
            :key="index"
            :label="item.name"
            :value="item.value"
          ></el-option> -->
          <!--  v-for="(network,index) in nodes" -->
          <el-option
            v-for="(item,index) in nodes"
            :key="index"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
        <el-select class="language-select" v-model="lang" @change="changeLanguage">
          <el-option
            v-for="(item, index) in langs"
            :key="index"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </section>
      <div class="text-center">
        <img @click="logout()" src="/images/new-account.png" />
      </div>
      <!-- <section class="small-tip text-center mt30">{{$t('message.recommendNew')}}</section> -->
      <section class="small-tip text-center mt30">{{$t('message.newUsersPlease')}}:</section>
      <el-button
        class="full-btn mt10"
        type="primary"
        @click="createAccount"
      >{{$t('button.createAccount')}}</el-button>
      <div class="text-center mt15">
        <img src="/images/import-account.png" @click="deleteWallet" />
      </div>
      <!-- <section class="small-tip text-center mt30">{{$t('message.recommendOld')}}</section> -->
      <section class="small-tip text-center mt30">{{$t('message.forExistingCOCOSAccount')}}:</section>
      <el-button
        class="full-btn mt10"
        type="primary"
        @click="importAccount"
      >{{$t('button.importAccount')}}</el-button>
    </section>
    <!-- create account -->
    <el-dialog
      top="15vh"
      center
      :title="$t('button.importAccount')"
      @closed="closedDialog"
      :visible.sync="currentCreateVisible"
    >
      <!-- <div class="warm-tip">{{$t('message.savePrivateKey')}}</div> -->
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="accountLogin"
        >{{$t('button.accountLogin')}}</el-button>
        <el-button
          class="full-btn mt20"
          style="margin-left: 0 !important;"
          type="primary"
          @click="keysAccount"
        >{{$t('button.keysLogin')}}</el-button>
      </span>
    </el-dialog>
    <el-dialog
      top="15vh"
      center
      :title="$t('button.createAccount')"
      @closed="closedDialog"
      :visible.sync="register"
    >
      <!-- <div class="warm-tip">{{$t('message.savePrivateKey')}}</div> -->
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="accountRegister"
        >{{$t('title.accountType')}}</el-button>
        <!-- <el-button
          class="full-btn mt20"
          style="margin-left: 0 !important;"
          type="primary"
          @click="walletRegister"
        >{{$t('title.walletType')}}</el-button> -->
      </span>
    </el-dialog>
  </section>
</template>
<script>
import LogoHeader from "../../components/logo-header";
import { createAccountName } from "../../utils/tools";
import utils from "../../../lib/utils";
import { mapState, mapMutations, mapActions } from "vuex";
import Storage from '../../utils/storage'
import { defaultNode } from '../../config/common'
export default {
  components: {
    LogoHeader
  },
  data() {
    return {
      currentCreateVisible: false,
      register: false,
      lang: "中文",
      langs: [
        { name: "中文", value: "ZH" },
        { name: "English", value: "EN" },
        { name: "Français", value: "FR" }
      ],
      choose: {},
      chooseName: '',
      nodes: []
    };
  },
  computed: {
    ...mapState(["currentCreateAccount", "curLng"])
  },
  mounted() {
    let _this = this
    this.nodeLists().then(res => {
      if (!Array.isArray(res)) return;
      // 2019-12-09  新增修改
      let isArrayNodeIndex = ''
      for (let i = 0; i < res.length; i++) {
        if (Array.isArray(res[i])) {
          isArrayNodeIndex = i
          break;
        }
      }
      if (isArrayNodeIndex != "") {
        res.splice(isArrayNodeIndex,1);
      }
      
      let chooseNodeName = ''
      let concatNodes = []
      if (Storage.get("choose_node").name) {
        chooseNodeName = Storage.get("choose_node").name
      } else {
        chooseNodeName = defaultNode
      }

      if (Storage.get("add_node")) {
        concatNodes = res.concat(Storage.get("add_node"))
      } else {
        concatNodes = res
      }
      _this.nodes = concatNodes
      let connectNode = concatNodes.filter( item => {
        return item.name == chooseNodeName
      })
      _this.choose = connectNode[0];
      _this.chooseName = connectNode[0].name
      // 2019-12-09  新增修改 完成

      
      // 2019-12-09  注释修改
      // res[0].connect = true;
      // this.apiConfig(res[0]).then(() => {
      //   this.init();
      // });
      // 2019-12-09  注释修改 完成

      
      // 2019-12-09  新增修改
      connectNode[0].connect = true;
      
      // _this.loadingBCXAccount().then(res => {
      // })
      // _this.apiConfig(connectNode[0]).then((apiConfigRes) => {
      //   _this.lookupWSNodeList({
      //     refresh:true,
      //   }).then( lookupWSNodeListRes =>{
      //     // this.init();
      //   })
        
      // });
      // 2019-12-09  新增修改 完成
    });
    this.lang =
      this.curLng === "ZH"
        ? "中文"
        : this.curLng === "EN"
        ? "English"
        : "Français";
    this.$i18n.locale = this.curLng;
  },
  created (){
      // this.nodes = Storage.get("node").concat(
      //   Storage.get("add_node") ? Storage.get("add_node") : []
      // );
      // this.choose = Storage.get("choose_node");
  },
  methods: {
    ...mapMutations("wallet", ["addAccount"]),
    ...mapActions(["nodeLists", "apiConfig", "init", "switchAPINode", "lookupWSNodeList"]),
    ...mapMutations([
      "setCurrentAccount",
      "setCurrentCreateAccount",
      "setCurrentCreateVisible",
      "setCurLng"
    ]),
    ...mapActions("wallet", ["deleteWallet"]),
    ...mapActions("account", ["logoutBCXAccount", "loadingBCXAccount"]),
    nodeSyncFn(changeNode){
    // chrome.tabs.query可以通过回调函数获得当前页面的信息tabs
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // 发送一个copy消息出去
            chrome.tabs.sendMessage(tabs[0].id, {type: "change", content: changeNode}, function (response) {
      // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
      // 将值存在background.js的data属性里面。
                // var win = chrome.extension.getBackgroundPage();
                // win.data=response;
            });  
        });
    },
    closedDialog() {
      this.currentCreateVisible = false;
      this.register = false;
    },
    copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
    },
    logout() {
      Promise.all([this.deleteWallet(), this.logoutBCXAccount()]).then(
        res => {}
      );
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    changeNode(){
      let _this = this
      let connectNode = this.nodes.filter( item => {
        return item.name == _this.chooseName
      })
      let network = connectNode[0]
      // if (network.chainId === Storage.get("choose_node").chainId) {
      //   console.log('network.chainId === Storage.get("choose_node").chainId')
        this.switchAPINode({
          url: network.ws
        }).then(res => {
          console.log(res)
          if (res.code === 1) {
            if (res.data.selectedNodeUrl) {
              // _this.apiConfig({
              //   faucet_url:"http://47.93.62.96:8042"   
              // })
                _this.apiConfig(network).then( apiConfigres => {
                _this.choose = network;
                _this.lookupWSNodeList().then( lookupWSNodeListRes => {
                  if (lookupWSNodeListRes.data.selectedNodeUrl) {
                          Storage.set("choose_node", network);
                          _this.nodeSyncFn(network)
                          _this.$kalert({
                            message: _this.$i18n.t("alert.modifySuccess")
                          });
                      
                  } else {
                    _this.$kalert({
                      message: _this.$i18n.t("alert.modifyFailed")
                    });
                  }
                })
              })
              
            } else {
              _this.$kalert({
                message:  _this.$i18n.t("alert.modifyFailed")
              });
            }
          } else {
              _this.$kalert({
                message:  _this.$i18n.t("alert.modifyFailed")
              });
          }
        });
    },
    changeLanguage() {
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
      window.localStorage.setItem("lang_type", this.lang);
      this.$kalert({
        message: this.$i18n.t("alert.modifySuccess")
      });
    },
    createAccount() {
      this.register = true;
    },
    accountRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "account"
        }
      });
    },
    walletRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "wallet"
        }
      });
    },
    importAccount() {
      this.currentCreateVisible = true;
      // this.$router.push({ name: "importAccount" });
    },
    accountLogin() {
      this.$router.push({ name: "login" });
    },
    keysAccount() {
      this.$router.push({ name: "importAccount" });
    },
    jumpHome() {
      this.setCurrentCreateVisible(false);
      this.addAccount(this.currentCreateAccount);
      this.setCurrentAccount(this.currentCreateAccount);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.privateKey-area {
  background-color: $bg-shallow;
  font-size: 12px;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}
.select-lang {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.testNodeSync{
  width: 150px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  color: #000;
}
</style>
