webpackJsonp_name_([7],{"2+c5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("img",{staticClass:"left-img",attrs:{src:"/icons/logo-small.png",alt:""}}),t._v(" "),n("span",{staticClass:"title"},[t._v("CocosPay")])])}],s={render:a,staticRenderFns:o};e.a=s},"7Jx9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"logo-header"}},CcQU:function(t,e,n){"use strict";function a(t){n("jmpp")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("7Jx9"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var c=n("2+c5"),r=n("VU/8"),l=a,u=r(s.a,c.a,!1,l,"data-v-78d3cd35",null);e.default=u.exports},FZtz:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("logo-header"),t._v(" "),n("section",{staticClass:"app-container"},[n("section",{staticClass:"select-lang no-bg"},[n("el-select",{staticClass:"nodes-select",on:{change:t.switchAPINodeAjax},model:{value:t.chooseName,callback:function(e){t.chooseName=e},expression:"chooseName"}},t._l(t.nodes,function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.name}})}),1),t._v(" "),n("el-select",{staticClass:"language-select",on:{change:t.changeLanguage},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},t._l(t.langs,function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.value}})}),1)],1),t._v(" "),n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/images/new-account.png"},on:{click:function(e){return t.logout()}}})]),t._v(" "),n("section",{staticClass:"small-tip text-center mt30"},[t._v(t._s(t.$t("message.newUsersPlease"))+":")]),t._v(" "),n("el-button",{staticClass:"full-btn mt10",attrs:{type:"primary"},on:{click:t.createAccount}},[t._v(t._s(t.$t("button.createAccount")))]),t._v(" "),n("div",{staticClass:"text-center mt15"},[n("img",{attrs:{src:"/images/import-account.png"},on:{click:t.deleteWallet}})]),t._v(" "),n("section",{staticClass:"small-tip text-center mt30"},[t._v(t._s(t.$t("message.forExistingCOCOSAccount"))+":")]),t._v(" "),n("el-button",{staticClass:"full-btn mt10",attrs:{type:"primary"},on:{click:t.importAccount}},[t._v(t._s(t.$t("button.importAccount")))])],1),t._v(" "),n("el-dialog",{attrs:{top:"15vh",center:"",title:t.$t("button.importAccount"),visible:t.currentCreateVisible},on:{closed:t.closedDialog,"update:visible":function(e){t.currentCreateVisible=e}}},[n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:t.accountLogin}},[t._v(t._s(t.$t("button.accountLogin")))]),t._v(" "),n("el-button",{staticClass:"full-btn mt20",staticStyle:{"margin-left":"0 !important"},attrs:{type:"primary"},on:{click:t.keysAccount}},[t._v(t._s(t.$t("button.keysLogin")))])],1)]),t._v(" "),n("el-dialog",{attrs:{top:"15vh",center:"",title:t.$t("button.createAccount"),visible:t.register},on:{closed:t.closedDialog,"update:visible":function(e){t.register=e}}},[n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:t.accountRegister}},[t._v(t._s(t.$t("title.accountType")))]),t._v(" "),n("el-button",{staticClass:"full-btn mt20",staticStyle:{"margin-left":"0 !important"},attrs:{type:"primary"},on:{click:t.walletRegister}},[t._v(t._s(t.$t("title.walletType")))])],1)])],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},"K/Qv":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.privateKey-area[data-v-70859ef6]{background-color:rgba(70,121,254,0.2);font-size:12px;border-radius:8px;padding:10px;margin:10px 0\n}\n.select-lang[data-v-70859ef6]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:50px\n}\n.testNodeSync[data-v-70859ef6]{width:150px;height:50px;text-align:center;font-size:16px;color:#000\n}\n",""])},RPpT:function(t,e,n){"use strict";function a(t){n("kIM5")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("kFA5"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var c=n("FZtz"),r=n("VU/8"),l=a,u=r(s.a,c.a,!1,l,"data-v-70859ef6",null);e.default=u.exports},cFF9:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\nheader[data-v-78d3cd35]{position:relative;height:60px;border-bottom:1px solid #e6e6e6;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\nheader span[data-v-78d3cd35]{font-size:20px;padding-left:10px\n}\n",""])},jmpp:function(t,e,n){var a=n("cFF9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("eb6932f8",a,!0,{})},kFA5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("//Fk"),s=a(o),i=n("Dd8w"),c=a(i),r=n("CcQU"),l=a(r),u=(n("YduS"),n("n95b")),d=a(u),f=n("NYxO"),p=n("KCWd"),g=a(p),m=n("7piT");e.default={components:{LogoHeader:l.default},data:function(){return{currentCreateVisible:!1,register:!1,lang:"中文",langs:[{name:"中文",value:"ZH"},{name:"English",value:"EN"},{name:"Français",value:"FR"}],choose:{},chooseName:"",nodes:[]}},computed:(0,c.default)({},(0,f.mapState)(["currentCreateAccount","curLng"])),mounted:function(){var t=this;this.nodeLists().then(function(e){if(d.default.browser().versions.gecko&&(e=e.filter(function(t){return"Main"==t.name})),Array.isArray(e)){for(var n="",a=0;a<e.length;a++)if(Array.isArray(e[a])){n=a;break}""!=n&&e.splice(n,1);var o="",s=[];o=g.default.get("choose_node").name?g.default.get("choose_node").name:m.defaultNode,s=g.default.get("add_node")?e.concat(g.default.get("add_node")):e,t.nodes=s;var i=s.filter(function(t){return t.name==o});t.choose=i[0],t.chooseName=i[0].name,i[0].connect=!0}}),this.lang="ZH"===this.curLng?"中文":"EN"===this.curLng?"English":"Français",this.$i18n.locale=this.curLng},created:function(){},methods:(0,c.default)({},(0,f.mapMutations)("wallet",["addAccount"]),(0,f.mapActions)(["nodeLists","apiConfig","init","switchAPINode","lookupWSNodeList","apiConfigChangeNode"]),(0,f.mapMutations)(["setCurrentAccount","setCurrentCreateAccount","setCurrentCreateVisible","setCurLng"]),(0,f.mapActions)("wallet",["deleteWallet"]),(0,f.mapActions)("account",["logoutBCXAccount","loadingBCXAccount"]),{nodeSyncFn:function(t){chrome.tabs.query({active:!0,currentWindow:!0},function(e){g.default.set("choose_node",t),chrome.tabs.sendMessage(e[0].id,{type:"change",content:t},function(t){})})},closedDialog:function(){this.currentCreateVisible=!1,this.register=!1},copySuccess:function(){this.$kalert({message:this.$i18n.t("alert.copySuccess")})},logout:function(){s.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(t){})},copyError:function(){this.$kalert({message:this.$i18n.t("alert.copyFail")})},switchAPINodeAjax:function(){var t=this,e=this.nodes.filter(function(e){return e.name==t.chooseName}),n=e[0],a={default_ws_node:n.ws,ws_node_list:[{url:n.ws,name:n.name}],networks:[{core_asset:"COCOS",chain_id:n.chainId}],faucet_url:n.faucetUrl,auto_reconnect:!0,real_sub:!0,check_cached_nodes_data:!1};t.apiConfigChangeNode(a,!0).then(function(e){t.nodeSyncFn(n)})},changeNode:function(){var t=this,e=this.nodes.filter(function(e){return e.name==t.chooseName}),n=e[0];this.init().then(function(e){return new s.default(function(e,a){t.switchAPINode({url:n.ws}).then(function(t){e(t)})})}).then(function(e){1===e.code&&e.data.selectedNodeUrl?t.apiConfig(n).then(function(e){t.choose=n,t.lookupWSNodeList().then(function(e){e.data.selectedNodeUrl?(g.default.set("choose_node",n),t.nodeSyncFn(n),t.$kalert({message:t.$i18n.t("alert.modifySuccess")})):t.$kalert({message:t.$i18n.t("alert.modifyFailed")})})}):t.$kalert({message:t.$i18n.t("alert.modifyFailed")})})},changeLanguage:function(){this.setCurLng(this.lang),this.$i18n.locale=this.lang,window.localStorage.setItem("lang_type",this.lang),this.$kalert({message:this.$i18n.t("alert.modifySuccess")})},createAccount:function(){this.register=!0},accountRegister:function(){this.$router.push({name:"createAccount",params:{type:"account"}})},walletRegister:function(){this.$router.push({name:"createAccount",params:{type:"wallet"}})},importAccount:function(){this.currentCreateVisible=!0},accountLogin:function(){this.$router.push({name:"login"})},keysAccount:function(){this.$router.push({name:"importAccount"})},jumpHome:function(){this.setCurrentCreateVisible(!1),this.addAccount(this.currentCreateAccount),this.setCurrentAccount(this.currentCreateAccount),this.$router.push({name:"home"})}})}},kIM5:function(t,e,n){var a=n("K/Qv");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("83bb5a7e",a,!0,{})}});