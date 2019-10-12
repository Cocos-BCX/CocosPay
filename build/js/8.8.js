webpackJsonp_name_([8],{"16f7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-container"},[a("navigation",{attrs:{title:t.$t("title.importAccount")}}),t._v(" "),a("el-form",{ref:"form",attrs:{model:t.formData,rules:t.formRules,"label-position":"top"}},[a("el-form-item",{attrs:{label:t.$t("label.cocosPrivate"),prop:"privateKey"}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.formData.privateKey,callback:function(e){t.$set(t.formData,"privateKey",e)},expression:"formData.privateKey"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:t.$t("placeholder.temporary")},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"text",value:""}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"full-btn mt20",attrs:{type:"primary"},on:{click:function(e){return t.importAccount("form")}}},[t._v(t._s(t.$t("button.importSure")))])],1)],1)],1)},n=[],o={render:r,staticRenderFns:n};e.a=o},"7U9x":function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),o=r(n),s=a("J0Oq"),i=r(s),c=a("4YfN"),l=r(c),u=a("n95b"),f=(r(u),a("YduS"),a("2bvH")),p=a("eIxI"),d=(r(p),a("efDr")),v=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);e.default=t}(d),a("BTfB")),m=r(v);e.default={components:{Navigation:m.default},data:function(){var t=this,e=function(e,a,r){""===a?r(new Error(t.$i18n.t("verify.passwordNull"))):r()};return{formData:{privateKey:"",password:"",has_import:!1},formRules:{privateKey:[{validator:function(e,a,r){""===a||a.length<50?r(new Error(t.$i18n.t("alert.illegalPrivateKey"))):r()},trigger:"blur"}],password:[{validator:e,trigger:"blur"}]}}},computed:(0,l.default)({},(0,f.mapState)(["accounts","temporaryKeys"])),mounted:function(){var t=this;this.getAccounts().then(function(e){e.accounts&&e.accounts.length&&(t.has_import=!0)})},methods:(0,l.default)({},(0,f.mapMutations)(["addAccount","setKeys","setAccount","setLogin","setIsAccount","settemporaryKeys"]),(0,f.mapActions)("account",["setPrivateKeys","logoutBCXAccount"]),(0,f.mapActions)("wallet",["getAccounts"]),{importAccount:function(t){var e=this;this.$refs[t].validate(function(){var t=(0,i.default)(o.default.mark(function t(a){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a&&(e.setKeys(e.formData.privateKey),e.settemporaryKeys(e.formData.password),e.setPrivateKeys({has_import:e.has_import}).then(function(t){1===t.code&&(e.setKeys(""),e.setAccount({account:t.data.account_name,password:""}),e.settemporaryKeys(""),e.setLogin(!0),e.setIsAccount(!0),e.$router.push({name:"home"}))}));case 1:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}})}},BTfB:function(t,e,a){"use strict";function r(t){a("vTOj")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("OFBO"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var i=a("eYtc"),c=a("C7Lr"),l=r,u=c(o.a,i.a,!1,l,"data-v-5fafd526",null);e.default=u.exports},OFBO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},eYtc:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("span",{on:{click:t.goBack}},[a("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},n=[],o={render:r,staticRenderFns:n};e.a=o},ebtA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7U9x"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);var s=a("16f7"),i=a("C7Lr"),c=i(n.a,s.a,!1,null,null,null);e.default=c.exports},qPsl:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])},vTOj:function(t,e,a){var r=a("qPsl");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("FIqI")("4500d2fa",r,!0,{})}});