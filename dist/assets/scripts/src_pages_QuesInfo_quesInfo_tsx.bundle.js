(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_QuesInfo_quesInfo_tsx"],{

/***/ "./src/models/ques.ts":
/*!****************************!*\
  !*** ./src/models/ques.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initQuesListParams": () => (/* binding */ initQuesListParams),
/* harmony export */   "initQuesParams": () => (/* binding */ initQuesParams)
/* harmony export */ });
var initQuesListParams = function initQuesListParams() {
  return {
    uid: 0,
    condition: {
      biz_type: 2
    },
    page: 1,
    page_count: 15
  };
};
var initQuesParams = function initQuesParams() {
  return {
    curNav: 1,
    curQuesIndex: -1,
    totalPage: 1,
    quesList: []
  };
};

/***/ }),

/***/ "./src/pages/QuesInfo/quesInfo.tsx":
/*!*****************************************!*\
  !*** ./src/pages/QuesInfo/quesInfo.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _quesInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quesInfo.css */ "./src/pages/QuesInfo/quesInfo.css");
/* harmony import */ var _components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/MarkRender/markRender */ "./src/components/MarkRender/markRender.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/Loading */ "./src/components/Loading/Loading.tsx");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
/* harmony import */ var _recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @recoil/selectors/quesListSelectors */ "./src/recoil/selectors/quesListSelectors.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _utils_localStorage_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/localStorage/index */ "./src/utils/localStorage/index.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // 字体加密









var InterviewExperInfo = function InterviewExperInfo() {
  // console.log("面试题详情");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useHistory)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  var qid = 0;

  if (!location.state) {
    qid = _utils_localStorage_index__WEBPACK_IMPORTED_MODULE_11__.storage.get("qid");

    if (!qid) {
      history.replace("/ques");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
  } else {
    qid = location.state.qid;
    _utils_localStorage_index__WEBPACK_IMPORTED_MODULE_11__.storage.set("qid", qid);
  }

  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_7__.loginSel),
      uid = _useRecoilValue.uid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      md = _useState2[0],
      setMd = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useLoginCheck = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_6__.useLoginCheck)(),
      setLoginStatus = _useLoginCheck.setLoginStatus;

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_9__.quesListSelect),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      quesListParam = _useRecoilState2[0],
      setQuesListParam = _useRecoilState2[1];

  var quesListParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(quesListParam);
  quesListParams.current = quesListParam;

  var _useRecoilState3 = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_9__.quesSelect),
      _useRecoilState4 = _slicedToArray(_useRecoilState3, 2),
      quesParam = _useRecoilState4[0],
      setQuesParam = _useRecoilState4[1];

  var quesParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(quesParam);
  quesParams.current = quesParam;

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      noNextQues = _useState8[0],
      setNoNextQues = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false; // setQuesParam({
      //   ...quesParams.current,
      //   quesList: [],
      // });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_index__WEBPACK_IMPORTED_MODULE_3__.ques.getQuesInfo({
      qid: qid,
      uid: uid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);
      var quesInfo = res.data.md_str;
      setMd(quesInfo);
      (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.setFont)(res.data.key, "getInfo", setLoading);
      setQuesListParam(_objectSpread({}, quesListParams.current));
    })["catch"](function (err) {
      setLoading(false);
      setIsError(true);
    });
  }, []);
  var goBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    history.push("/ques");
  }, []);
  var getQuesInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (qid) {
    _api_index__WEBPACK_IMPORTED_MODULE_3__.ques.getQuesInfo({
      qid: qid,
      uid: uid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);
      var quesInfo = res.data.md_str;
      history.push({
        pathname: location.pathname,
        state: {
          qid: qid
        }
      });
      setMd(quesInfo);
      (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.setFont)(res.data.key, "getInfo", setLoading);
      setLoading(true);
      setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
        curQid: qid
      }));
    })["catch"](function (err) {
      setLoading(false);
      setIsError(true);
    });
  }, []);
  var getQid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    var quesList = quesParams.current.quesList;
    var params = quesListParams.current;
    var quesL = quesList.length;

    if (quesL <= 0) {
      return;
    }

    setLoading(true);

    var _ref = quesList[index] || {},
        _ref$qid = _ref.qid,
        qid = _ref$qid === void 0 ? -1 : _ref$qid;

    if (qid < 0) {
      _api_index__WEBPACK_IMPORTED_MODULE_3__.ques.getQuesList(_objectSpread(_objectSpread(_objectSpread({}, params), {
        uid: uid
      }), {}, {
        page: params.page + 1
      })).then(function (res) {
        var quesListNew = [].concat(_toConsumableArray(quesList), _toConsumableArray(res.data.list));
        qid = quesListNew[index].qid; // console.log("qid", qid);

        getQuesInfo(qid);
        setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
          quesList: quesListNew,
          curQid: qid
        }));
        setQuesListParam(_objectSpread(_objectSpread(_objectSpread({}, quesListParams.current), {
          uid: uid
        }), {}, {
          page: params.page + 1
        }));
      })["catch"](function (err) {
        console.log(err);
        setIsError(true);
      });
    } else {
      getQuesInfo(qid);
    }
  }, []);
  var goNextQues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _quesParams$current = quesParams.current,
        curQuesIndex = _quesParams$current.curQuesIndex,
        totalPage = _quesParams$current.totalPage,
        quesList = _quesParams$current.quesList;
    var _quesListParams$curre = quesListParams.current,
        page = _quesListParams$curre.page,
        page_count = _quesListParams$curre.page_count;
    var checkNoNextQues = page * page_count === totalPage && curQuesIndex >= quesList.length - 1;
    setNoNextQues(checkNoNextQues);

    if (checkNoNextQues) {
      return;
    }

    curQuesIndex++;
    setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
      curQuesIndex: curQuesIndex
    }));
    getQid(curQuesIndex);
  }, []);
  var goPrevQues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _quesParams$current2 = quesParams.current,
        curQuesIndex = _quesParams$current2.curQuesIndex,
        quesList = _quesParams$current2.quesList;
    curQuesIndex--;

    if (curQuesIndex < 0 || quesList.length <= 0) {
      return;
    }

    setNoNextQues(false);
    setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
      curQuesIndex: curQuesIndex
    }));
    getQid(curQuesIndex);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ques-info layout-container"
  },  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-back",
    onClick: goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "iconfont"
  }, "\uE653")), quesParam.quesList.length <= 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-prev ".concat(quesParam.curQuesIndex <= 0 || quesParam.quesList.length <= 0 ? "disable" : ""),
    onClick: goPrevQues
  }, "\u4E0A\u4E00\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-next ".concat(noNextQues ? "disable" : ""),
    onClick: goNextQues
  }, "\u4E0B\u4E00\u9898"))) : 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__.default, {
    mardownStr: md,
    heightGap: 66,
    opaicty: !loading ? 1 : 0
  })), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__.default, null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterviewExperInfo);

