<template>
  <header class="header">
    <router-link class="header-logo" to="/">
      <img src="/icons/logo-small.png" alt="Treasure">
    </router-link>
    <div
      class="network"
      v-click-outside="onClickOutside"
      @click="showNetworkDropdown = !showNetworkDropdown"
    >
      <a class="network-toggle">
        <span class="network-icon"></span>
        <span class="network-name">{{ choose.name }}</span>
        <span class="network-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </span>
      </a>
      <div class="network-dropdown" v-show="showNetworkDropdown">
        <a @click="changeNetwork(network)" v-for="(network,index) in nodes" :key="index">
          <span class="network-dropdown-icon">
            <svg
              v-if="network.ws === choose.ws"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon"
            >
              <path
                d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon"
            >
              <path
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
              ></path>
            </svg>
          </span>
          <span>{{network.name}}</span>
        </a>
      </div>
    </div>
    
    <!-- change node -->

    <k-dialog
      :visible="changeNodeRemovePasswordShow"
      :title="$t('title.switchingTheNetwork') "
      @close="changeNodeRemovePasswordShow = false"
    >
      <div class="warning-tit">{{$t('message.switchingTheNetworkWillExitTheAccount')}}</div>
      <div class="warning-tip">{{$t('confirm.removeAccount')}}</div>
      <div slot="footer" class="text-center">
        <el-button
          class="full-btn"
          type="primary"
          @click="sureBtn('removeForm')"
        >{{$t('button.sure')}}</el-button>
      </div>
    </k-dialog>
    <div class="setting-icon">
      <img src="/icons/shuaxin.png" alt @click="refreshData">
      <img src="/icons/mima.png" alt @click="lockAccountAjax">
      <img src="/icons/shezhi2.png" alt @click="goSettings">
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import vClickOutside from "v-click-outside";
import Storage from "../../lib/storage";
import BCX from "bcx-api";
// import BCX from "bcxjs-test-xl-api";
import KDialog from "../components/dialog/DialogComponent";
import extension from "../../lib/extension"
// import BCX from '../../lib/bcx-api'

