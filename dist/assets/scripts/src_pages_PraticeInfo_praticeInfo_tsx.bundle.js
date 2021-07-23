(self["webpackChunkvip_site_pratice_1"] = self["webpackChunkvip_site_pratice_1"] || []).push([["src_pages_PraticeInfo_praticeInfo_tsx"],{

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

/***/ "./src/components/PdfRender/pdfRender.tsx":
/*!************************************************!*\
  !*** ./src/components/PdfRender/pdfRender.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pdf/dist/esm/entry.webpack */ "./node_modules/react-pdf/dist/esm/entry.webpack.js");
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Loading/loading */ "./src/components/Loading/loading.tsx");
/* harmony import */ var _pdfRender_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdfRender.css */ "./src/components/PdfRender/pdfRender.css");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PdfRender = function PdfRender(_ref) {
  var url = _ref.url,
      sign = _ref.sign;

  var _useViewport = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_4__.useViewport)(),
      wh = _useViewport.wh,
      ww = _useViewport.ww;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      numPages = _useState2[0],
      setNumPages = _useState2[1];

  var numPagesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(numPages);
  numPagesRef.current = numPages;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      pageNum = _useState4[0],
      setPageNum = _useState4[1];

  var pageNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pageNum);
  pageNumRef.current = pageNum;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      hasOutline = _useState6[0],
      setHasOutline = _useState6[1];

  function onDocumentLoadSuccess(_ref2) {
    var numPages = _ref2.numPages;
    setNumPages(numPages);
  }

  var handlItemClick = function handlItemClick(_ref3) {
    var pageNumber = _ref3.pageNumber;
    setPageNum(Number(pageNumber));
  };

  var handlPrevClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (pageNumRef.current <= 1) return;
    setPageNum(function (pageNum) {
      return --pageNum;
    });
  }, []);

  var handlNextClick = function handlNextClick() {
    if (pageNumRef.current >= numPagesRef.current) return;
    setPageNum(function (pageNum) {
      return ++pageNum;
    });
  };

  var outlineLoadSuccess = function outlineLoadSuccess(outline) {
    if (!outline) {
      setHasOutline(false);
    }
  };

  var pdfParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      url: url,
      httpHeaders: {
        xs: sign
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function keydown(e) {
      console.log(e);
      var key = e.key;

      if (key === "ArrowLeft") {
        handlPrevClick();
      } else if (key === "ArrowRight") {
        handlNextClick();
      }
    }

    window.addEventListener("keydown", keydown);
    return function () {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pdf-render-con",
    style: {
      height: wh - 166 + "px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pdf-page-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "prev ".concat(pageNum <= 1 ? "disable" : ""),
    onClick: handlPrevClick
  }, "\u4E0A\u4E00\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "current-page-num"
  }, pageNum, "/", numPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "next ".concat(pageNum >= numPages ? "disable" : ""),
    onClick: handlNextClick
  }, "\u4E0B\u4E00\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_1__.Document, {
    file: pdfParams,
    loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_2__.default, null),
    onLoadSuccess: onDocumentLoadSuccess,
    className: "react-pdf-document-custom"
  }, hasOutline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_1__.Outline, {
    onLoadSuccess: outlineLoadSuccess,
    onItemClick: handlItemClick,
    className: "pdf-outline"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_1__.Page, {
    renderAnnotationLayer: false,
    renderTextLayer: false,
    pageNumber: pageNum,
    width: ww * 0.6,
    className: "".concat(hasOutline ? "" : "react-pdf-page-custom")
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(PdfRender));

/***/ }),

/***/ "./src/models/praticeMd.ts":
/*!*********************************!*\
  !*** ./src/models/praticeMd.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPraticeMd": () => (/* binding */ initPraticeMd)
/* harmony export */ });
var initPraticeMd = function initPraticeMd() {
  return [];
};

/***/ }),

