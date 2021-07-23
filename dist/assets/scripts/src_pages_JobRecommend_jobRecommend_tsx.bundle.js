(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_JobRecommend_jobRecommend_tsx"],{

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

 // hooks是通过链表存储的

var useViewport = function useViewport() {
  // 定义state 获取宽度、高度
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),
      _useState2 = _slicedToArray(_useState, 2),
      wh = _useState2[0],
      setWH = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),
      _useState4 = _slicedToArray(_useState3, 2),
      ww = _useState4[0],
      setWW = _useState4[1]; // 相当于didMount


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleWindowResize = function handleWindowResize() {
      setWH(window.innerHeight);
      setWW(window.innerWidth);
    }; // 操作dom


    window.addEventListener("resize", handleWindowResize); // return destroy 不使用的时候可以移除

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

/***/ "./src/pages/JobRecommend/jobRecommend.tsx":
/*!*************************************************!*\
  !*** ./src/pages/JobRecommend/jobRecommend.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jobRecommend_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobRecommend.css */ "./src/pages/JobRecommend/jobRecommend.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/loading */ "./src/components/Loading/loading.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _recoil_selectors_jobSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @recoil/selectors/jobSelect */ "./src/recoil/selectors/jobSelect.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var JobRecommend = function JobRecommend() {
  // console.log("工作推荐列表");
  // const [observer, setObserver] = useState<IntersectionObserver>(null);
  // const [isLoading, setLoading] = useState(false);
  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_6__.loginSel),
      uid = _useRecoilValue.uid;

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoil_selectors_jobSelect__WEBPACK_IMPORTED_MODULE_7__.jobSelect),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      jobInfo = _useRecoilState2[0],
      setJobInfo = _useRecoilState2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      dataLoading = _useState2[0],
      setDataLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1]; // const [hasData, setHasData] = useState(true);
  // const $botEle = useRef<HTMLDivElement>(null);


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      jobList = _useState6[0],
      setJobList = _useState6[1]; // const [jobListParams, setJobListParams] = useState<IJobListParams>({
  //   uid: 4,
  //   page: 1,
  //   page_count: 30,
  // });
  // const jobListParamRef = useRef(jobListParams);
  // jobListParamRef.current = jobListParams;


  var _useLoginCheck = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_3__.useLoginCheck)(),
      setLoginStatus = _useLoginCheck.setLoginStatus;

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // if (!isLoading) {
    //   setDataLoading(true);
    // }
    var id = jobInfo.id;
    _api_index__WEBPACK_IMPORTED_MODULE_2__.job.getQuesList({
      uid: uid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status); // console.log(res);

      var list = res.data.items.items || [];
      setJobList(list);
      setDataLoading(false);
      setTimeout(function () {
        id > 0 && (0,_utils_index__WEBPACK_IMPORTED_MODULE_8__.scrollToAnchor)(id);
      }, 100); // setLoading(false);
    })["catch"](function (err) {
      setIsError(true);
    });
  }, []); // }, [jobListParams]);
  // useEffect(() => {
  //   const initScrollObserver = () => {
  //     const options: IntersectionObserverInit = {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 1.0,
  //     };
  //     const Observer: IntersectionObserver = new IntersectionObserver(
  //       callback,
  //       options
  //     );
  //     if ($botEle.current) {
  //       Observer.observe($botEle.current);
  //     }
  //     setObserver(Observer);
  //   };
  //   const callback: IntersectionObserverCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         if (isLoading) return;
  //         setLoading(true);
  //         let { page } = jobListParamRef.current;
  //         console.log("page", page);
  //         setJobListParams((preState) => ({
  //           ...preState,
  //           page: ++page,
  //         }));
  //       }
  //     });
  //   };
  //   const resetScrollObserver = () => {
  //     if (observer && $botEle.current) {
  //       observer.unobserve($botEle.current);
  //     }
  //   };
  //   initScrollObserver();
  //   return () => {
  //     resetScrollObserver();
  //   };
  // }, [jobList]);

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();

  var handleGoInfo = function handleGoInfo(jid) {
    setJobInfo({
      id: jid
    });
    history.push({
      pathname: "/job/info",
      state: {
        jid: jid
      }
    });
  }; // const getRef = (isLastIndex: boolean) => {
  //   if (isLastIndex) {
  //     return $botEle;
  //   }
  //   return null;
  // };


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default
  }, dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-job layout-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "job-recommend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recommend-item-box"
  }, jobList.length > 0 ? jobList.map(function (item, index) {
    // const refVal = getRef(index === jobList.length - 1);
    // const id = index === jobList.length - 1 ? "bottom" : "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "recommend-item",
      onClick: function onClick() {
        return handleGoInfo(item.jid);
      },
      key: item.jid,
      id: "" + item.jid // ref={refVal}
      // id={id}

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "con-til"
    }, item.company_name), item.tags.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "user-info"
    }, item.tags.join("·")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "con-subject"
    }, "\u85AA\u8D44\uFF1A", item.salary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "con-subject"
    }, "\u8054\u7CFB\u65B9\u5F0F\uFF1A", item.contact_way), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "con-subject"
    }, "\u5730\u5740\uFF1A", item.place)));
  }) : !dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tip-msg"
  }, "\u6682\u65E0\u6570\u636E") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobRecommend);

/***/ }),

/***/ "./src/recoil/atoms/job.ts":
/*!*********************************!*\
  !*** ./src/recoil/atoms/job.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jobState": () => (/* binding */ jobState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

var jobState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "JobState",
  "default": {
    id: 0
  }
});

/***/ }),

/***/ "./src/recoil/selectors/jobSelect.ts":
/*!*******************************************!*\
  !*** ./src/recoil/selectors/jobSelect.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jobSelect": () => (/* binding */ jobSelect)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _atoms_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/job */ "./src/recoil/atoms/job.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");



var jobSelect = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
  key: "jobSel",
  get: function get(_ref) {
    var _get = _ref.get;

    var jobInfo = _get(_atoms_job__WEBPACK_IMPORTED_MODULE_1__.jobState);

    if (jobInfo.id === 0) {
      try {
        jobInfo = _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.get("jobInfo") || jobInfo;
      } catch (error) {
        jobInfo = jobInfo;
      }
    }

    return jobInfo;
  },
  set: function set(_ref2, newVal) {
    var _set = _ref2.set;

    _set(_atoms_job__WEBPACK_IMPORTED_MODULE_1__.jobState, newVal);

    _utils_index__WEBPACK_IMPORTED_MODULE_2__.storage.set("jobInfo", newVal);
  }
});

/***/ }),

/***/ "./src/components/Totast/totast.css":
/*!******************************************!*\
  !*** ./src/components/Totast/totast.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/JobRecommend/jobRecommend.css":
/*!*************************************************!*\
  !*** ./src/pages/JobRecommend/jobRecommend.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_JobRecommend_jobRecommend_tsx.bundle.js.map