webpackJsonp_name_([3],{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(75);
module.exports = __webpack_require__(426);


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(33);
var get = __webpack_require__(137);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(428), __esModule: true };

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(75);
module.exports = __webpack_require__(429);


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(97);
var ITERATOR = __webpack_require__(17)('iterator');
var Iterators = __webpack_require__(54);
module.exports = __webpack_require__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(425), __esModule: true };

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_f642c516_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(937);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(935)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f642c516"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_f642c516_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/pages/transfer/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f642c516", Component.options)
  } else {
    hotAPI.reload("data-v-f642c516", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 867:
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
//
//

exports.default = {
  name: 'navigation',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
};

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_300a417e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_navigation_vue__ = __webpack_require__(871);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(869)
}
var normalizeComponent = __webpack_require__(100)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-300a417e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_navigation_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_300a417e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_navigation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/popup/components/navigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-300a417e", Component.options)
  } else {
    hotAPI.reload("data-v-300a417e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(870);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("9142e2de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-300a417e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./navigation.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-300a417e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\nnav[data-v-300a417e] {\n  position: relative;\n  padding: 0 50px;\n  border-bottom: 1px dashed #e6e6e6;\n}\n.back-icon[data-v-300a417e] {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 15px;\n  height: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n.title[data-v-300a417e] {\n  display: inline-block;\n  width: 100%;\n  line-height: 50px;\n  text-align: center;\n  font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", [
    _c(
      "span",
      { on: { click: _vm.goBack } },
      [
        _c("v-icon", {
          staticClass: "back-icon",
          attrs: { name: "angle-left" }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("span", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-300a417e", esExports)
  }
}

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(879), __esModule: true };

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(880);
module.exports = __webpack_require__(6).Object.entries;


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(16);
var $entries = __webpack_require__(881)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(28);
var getKeys = __webpack_require__(77);
var toIObject = __webpack_require__(48);
var isEnum = __webpack_require__(83).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _entries = __webpack_require__(878);

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = __webpack_require__(52);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(90);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(102);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _navigation = __webpack_require__(868);

var _navigation2 = _interopRequireDefault(_navigation);

var _function = __webpack_require__(245);

var _function2 = _interopRequireDefault(_function);

var _vuex = __webpack_require__(130);

var _utils = __webpack_require__(154);

var _utils2 = _interopRequireDefault(_utils);

var _InternalMessage = __webpack_require__(235);

var _InternalMessage2 = _interopRequireDefault(_InternalMessage);

var _InternalMessageTypes = __webpack_require__(236);

var InternalMessageTypes = _interopRequireWildcard(_InternalMessageTypes);

var _timers = __webpack_require__(99);

var _storage = __webpack_require__(243);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

exports.default = {
  components: {
    Navigation: _navigation2.default
  },
  data: function data() {
    var _this2 = this;

    var frommValidator = function frommValidator(rule, value, callback) {
      if (value === "") {
        callback(new Error(_this2.$i18n.t("verify.ownerAccountNull")));
      } else {
        callback();
      }
    };
    var toValidator = function toValidator(rule, value, callback) {
      if (value === "") {
        callback(new Error(_this2.$i18n.t("verify.toAddressNull")));
      } else if (value === _this2.cocosAccount.accounts) {
        callback(new Error(_this2.$i18n.t("message.ownerError")));
      } else {
        callback();
      }
    };
    var tokenValidator = function tokenValidator(rule, value, callback) {
      if (value === "") {
        callback(new Error(_this2.$i18n.t("verify.tokenNull")));
      } else if (value === _this2.cocosAccount.accounts) {
        callback(new Error(_this2.$i18n.t("message.ownerError")));
      } else {
        callback();
      }
    };
    var amountValidator = function amountValidator(rule, value, callback) {
      if (value < 0 || value == 0) {
        callback(new Error(_this2.$i18n.t("verify.noZero")));
      } else if (!/^(-?\d+)(\.\d+)?$/.test(value)) {
        callback(new Error(_this2.$i18n.t("verify.number")));
      } else if (value.toString().split(".")[1] && value.toString().split(".")[1].length > _this2.precision) {
        callback(new Error(_this2.$i18n.t("verify.minimum") + _this2.precision));
      } else {
        callback();
      }
    };
    return {
      currentNodeName: _storage2.default.get("choose_node").name,
      popup: false,
      formData: {
        from: "",
        to: "",
        token: "COCOS",
        amount: 0,
        memo: ""
      },
      owner: false,
      formRules: {
        from: { validator: frommValidator, trigger: "blur" },
        to: { validator: toValidator, trigger: "blur" },
        token: { validator: tokenValidator, trigger: "blur" },
        amount: { validator: amountValidator, trigger: "blur" }
      },
      tokens: [],
      assetKey: this.$route.params.assetKey ? this.$route.params.assetKey : "",
      coins: [],
      precision: "",
      fee: ""
    };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)(["cocosAccount", "cocosCount", "accountType"]), (0, _vuex.mapState)("wallet", ["accounts"]), (0, _vuex.mapState)("trans", ["tranferInfo"]), {
    payName: function payName() {
      var _this3 = this;

      var account = this.accounts.find(function (ele) {
        return ele.address === _this3.formData.from;
      });
      if (account) {
        return account.name;
      } else {
        return "";
      }
    }
  }),
  created: function created() {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this4.formData.from = _this4.cocosAccount.accounts;
              _context.next = 3;
              return _this4.UserAccount().then(function (res) {
                if (res.code === 1) {
                  if (Array.isArray(res.data)) {
                    _this4.coins = res.data.filter(function (item) {
                      return item.coins != "GAS";
                    });
                  } else {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(res.data)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _ref = _step.value;

                        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

                        var key = _ref2[0];
                        var value = _ref2[1];

                        if (key != "GAS") {
                          _this4.coins.push({
                            coin: key,
                            amount: value
                          });
                        }
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                  }
                } else {
                  _this4.$kalert({
                    message: _this.$i18n.t("chainInterfaceError[500]")
                  });
                }
              });

            case 3:
              if (_this4.accountType === "wallet") {
                _this4.OutPutKey().then(function (key) {
                  if (!key.data.active_private_keys || !key.data.active_private_keys.length) {
                    _this4.owner = true;
                  }
                });
              }
              _this4.changeCoin();
              // this.loadTokens()

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this4);
    }))();
  },

  methods: (0, _extends3.default)({}, (0, _vuex.mapMutations)("trans", ["setAccount"]), (0, _vuex.mapActions)("trans", ["tranferBCX", "queryTranferRate", "queryAsset", "tranferBCXFree"]), (0, _vuex.mapActions)("account", ["UserAccount", "OutPutKey"]), {
    changeCoin: function changeCoin() {
      var _this5 = this;

      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this5.queryAsset({ assetId: _this5.formData.token }).then(function (res) {
                  _this5.precision = res.precision;
                });

              case 2:
                _context2.next = 4;
                return _this5.queryTranferRate({ feeAssetId: "COCOS" }).then(function (res) {
                  _this5.fee = res.data.fee_amount.toFixed(_this5.precision);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this5);
      }))();
    },
    onSubmit: function onSubmit(formName) {
      var _this6 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this6.popup = true;
        }
        // if (valid) {
        //   this.setAccount({
        //     toAccount: this.formData.to,
        //     coin: this.formData.token,
        //     amount: this.formData.amount,
        //     memo: this.formData.memo
        //   });
        //   this.tranferBCXFree().then(res => {
        //     console.log(res);

        //     this.fee = res.data[0].fees[0].amount.toFixed(this.precision);
        //     if (this.owner) {
        //       this.$kalert({
        //         message: this.$i18n.t("verify.ownerKey")
        //       });
        //       return;
        //     } else if (
        //       (this.formData.token === "COCOS" &&
        //         res.data[0].fees[0].amount + Number(this.formData.amount) <
        //           this.cocosCount) ||
        //       res.data[0].fees[0].amount + Number(this.formData.amount) ===
        //         this.cocosCount
        //     ) {
        //       this.popup = true;
        //     } else if (
        //       this.formData.token !== "COCOS" &&
        //       res.data[0].fees[0].amount < this.cocosCount
        //     ) {
        //       this.popup = true;
        //     } else {
        //       // this.$kalert({
        //       //   message: this.$i18n.t("alert.transferFail")
        //       // });
        //       this.popup = true;
        //     }
        //   });
        // }
      });
    },
    surePay: function surePay() {
      var _this7 = this;

      console.log('this.formData');
      console.log(this.formData);
      this.setAccount({
        toAccount: this.formData.to,
        coin: this.formData.token,
        amount: this.formData.amount,
        memo: this.formData.memo
      });
      this.popup = false;
      this.tranferBCX().then(function (res) {
        if (res.code === 1) {
          _this7.$kalert({
            message: _this7.$i18n.t("alert.tranferSuccess")
          });
          _this7.$router.push({ name: "home" });
        } else {
          if (res.message.indexOf('Transaction was not signed. Do you have a private key? [no_signers]') > -1) {
            _this7.$kalert({
              message: _this7.$i18n.t("verify.ownerKey")
            });
          } else if (res.message.indexOf('Assert Exception: itr->get_balance()') > -1) {
            _this7.$kalert({
              message: _this7.$i18n.t("alert.transferFail")
            });
          } else if (res.message.indexOf('locked->value') > -1) {
            _this7.$kalert({
              message: _this7.$i18n.t("alert.transferFail")
            });
          } else if (res.message.indexOf('insufficient_balance') > -1) {
            _this7.$kalert({
              message: _this7.$i18n.t("alert.transferFail")
            });
          } else {
            _this7.$kalert({
              message: _this7.$i18n.t("chainInterfaceError[500]")
            });
          }
        }
      }).catch(function (res) {
        console.log(res);
      });
    }
  })
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(427);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(52);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(936);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("3e037456", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f642c516\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?{\"minimize\":false}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f642c516\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js?{}!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "\n.popup[data-v-f642c516] {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n.popup-container[data-v-f642c516] {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 20px;\n  background-color: #fff;\n}\n.popup-container .close[data-v-f642c516] {\n    position: absolute;\n    right: 20px;\n    top: 5px;\n    font-size: 18px;\n    cursor: pointer;\n    color: #999;\n}\n.popup-container .title[data-v-f642c516] {\n    text-align: center;\n    padding-bottom: 15px;\n    font-size: 16px;\n    border-bottom: 1px dashed #e6e6e6;\n}\n.popup-container .item[data-v-f642c516] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 50px;\n    overflow: hidden;\n}\n.popup-container .item .label[data-v-f642c516] {\n      white-space: nowrap;\n      color: #999;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n         -moz-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.popup-container .item .content[data-v-f642c516] {\n      padding-left: 5px;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n         -moz-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n         -moz-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      max-width: 270px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n.popup-container .item .memo-content[data-v-f642c516] {\n      max-height: 50px;\n      line-height: 18px;\n}\n.popup-container .item .money-label[data-v-f642c516] {\n      color: #333;\n}\n.popup-container .item .money-content[data-v-f642c516] {\n      color: #4679fe;\n      -webkit-box-pack: end;\n      -webkit-justify-content: flex-end;\n         -moz-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n}\n.popup-container .item .money-content span[data-v-f642c516] {\n        font-size: 16px;\n        position: relative;\n        padding-right: 5px;\n}\n.popup-container .item .money-content .test-coin[data-v-f642c516] {\n        font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "app-container transfers" },
    [
      _c("navigation", { attrs: { title: _vm.$t("title.transfer") } }),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          staticClass: "mt20",
          attrs: {
            model: _vm.formData,
            rules: _vm.formRules,
            "label-position": "top"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("label.ownerAccount"), prop: "from" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                attrs: { disabled: true },
                model: {
                  value: _vm.formData.from,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "from", $$v)
                  },
                  expression: "formData.from"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("label.toAddress"), prop: "to" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                model: {
                  value: _vm.formData.to,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "to", $$v)
                  },
                  expression: "formData.to"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                label:
                  _vm.currentNodeName == "Test"
                    ? _vm.$t("label.tokenType") + _vm.$t("title.test")
                    : _vm.$t("label.tokenType"),
                prop: "token"
              }
            },
            [
              _c(
                "el-select",
                {
                  staticClass: "no-border",
                  staticStyle: { width: "100%" },
                  on: { change: _vm.changeCoin },
                  model: {
                    value: _vm.formData.token,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "token", $$v)
                    },
                    expression: "formData.token"
                  }
                },
                _vm._l(_vm.coins, function(item, index) {
                  return _c("el-option", {
                    key: index,
                    attrs: { value: item.coin, label: item.coin }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("label.amount"), prop: "amount" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                attrs: { type: "text" },
                model: {
                  value: _vm.formData.amount,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "amount", $$v)
                  },
                  expression: "formData.amount"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("label.memo"), prop: "memo" } },
            [
              _c("el-input", {
                staticClass: "no-border",
                attrs: { type: "text" },
                model: {
                  value: _vm.formData.memo,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "memo", $$v)
                  },
                  expression: "formData.memo"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticClass: "full-btn mt10",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.onSubmit("form")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("button.send")))]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.popup,
              expression: "popup"
            }
          ],
          staticClass: "popup"
        },
        [
          _c("div", { staticClass: "popup-container" }, [
            _c(
              "div",
              {
                staticClass: "close",
                on: {
                  click: function($event) {
                    _vm.popup = false
                  }
                }
              },
              [_c("v-icon", { attrs: { name: "times", scale: "1.4" } })],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.$t("title.sendDetail")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "popup-body" },
              [
                _c("div", { staticClass: "item" }, [
                  _c("div", { staticClass: "label" }, [
                    _vm._v(_vm._s(_vm.$t("label.ownerAccount")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _vm._v(_vm._s(_vm.cocosAccount.accounts))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("div", { staticClass: "label" }, [
                    _vm._v(_vm._s(_vm.$t("label.toAddress")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _vm._v(_vm._s(_vm.formData.to))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("div", { staticClass: "label money-label" }, [
                    _vm._v(_vm._s(_vm.$t("label.amount")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content money-content" }, [
                    _c("span", [_vm._v(_vm._s(_vm.formData.amount))]),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.formData.token) +
                        "\n            "
                    ),
                    _vm.currentNodeName == "Test"
                      ? _c("span", { staticClass: "test-coin" }, [
                          _vm._v("(" + _vm._s(_vm.$t("title.test")) + ")")
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("div", { staticClass: "label" }, [
                    _vm._v(_vm._s(_vm.$t("label.memo")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _vm._v(_vm._s(_vm.formData.memo))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    staticClass: "full-btn",
                    attrs: { type: "primary" },
                    on: { click: _vm.surePay }
                  },
                  [_vm._v(_vm._s(_vm.$t("button.surePay")))]
                )
              ],
              1
            )
          ])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f642c516", esExports)
  }
}

/***/ })

});