/***/ "./src/pages/PraticeInfo/components/BookTree/BookTree.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/PraticeInfo/components/BookTree/BookTree.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BookTree_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookTree.css */ "./src/pages/PraticeInfo/components/BookTree/BookTree.css");
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List/List */ "./src/pages/PraticeInfo/components/BookTree/List/List.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var BookTree = function BookTree(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTree = _useState2[0],
      changeShowTree = _useState2[1];

  var bookList = props.bookList,
      selectedKey = props.selectedKey,
      onItemClick = props.onItemClick;

  var onItemSubClick = function onItemSubClick(path, id) {
    changeShowTree(!showTree);
    onItemClick(path, id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("book", {
      open: showTree
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "book-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List_List__WEBPACK_IMPORTED_MODULE_3__.default, {
    list: bookList.map(function (item) {
      return {
        name: item.title,
        key: item.path,
        value: item.path
      };
    }) || [],
    selected: selectedKey,
    onItemClick: onItemSubClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "toggle-btn",
    onClick: function onClick() {
      return changeShowTree(!showTree);
    }
  }, "\u5168\u4E66\u76EE\u5F55"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(BookTree));

/***/ }),

/***/ "./src/pages/PraticeInfo/components/BookTree/List/List.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/PraticeInfo/components/BookTree/List/List.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _List_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.css */ "./src/pages/PraticeInfo/components/BookTree/List/List.css");



function List(props) {
  var list = props.list,
      selected = props.selected,
      className = props.className,
      onItemClick = props.onItemClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list", className)
  }, list.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-item", {
        focus: selected === item.key
      }),
      key: item.key,
      onClick: function onClick() {
        return onItemClick(item.value, 0);
      }
    }, item.name);
  }));
}

/***/ }),

/***/ "./src/pages/PraticeInfo/praticeInfo.tsx":
/*!***********************************************!*\
  !*** ./src/pages/PraticeInfo/praticeInfo.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _praticeInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./praticeInfo.css */ "./src/pages/PraticeInfo/praticeInfo.css");
