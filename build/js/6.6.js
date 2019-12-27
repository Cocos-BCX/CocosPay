webpackJsonp_name_([6],{"2HIO":function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a("4YfN"),s=o(r),n=a("48sp"),c=a("BTfB"),i=o(c),l=(a("7Adc"),a("Muz9"));o(l);e.default={components:{Navigation:i.default},data:function(){var t=this,e=function(e,a,o){var r=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,12}$/;""===a?o(new Error(t.$i18n.t("verify.passwordNull"))):r.test(a)?o():o(new Error(t.$i18n.t("verify.passwordType")))};return{wallet:null,formData:{account:"",password:""},type:"",formRules:{account:[{validator:function(e,a,o){var r=/^[a-z]([a-z0-9\.-]){4,63}$/;""===a?o(new Error(t.$i18n.t("verify.accountNull"))):r.test(a)?o():o(new Error(t.$i18n.t("verify.accountType")))},trigger:"blur"}],password:[{validator:e,trigger:"blur"}],repassword:[{validator:function(e,a,o){""===a?o(new Error(t.$i18n.t("verify.passwordSure"))):a!==t.formData.password?o(new Error(t.$i18n.t("verify.passwordMatch"))):o()},trigger:"blur"}]},owner_private_key:"",active_private_key:"",accountKey:!1}},computed:(0,s.default)({},(0,n.mapState)(["curLng","accounts","passwords"])),created:function(){this.lang=this.$i18n.locale,this.type=this.$route.params.type},methods:(0,s.default)({},(0,n.mapMutations)(["setCurLng","setAccount","setLogin","setIsAccount","loading"]),(0,n.mapActions)("account",["loadBCXAccount","loginBCXAccount","logoutBCXAccount","OutPutKey"]),(0,n.mapActions)("wallet",["WalletBCXAccount"]),{copySuccess:function(){this.$kalert({message:this.$i18n.t("alert.copySuccess")})},copyError:function(){this.$kalert({message:this.$i18n.t("alert.copyFail")})},closedAccountDialog:function(){this.setIsAccount(!0),this.setLogin(!0),this.$router.replace({name:"home"}),this.accountKey=!1},createWallet:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.setAccount(e.formData),"account"===e.type?e.loadBCXAccount().then(function(t){console.log("loadBCXAccount"),console.log(t),1===t.code?(e.setIsAccount(!0),e.setAccount({account:e.formData.account,password:""}),e.setLogin(!0),e.$router.push({name:"home"})):e.setAccount({account:"",password:""})}):e.WalletBCXAccount().then(function(t){1===t.code&&(e.setAccount({account:e.formData.account,password:""}),e.OutPutKey().then(function(t){1===t.code&&(e.setIsAccount(!0),e.setLogin(!0),e.active_private_key=t.data.active_private_keys[0],e.owner_private_key=t.data.owner_private_keys[0],e.accountKey=!0)}))}))})},changeLanguage:function(){this.setCurLng(this.lang),this.$i18n.locale=this.lang,this.$kalert({message:this.$i18n.t("alert.modifySuccess")}),this.createWallet("form")}})}},BTfB:function(t,e,a){"use strict";function o(t){a("vTOj")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("OFBO"),s=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);var c=a("eYtc"),i=a("C7Lr"),l=o,u=i(s.a,c.a,!1,l,"data-v-5fafd526",null);e.default=u.exports},BfHq:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-container"},[a("navigation",{attrs:{title:t.$t("title.createAccount")}}),t._v(" "),t._m(0),t._v(" "),a("h2",{staticClass:"text-center index-title"},[t._v("CocosPay")]),t._v(" "),t.accountKey?t._e():a("el-form",{ref:"form",staticClass:"mt20",attrs:{model:t.formData,rules:t.formRules}},[a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{staticClass:"no-border",attrs:{type:"text",placeholder:t.$t("placeholder.account")},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:t.$t("placeholder.password")},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"repassword"}},[a("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:t.$t("placeholder.repassword")},model:{value:t.formData.repassword,callback:function(e){t.$set(t.formData,"repassword",e)},expression:"formData.repassword"}})],1),t._v(" "),a("el-form-item",{staticClass:"mt20"},[a("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:function(e){return t.createWallet("form")}}},[t._v(t._s(t.$t("button.create")))])],1)],1),t._v(" "),a("section",{staticClass:"small-tip text-center"},[t._v(t._s(t.$t("message.rememberPassword")))]),t._v(" "),a("el-dialog",{attrs:{top:"15vh",center:"",title:t.$t("button.exportPrivateKey"),"close-on-click-modal":!1,visible:t.accountKey},on:{closed:t.closedAccountDialog,"update:visible":function(e){t.accountKey=e}}},[a("div",{staticClass:"warm-tip"},[t._v(t._s(t.$t("message.savePrivateKey")))]),t._v(" "),a("section",{staticClass:"privateKey-area"},[t._v(t._s(t.active_private_key))]),t._v(" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.active_private_key,expression:"active_private_key",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticClass:"full-btn",attrs:{type:"primary"}},[t._v(t._s(t.$t("button.copy"))+"active_key")]),t._v(" "),a("section",{staticClass:"privateKey-area"},[t._v(t._s(t.owner_private_key))]),t._v(" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.owner_private_key,expression:"owner_private_key",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticClass:"full-btn",attrs:{type:"primary"}},[t._v(t._s(t.$t("button.copy"))+"owner_key")])],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"logo"},[a("img",{staticClass:"block-center",attrs:{src:"/icons/logo-big.png",alt:""}})])}],s={render:o,staticRenderFns:r};e.a=s},Ihir:function(t,e,a){"use strict";function o(t){a("NYCR")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("2HIO"),s=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);var c=a("BfHq"),i=a("C7Lr"),l=o,u=i(s.a,c.a,!1,l,"data-v-00ec8c79",null);e.default=u.exports},NYCR:function(t,e,a){var o=a("Tlx2");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("52e8769c",o,!0,{})},OFBO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},Tlx2:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"\n.logo[data-v-00ec8c79]{margin-top:40px\n}\n.select-lang[data-v-00ec8c79]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:50px\n}\n.index-title[data-v-00ec8c79]{font-size:30px;margin:25px auto 40px\n}\n",""])},eYtc:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("span",{on:{click:t.goBack}},[a("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],s={render:o,staticRenderFns:r};e.a=s},qPsl:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])},vTOj:function(t,e,a){var o=a("qPsl");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("4500d2fa",o,!0,{})}});