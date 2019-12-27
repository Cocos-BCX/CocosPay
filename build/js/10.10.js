webpackJsonp_name_([10],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_734a88a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(944);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(942)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-734a88a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_734a88a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/pages/settings/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-734a88a6", Component.options)
  } else {
    hotAPI.reload("data-v-734a88a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _settingNavigation = __webpack_require__(423);

var _settingNavigation2 = _interopRequireDefault(_settingNavigation);

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
//
//

var _createNamespacedHelp = (0, _vuex.createNamespacedHelpers)("wallet"),
    mapActions = _createNamespacedHelp.mapActions;

exports.default = {
  components: {
    SettingNavigation: _settingNavigation2.default
  },
  computed: (0, _extends3.default)({}, (0, _vuex.mapState)(["accountType"])),
  data: function data() {
    return {
      links: [{
        route: "network",
        name: this.$i18n.t("settings.network"),
        icon: "bianji"
      }, {
        route: "whiteList",
        name: this.$i18n.t("settings.whiteList"),
        icon: "whiteList"
      }, {
        route: "language",
        name: this.$i18n.t("settings.language"),
        icon: "yuyan"
        // {
        //   route: "lockSetting",
        //   name: this.$i18n.t("settings.lockSetting"),
        //   icon: "lock"
        // },
        // {
      }]
    };
  },

  methods: (0, _extends3.default)({}, mapActions(["lock"]), {
    lockApp: function lockApp() {
      var _this = this;

      this.lock().then(function () {
        _this.$router.push({ name: "unlock" });
      });
    }
  }),
  mounted: function mounted() {
    if (this.accountType === "account") {
      this.links.push({
        route: "modifyPassword",
        name: this.$i18n.t("settings.modifyPassword"),
        icon: "mima"
      });
    }
  }
};

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(943);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("46ade2e7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-734a88a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-734a88a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\n.settings[data-v-734a88a6] {\n  padding: 40px 0;\n}\n.settings .item[data-v-734a88a6] {\n    -webkit-transition: background 0.2s ease;\n    transition: background 0.2s ease;\n}\n.settings .item a[data-v-734a88a6] {\n      display: inline-block;\n      width: 100%;\n      padding: 0 65px;\n      text-decoration: none;\n}\n.settings .item[data-v-734a88a6]:hover {\n      background: #f8f8f8;\n}\n.settings .item .icon[data-v-734a88a6] {\n      padding: 16px 0;\n      display: inline-block;\n      font-size: 18px;\n      color: #333;\n      width: 30px;\n      text-align: center;\n      margin-right: 10px;\n}\n.settings .item .icon img[data-v-734a88a6] {\n        vertical-align: middle;\n        position: relative;\n        top: -3px;\n}\n.settings .item .text[data-v-734a88a6] {\n      padding: 16px 0;\n      display: inline-block;\n      font-size: 18px;\n      color: #333;\n}\n", ""]);

// exports


/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("setting-navigation", { attrs: { title: _vm.$t("title.setting") } }),
      _vm._v(" "),
      _c("section", { staticClass: "app-container" }, [
        _c(
          "section",
          { staticClass: "settings" },
          _vm._l(_vm.links, function(link, index) {
            return _c(
              "section",
              { key: index, staticClass: "item" },
              [
                _c("router-link", { attrs: { to: { name: link.route } } }, [
                  _c("span", { staticClass: "icon" }, [
                    _c("img", {
                      attrs: { src: "/icons/" + link.icon + ".png" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text" }, [
                    _vm._v(_vm._s(link.name))
                  ])
                ])
              ],
              1
            )
          }),
          0
        )
      ])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-734a88a6", esExports)
  }
}

/***/ })

});