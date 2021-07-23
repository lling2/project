(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_components_MarkRender_markRender_tsx-src_components_Totast_totast_tsx-src_recoil_selector-ccd423"],{

/***/ "./src/components/MarkRender/catalog.tsx":
/*!***********************************************!*\
  !*** ./src/components/MarkRender/catalog.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Catalog = function Catalog(props) {
  // console.log('md目录组件');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      topic = _useState2[0],
      setTopic = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var markdownNavs = document.querySelectorAll(".artical-nav");
    var navs = [];
    markdownNavs.forEach(function (item) {
      var level = item.getAttribute("data-level");
      if (Number(level) > 4) return;
      var value = item.textContent;
      var nodeKey = item.id;
      navs.push({
        level: level,
        value: value,
        nodeKey: nodeKey
      });
    });
    setTopic(navs);
  }, [props.update]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, topic.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#".concat(item.nodeKey),
      key: item.nodeKey,
      className: "topic-h".concat(item.level)
    }, item.value);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Catalog));

/***/ }),

/***/ "./src/components/MarkRender/headBlock.tsx":
/*!*************************************************!*\
  !*** ./src/components/MarkRender/headBlock.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var HeadBlock = function HeadBlock(props) {
  var level = props.level,
      children = props.children;
  var nodeKey = '';
  children && children.forEach(function (item) {
    nodeKey = item.props.nodeKey ? item.props.nodeKey : item.key;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h".concat(level), {
    className: "artical-nav",
    id: nodeKey,
    "data-level": level
  }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(HeadBlock));

/***/ }),

/***/ "./src/components/MarkRender/highlight.tsx":
/*!*************************************************!*\
  !*** ./src/components/MarkRender/highlight.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");




var Highlight = function Highlight(_ref) {
  var value = _ref.value,
      language = _ref.language;
  // console.log("代码高亮组件");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: language
  }, value);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlight);

/***/ }),

/***/ "./src/components/MarkRender/markRender.tsx":
/*!**************************************************!*\
  !*** ./src/components/MarkRender/markRender.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight */ "./src/components/MarkRender/highlight.tsx");
/* harmony import */ var _headBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headBlock */ "./src/components/MarkRender/headBlock.tsx");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog */ "./src/components/MarkRender/catalog.tsx");
/* harmony import */ var _m_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./m-theme.css */ "./src/components/MarkRender/m-theme.css");
/* harmony import */ var _markRender_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markRender.css */ "./src/components/MarkRender/markRender.css");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");


 // 实现高亮与标题处理








var MarkRender = function MarkRender(props) {
  // console.log("md渲染组件");
  var mardownStr = props.mardownStr,
      _props$showTopic = props.showTopic,
      showTopic = _props$showTopic === void 0 ? true : _props$showTopic,
      _props$setHeight = props.setHeight,
      setHeight = _props$setHeight === void 0 ? true : _props$setHeight,
      _props$heightGap = props.heightGap,
      heightGap = _props$heightGap === void 0 ? 83 : _props$heightGap,
      _props$opaicty = props.opaicty,
      opaicty = _props$opaicty === void 0 ? 1 : _props$opaicty;

  var _useViewport = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_8__.useViewport)(),
      wh = _useViewport.wh; // let markdownSource = mardownStr.replace(/↵/g, "\n");


  var markdownSource = mardownStr;
  return mardownStr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown-box",
    style: {
      height: setHeight ? wh - 80 - heightGap + "px" : "unset",
      opacity: opaicty
    }
  }, showTopic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "topic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_catalog__WEBPACK_IMPORTED_MODULE_5__.default, {
    update: Date.now()
  })) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content",
    style: {
      flex: showTopic ? 0.78 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
    plugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_2___default())],
    linkTarget: "_blank",
    renderers: {
      heading: _headBlock__WEBPACK_IMPORTED_MODULE_4__.default,
      code: _highlight__WEBPACK_IMPORTED_MODULE_3__.default
    }
  }, markdownSource))) : // <div className="loading-tip">资源正在加载中</div>
  null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(MarkRender));

/***/ }),

/***/ "./src/components/Totast/totast.tsx":
/*!******************************************!*\
  !*** ./src/components/Totast/totast.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _totast_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totast.css */ "./src/components/Totast/totast.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Totast = function Totast(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      _ref$msg = _ref.msg,
      msg = _ref$msg === void 0 ? "服务开小差了" : _ref$msg;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = setTimeout(function () {
      setIsShow(false);
    }, 3000);
    return function () {
      clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, visible && isShow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tip-msg"
  }, msg)) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Totast));

/***/ }),

/***/ "./src/hooks/index.tsx":
/*!*****************************!*\
  !*** ./src/hooks/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useViewport": () => (/* reexport safe */ _useViewport__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "useLoginCheck": () => (/* reexport safe */ _useLoginCheck__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _useViewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useViewport */ "./src/hooks/useViewport.tsx");
/* harmony import */ var _useLoginCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLoginCheck */ "./src/hooks/useLoginCheck.tsx");




/***/ }),

/***/ "./src/hooks/useLoginCheck.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useLoginCheck.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_loginAtoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @recoil/atoms/loginAtoms */ "./src/recoil/atoms/loginAtoms.ts");
/* harmony import */ var _models_loginInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/loginInfo */ "./src/models/loginInfo.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var loginCheck = function loginCheck() {
  // console.log("useLoginCheck");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      loginStatus = _useState2[0],
      setLoginStatus = _useState2[1];

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_atoms_loginAtoms__WEBPACK_IMPORTED_MODULE_3__.loginState),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      loginInfo = _useRecoilState2[0],
      setLoginInfo = _useRecoilState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loginStatus === 0) return;

    if (loginStatus == -4 || loginStatus == -5) {
      setLoginInfo((0,_models_loginInfo__WEBPACK_IMPORTED_MODULE_4__.initLogin)());
      _utils_index__WEBPACK_IMPORTED_MODULE_1__.storage.remove("userInfo");
      history.push({
        pathname: "/login",
        state: {
          from: {
            pathname: location.pathname
          }
        }
      });
    } else {
      alert('服务开小差了');
    }
  }, [loginStatus]);
  return {
    loginStatus: loginStatus,
    setLoginStatus: setLoginStatus
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginCheck);

/***/ }),

/***/ "./src/hooks/useViewport.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useViewport.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useViewport = function useViewport() {
  // console.log("useViewPort");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),
      _useState2 = _slicedToArray(_useState, 2),
      wh = _useState2[0],
      setWH = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),
      _useState4 = _slicedToArray(_useState3, 2),
      ww = _useState4[0],
      setWW = _useState4[1]; // didMount


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleWindowResize = function handleWindowResize() {
      setWH(window.innerHeight);
      setWW(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize); // return destroy 

    return function () {
      return window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return {
    ww: ww,
    wh: wh
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewport);

/***/ }),

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

/***/ "./src/components/MarkRender/m-theme.css":
/*!***********************************************!*\
  !*** ./src/components/MarkRender/m-theme.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/MarkRender/markRender.css":
/*!**************************************************!*\
  !*** ./src/components/MarkRender/markRender.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Totast/totast.css":
/*!******************************************!*\
  !*** ./src/components/Totast/totast.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_components_MarkRender_markRender_tsx-src_components_Totast_totast_tsx-src_recoil_selector-ccd423.bundle.js.map