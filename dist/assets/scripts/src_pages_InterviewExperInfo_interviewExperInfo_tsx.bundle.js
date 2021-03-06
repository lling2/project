(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_InterviewExperInfo_interviewExperInfo_tsx"],{

/***/ "./src/components/Loading/loading.tsx":
/*!********************************************!*\
  !*** ./src/components/Loading/loading.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.css */ "./src/components/Loading/Loading.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Loading = function Loading(_ref) {
  var _ref$bgOpacity = _ref.bgOpacity,
      bgOpacity = _ref$bgOpacity === void 0 ? true : _ref$bgOpacity;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "components-loading ".concat(bgOpacity ? "components-loading-opacity" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "loading-con"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/pages/InterviewExperInfo/interviewExperInfo.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/InterviewExperInfo/interviewExperInfo.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _interviewExperInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interviewExperInfo.css */ "./src/pages/InterviewExperInfo/interviewExperInfo.css");
/* harmony import */ var _components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/MarkRender/markRender */ "./src/components/MarkRender/markRender.tsx");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/loading */ "./src/components/Loading/loading.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var InterviewExperInfo = function InterviewExperInfo() {
  // console.log("??????????????????");
  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__.loginSel),
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)(); // let { path } = useParams<{ path: string }>();

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  var iState = {
    path: ""
  };

  if (!location.state) {
    iState = _utils_index__WEBPACK_IMPORTED_MODULE_5__.storage.get("iState");

    if (!iState) {
      history.replace("/ques");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
  } else {
    iState = location.state;
    _utils_index__WEBPACK_IMPORTED_MODULE_5__.storage.set("iState", iState);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_index__WEBPACK_IMPORTED_MODULE_3__.interviewExper.getInterviewExperInfo({
      path: "".concat(decodeURIComponent(iState.path), ".md"),
      uid: uid
    }).then(function (res) {
      setLoginStatus(res.status);
      setMd(res.data.data || "");
      (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.setFont)(res.data.key, "interInfo", setLoading);
    })["catch"](function (err) {
      setIsError(true);
    });
  }, []);
  var goBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    history.replace("/interview");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "layout-container interview-exper-info "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "md-back-btn",
    onClick: goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "iconfont"
  }, "\uE653")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__.default, {
    mardownStr: md
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default, null) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterviewExperInfo);

/***/ }),

/***/ "./src/pages/InterviewExperInfo/interviewExperInfo.css":
/*!*************************************************************!*\
  !*** ./src/pages/InterviewExperInfo/interviewExperInfo.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_InterviewExperInfo_interviewExperInfo_tsx.bundle.js.map