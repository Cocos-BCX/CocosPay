webpackJsonp_name_([2],{"+wqP":function(e,t,n){"use strict";function a(e){n("dY0r")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("wkCy"),i=n.n(o);for(var f in o)"default"!==f&&function(e){n.d(t,e,function(){return o[e]})}(f);var s=n("JWgW"),c=n("C7Lr"),r=a,d=c(i.a,s.a,!1,r,"data-v-13e68814",null);t.default=d.exports},"2kx/":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"header-logo",attrs:{to:"/"}},[n("img",{attrs:{src:"/icons/logo-small.png",alt:"Treasure"}})]),e._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"network",on:{click:function(t){e.showNetworkDropdown=!e.showNetworkDropdown}}},[n("a",{staticClass:"network-toggle"},[n("span",{staticClass:"network-icon"}),e._v(" "),n("span",{staticClass:"network-name"},[e._v(e._s(e.choose.name))]),e._v(" "),n("span",{staticClass:"network-arrow"},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showNetworkDropdown,expression:"showNetworkDropdown"}],staticClass:"network-dropdown"},e._l(e.nodes,function(t,a){return n("a",{key:a,on:{click:function(n){return e.changeNetwork(t)}}},[n("span",{staticClass:"network-dropdown-icon"},[t.ws===e.choose.ws?n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -1.5 24 24",width:"24",height:"24",preserveAspectRatio:"xMinYMin"}},[n("path",{attrs:{d:"M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"}})]):n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",width:"24",height:"24",preserveAspectRatio:"xMinYMin"}},[n("path",{attrs:{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"}})])]),e._v(" "),n("span",[e._v(e._s(t.name))])])}),0)]),e._v(" "),n("k-dialog",{attrs:{visible:e.changeNodeRemovePasswordShow,title:e.$t("title.switchingTheNetwork")},on:{close:function(t){e.changeNodeRemovePasswordShow=!1}}},[n("div",{staticClass:"warning-tit"},[e._v(e._s(e.$t("message.switchingTheNetworkWillExitTheAccount")))]),e._v(" "),n("div",{staticClass:"warning-tip"},[e._v(e._s(e.$t("confirm.removeAccount")))]),e._v(" "),n("div",{staticClass:"text-center",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:function(t){return e.sureBtn("removeForm")}}},[e._v(e._s(e.$t("button.sure")))])],1)]),e._v(" "),n("div",{staticClass:"setting-icon"},[n("img",{attrs:{src:"/icons/shuaxin.png",alt:""},on:{click:e.refreshData}}),e._v(" "),n("img",{attrs:{src:"/icons/mima.png",alt:""},on:{click:e.lockAccountAjax}}),e._v(" "),n("img",{attrs:{src:"/icons/shezhi2.png",alt:""},on:{click:e.goSettings}})])],1)},o=[],i={render:a,staticRenderFns:o};t.a=i},"3Khw":function(e,t,n){"use strict";function a(e){n("K4rM")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("OMiY"),i=n.n(o);for(var f in o)"default"!==f&&function(e){n.d(t,e,function(){return o[e]})}(f);var s=n("2kx/"),c=n("C7Lr"),r=a,d=c(i.a,s.a,!1,r,"data-v-37d109ec",null);t.default=d.exports},4:function(e,t){},5:function(e,t){},"9kla":function(e,t,n){var a=n("RR+N");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("53b4f4c8",a,!0,{})},"9zfd":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){function e(e,t){var a=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||i,isActive:!(!1===e.isActive)}}(t.value),o=a.handler,f=a.middleware;a.isActive&&(e[n]=a.events.map(function(t){return{event:t,handler:function(t){return function(e){var t=e.el,n=e.event,a=e.handler,o=e.middleware;n.target!==t&&!t.contains(n.target)&&o(n,t)&&a(n,t)}({event:t,el:e,handler:o,middleware:f})}}}),e[n].forEach(function(e){var t=e.event,n=e.handler;return setTimeout(function(){return document.documentElement.addEventListener(t,n,!1)},0)}))}function t(e){(e[n]||[]).forEach(function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)}),delete e[n]}var n="__v-click-outside",a="undefined"!=typeof window,o="undefined"!=typeof navigator,i=a&&("ontouchstart"in window||o&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],f={bind:e,update:function(n,a){var o=a.value,i=a.oldValue;JSON.stringify(o)!==JSON.stringify(i)&&(t(n),e(n,{value:o}))},unbind:t};return{install:function(e){e.directive("click-outside",f)},directive:f}})},BTfB:function(e,t,n){"use strict";function a(e){n("vTOj")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("OFBO"),i=n.n(o);for(var f in o)"default"!==f&&function(e){n.d(t,e,function(){return o[e]})}(f);var s=n("eYtc"),c=n("C7Lr"),r=a,d=c(i.a,s.a,!1,r,"data-v-5fafd526",null);t.default=d.exports},DJmA:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("app-header",{on:{refresh:e.refreshAccount}}),e._v(" "),n("section",{staticClass:"app-container"},[n("navigation",{attrs:{title:e.$t("title.collection")}}),e._v(" "),n("div",{staticClass:"text-center mt20"},[e._v(e._s(e.$t("message.rechargeOnly1")))]),e._v(" "),n("qriously",{staticClass:"qr-code text-center mt20",attrs:{foreground:"#0191ee",value:e.account,size:130}}),e._v(" "),n("div",{staticClass:"small-tip code text-center"},[e._v(e._s(e.cocosAccount.accounts))]),e._v(" "),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.cocosAccount.accounts,expression:"cocosAccount.accounts",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],staticClass:"full-btn mt40",attrs:{type:"primary"}},[e._v(e._s(e.$t("button.copyAddress")))])],1)],1)},o=[],i={render:a,staticRenderFns:o};t.a=i},JWgW:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mask"},[n("div",{staticClass:"dialog"},[e.showClose?n("div",{staticClass:"dialog-close",on:{click:e.handleClose}},[n("v-icon",{attrs:{name:"times"}})],1):e._e(),e._v(" "),n("div",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"dialog-body"},[e._t("default")],2),e._v(" "),e.$slots.footer?n("div",{staticClass:"dialog-footer"},[e._t("footer")],2):e._e()])])])},o=[],i={render:a,staticRenderFns:o};t.a=i},K4rM:function(e,t,n){var a=n("omtu");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("57088927",a,!0,{})},OFBO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},OMiY:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("rVsN"),i=a(o),f=n("4YfN"),s=a(f),c=n("48sp"),r=n("9zfd"),d=a(r),l=n("kEHT"),p=a(l),u=n("hbGp"),b=a(u),x=n("+wqP"),g=a(x),h=n("hBP4");a(h);t.default={components:{KDialog:g.default},data:function(){return{showNetworkDropdown:!1,nodes:[],choose:"",changeNodeRemovePasswordShow:!1,networkNode:{}}},computed:(0,s.default)({},(0,c.mapState)(["route","currentNetwork","cocosAccount"])),directives:{clickOutside:d.default.directive},mounted:function(){for(var e=p.default.get("node").concat(p.default.get("add_node")?p.default.get("add_node"):[]),t="",n=0;n<e.length;n++)if(Array.isArray(e[n])){t=n;break}""!=t&&e.splice(t,1),this.nodes=e,this.choose=p.default.get("choose_node")},methods:(0,s.default)({},(0,c.mapActions)("account",["logoutBCXAccount","lockAccount"]),(0,c.mapActions)("wallet",["getAccounts","deleteWallet"]),(0,c.mapMutations)(["setAccountType","setLogin","setIsAccount","setAccount","setLoginNoAlert"]),(0,c.mapActions)(["nodeLists","apiConfig","init","switchAPINode","lookupWSNodeList","apiConfigChangeNode"]),{nodeSyncFn:function(e){this.$router.push("initAccount",function(){console.log("extension.tabsSendMessage  /initAccount")})},onClickOutside:function(){this.showNetworkDropdown=!1},changeNetwork:function(e){this.networkNode={},this.changeNodeRemovePasswordShow=!0,this.networkNode=e},sureBtn:function(){var e=this;this.switchAPINodeAjax(e.networkNode)},switchAPINodeAjax:function(e){var t=this,n=this;i.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(e){window.localStorage.setItem("delAccount","sure"),t.setLogin(!1),t.setIsAccount(!1),t.setAccount({account:"",password:""})}),console.log("begin change node...");var a={default_ws_node:e.ws,ws_node_list:[{url:e.ws,name:e.name}],networks:[{core_asset:"COCOS",chain_id:e.chainId}],faucet_url:e.faucetUrl,auto_reconnect:!0,real_sub:!0,check_cached_nodes_data:!1};n.apiConfigChangeNode(a,!0).then(function(t){n.$kalert({message:n.$i18n.t("alert.modifySuccess")}),p.default.set("choose_node",e),n.nodeSyncFn(e)})},switchAPINodeAjaxtest:function(e){var t=this,n=this;i.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(a){window.localStorage.setItem("delAccount","sure"),t.setLogin(!1),t.setIsAccount(!1),t.setAccount({account:"",password:""}),t.init().then(function(t){return new i.default(function(t,a){n.switchAPINode({url:e.ws}).then(function(e){t(e)})})}).then(function(t){return new i.default(function(a,o){t.data.selectedNodeUrl?(n.apiConfig(e).then(function(e){a(e)}),n.choose=e):n.$kalert({message:n.$i18n.t("alert.modifyFailed")})})}).then(function(t){n.lookupWSNodeList().then(function(t){t.data.selectedNodeUrl?n.nodeSyncFn(e):n.$kalert({message:n.$i18n.t("alert.modifyFailed")})})})})},lockAccountAjax:function(){var e=this,t=this;this.lockAccount().then(function(n){1==n.code?t.$router.push({name:"unlockActive"}):n.message.indexOf("wrong password")>-1||n.message.indexOf("password error")>-1?e.$kalert({message:e.$i18n.t("error[105]")}):e.$kalert({message:t.$i18n.t("chainInterfaceError[500]")})})},NewBCX:function(e){var t={ws_node_list:[{url:e.ws,name:e.name}],networks:[{core_asset:"COCOS",chain_id:e.chainId}],faucetUrl:e.faucetUrl,auto_reconnect:!0,worker:!1,real_sub:!0,check_cached_nodes_data:!0};return new b.default(t)},goSettings:function(){this.$router.push({name:"settings"})},refreshData:function(){this.$emit("refresh")},removeCurrentAccount:function(e){var t=this;i.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(e){window.localStorage.setItem("delAccount","sure"),t.setLogin(!1),t.setIsAccount(!1),t.setAccount({account:"",password:""}),t.$router.replace({name:"initAccount"})})}})}},"RR+N":function(e,t,n){t=e.exports=n("UTlt")(!1),t.push([e.i,'\n.qr-code[data-v-51e0eeac]{background-image:url("/images/qrcode-bg.png");background-repeat:no-repeat;background-position:center center;width:160px;height:160px;margin:30px auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n',""])},V0mS:function(e,t){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},XLFa:function(e,t){e.exports={name:"bigi",version:"1.4.2",description:"Big integers.",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},repository:{url:"https://github.com/cryptocoinjs/bigi",type:"git"},main:"./lib/index.js",scripts:{"browser-test":"./node_modules/.bin/mochify --wd -R spec",test:"./node_modules/.bin/_mocha -- test/*.js",jshint:"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",unit:"./node_modules/.bin/mocha",coverage:"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},dependencies:{},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},__npminstall_done:"Mon Mar 02 2020 16:49:21 GMT+0800 (GMT+08:00)",_from:"bigi@1.4.2",_resolved:"https://registry.npm.taobao.org/bigi/download/bigi-1.4.2.tgz"}},aaWI:function(e,t,n){t=e.exports=n("UTlt")(!1),t.push([e.i,"\n.mask[data-v-13e68814]{position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.5);z-index:999\n}\n.dialog[data-v-13e68814]{position:fixed;width:80%;padding:15px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:999;background-color:#fff;border:1px solid #e6e6e6;border-radius:10px\n}\n.dialog-close[data-v-13e68814]{position:absolute;top:15px;right:15px;cursor:pointer;font-size:16px\n}\n.dialog-title[data-v-13e68814]{font-size:16px;text-align:center;margin-bottom:10px;padding-bottom:15px;border-bottom:1px dashed #e6e6e6\n}\n.dialog-body[data-v-13e68814]{padding:10px 0\n}\n.dialog-footer[data-v-13e68814]{margin:10px 0\n}\n.fade-enter-active[data-v-13e68814],.fade-leave-active[data-v-13e68814]{-webkit-transition:all .5s ease;transition:all .5s ease\n}\n.fade-enter[data-v-13e68814],.fade-leave-to[data-v-13e68814]{bottom:0;opacity:0\n}\n",""])},dY0r:function(e,t,n){var a=n("aaWI");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("31be40b4",a,!0,{})},eYtc:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("span",{on:{click:e.goBack}},[n("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),e._v(" "),n("span",{staticClass:"title"},[e._v(e._s(e.title))])])},o=[],i={render:a,staticRenderFns:o};t.a=i},gy7S:function(e,t,n){"use strict";function a(e){n("9kla")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("hiSt"),i=n.n(o);for(var f in o)"default"!==f&&function(e){n.d(t,e,function(){return o[e]})}(f);var s=n("DJmA"),c=n("C7Lr"),r=a,d=c(i.a,s.a,!1,r,"data-v-51e0eeac",null);t.default=d.exports},hBP4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("rVsN"),i=a(o),f=n("kEHT"),s=a(f),c=function(){return new i.default(function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},function(t){var n=s.default.get("choose_node");chrome.tabs.sendMessage(t[0].id,{type:"change",content:n},function(t){e(t)})})})};t.default={tabsSendMessage:c}},hiSt:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("4YfN"),i=a(o),f=n("3cXf"),s=a(f),c=n("BTfB"),r=a(c),d=n("3Khw"),l=a(d),p=n("48sp");t.default={components:{Navigation:r.default,AppHeader:l.default},data:function(){return{account:{}}},mounted:function(){this.account=(0,s.default)({address:this.cocosAccount.accounts})},computed:(0,i.default)({},(0,p.mapState)(["currentAccount","cocosAccount"])),methods:(0,i.default)({},(0,p.mapActions)("account",["loadAccount"]),{copySuccess:function(){this.$kalert({message:this.$i18n.t("alert.copySuccess")})},copyError:function(){this.$kalert({message:this.$i18n.t("alert.copyFail")})},refreshAccount:function(){this.loadAccount()}})}},omtu:function(e,t,n){t=e.exports=n("UTlt")(!1),t.push([e.i,"\nmain[data-v-37d109ec]{background-color:#fff\n}\n.eos-info[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:60px;margin:0 auto\n}\n.eos-main[data-v-37d109ec]{padding-top:20px;text-align:center;border-top:1px dashed #e6e6e6\n}\n.eos-main .eos-logo[data-v-37d109ec]{margin-top:20px;border-radius:100%\n}\n.eos-main .eos-logo-small[data-v-37d109ec]{width:80px;height:80px\n}\n.eos-main .go-active a[data-v-37d109ec]{color:#ff5b5b;text-decoration:underline\n}\n.eos-main a.active-btn[data-v-37d109ec]{display:block;width:100px;height:30px;margin:10px auto;line-height:30px;text-align:center;color:#fff;border-radius:4px;background-color:#ff5b5b;text-decoration:none\n}\n.eos-main .translate-log-title[data-v-37d109ec]{position:relative;z-index:1\n}\n.eos-main .translate-log-title .log-line[data-v-37d109ec]{width:100%;height:1px;background-color:#e6e6e6;position:absolute;top:50%;left:0;-webkit-transform:translate(0, -50%);transform:translate(0, -50%);z-index:-1\n}\n.eos-main .translate-log-title .log-title[data-v-37d109ec]{width:80px;background-color:#fff;text-align:center;color:#666;margin:0 auto;font-size:14px\n}\n.eos-main .translate-log-title .log-option[data-v-37d109ec]{position:absolute;top:50%;right:0;-webkit-transform:translate(0, -50%);transform:translate(0, -50%);background-color:#fff;width:100px\n}\n.no-result[data-v-37d109ec]{font-size:12px;padding-bottom:15px;margin-bottom:15px;color:#999\n}\n.account[data-v-37d109ec]{width:160px;position:relative;height:40px;line-height:40px\n}\n.account .avatar[data-v-37d109ec]{position:absolute;top:5px;left:0;width:30px;height:30px\n}\n.account .current-account[data-v-37d109ec]{text-align:center;font-size:18px;overflow:hidden;width:150px;white-space:nowrap;text-overflow:ellipsis\n}\n.account .account-arrow[data-v-37d109ec]{position:absolute;width:10px;height:30px;line-height:30px;top:5px;right:0\n}\nul[data-v-37d109ec],li[data-v-37d109ec]{margin:0;padding:0\n}\nli[data-v-37d109ec]{list-style:none\n}\n.account-container[data-v-37d109ec]{position:relative;width:160px;height:40px;margin-top:10px;cursor:pointer\n}\n.account-container i[data-v-37d109ec]{font-size:20px\n}\n.account-container .account-list[data-v-37d109ec]{position:absolute;background-color:rgba(0,0,0,0.7);border-radius:8px;padding:0 10px;top:40px;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);width:190px;max-height:240px;z-index:99\n}\n.account-container .account-list ul[data-v-37d109ec]{margin:0;padding:0\n}\n.account-container .account-list li[data-v-37d109ec]{width:100%;position:relative;margin:0;padding:0;font-size:16px;height:40px;line-height:40px;color:#fff;cursor:pointer\n}\n.account-container .account-list li .selected[data-v-37d109ec]{position:absolute;top:0;left:0;width:20px;line-height:47px\n}\n.account-container .account-list li .account-item[data-v-37d109ec]{position:relative;width:100%;padding:0 0 0 25px\n}\n.account-container .account-list li .account-item .avatar-small[data-v-37d109ec]{top:10px;left:25px;position:absolute;width:20px;height:20px\n}\n.account-container .account-list li .account-item .account-name[data-v-37d109ec]{width:100%;padding-left:25px;font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden\n}\n.account-container .account-list li .is-import[data-v-37d109ec]{position:absolute;width:35px;top:0;right:5px;color:#4679fe\n}\n.account-container .account-list .operate-item[data-v-37d109ec]{height:30px;line-height:30px\n}\n.dashed-line[data-v-37d109ec]{width:100%;height:0;border-bottom:1px dashed #e6e6e6\n}\n.more[data-v-37d109ec]{position:relative;margin-top:10px\n}\n.more span[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;cursor:pointer;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.more span i[data-v-37d109ec]{font-size:20px\n}\n.more-btn[data-v-37d109ec]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end\n}\n.more .more-list[data-v-37d109ec]{position:absolute;background-color:rgba(0,0,0,0.7);top:40px;right:0;width:160px;padding:0 10px;border-radius:8px\n}\n.more .more-list .icon-img[data-v-37d109ec]{vertical-align:middle\n}\n.more .more-list li[data-v-37d109ec]{width:100%;margin:0;padding:0;line-height:40px;color:#fff;font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer\n}\n.more .more-list li a[data-v-37d109ec]{color:#fff;text-decoration:none\n}\n.btn-group[data-v-37d109ec]{position:relative;z-index:9;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px\n}\n.btn-group .charge[data-v-37d109ec]{width:130px\n}\n.action-group[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;margin-bottom:10px\n}\n.action-group .button[data-v-37d109ec]{width:130px\n}\n.translate-container[data-v-37d109ec]{margin:0 -15px\n}\n.translate-list[data-v-37d109ec]{position:relative;height:200px;padding:0 15px\n}\n.eos-style[data-v-37d109ec]{line-height:1.6;font-size:20px;margin-bottom:8px;font-weight:normal;color:#7046fe\n}\n.eos-style-color[data-v-37d109ec]{color:#333333\n}\n.warning-tip[data-v-37d109ec]{font-size:12px;color:#ff5b5b\n}\n.key-container[data-v-37d109ec]{margin-top:15px;background:rgba(70,121,254,0.2);border-radius:8px;padding:10px 5px;line-height:1.6\n}\n.copy-btn[data-v-37d109ec]{width:132px;font-size:14px;height:36px;line-height:26px\n}\n.token-title[data-v-37d109ec]{position:relative;height:60px;line-height:60px;text-align:center;border-bottom:1px dashed #e6e6e6\n}\n.token-title .token-user[data-v-37d109ec]{display:inline-block;font-size:18px;width:100%;padding-right:40px;padding-left:15px\n}\n.token-title .close-drawer[data-v-37d109ec]{position:absolute;right:15px;top:10px;width:15px;line-height:35px;height:30px;cursor:pointer\n}\n.assets[data-v-37d109ec]{position:relative;height:440px\n}\n.assets ul[data-v-37d109ec]{padding:0 15px;margin-top:20px\n}\n.assets li[data-v-37d109ec]{list-style:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(70,121,254,0.2);margin-bottom:15px;padding:0 15px;height:50px;cursor:pointer;border-radius:4px\n}\n.assets li[data-v-37d109ec]:last-child{margin-bottom:0\n}\n.assets li .asset-value[data-v-37d109ec]{color:#7046fe\n}\n.assets li .asset-name[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.assets li .asset-name span[data-v-37d109ec]{font-size:13px;padding-left:10px\n}\n.warning-tit[data-v-37d109ec]{font-size:12px;color:#333\n}\n.header[data-v-37d109ec]{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;border-bottom:1px solid #e6e6e6;background-color:rgba(70,121,254,0.2)\n}\n.setting-icon[data-v-37d109ec]{width:93px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.setting-icon img[data-v-37d109ec]{cursor:pointer\n}\n.header-logo[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:62px\n}\n.header-logo img[data-v-37d109ec],.header-logo span[data-v-37d109ec]{display:block\n}\n.network[data-v-37d109ec]{position:relative;border:1px solid #e6e6e6;border-radius:20px\n}\n.network span[data-v-37d109ec]{display:block\n}\na.network-toggle[data-v-37d109ec]{max-width:170px;width:170px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-size:12px;text-transform:uppercase;padding:6px 15px;border-radius:20px;cursor:pointer\n}\n.network-icon[data-v-37d109ec]{width:12px;height:12px;background:#20ad00;border-radius:100%\n}\n.icon[data-v-37d109ec]{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;width:1em;height:1em\n}\n.network-arrow[data-v-37d109ec]{padding-top:2px\n}\n.network-name[data-v-37d109ec]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-weight:600;color:#666;padding:0.1rem 0.3rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.network-dropdown[data-v-37d109ec]{background:rgba(0,0,0,0.8);position:absolute;top:40px;right:0;border-radius:8px;width:170px;z-index:99;padding:10px\n}\n.network-dropdown a[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:0.375rem 0.75rem;font-size:0.75rem;line-height:1.25;color:#fff\n}\n.network-dropdown a[data-v-37d109ec]:hover,.network-dropdown a[data-v-37d109ec]:focus{color:#ff5b5b\n}\n.network-dropdown a span[data-v-37d109ec]{display:block\n}\n.network-dropdown-icon[data-v-37d109ec]{padding:3px 8px 0 0;font-size:0.625rem\n}\n.dropdown-menu[data-v-37d109ec]{box-shadow:0 0 5px rgba(0,0,0,0.2);background:#fff;position:absolute;top:40px;right:10px;padding:0.5rem 0;border-radius:3px;min-width:125px\n}\n.dropdown-menu a[data-v-37d109ec]{display:block;padding:0.5rem 1rem;font-size:0.875rem;color:#666\n}\n.dropdown-menu a[data-v-37d109ec]:hover,.dropdown-menu a[data-v-37d109ec]:focus{color:#ff5b5b\n}\n.header-tabs[data-v-37d109ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%\n}\n.header-tabs a[data-v-37d109ec]{display:block;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:0.625rem;color:#666;font-size:0.75rem;text-transform:uppercase;text-align:center\n}\n.header-tabs a.active[data-v-37d109ec]{color:#ff5b5b;border-bottom:2px solid #ff5b5b\n}\n.header-tabs a[data-v-37d109ec]:hover,.header-tabs a[data-v-37d109ec]:focus{color:#ff5b5b\n}\n",""])},qPsl:function(e,t,n){t=e.exports=n("UTlt")(!1),t.push([e.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])},vTOj:function(e,t,n){var a=n("qPsl");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("09f6b350",a,!0,{})},wkCy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"k-dialog",props:{title:{type:String,default:"提示"},visible:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0}},methods:{handleClose:function(){this.$emit("close")}}}}});