webpackJsonp_name_([7],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_367ca16e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(927);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(921)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-367ca16e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_367ca16e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/pages/initAccount/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-367ca16e", Component.options)
  } else {
    hotAPI.reload("data-v-367ca16e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _logoHeader = __webpack_require__(923);

var _logoHeader2 = _interopRequireDefault(_logoHeader);

var _tools = __webpack_require__(797);

var _utils = __webpack_require__(154);

var _utils2 = _interopRequireDefault(_utils);

var _vuex = __webpack_require__(130);

var _storage = __webpack_require__(409);

var _storage2 = _interopRequireDefault(_storage);

var _common = __webpack_require__(405);

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
//
//
//

exports.default = {
  components: {
    LogoHeader: _logoHeader2.default
  },
  data: function data() {
    return {
      currentCreateVisible: false,
      register: false,
      lang: "中文",
      langs: [{ name: "中文", value: "ZH" }, { name: "English", value: "EN" }, { name: "Français", value: "FR" }],
      choose: {},
      chooseName: '',
      nodes: []
    };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)(["currentCreateAccount", "curLng"])),
  mounted: function mounted() {
    var _this = this;
    this.nodeLists().then(function (res) {
      if (!Array.isArray(res)) return;
      // 2019-12-09  新增修改
      var isArrayNodeIndex = '';
      for (var i = 0; i < res.length; i++) {
        if (Array.isArray(res[i])) {
          isArrayNodeIndex = i;
          break;
        }
      }
      if (isArrayNodeIndex != "") {
        res.splice(isArrayNodeIndex, 1);
      }

      var chooseNodeName = '';
      var concatNodes = [];
      if (_storage2.default.get("choose_node").name) {
        chooseNodeName = _storage2.default.get("choose_node").name;
      } else {
        chooseNodeName = _common.defaultNode;
      }

      if (_storage2.default.get("add_node")) {
        concatNodes = res.concat(_storage2.default.get("add_node"));
      } else {
        concatNodes = res;
      }
      _this.nodes = concatNodes;
      var connectNode = concatNodes.filter(function (item) {
        return item.name == chooseNodeName;
      });
      _this.choose = connectNode[0];
      _this.chooseName = connectNode[0].name;
      // 2019-12-09  新增修改 完成


      // 2019-12-09  注释修改
      // res[0].connect = true;
      // this.apiConfig(res[0]).then(() => {
      //   this.init();
      // });
      // 2019-12-09  注释修改 完成


      // 2019-12-09  新增修改
      connectNode[0].connect = true;

      _this.loadingBCXAccount().then(function (res) {
        console.log("loadingBCXAccount");
        console.log(res);
      });
      _this.apiConfig(connectNode[0]).then(function (apiConfigRes) {
        _this.lookupWSNodeList({
          refresh: true
        }).then(function (lookupWSNodeListRes) {
          console.log('++++++lookupWSNodeListRes');
          console.log(lookupWSNodeListRes);
          // this.init();
        });
      });
      // 2019-12-09  新增修改 完成
    });
    this.lang = this.curLng === "ZH" ? "中文" : this.curLng === "EN" ? "English" : "Français";
    this.$i18n.locale = this.curLng;
  },
  created: function created() {
    console.log("this.$router.query");
    console.log(this.$route.query);
    // this.nodes = Storage.get("node").concat(
    //   Storage.get("add_node") ? Storage.get("add_node") : []
    // );
    // this.choose = Storage.get("choose_node");
  },

  methods: (0, _extends3.default)({}, (0, _vuex.mapMutations)("wallet", ["addAccount"]), (0, _vuex.mapActions)(["nodeLists", "apiConfig", "init", "switchAPINode", "lookupWSNodeList"]), (0, _vuex.mapMutations)(["setCurrentAccount", "setCurrentCreateAccount", "setCurrentCreateVisible", "setCurLng"]), (0, _vuex.mapActions)("wallet", ["deleteWallet"]), (0, _vuex.mapActions)("account", ["logoutBCXAccount", "loadingBCXAccount"]), {
    nodeSyncFn: function nodeSyncFn(changeNode) {
      console.log("nodeSyncFn");
      // chrome.tabs.query可以通过回调函数获得当前页面的信息tabs
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("tabs");
        console.log(tabs);
        // 发送一个copy消息出去
        chrome.tabs.sendMessage(tabs[0].id, changeNode, function (response) {
          console.log("response");
          console.log(response);
          // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
          // 将值存在background.js的data属性里面。
          // var win = chrome.extension.getBackgroundPage();
          // win.data=response;
        });
      });
    },
    closedDialog: function closedDialog() {
      this.currentCreateVisible = false;
      this.register = false;
    },
    copySuccess: function copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
    },
    logout: function logout() {
      _promise2.default.all([this.deleteWallet(), this.logoutBCXAccount()]).then(function (res) {});
    },
    copyError: function copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    changeNode: function changeNode() {
      var _this = this;
      var connectNode = this.nodes.filter(function (item) {
        return item.name == _this.chooseName;
      });
      var network = connectNode[0];
      console.log("network");
      console.log(network);
      // if (network.chainId === Storage.get("choose_node").chainId) {
      //   console.log('network.chainId === Storage.get("choose_node").chainId')
      this.switchAPINode({
        url: network.ws
      }).then(function (res) {
        console.log('***********switchAPINode***************');
        console.log("switchAPINode", res);
        if (res.code === 1) {
          if (res.data.selectedNodeUrl) {
            // _this.apiConfig({
            //   faucet_url:"http://47.93.62.96:8042"   
            // })
            _this.apiConfig(network).then(function (apiConfigres) {
              console.log("apiConfigres");
              console.log(apiConfigres);
              _this.choose = network;
              _this.lookupWSNodeList().then(function (lookupWSNodeListRes) {
                console.log("lookupWSNodeListRes", lookupWSNodeListRes);
                if (lookupWSNodeListRes.data.selectedNodeUrl) {
                  _storage2.default.set("choose_node", network);
                  _this.nodeSyncFn(network);
                  _this.$kalert({
                    message: _this.$i18n.t("alert.modifySuccess")
                  });
                } else {
                  _this.$kalert({
                    message: _this.$i18n.t("alert.modifyFailed")
                  });
                }
              });
            });
          } else {
            _this.$kalert({
              message: _this.$i18n.t("alert.modifyFailed")
            });
          }
        } else {
          _this.$kalert({
            message: _this.$i18n.t("alert.modifyFailed")
          });
        }
      });
    },
    changeLanguage: function changeLanguage() {
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
      window.localStorage.setItem("lang_type", this.lang);
      this.$kalert({
        message: this.$i18n.t("alert.modifySuccess")
      });
    },
    createAccount: function createAccount() {
      this.register = true;
    },
    accountRegister: function accountRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "account"
        }
      });
    },
    walletRegister: function walletRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "wallet"
        }
      });
    },
    importAccount: function importAccount() {
      this.currentCreateVisible = true;
      // this.$router.push({ name: "importAccount" });
    },
    accountLogin: function accountLogin() {
      this.$router.push({ name: "login" });
    },
    keysAccount: function keysAccount() {
      this.$router.push({ name: "importAccount" });
    },
    jumpHome: function jumpHome() {
      this.setCurrentCreateVisible(false);
      this.addAccount(this.currentCreateAccount);
      this.setCurrentAccount(this.currentCreateAccount);
      this.$router.push({ name: "home" });
    }
  })
};

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: "logo-header"
};

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(922);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("00147a85", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367ca16e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-367ca16e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\n.privateKey-area[data-v-367ca16e] {\n  background-color: rgba(70, 121, 254, 0.2);\n  font-size: 12px;\n  border-radius: 8px;\n  padding: 10px;\n  margin: 10px 0;\n}\n.select-lang[data-v-367ca16e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n}\n.testNodeSync[data-v-367ca16e] {\n  width: 150px;\n  height: 50px;\n  text-align: center;\n  font-size: 16px;\n  color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b86a6bdc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_logo_header_vue__ = __webpack_require__(926);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(924)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b86a6bdc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_logo_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b86a6bdc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_logo_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/components/logo-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b86a6bdc", Component.options)
  } else {
    hotAPI.reload("data-v-b86a6bdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(925);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("78fe6bf4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b86a6bdc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./logo-header.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b86a6bdc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./logo-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\nheader[data-v-b86a6bdc] {\n  position: relative;\n  height: 60px;\n  border-bottom: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\nheader span[data-v-b86a6bdc] {\n    font-size: 20px;\n    padding-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [
      _c("img", {
        staticClass: "left-img",
        attrs: { src: "/icons/logo-small.png", alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "title" }, [_vm._v("CocosPay")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b86a6bdc", esExports)
  }
}

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("logo-header"),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "app-container" },
        [
          _c(
            "section",
            { staticClass: "select-lang no-bg" },
            [
              _c(
                "el-select",
                {
                  staticClass: "nodes-select",
                  on: { change: _vm.changeNode },
                  model: {
                    value: _vm.chooseName,
                    callback: function($$v) {
                      _vm.chooseName = $$v
                    },
                    expression: "chooseName"
                  }
                },
                _vm._l(_vm.nodes, function(item, index) {
                  return _c("el-option", {
                    key: index,
                    attrs: { label: item.name, value: item.name }
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "el-select",
                {
                  staticClass: "language-select",
                  on: { change: _vm.changeLanguage },
                  model: {
                    value: _vm.lang,
                    callback: function($$v) {
                      _vm.lang = $$v
                    },
                    expression: "lang"
                  }
                },
                _vm._l(_vm.langs, function(item, index) {
                  return _c("el-option", {
                    key: index,
                    attrs: { label: item.name, value: item.value }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              attrs: { src: "/images/new-account.png" },
              on: {
                click: function($event) {
                  return _vm.logout()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "full-btn mt30",
              attrs: { type: "primary" },
              on: { click: _vm.createAccount }
            },
            [_vm._v(_vm._s(_vm.$t("button.createAccount")))]
          ),
          _vm._v(" "),
          _c("section", { staticClass: "small-tip text-center mt10" }, [
            _vm._v(_vm._s(_vm.$t("message.recommendNew")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center mt15" }, [
            _c("img", {
              attrs: { src: "/images/import-account.png" },
              on: { click: _vm.deleteWallet }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "full-btn mt30",
              attrs: { type: "primary" },
              on: { click: _vm.importAccount }
            },
            [_vm._v(_vm._s(_vm.$t("button.importAccount")))]
          ),
          _vm._v(" "),
          _c("section", { staticClass: "small-tip text-center mt10" }, [
            _vm._v(_vm._s(_vm.$t("message.recommendOld")))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            top: "15vh",
            center: "",
            title: _vm.$t("button.importAccount"),
            visible: _vm.currentCreateVisible
          },
          on: {
            closed: _vm.closedDialog,
            "update:visible": function($event) {
              _vm.currentCreateVisible = $event
            }
          }
        },
        [
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  staticClass: "full-btn",
                  attrs: { type: "primary" },
                  on: { click: _vm.accountLogin }
                },
                [_vm._v(_vm._s(_vm.$t("button.accountLogin")))]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticClass: "full-btn mt20",
                  staticStyle: { "margin-left": "0 !important" },
                  attrs: { type: "primary" },
                  on: { click: _vm.keysAccount }
                },
                [_vm._v(_vm._s(_vm.$t("button.keysLogin")))]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            top: "15vh",
            center: "",
            title: _vm.$t("button.createAccount"),
            visible: _vm.register
          },
          on: {
            closed: _vm.closedDialog,
            "update:visible": function($event) {
              _vm.register = $event
            }
          }
        },
        [
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  staticClass: "full-btn",
                  attrs: { type: "primary" },
                  on: { click: _vm.accountRegister }
                },
                [_vm._v(_vm._s(_vm.$t("title.accountType")))]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticClass: "full-btn mt20",
                  staticStyle: { "margin-left": "0 !important" },
                  attrs: { type: "primary" },
                  on: { click: _vm.walletRegister }
                },
                [_vm._v(_vm._s(_vm.$t("title.walletType")))]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-367ca16e", esExports)
  }
}

/***/ })

});