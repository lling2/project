(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_Login_Login_tsx"],{

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

/***/ "./src/pages/Login/Login.tsx":
/*!***********************************!*\
  !*** ./src/pages/Login/Login.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_loginAtoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/atoms/loginAtoms */ "./src/recoil/atoms/loginAtoms.ts");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/Loading */ "./src/components/Loading/Loading.tsx");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var react_qrbtf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-qrbtf */ "./node_modules/react-qrbtf/dist/index.js");
/* harmony import */ var react_qrbtf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_qrbtf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.css */ "./src/pages/Login/login.css");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Login = function Login() {
  // console.log("登录页面");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)(); // 定义的一个变量

  var isClearPending = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true); //   记录跳转之前的地址

  var redirectUrl = location.state ? location.state.from && location.state.from.pathname : "/";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      qr = _useState2[0],
      setQr = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    msg: "扫码登录<br/>京程一灯FE社区"
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      scanRes = _useState4[0],
      setScanRes = _useState4[1]; // 这里是为了进行接口的重复请求


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      qrCount = _useState6[0],
      setQrCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      uuid = _useState8[0],
      setUuid = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      codeCount = _useState10[0],
      setCodeCount = _useState10[1];

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_recoil_atoms_loginAtoms__WEBPACK_IMPORTED_MODULE_2__.loginState),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      loginInfo = _useRecoilState2[0],
      setLoginInfo = _useRecoilState2[1];

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isError = _useState12[0],
      setIsError = _useState12[1]; // 判断当前页面是否已经销毁，跳走


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false;
    };
  }, []); //  获取用户信息，判断是否是vip用户

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var code = scanRes.code;
    if (!code) return;
    _api_index__WEBPACK_IMPORTED_MODULE_3__.user.getUserInfo({
      code: code
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      if (res.status === -5) {
        setScanRes({
          msg: "只限VIP认证用户访问"
        });
        return;
      }

      loginIn(res.data);
    })["catch"](function (err) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setIsError(true);
    });
  }, [scanRes.code]); // 获取二维码

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_index__WEBPACK_IMPORTED_MODULE_3__.user.getQR().then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      var _res$data = res.data,
          qr = _res$data.qr,
          uuid = _res$data.uuid;
      setQr(qr);
      setUuid(uuid);
    })["catch"](function (err) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setIsError(true);
    });
  }, [qrCount]); // 获取code 是否扫码登录

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = null;
    if (!uuid) return;
    _api_index__WEBPACK_IMPORTED_MODULE_3__.user.getCode({
      uuid: uuid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      if (res.status === 405) {
        var code = res.data.code; // 表示登录成功

        setScanRes({
          msg: res.msg,
          code: code
        });
        isClearPending.current = false;
      } else if (res.status === 404) {
        if (scanRes.msg !== "扫描成功") {
          setScanRes({
            msg: res.msg.title,
            content: res.msg.content
          });
        }

        timer = window.setTimeout(function () {
          setCodeCount(function (preState) {
            return ++preState;
          });
        }, 1000);
      } else if (res.status === 403) {
        setScanRes({
          msg: res.msg.title,
          content: res.msg.content
        });
        timer = window.setTimeout(function () {
          setCodeCount(function (preState) {
            return ++preState;
          });
        }, 1000);
      } else if (res.status === 500) {
        setQrCount(function (preState) {
          return ++preState;
        });
      } else {
        timer = window.setTimeout(function () {
          setCodeCount(function (preState) {
            return ++preState;
          });
        }, 1000);
      }
    })["catch"](function (err) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      if (err !== -3) {
        setQrCount(function (preState) {
          return ++preState;
        });
      }
    });
    return function () {
      clearTimeout(timer);

      if (isClearPending.current) {
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.clearPending)();
      }
    };
  }, [uuid, codeCount]);

  var loginIn = function loginIn(userInfo) {
    setLoginInfo(userInfo);

    if (redirectUrl === "/login") {
      redirectUrl = "/";
    }

    _utils_index__WEBPACK_IMPORTED_MODULE_5__.storage.set("userInfo", userInfo);
    history.push(redirectUrl);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-login layout-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "scan-box-con"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "scan-box"
  }, qr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_qrbtf__WEBPACK_IMPORTED_MODULE_6__.QRLine, {
    value: qr,
    className: "my-qrcode",
    styles: {
      svg: {
        width: "260px",
        height: "260px"
      }
    } // type="planet"
    // size={50}
    // opacity={100}
    ,
    level: "M",
    lineWidth: 70,
    posType: "rect",
    direction: "cross",
    lineColor: "#fefefe",
    posColor: "#fefefe" // posColor="##a52ff7"
    // title={scanRes.msg}

  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tip-txt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "login-tip-til",
    dangerouslySetInnerHTML: {
      __html: scanRes.msg
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "login-tip-content"
  }, scanRes.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "qrbg",
    src: __webpack_require__(/*! @assets/images/qrbg2.png */ "./src/assets/images/qrbg2.png"),
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_8__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

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

/***/ "./src/pages/Login/login.css":
/*!***********************************!*\
  !*** ./src/pages/Login/login.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/qrbg2.png":
/*!*************************************!*\
  !*** ./src/assets/images/qrbg2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/qrbg2.png";

/***/ })

}]);
//# sourceMappingURL=src_pages_Login_Login_tsx.bundle.js.map