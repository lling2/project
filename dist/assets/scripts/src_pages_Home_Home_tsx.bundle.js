(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_Home_Home_tsx"],{

/***/ "./src/components/Gallery/Gallery.tsx":
/*!********************************************!*\
  !*** ./src/components/Gallery/Gallery.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/autoplay/autoplay.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/mousewheel/mousewheel.js");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var _Gllery_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Gllery.css */ "./src/components/Gallery/Gllery.css");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");




swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_3__.default, swiper__WEBPACK_IMPORTED_MODULE_4__.default, swiper__WEBPACK_IMPORTED_MODULE_5__.default, swiper__WEBPACK_IMPORTED_MODULE_6__.default]);
 // ?????????hooks


var bannerList = [{
  img: "b1.png",
  title: "???????????????????????????",
  info: "??????????????????????????????????????????????????????????????????????????????Leader????????????????????????~",
  id: 1
}, {
  img: "b2.png",
  title: "????????????????????????",
  info: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  id: 2
}, {
  img: "b3.png",
  title: "2020?????????????????????",
  info: "???????????????????????????????????????????????????30k offer????????????????????????????????????????????????????????????????????????",
  id: 3
}, {
  img: "b4.png",
  title: "????????????????????????",
  info: "\u8FD9\u4E00\u671F\u7EBF\u4E0B\u7684\u540C\u5B66\u4E0D\u591A\uFF0C\u7ED3\u8BFE\u90A3\u4E00\u665A\u6211\u4EEC\u6765\u4E86\u573A\"\u751F\u6B7B\u5C40\"\u3002\u5403\u5168\u4E86\u8001\u8881\u7684\u5BB6\u4E61\u83DC",
  id: 4
}, {
  img: "b5.png",
  title: "?????????????????????",
  info: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  id: 5
}, {
  img: "b6.png",
  title: "????????????????????????",
  info: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  id: 6
}, {
  img: "b7.png",
  title: "?????????????????????????????????",
  info: "????????????????????????????????????9??????????????????????????????11?????????????????????????????????????????????????????????????????????",
  id: 7
}, {
  img: "b8.png",
  title: "???????????????????????????",
  info: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  id: 8
}];

var SwiperSlier = function SwiperSlier() {
  // console.log('swiper??????');
  var _useViewport = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_8__.useViewport)(),
      wh = _useViewport.wh;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "gallery-box",
    style: {
      height: wh * 0.9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    speed: 600,
    effect: "slide",
    loop: true,
    direction: "vertical",
    pagination: {
      clickable: true
    },
    mousewheel: true
  }, bannerList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_10__.SwiperSlide, {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "swiper-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.info)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./".concat(item.img)),
      alt: ""
    })));
  })));
}; // useMemo????????????
// ????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(SwiperSlier));

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
      alert('??????????????????');
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

 // hooks????????????????????????

var useViewport = function useViewport() {
  // ??????state ?????????????????????
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),
      _useState2 = _slicedToArray(_useState, 2),
      wh = _useState2[0],
      setWH = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),
      _useState4 = _slicedToArray(_useState3, 2),
      ww = _useState4[0],
      setWW = _useState4[1]; // ?????????didMount


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleWindowResize = function handleWindowResize() {
      setWH(window.innerHeight);
      setWW(window.innerWidth);
    }; // ??????dom


    window.addEventListener("resize", handleWindowResize); // return destroy ??????????????????????????????

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

/***/ "./src/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.css */ "./src/pages/Home/Home.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Gallery/Gallery */ "./src/components/Gallery/Gallery.tsx");




var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-home layout-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "banner-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__.default, null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/Gallery/Gllery.css":
/*!*******************************************!*\
  !*** ./src/components/Gallery/Gllery.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/Home/Home.css":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.bindModuleMethods)(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, overwriteParams);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./src/assets/images/b1.png":
/*!**********************************!*\
  !*** ./src/assets/images/b1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b1.png";

/***/ }),

/***/ "./src/assets/images/b2.png":
/*!**********************************!*\
  !*** ./src/assets/images/b2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b2.png";

/***/ }),

/***/ "./src/assets/images/b3.png":
/*!**********************************!*\
  !*** ./src/assets/images/b3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b3.png";

/***/ }),

/***/ "./src/assets/images/b4.png":
/*!**********************************!*\
  !*** ./src/assets/images/b4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b4.png";

/***/ }),

/***/ "./src/assets/images/b5.png":
/*!**********************************!*\
  !*** ./src/assets/images/b5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b5.png";

/***/ }),

/***/ "./src/assets/images/b6.png":
/*!**********************************!*\
  !*** ./src/assets/images/b6.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b6.png";

/***/ }),

/***/ "./src/assets/images/b7.png":
/*!**********************************!*\
  !*** ./src/assets/images/b7.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b7.png";

/***/ }),

/***/ "./src/assets/images/b8.png":
/*!**********************************!*\
  !*** ./src/assets/images/b8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b8.png";

/***/ }),

/***/ "./src/assets/images/bg2.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/bg2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bg2.jpg";

/***/ }),

/***/ "./src/assets/images/bookshelf.png":
/*!*****************************************!*\
  !*** ./src/assets/images/bookshelf.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bookshelf.png";

/***/ }),

/***/ "./src/assets/images/qrbg2.png":
/*!*************************************!*\
  !*** ./src/assets/images/qrbg2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/qrbg2.png";

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./b1.png": "./src/assets/images/b1.png",
	"./b2.png": "./src/assets/images/b2.png",
	"./b3.png": "./src/assets/images/b3.png",
	"./b4.png": "./src/assets/images/b4.png",
	"./b5.png": "./src/assets/images/b5.png",
	"./b6.png": "./src/assets/images/b6.png",
	"./b7.png": "./src/assets/images/b7.png",
	"./b8.png": "./src/assets/images/b8.png",
	"./bg2.jpg": "./src/assets/images/bg2.jpg",
	"./bookshelf.png": "./src/assets/images/bookshelf.png",
	"./logo3.png": "./src/assets/images/logo3.png",
	"./qrbg2.png": "./src/assets/images/qrbg2.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_Home_tsx.bundle.js.map