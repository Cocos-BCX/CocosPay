webpackJsonp_name_([3],{"+78s":function(t,e,n){var a=n("w4E4"),o=n("hlru")(!0);a(a.S,"Object",{entries:function(t){return o(t)}})},BTfB:function(t,e,n){"use strict";function a(t){n("vTOj")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("OFBO"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var s=n("eYtc"),l=n("C7Lr"),c=a,u=l(r.a,s.a,!1,c,"data-v-5fafd526",null);e.default=u.exports},OFBO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},"Q+Ik":function(t,e,n){t.exports={default:n("hPGJ"),__esModule:!0}},Suej:function(t,e,n){var a=n("hn3j");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("fedbd152",a,!0,{})},ZmBw:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("lC5x"),r=a(o),i=n("Q+Ik"),s=a(i),l=n("HzJ8"),c=a(l),u=n("KH7x"),f=a(u),p=n("J0Oq"),m=a(p),d=n("4YfN"),v=a(d),b=n("BTfB"),x=a(b),h=n("1RNw"),_=(a(h),n("48sp")),y=n("n95b"),g=(a(y),n("eIxI")),k=(a(g),n("efDr")),w=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(k),n("7Adc"),n("kEHT")),$=a(w);e.default={components:{Navigation:x.default},data:function(){var t=this,e=function(e,n,a){""===n?a(new Error(t.$i18n.t("verify.ownerAccountNull"))):a()},n=function(e,n,a){""===n?a(new Error(t.$i18n.t("verify.toAddressNull"))):n===t.cocosAccount.accounts?a(new Error(t.$i18n.t("message.ownerError"))):a()},a=function(e,n,a){""===n?a(new Error(t.$i18n.t("verify.tokenNull"))):n===t.cocosAccount.accounts?a(new Error(t.$i18n.t("message.ownerError"))):a()},o=function(e,n,a){n<0||0==n?a(new Error(t.$i18n.t("verify.noZero"))):/^(-?\d+)(\.\d+)?$/.test(n)?n.toString().split(".")[1]&&n.toString().split(".")[1].length>t.precision?a(new Error(t.$i18n.t("verify.minimum")+t.precision)):a():a(new Error(t.$i18n.t("verify.number")))};return{currentNodeName:$.default.get("choose_node").name,popup:!1,formData:{from:"",to:"",token:"COCOS",amount:0,memo:""},owner:!1,formRules:{from:{validator:e,trigger:"blur"},to:{validator:n,trigger:"blur"},token:{validator:a,trigger:"blur"},amount:{validator:o,trigger:"blur"}},tokens:[],assetKey:this.$route.params.assetKey?this.$route.params.assetKey:"",coins:[],precision:"",fee:""}},computed:(0,v.default)({},(0,_.mapState)(["cocosAccount","cocosCount","accountType"]),(0,_.mapState)("wallet",["accounts"]),(0,_.mapState)("trans",["tranferInfo"]),{payName:function(){var t=this,e=this.accounts.find(function(e){return e.address===t.formData.from});return e?e.name:""}}),created:function(){var t=this;return(0,m.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.formData.from=t.cocosAccount.accounts,e.next=3,t.UserAccount().then(function(e){if(1===e.code)if(Array.isArray(e.data))t.coins=e.data.filter(function(t){return"GAS"!=t.coins});else{var n=!0,a=!1,o=void 0;try{for(var r,i=(0,c.default)((0,s.default)(e.data));!(n=(r=i.next()).done);n=!0){var l=r.value,u=(0,f.default)(l,2),p=u[0],m=u[1];"GAS"!=p&&t.coins.push({coin:p,amount:m})}}catch(t){a=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}}else t.$kalert({message:_this.$i18n.t("chainInterfaceError[500]")})});case 3:"wallet"===t.accountType&&t.OutPutKey().then(function(e){e.data.active_private_keys&&e.data.active_private_keys.length||(t.owner=!0)}),t.changeCoin();case 5:case"end":return e.stop()}},e,t)}))()},methods:(0,v.default)({},(0,_.mapMutations)("trans",["setAccount"]),(0,_.mapActions)("trans",["tranferBCX","queryTranferRate","queryAsset","tranferBCXFree"]),(0,_.mapActions)("account",["UserAccount","OutPutKey"]),{changeCoin:function(){var t=this;return(0,m.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryAsset({assetId:t.formData.token}).then(function(e){t.precision=e.precision});case 2:return e.next=4,t.queryTranferRate({feeAssetId:"COCOS"}).then(function(e){t.fee=e.data.fee_amount.toFixed(t.precision)});case 4:case"end":return e.stop()}},e,t)}))()},onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.popup=!0)})},surePay:function(){var t=this;console.log("this.formData"),console.log(this.formData),this.setAccount({toAccount:this.formData.to,coin:this.formData.token,amount:this.formData.amount,memo:this.formData.memo}),this.popup=!1,this.tranferBCX().then(function(e){1===e.code?(t.$kalert({message:t.$i18n.t("alert.tranferSuccess")}),t.$router.push({name:"home"})):e.message.indexOf("Transaction was not signed. Do you have a private key? [no_signers]")>-1?t.$kalert({message:t.$i18n.t("verify.ownerKey")}):e.message.indexOf("Assert Exception: itr->get_balance()")>-1?t.$kalert({message:t.$i18n.t("alert.transferFail")}):e.message.indexOf("locked->value")>-1?t.$kalert({message:t.$i18n.t("alert.transferFail")}):e.message.indexOf("insufficient_balance")>-1?t.$kalert({message:t.$i18n.t("alert.transferFail")}):t.$kalert({message:t.$i18n.t("chainInterfaceError[500]")})}).catch(function(t){console.log(t)})}})}},eYtc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("span",{on:{click:t.goBack}},[n("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],r={render:a,staticRenderFns:o};e.a=r},hPGJ:function(t,e,n){n("+78s"),t.exports=n("xhIC").Object.entries},hlru:function(t,e,n){var a=n("ImsE"),o=n("nMsj"),r=n("ZiDz"),i=n("mqvE").f;t.exports=function(t){return function(e){for(var n,s=r(e),l=o(s),c=l.length,u=0,f=[];c>u;)n=l[u++],a&&!i.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},hn3j:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"\n.popup[data-v-6e7088ec]{position:fixed;background-color:rgba(0,0,0,0.5);top:0;left:0;right:0;bottom:0;z-index:99\n}\n.popup-container[data-v-6e7088ec]{width:100%;position:absolute;bottom:0;left:0;padding:20px;background-color:#fff\n}\n.popup-container .close[data-v-6e7088ec]{position:absolute;right:20px;top:5px;font-size:18px;cursor:pointer;color:#999\n}\n.popup-container .title[data-v-6e7088ec]{text-align:center;padding-bottom:15px;font-size:16px;border-bottom:1px dashed #e6e6e6\n}\n.popup-container .item[data-v-6e7088ec]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:50px;overflow:hidden\n}\n.popup-container .item .label[data-v-6e7088ec]{white-space:nowrap;color:#999;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.popup-container .item .content[data-v-6e7088ec]{padding-left:5px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:270px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.popup-container .item .memo-content[data-v-6e7088ec]{max-height:50px;line-height:18px\n}\n.popup-container .item .money-label[data-v-6e7088ec]{color:#333\n}\n.popup-container .item .money-content[data-v-6e7088ec]{color:#4679fe;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end\n}\n.popup-container .item .money-content span[data-v-6e7088ec]{font-size:16px;position:relative;padding-right:5px\n}\n.popup-container .item .money-content .test-coin[data-v-6e7088ec]{font-size:14px\n}\n",""])},iUfw:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-container transfers"},[n("navigation",{attrs:{title:t.$t("title.transfer")}}),t._v(" "),n("el-form",{ref:"form",staticClass:"mt20",attrs:{model:t.formData,rules:t.formRules,"label-position":"top"}},[n("el-form-item",{attrs:{label:t.$t("label.ownerAccount"),prop:"from"}},[n("el-input",{staticClass:"no-border",attrs:{disabled:!0},model:{value:t.formData.from,callback:function(e){t.$set(t.formData,"from",e)},expression:"formData.from"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("label.toAddress"),prop:"to"}},[n("el-input",{staticClass:"no-border",model:{value:t.formData.to,callback:function(e){t.$set(t.formData,"to",e)},expression:"formData.to"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Test"==t.currentNodeName?t.$t("label.tokenType")+t.$t("title.test"):t.$t("label.tokenType"),prop:"token"}},[n("el-select",{staticClass:"no-border",staticStyle:{width:"100%"},on:{change:t.changeCoin},model:{value:t.formData.token,callback:function(e){t.$set(t.formData,"token",e)},expression:"formData.token"}},t._l(t.coins,function(t,e){return n("el-option",{key:e,attrs:{value:t.coin,label:t.coin}})}),1)],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("label.amount"),prop:"amount"}},[n("el-input",{staticClass:"no-border",attrs:{type:"text"},model:{value:t.formData.amount,callback:function(e){t.$set(t.formData,"amount",e)},expression:"formData.amount"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("label.memo"),prop:"memo"}},[n("el-input",{staticClass:"no-border",attrs:{type:"text"},model:{value:t.formData.memo,callback:function(e){t.$set(t.formData,"memo",e)},expression:"formData.memo"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"full-btn mt10",attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(t._s(t.$t("button.send")))])],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}],staticClass:"popup"},[n("div",{staticClass:"popup-container"},[n("div",{staticClass:"close",on:{click:function(e){t.popup=!1}}},[n("v-icon",{attrs:{name:"times",scale:"1.4"}})],1),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.$t("title.sendDetail")))]),t._v(" "),n("div",{staticClass:"popup-body"},[n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("label.ownerAccount")))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.cocosAccount.accounts))])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("label.toAddress")))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.formData.to))])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"label money-label"},[t._v(t._s(t.$t("label.amount")))]),t._v(" "),n("div",{staticClass:"content money-content"},[n("span",[t._v(t._s(t.formData.amount))]),t._v("\n            "+t._s(t.formData.token)+"\n            "),"Test"==t.currentNodeName?n("span",{staticClass:"test-coin"},[t._v("("+t._s(t.$t("title.test"))+")")]):t._e()])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("label.memo")))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.formData.memo))])]),t._v(" "),n("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:t.surePay}},[t._v(t._s(t.$t("button.surePay")))])],1)])])],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},kPc9:function(t,e,n){"use strict";function a(t){n("Suej")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("ZmBw"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var s=n("iUfw"),l=n("C7Lr"),c=a,u=l(r.a,s.a,!1,c,"data-v-6e7088ec",null);e.default=u.exports},qPsl:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])},vTOj:function(t,e,n){var a=n("qPsl");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("4500d2fa",a,!0,{})}});