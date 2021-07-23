(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_QuesBank_QuesBank_tsx"],{

/***/ "./src/components/Pagination/pagination.tsx":
/*!**************************************************!*\
  !*** ./src/components/Pagination/pagination.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pagination_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.css */ "./src/components/Pagination/pagination.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Pagination = function Pagination(_ref) {
  var totalPage = _ref.totalPage,
      onPrev = _ref.onPrev,
      onNext = _ref.onNext,
      onCurrent = _ref.onCurrent,
      curPage = _ref.curPage,
      _ref$isShow = _ref.isShow,
      isShow = _ref$isShow === void 0 ? false : _ref$isShow;

  // console.log("页码组件");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(curPage),
      _useState2 = _slicedToArray(_useState, 2),
      pageNum = _useState2[0],
      setPageNum = _useState2[1]; // 拿到1，2，2 页数


  var pageNumArr = new Array(totalPage).fill(1).map(function (item, index) {
    return index + 1;
  }); // 翻页处理

  var pageNumGap = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPageNum(curPage);
  });

  var handlePrev = function handlePrev() {
    if (pageNum <= 1) return;
    setPageNum(--pageNum);
    onPrev(pageNum);
  };

  var handleNext = function handleNext() {
    if (pageNum >= totalPage) return;
    setPageNum(++pageNum);
    onNext(pageNum);
  };

  var handlePageNumClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    setPageNum(index);
    onCurrent(index);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pagination layout-container",
    style: {
      opacity: isShow ? 1 : 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: handlePrev,
    className: "page-btn ".concat(pageNum === 1 ? "disable" : "")
  }, "\u4E0A\u4E00\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-numbers"
  }, pageNumArr.map(function (item) {
    // 数字翻页的计算
    if (pageNum > 8) {
      pageNumGap = pageNum - 8;
    } // 


    if (item === 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          handlePageNumClick(item);
        },
        key: item,
        className: "page-num ".concat(item === pageNum ? "act" : "")
      }, item);
    } // 是否显示点


    if (item === 2 && pageNum > 8) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          handlePageNumClick(item);
        },
        key: item,
        className: "page-num ".concat(item === pageNum ? "act" : "")
      }, "...");
    } // 如果pageNum 不超过，就不用显示


    if (item === 2 && pageNum <= 8) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          handlePageNumClick(item);
        },
        key: item,
        className: "page-num ".concat(item === pageNum ? "act" : "")
      }, item);
    } // ... 之间要显示的


    if (pageNum <= totalPage && item > 2 + pageNumGap && item <= 9 + pageNumGap) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          handlePageNumClick(item);
        },
        className: "page-num ".concat(item === pageNum ? "act" : ""),
        key: item
      }, item);
    }
  }), totalPage > 10 && pageNum <= totalPage - 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-num"
  }, "...") : "", totalPage > 10 && pageNum <= totalPage - 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      handlePageNumClick(totalPage);
    },
    className: "page-num ".concat(totalPage === pageNum ? "act" : "")
  }, totalPage) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: handleNext,
    className: "page-btn ".concat(pageNum === totalPage ? "disable" : "")
  }, "\u4E0B\u4E00\u9875"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Pagination));

/***/ }),

/***/ "./src/components/SortNav/sortNav.tsx":
/*!********************************************!*\
  !*** ./src/components/SortNav/sortNav.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _sortNav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortNav.css */ "./src/components/SortNav/sortNav.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SortNav = function SortNav(props) {
  // console.log('题目导航组件');
  var _props$navItems = props.navItems,
      navItems = _props$navItems === void 0 ? [] : _props$navItems,
      curItem = props.curItem,
      curItemId = props.curItemId,
      liDom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(curItemId),
      _useState2 = _slicedToArray(_useState, 2),
      curId = _useState2[0],
      setCurId = _useState2[1],
      handleItemClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var curId = Number(event.currentTarget.dataset.id || 0);
    setCurId(curId);
    curItem(curId);
  }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "sort-nav-box layout-container"
  }, navItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      ref: liDom,
      className: "".concat(curId === item.id ? "item-act" : ""),
      onClick: handleItemClick,
      key: item.id,
      "data-id": item.id
    }, item.name);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(SortNav));

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