// import '../../lib/bcx.min.js'
export default {
  components: {
    KDialog
  },
  data() {
    return {
      showNetworkDropdown: false,
      nodes: [],
      choose: "",

      changeNodeRemovePasswordShow: false,
      networkNode: {},
    };
  },
  computed: {
    ...mapState(["route", "currentNetwork", "cocosAccount"])
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mounted() {
    let nodes = Storage.get("node").concat(
      Storage.get("add_node") ? Storage.get("add_node") : []
    );
    let isArrayNodeIndex = ''
    for (let i = 0; i < nodes.length; i++) {
      if (Array.isArray(nodes[i])) {
        isArrayNodeIndex = i
        break;
      }
    }
    if (isArrayNodeIndex != "") {
      nodes.splice(isArrayNodeIndex,1);
    }
    this.nodes = nodes
    this.choose = Storage.get("choose_node");
  },
  methods: {
    ...mapActions("account", [
      "logoutBCXAccount",
      "lockAccount"
    ]),
    ...mapActions("wallet", [
      "getAccounts",
      "deleteWallet"
    ]),
    ...mapMutations(["setAccountType", "setLogin", "setIsAccount", "setAccount", "setLoginNoAlert", ]),
    ...mapActions(["nodeLists", "apiConfig", "init", "switchAPINode", "lookupWSNodeList", "apiConfigChangeNode"]),
    
    nodeSyncFn(changeNode){
      let _this = this
      _this.$router.push('initAccount', function () {
        console.log("extension.tabsSendMessage  /initAccount")
        // extension.tabsSendMessage().then( res => {
        //   console.log("extension.tabsSendMessage")
        // })
        // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //   // 发送一个copy消息出去
        //   chrome.tabs.sendMessage(tabs[0].id, {type: "change", content: changeNode}, function (response) {
        //     // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
        //     // 将值存在background.js的data属性里面。
        //     // var win = chrome.extension.getBackgroundPage();
        //     // win.data=response;
        //     console.log(response)
        //     Storage.set("choose_node", changeNode);
        //   });
        // });
      });
    // chrome.tabs.query可以通过回调函数获得当前页面的信息tabs
        
    },
    onClickOutside() {
      this.showNetworkDropdown = false;
    },
    changeNetwork(network) {
      this.networkNode = {}
      this.changeNodeRemovePasswordShow = true
      this.networkNode = network
    },
    sureBtn(){
      let _this = this
      this.switchAPINodeAjax(_this.networkNode)
    },
    switchAPINodeAjax(network) {
      let _this = this
      Promise.all([this.deleteWallet(), this.logoutBCXAccount()]).then(res => {
        window.localStorage.setItem("delAccount", "sure");
        this.setLogin(false);
        this.setIsAccount(false);
        this.setAccount({
          account: "",
          password: ""
        });
      })
      console.log('begin change node...')
      let Node = network
      
      let _configParams={ 
          default_ws_node: network.ws,
          ws_node_list:[
          {url: network.ws,name: network.name}, 
          ],
          networks:[
              {
                  core_asset: "COCOS",
                  chain_id: network.chainId 
              }
          ], 
          faucet_url:network.faucetUrl,
          auto_reconnect:true,
          real_sub:true,
          check_cached_nodes_data:false
      };    
      _this.apiConfigChangeNode(_configParams, true).then( apiConfigres => {
        _this.$kalert({
          message: _this.$i18n.t("alert.modifySuccess")
        });
        Storage.set("choose_node", network);
        _this.nodeSyncFn(network)
      })
    },
    switchAPINodeAjaxtest(network) {
      let _this = this
      Promise.all([this.deleteWallet(), this.logoutBCXAccount()]).then(res => {
        window.localStorage.setItem("delAccount", "sure");
        this.setLogin(false);
        this.setIsAccount(false);
        this.setAccount({
          account: "",
          password: ""
        });
        // this.init().then( initRes => {
        //   return new Promise(function (resolve, reject) {
        //     _this.switchAPINode({
        //       url: network.ws
        //     }).then(res => {
        //       if (res.code === 1) {
        //           resolve(res)
        //       } else {
        //           _this.$kalert({
        //             message:  _this.$i18n.t("alert.modifyFailed")
        //           });
        //       }
        //     })
        //   })
        // })
          this.init().then( res => {
            return new Promise(function (resolve, reject) {
              _this.switchAPINode({
                url: network.ws
              }).then(res =>{
                resolve(res)
              })
            })
          }).then(res =>{
            return new Promise(function (resolve, reject) {
              
              if (res.data.selectedNodeUrl) {
                
                _this.apiConfig(network).then( apiConfigres => {
                  resolve(apiConfigres)
                })
                // _this.apiConfig({
                //   faucet_url:"http://47.93.62.96:8042"   
                // })
                _this.choose = network;
              } else {
                _this.$kalert({
                  message:  _this.$i18n.t("alert.modifyFailed")
                });
              }
            })
        }).then( res => {
          _this.lookupWSNodeList().then( lookupWSNodeListRes => {
              if (lookupWSNodeListRes.data.selectedNodeUrl) {
                
                  _this.nodeSyncFn(network)
              } else {
                _this.$kalert({
                  message: _this.$i18n.t("alert.modifyFailed")
                });
              }
          })
        })
      });
    },
    lockAccountAjax(){
      let _this = this
      this.lockAccount().then( res => {
        if (res.code == 1) {
          
          // _this.setLoginNoAlert(false);
          // _this.setAccount({
          //   account: _this.cocosAccount.accounts,
          //   password: ""
          // });
          // _this.setIsAccount(false);
          // _this.setLogin(false);
          _this.$router.push({ name: "unlockActive" })
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
        
      })
    },
    // changeNetwork  2019-12-26 备份
    // changeNetwork123(network) {
    //   let _this = this
    //   console.log("network")
    //   console.log(network)
    //   // if (network.chainId === Storage.get("choose_node").chainId) {
    //   //   console.log('network.chainId === Storage.get("choose_node").chainId')
    //     this.switchAPINode({
    //       url: network.ws
    //     }).then(res => {
    //       if (res.code === 1) {
    //         return new Promise(function (resolve, reject) {
    //           resolve(res)
    //         })
    //       } else {
    //           _this.$kalert({
    //             message:  _this.$i18n.t("alert.modifyFailed")
    //           });
    //       }
    //     }).then(res =>{
          
    //         return new Promise(function (resolve, reject) {
              
    //           if (res.data.selectedNodeUrl) {
                
    //             // _this.apiConfig({
    //             //   faucet_url:"http://47.93.62.96:8042"   
    //             // })
    //             _this.choose = network;
    //             _this.lookupWSNodeList().then( lookupWSNodeListRes => {
                    
    //                 if (lookupWSNodeListRes.data.selectedNodeUrl) {
                      
    //                   resolve(lookupWSNodeListRes)
                      
    //                 } else {
    //                   _this.$kalert({
    //                     message: _this.$i18n.t("alert.modifyFailed")
    //                   });
    //                 }
                  
                  
    //             })
    //           } else {
    //             _this.$kalert({
    //               message:  _this.$i18n.t("alert.modifyFailed")
    //             });
    //           }
    //         })
    //     }).then( res => {
          
    //       _this.apiConfig(network).then( apiConfigres => {
    //         console.log("apiConfigres")
    //         console.log(apiConfigres)
    //         Storage.set("choose_node", network);
    //         _this.removeCurrentAccount()
    //         // _this.init().then( initRes => {
    //         //   _this.$kalert({
    //         //     message: _this.$i18n.t("alert.modifySuccess")
    //         //   });
    //         //   _this.removeCurrentAccount()
    //         // })
    //       })
    //     });
    //   // } else {
    //   //   console.log('else   network.chainId === Storage.get("choose_node").chainId')
    //   //   let Node = network;


    //     // 2019-12-09 注释修改 结束
    //     // this.NewBCX(Node);
          
    //     // _this.init().then(res => {
    //     //   console.log('-------change--------this.init()---------')
    //     //   console.log(res)
    //     //   if (res.code !== 1) {
    //     //     _this.$kalert({
    //     //       message: _this.$i18n.t(`error[${res.code}]`)
    //     //     });
    //     //     // this.init(this.nodes[0]);
    //     //     // this.init().then(change => {
    //     //     //   this.switchAPINode({
    //     //     //     url: this.nodes[0].ws
    //     //     //   }).then(change => {
    //     //     //     this.apiConfig(this.nodes[0]);
    //     //     //   });
    //     //     // });
    //     //   } else {
    //     //     _this.$kalert({
    //     //       message: _this.$i18n.t("alert.modifySuccess")
    //     //     });
    //     //     _this.choose = network;
    //     //   }
    //     // });
    //     // 2019-12-09 注释修改  结束
    //   // }
    // },


    NewBCX(Node) {
      
        var _configParams = {
            ws_node_list: [{
                url: Node.ws,
                name: Node.name
            }],
            networks: [{
                core_asset: "COCOS",
                chain_id: Node.chainId
            }],
            // faucet_url:"http://47.93.62.96:3000",
            faucetUrl: Node.faucetUrl,
            auto_reconnect: true,
            worker: false,
            real_sub: true,
            check_cached_nodes_data: true,
            // app_keys: ["5HxzZncKDjx7NEaEv989Huh7yYY7RukcJLKBDQztXAmZYCHWPgd"]
        };
        return new BCX(_configParams)
      // return new BCX({
      //   default_ws_node: 'ws://test.cocosbcx.net',
      //   ws_node_list: [
      //     {
      //       url: Node.ws,
      //       name: Node.name
      //     }
      //   ],
      //   networks: [
      //     {
      //       core_asset: "COCOS",
      //       chain_id: Node.chainId
      //     }
      //   ],
      //   faucet_url: Node.url,
      //   auto_reconnect: false,
      //   worker: false
      // });
    },
    goSettings() {
      this.$router.push({ name: "settings" });
    },
    refreshData() {
      this.$emit("refresh");
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
  }
};
</script>
<style lang="scss" scoped>
@import "../theme/v1/variable";
@import "../styles/home.scss";
.warning-tit{
  font-size: 12px;
  color: #333;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid #e6e6e6;
  background-color: $bg-shallow;
}
.setting-icon {
  width: 93px;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
}
.header-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 62px;
}

.header-logo img,
.header-logo span {
  display: block;
}

.network {
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  span {
    display: block;
  }
}

a.network-toggle {
  max-width: 170px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 6px 15px;
  border-radius: 20px;
  cursor: pointer;
}

.network-icon {
  width: 12px;
  height: 12px;
  background: $success-color;
  border-radius: 100%;
}

.icon {
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  width: 1em;
  height: 1em;
}

.network-arrow {
  padding-top: 2px;
}

.network-name {
  flex: 1;
  font-weight: 600;
  color: $color-first;
  padding: 0.1rem 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.network-dropdown {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 40px;
  right: 0;
  border-radius: 8px;
  width: 170px;
  z-index: 99;
  padding: 10px;
}

.network-dropdown a {
  display: flex;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1.25;
  color: #fff;
}

.network-dropdown a:hover,
.network-dropdown a:focus {
  color: $danger-color;
}

.network-dropdown a span {
  display: block;
}

.network-dropdown-icon {
  padding: 3px 8px 0 0;
  font-size: 0.625rem;
}

.dropdown-menu {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: absolute;
  top: 40px;
  right: 10px;
  padding: 0.5rem 0;
  border-radius: 3px;
  min-width: 125px;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: $color-first;
}

.dropdown-menu a:hover,
.dropdown-menu a:focus {
  color: $danger-color;
}

.header-tabs {
  display: flex;
  width: 100%;
}

.header-tabs a {
  display: block;
  flex: 1;
  padding: 0.625rem;
  color: $color-first;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
}

.header-tabs a.active {
  color: $danger-color;
  border-bottom: 2px solid $danger-color;
}

.header-tabs a:hover,
.header-tabs a:focus {
  color: $danger-color;
}
</style>

