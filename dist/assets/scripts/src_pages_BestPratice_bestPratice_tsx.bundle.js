(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_BestPratice_bestPratice_tsx"],{

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

/***/ "./src/pages/BestPratice/Book.tsx":
/*!****************************************!*\
  !*** ./src/pages/BestPratice/Book.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Book = function Book(props) {
  // console.log("藏经阁");
  var goInfo = props.goInfo,
      con = props.con;

  var goPraticeInfo = function goPraticeInfo(path, id) {
    goInfo(path, id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pratice-book"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "hardcover_front"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "coverDesign grey",
    style: {
      backgroundImage: "url(".concat(con.poster, ")")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "page",
    onClick: function onClick() {
      return goPraticeInfo(con.path, con.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "book-con"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, con.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "btn"
  }, "\u67E5\u770B\u8BE6\u60C5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "hardcover_back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "book_spine"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Book));

/***/ }),

/***/ "./src/pages/BestPratice/bestPratice.tsx":
/*!***********************************************!*\
  !*** ./src/pages/BestPratice/bestPratice.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _bestPratice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bestPratice.css */ "./src/pages/BestPratice/bestPratice.css");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Loading/loading */ "./src/components/Loading/loading.tsx");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Book */ "./src/pages/BestPratice/Book.tsx");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var QuesBank = function QuesBank() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      bookList = _useState2[0],
      setBookList = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useLoginCheck = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_4__.useLoginCheck)(),
      setLoginStatus = _useLoginCheck.setLoginStatus;

  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_6__.loginSel),
      uid = _useRecoilValue.uid;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_index__WEBPACK_IMPORTED_MODULE_2__.pratice.getBestPraticeList(uid).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);
      var praticeList = [];
      var count = 1;
      var length = res.data.length;
      res.data.forEach(function (item, index) {
        if (index === 0) {
          praticeList[count - 1] = [];
        } else if (index === 5 * count) {
          praticeList[count] = [];
          count++;
        }

        if (index <= 5 * count) {
          praticeList[count - 1].push(item);
        }
      });
      setBookList(praticeList || []);
      setLoading(false);
    })["catch"](function (err) {
      setIsError(true);
    });
  }, []);

  var goInfo = function goInfo(path, id) {
    history.push({
      pathname: "/pratice/info",
      state: {
        path: path,
        id: id
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_loading__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-pratice layout-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "book-box"
  }, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: __webpack_require__(/*! @assets/images/bookshelf.png */ "./src/assets/images/bookshelf.png"),
    className: "book-shelf",
    alt: ""
  }) : null, bookList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pratice-line",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pratice-item-box"
    }, item.map(function (book, bdx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Book__WEBPACK_IMPORTED_MODULE_7__.default, {
        con: book,
        key: book.id,
        goInfo: goInfo
      });
    })));
  }))), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_3__.default, null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuesBank);

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

/***/ "./src/pages/BestPratice/bestPratice.css":
/*!***********************************************!*\
  !*** ./src/pages/BestPratice/bestPratice.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/bookshelf.png":
/*!*****************************************!*\
  !*** ./src/assets/images/bookshelf.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bookshelf.png";

/***/ })

}]);
//# sourceMappingURL=src_pages_BestPratice_bestPratice_tsx.bundle.js.map