/* harmony import */ var _components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/MarkRender/markRender */ "./src/components/MarkRender/markRender.tsx");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/index */ "./src/api/index.ts");
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/loading */ "./src/components/Loading/loading.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/index */ "./src/utils/index.ts");
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/index */ "./src/hooks/index.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @recoil/selectors/loginSelectors */ "./src/recoil/selectors/loginSelectors.ts");
/* harmony import */ var _components_BookTree_BookTree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BookTree/BookTree */ "./src/pages/PraticeInfo/components/BookTree/BookTree.tsx");
/* harmony import */ var _recoil_atoms_praticeMdAtoms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @recoil/atoms/praticeMdAtoms */ "./src/recoil/atoms/praticeMdAtoms.ts");
/* harmony import */ var _components_PdfRender_pdfRender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/PdfRender/pdfRender */ "./src/components/PdfRender/pdfRender.tsx");
/* harmony import */ var _components_Totast_totast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/Totast/totast */ "./src/components/Totast/totast.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var BestPraticeInfo = function BestPraticeInfo() {
  // console.log("藏经阁详情");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      md = _useState2[0],
      setMd = _useState2[1];

  var _useRecoilValue = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue)(_recoil_selectors_loginSelectors__WEBPACK_IMPORTED_MODULE_8__.loginSel),
      uid = _useRecoilValue.uid,
      sign = _useRecoilValue.sign;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useLoginCheck = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_6__.useLoginCheck)(),
      setLoginStatus = _useLoginCheck.setLoginStatus;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPdf = _useState6[0],
      setIsPdf = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isError = _useState8[0],
      setIsError = _useState8[1]; // let { path } = useParams<{ path: string }>();


  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
  var pState = {
    path: "",
    id: 0
  };

  if (!location.state) {
    pState = _utils_index__WEBPACK_IMPORTED_MODULE_5__.storage.get("pState");

    if (!pState) {
      history.replace("/ques");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
  } else {
    pState = location.state;
    _utils_index__WEBPACK_IMPORTED_MODULE_5__.storage.set("pState", pState);
  }

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_recoil_atoms_praticeMdAtoms__WEBPACK_IMPORTED_MODULE_10__.praticeMdState),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      praticeMdList = _useRecoilState2[0],
      setPraticeMdList = _useRecoilState2[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pState.path),
      _useState10 = _slicedToArray(_useState9, 2),
      currentPath = _useState10[0],
      setCurrentPath = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pState.id),
      _useState12 = _slicedToArray(_useState11, 2),
      pathId = _useState12[0],
      setPathId = _useState12[1];

  var pathIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pathId);
  pathIdRef.current = pathId;

  var _componentStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      _componentStatus.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var scrollEl = document.querySelector(".markdown-box .content");
    scrollEl && scrollEl.scrollTo(0, 0);
  }, [currentPath]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!currentPath && isPdf) {
      return;
    }

    if (pState.path.indexOf(".pdf") !== -1) {
      setIsPdf(true);
      return;
    }

    _api_index__WEBPACK_IMPORTED_MODULE_3__.pratice.getBestPraticeInfo({
      path: "".concat(currentPath, ".md"),
      id: pathId,
      uid: uid
    }).then(function (res) {
      if (!_componentStatus.current) {
        _componentStatus = null;
        return;
      }

      setLoginStatus(res.status);
      setMd(res.data.data || "");
      (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.setFont)(res.data.key, "praticeInfo", setLoading);
      setPraticeMdList(res.data.mdList);
    })["catch"](function (err) {
      setIsError(true);
    });
  }, [currentPath]);

  var onItemClick = function onItemClick(path) {
    setLoading(true);
    setCurrentPath(path);
    history.push({
      pathname: "/pratice/info",
      state: {
        path: path,
        id: pathIdRef.current
      }
    });
  };

  var goBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    history.replace("/pratice");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-pratice-info layout-container",
    style: {
      marginTop: "10px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "md-back-btn",
    onClick: goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "iconfont"
  }, "\uE653")), isPdf ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_PdfRender_pdfRender__WEBPACK_IMPORTED_MODULE_11__.default, {
    sign: sign,
    url: "https://vip-api.yidengfe.com/api/getBook?path=".concat(pState.path, "&sid=").concat(uid)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, praticeMdList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BookTree_BookTree__WEBPACK_IMPORTED_MODULE_9__.default, {
    selectedKey: currentPath,
    bookList: praticeMdList,
    onItemClick: onItemClick
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MarkRender_markRender__WEBPACK_IMPORTED_MODULE_2__.default, {
    mardownStr: md
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__.default, null) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Totast_totast__WEBPACK_IMPORTED_MODULE_12__.default, {
    visible: isError
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestPraticeInfo);

/***/ }),

/***/ "./src/recoil/atoms/praticeMdAtoms.ts":
/*!********************************************!*\
  !*** ./src/recoil/atoms/praticeMdAtoms.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "praticeMdState": () => (/* binding */ praticeMdState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _models_praticeMd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/praticeMd */ "./src/models/praticeMd.ts");


var praticeMdState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "praticeMdState",
  "default": (0,_models_praticeMd__WEBPACK_IMPORTED_MODULE_1__.initPraticeMd)()
});

/***/ }),

/***/ "./src/components/PdfRender/pdfRender.css":
/*!************************************************!*\
  !*** ./src/components/PdfRender/pdfRender.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/PraticeInfo/components/BookTree/BookTree.css":
/*!****************************************************************!*\
  !*** ./src/pages/PraticeInfo/components/BookTree/BookTree.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/PraticeInfo/components/BookTree/List/List.css":
/*!*****************************************************************!*\
  !*** ./src/pages/PraticeInfo/components/BookTree/List/List.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/PraticeInfo/praticeInfo.css":
/*!***********************************************!*\
  !*** ./src/pages/PraticeInfo/praticeInfo.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?844f":
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ccad":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d507":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f3a6":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c2a4":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f80d":
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=src_pages_PraticeInfo_praticeInfo_tsx.bundle.js.map