webpackJsonp_name_([9],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_9a752d64_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(899);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(897)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9a752d64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_9a752d64_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/pages/unlock/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a752d64", Component.options)
  } else {
    hotAPI.reload("data-v-9a752d64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _utils = __webpack_require__(154);

var _utils2 = _interopRequireDefault(_utils);

var _vuex = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    // const validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error(this.$i18n.t("verify.passwordNull")));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      unlock: ""
      // formData: {
      //   password: ""
      // },
      // formRules: {
      //   password: [{ validator: validatePass, trigger: "blur" }]
      // }
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.init().then(function (res) {
      _this2.getAccounts().then(function (res) {
        _this2.setAccountType(res.current_account.mode);
      });
    });
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)("wallet", ["accounts", "pwdhash", "password"]), (0, _vuex.mapState)(["accountType", "cocosAccount"])),
  methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(["init"]), (0, _vuex.mapMutations)("wallet", ["setPassword", "upgradeAccounts", "getAccounts"]), (0, _vuex.mapMutations)(["upgradeCurrentAccount", "setAccount", "setLoginNoAlert"]), (0, _vuex.mapActions)("account", ["unlockAccount", "loginBCXAccount"]), (0, _vuex.mapActions)("wallet", ["getAccounts"]), (0, _vuex.mapMutations)(["upgradeCurrentAccount", "setAccount", "setLogin", "setIsAccount", "setAccountType"]), {
    unlockWallet: function unlockWallet() {
      var _this3 = this;

      if (!this.unlock) {
        this.$kalert({
          message: this.$i18n.t("verify.passwordNull")
        });
        return;
      }
      this.setAccount({
        account: this.cocosAccount.accounts,
        password: this.unlock
      });
      if (this.accountType === "wallet") {
        this.unlockAccount().then(function (res) {
          console.log("unlockAccount");
          console.log(res);
          if (res.code === 1) {
            _this3.setLoginNoAlert(true);
            _this3.setAccount({
              account: _this3.cocosAccount.accounts,
              password: ""
            });
            _this3.setIsAccount(true);
            _this3.setLogin(true);
            _this3.$router.push({ name: "home" });
          } else {
            if (res.message.indexOf("wrong password") > -1) {
              _this3.$kalert({
                message: _this3.$i18n.t("error[105]")
              });
            } else {
              _this3.AccountLock();
            }
          }
        });
      } else {
        this.AccountLock();
      }
    },
    AccountLock: function AccountLock() {
      var _this4 = this;

      var _this = this;
      this.loginBCXAccount().then(function (res) {
        _this4.setAccount({
          account: _this4.cocosAccount.accounts,
          password: ""
        });
        if (res.code === 1) {
          _this4.setIsAccount(true);
          _this4.setLogin(true);
          _this4.$router.push({ name: "home" });
        } else {
          _this4.$kalert({
            message: _this.$i18n.t("chainInterfaceError[500]")
          });
        }
      });
    }
  })
};

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(898);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("ef8d61c0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a752d64\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a752d64\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\n.welcome-title[data-v-9a752d64] {\n  text-align: center;\n  font-size: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "app-container",
      on: {
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.unLock("form")
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("h2", { staticClass: "welcome-title mt20" }, [
        _vm._v(_vm._s(_vm.$t("title.welcome")))
      ]),
      _vm._v(" "),
      _c(
        "el-form",
        { staticClass: "mt40" },
        [
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                attrs: {
                  type: "password",
                  placeholder: _vm.$t("placeholder.password")
                },
                model: {
                  value: _vm.unlock,
                  callback: function($$v) {
                    _vm.unlock = $$v
                  },
                  expression: "unlock"
                }
              }),
              _vm._v(" "),
              _c("input", {
                staticStyle: { display: "none" },
                attrs: { type: "text", value: "" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "mt20" },
            [
              _c(
                "el-button",
                {
                  staticClass: "full-btn",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.unlockWallet()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("button.unlock")))]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "logo mt40" }, [
      _c("img", {
        staticClass: "block-center",
        attrs: { src: "/icons/logo-big.png", alt: "" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-9a752d64", esExports)
  }
}

/***/ })

});