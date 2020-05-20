webpackJsonp_name_([12],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec1c84c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(928);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(926)
}
var normalizeComponent = __webpack_require__(93)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ec1c84c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec1c84c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/pages/createWallet/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec1c84c2", Component.options)
  } else {
    hotAPI.reload("data-v-ec1c84c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(129);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    var _this = this;

    var validatePass = function validatePass(rule, value, callback) {
      var reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,12}$/;
      if (value === "") {
        callback(new Error(_this.$i18n.t("verify.passwordNull")));
      } else if (!reg.test(value)) {
        callback(new Error(_this.$i18n.t("verify.passwordType")));
      } else {
        callback();
      }
    };
    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error(_this.$i18n.t("verify.passwordSure")));
      } else if (value !== _this.formData.password) {
        callback(new Error(_this.$i18n.t("verify.passwordMatch")));
      } else {
        callback();
      }
    };
    return {
      wallet: null,
      // lang: "中文",
      formData: {
        password: "",
        repassword: ""
      },
      formRules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }]
        // langs: [{ name: "中文", value: "ZH" }, { name: "English", value: "EN" }]
      } };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)(["curLng"])),
  created: function created() {
    this.lang = this.$i18n.locale;
  },

  methods: (0, _extends3.default)({}, (0, _vuex.mapMutations)(["setCurLng"]), {
    createWallet: function createWallet(formName) {
      this.$refs[formName].validate(function (valid) {
        // if (valid) {
        //   this.$router.push({
        //     name: "agreement",
        //     params: { password: this.formData.password }
        //   });
        // }
      });
    }
    // changeLanguage() {
    //   this.setCurLng(this.lang);
    //   this.$i18n.locale = this.lang;
    //   this.$kalert({
    //     message: this.$i18n.t("alert.modifySuccess")
    //   });
    // }

  })
}; //
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

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(927);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(29)("43f9e260", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec1c84c2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js?{}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec1c84c2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js?{}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.logo[data-v-ec1c84c2] {\n  margin-top: 40px;\n}\n.select-lang[data-v-ec1c84c2] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n}\n.index-title[data-v-ec1c84c2] {\n  font-size: 30px;\n  margin: 25px auto 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "app-container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center index-title" }, [
        _vm._v("CocosPay")
      ]),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          staticClass: "mt20",
          attrs: { model: _vm.formData, rules: _vm.formRules }
        },
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
                  value: _vm.formData.password,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "password", $$v)
                  },
                  expression: "formData.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "repassword" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                attrs: {
                  type: "password",
                  placeholder: _vm.$t("placeholder.repassword")
                },
                model: {
                  value: _vm.formData.repassword,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "repassword", $$v)
                  },
                  expression: "formData.repassword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "mt80" },
            [
              _c(
                "el-button",
                {
                  staticClass: "full-btn",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.createWallet("form")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("button.create")))]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("section", { staticClass: "small-tip text-center" }, [
        _vm._v(_vm._s(_vm.$t("message.rememberPassword")))
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "logo" }, [
      _c("img", {
        staticClass: "block-center",
        attrs: { src: "/images/index-logo.png", alt: "" }
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
    require("vue-hot-reload-api")      .rerender("data-v-ec1c84c2", esExports)
  }
}

/***/ })

});