/***/ }),

/***/ "./src/recoil/atoms/quesAtoms.ts":
/*!***************************************!*\
  !*** ./src/recoil/atoms/quesAtoms.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quesListState": () => (/* binding */ quesListState),
/* harmony export */   "quesState": () => (/* binding */ quesState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _models_ques__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/ques */ "./src/models/ques.ts");


var quesListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "QuesListParams",
  "default": (0,_models_ques__WEBPACK_IMPORTED_MODULE_1__.initQuesListParams)()
});
var quesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "QuesParams",
  "default": (0,_models_ques__WEBPACK_IMPORTED_MODULE_1__.initQuesParams)()
});

/***/ }),

/***/ "./src/recoil/selectors/quesListSelectors.ts":
/*!***************************************************!*\
  !*** ./src/recoil/selectors/quesListSelectors.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quesListSelect": () => (/* binding */ quesListSelect),
/* harmony export */   "quesSelect": () => (/* binding */ quesSelect)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _atoms_quesAtoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/quesAtoms */ "./src/recoil/atoms/quesAtoms.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");



var quesListSelect = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
  key: "quesListSel",
  get: function get(_ref) {
    var _get = _ref.get;

    var quesListParam = _get(_atoms_quesAtoms__WEBPACK_IMPORTED_MODULE_1__.quesListState);

    if (quesListParam.uid === 0) {
      try {
        quesListParam = _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.get("quesListParam") || quesListParam;
      } catch (error) {
        quesListParam = quesListParam;
      }
    }

    return quesListParam;
  },
  set: function set(_ref2, newVal) {
    var _set = _ref2.set;

    _set(_atoms_quesAtoms__WEBPACK_IMPORTED_MODULE_1__.quesListState, newVal);

    _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.set("quesListParam", newVal);
  }
});
var quesSelect = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
  key: "quesSel",
  get: function get(_ref3) {
    var _get2 = _ref3.get;

    var quesParam = _get2(_atoms_quesAtoms__WEBPACK_IMPORTED_MODULE_1__.quesState);

    if (quesParam.curQuesIndex === -1) {
      try {
        quesParam = _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.get("quesParam") || quesParam;
      } catch (error) {
        quesParam = quesParam;
      }
    }

    return quesParam;
  },
  set: function set(_ref4, newVal) {
    var _set2 = _ref4.set;

    _set2(_atoms_quesAtoms__WEBPACK_IMPORTED_MODULE_1__.quesState, newVal);

    _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.set("quesParam", newVal);
  }
});

/***/ }),

/***/ "./src/pages/QuesInfo/quesInfo.css":
/*!*****************************************!*\
  !*** ./src/pages/QuesInfo/quesInfo.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_QuesInfo_quesInfo_tsx.bundle.js.map