/***/ "./src/pages/QuesBank/QuesBank.tsx":
/*!*****************************************!*\
  !*** ./src/pages/QuesBank/QuesBank.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _quesBank_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quesBank.css */ "./src/pages/QuesBank/quesBank.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/MarkRender/markRender */ "./src/components/MarkRender/markRender.tsx");
/* harmony import */ var _components_Pagination_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Pagination/pagination */ "./src/components/Pagination/pagination.tsx");
/* harmony import */ var _components_SortNav_sortNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SortNav/sortNav */ "./src/components/SortNav/sortNav.tsx");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Loading/Loading */ "./src/components/Loading/Loading.tsx");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
/* harmony import */ var _recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @recoil/selectors/quesListSelectors */ "./src/recoil/selectors/quesListSelectors.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // markdown 显示

 // 分页

 // 分类导航



 // 自定义 hooks 检查是否登录有效


 // 错误提示弹窗

 // recoil 状态


 // 简单的工具函数



var QuesBank = function QuesBank() {
  // console.log("面试题列表");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var _useLoginCheck = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_7__.useLoginCheck)(),
      setLoginStatus = _useLoginCheck.setLoginStatus;

  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_11__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__.loginSel),
      uid = _useRecoilValue.uid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      listLoading = _useState2[0],
      setListLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      sortLoading = _useState4[0],
      setSortLoading = _useState4[1];

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_11__.useRecoilState)(_recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_10__.quesListSelect),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      quesListParam = _useRecoilState2[0],
      setQuesListParam = _useRecoilState2[1];

  var quesListParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(quesListParam); // useRef变化不会主动使页面渲染
  // useRef接收initialValue作为初始值，它的返回值是一个ref对象，这个对象的.current属性就是该数据的最新值。使用useRef的一个最简单的情况就是在Function Component里面存储对DOM对象的引用，
  // 它可以保证在组件每次渲染的时候拿到的都是同一个对象。
  // useRef返回的ref object被重新赋值的时候不会引起组件的重渲染，如果你有这个需求的话请使用useState来存储数据。
  // useRef保存任何可变化的值，.current属性总是取最新的值。就是相当于全局作用域，一处被修改，其他地方全更新...

  quesListParams.current = quesListParam;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      num = _useState6[0],
      setNum = _useState6[1];

  var _useRecoilState3 = (0,recoil__WEBPACK_IMPORTED_MODULE_11__.useRecoilState)(_recoil_selectors_quesListSelectors__WEBPACK_IMPORTED_MODULE_10__.quesSelect),
      _useRecoilState4 = _slicedToArray(_useRecoilState3, 2),
      quesParam = _useRecoilState4[0],
      setQuesParam = _useRecoilState4[1];

  var quesParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(quesParam);
  quesParams.current = quesParam;

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      quesList = _useState8[0],
      setQuesList = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      pageCount = _useState10[0],
      setPageCount = _useState10[1];

  var totalPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pageCount);
  totalPage.current = pageCount;

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      navItems = _useState12[0],
      setNavItems = _useState12[1];

  var navItemsArr = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(navItems);
  navItemsArr.current = navItems;

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isError = _useState14[0],
      setIsError = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelector(".page-ques").scrollTo(0, 0);
  }, [quesParam.curNav, quesListParam.page]); // 请求导航分类

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSortLoading(true);
    _api_index__WEBPACK_IMPORTED_MODULE_5__.ques.getQuesSort({
      uid: uid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);
      var navArr = res.data || [];
      setNavItems(navArr);
      setSortLoading(false);
    })["catch"](function (err) {
      setSortLoading(false);
      setIsError(true);
    });
  }, []); // 请求题目列表

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setListLoading(true);
    var page = quesListParam.page,
        page_count = quesListParam.page_count;
    var curQuesIndex = quesParam.curQuesIndex,
        quesList = quesParam.quesList,
        curQid = quesParam.curQid;
    _api_index__WEBPACK_IMPORTED_MODULE_5__.ques.getQuesList(_objectSpread(_objectSpread({}, quesListParam), {
      uid: uid
    })).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);

      var _ref = res.data || {},
          _ref$list = _ref.list,
          list = _ref$list === void 0 ? [] : _ref$list,
          pages = _ref.pages;

      setQuesList(list);
      setPageCount(pages);
      setListLoading(false);
      setQuesParam(_objectSpread(_objectSpread({}, quesParam), {}, {
        quesList: list,
        totalPage: pages * page_count
      }));
      setTimeout(function () {
        curQid >= 0 && (0,_utils_index__WEBPACK_IMPORTED_MODULE_12__.scrollToAnchor)(curQid);
      }, 100);
    })["catch"](function (err) {
      setQuesList([]);
      setListLoading(false);
      setIsError(true);
    });
  }, [quesListParam]);
  var setPageParam = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (page) {
    setQuesListParam(_objectSpread(_objectSpread({}, quesListParams.current), {}, {
      page: page
    }));
  }, []);
  var goPraticeInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, index) {
    setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
      curQuesIndex: index,
      totalPage: totalPage.current * 15,
      curQid: id
    }));
    setTimeout(function () {
      history.push({
        pathname: "/ques/info",
        state: {
          qid: id
        }
      });
    }, 0);
  }, []);
  var onPrev = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (num) {
    setPageParam(num);
  }, []);
  var onNext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (num) {
    setPageParam(num);
  }, []);
  var onCurrent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (num) {
    setPageParam(num);
  }, []);
  var curItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    if (id === 1) {
      setQuesListParam(_objectSpread(_objectSpread({}, quesListParams.current), {}, {
        condition: {
          biz_type: 2
        },
        page: 1
      }));
    } else {
      var tagName = navItemsArr.current[id - 1].name;
      setQuesListParam(_objectSpread(_objectSpread({}, quesListParams.current), {}, {
        condition: {
          biz_type: 1,
          tech_tag: [tagName]
        },
        page: 1
      }));
    }

    setQuesParam(_objectSpread(_objectSpread({}, quesParams.current), {}, {
      curNav: id,
      quesList: []
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_6__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SortNav_sortNav__WEBPACK_IMPORTED_MODULE_4__.default, {
    navItems: navItems,
    curItemId: quesParam.curNav,
    curItem: curItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-ques layout-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ques-bank"
  }, quesList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ques-item",
      key: item.qid,
      id: item.qid,
      onClick: function onClick() {
        goPraticeInfo(item.qid, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      style: {
        backgroundColor: "#ff5f56"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      style: {
        backgroundColor: "#ffbd2e"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      style: {
        backgroundColor: "#27c93f"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ques-con"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "item-til"
    }, item[item.qtype].title), item[item.qtype].subject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__.default, {
      mardownStr: item[item.qtype].subject,
      showTopic: false,
      setHeight: false
    }) : null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Pagination_pagination__WEBPACK_IMPORTED_MODULE_3__.default, {
    totalPage: pageCount,
    onPrev: onPrev,
    onNext: onNext,
    onCurrent: onCurrent,
    curPage: quesListParam.page,
    isShow: !sortLoading
  }), listLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_6__.default, null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_9__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuesBank);

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

/***/ "./src/components/Pagination/pagination.css":
/*!**************************************************!*\
  !*** ./src/components/Pagination/pagination.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SortNav/sortNav.css":
/*!********************************************!*\
  !*** ./src/components/SortNav/sortNav.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/QuesBank/quesBank.css":
/*!*****************************************!*\
  !*** ./src/pages/QuesBank/quesBank.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_QuesBank_QuesBank_tsx.bundle.js.map