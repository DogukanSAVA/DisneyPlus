"use strict";
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Dogukan_Desktop_disneyproject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Dogukan\\Desktop\\disneyproject\\components\\Header.js",
    _s = $RefreshSig$();







function Header() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),
      _useSession2 = (0,C_Users_Dogukan_Desktop_disneyproject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),
      session = _useSession2[0];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("header", {
    className: "sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/image/logo.svg",
      alt: "",
      width: 80,
      height: 80,
      className: "cursor-pointer",
      onClick: function onClick() {
        return router.push("/");
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "hidden ml-10 md:flex items-center space-x-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, {
          className: "h-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
          className: "h-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, {
          className: "h-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Watchlist"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.StarIcon, {
          className: "h-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Originals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          src: "/image/movie-icon.svg",
          alt: "",
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Movies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "header-link group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          src: "/image/series-icon.svg",
          alt: "",
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "span",
          children: "Series"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), !session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      className: "ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200",
      onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn,
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
      src: session.user.image,
      className: "ml-auto h-12 w-12 rounded-full object-cover cursor-pointer",
      onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Header, "wRjH18ZEAU0r8MGsdyiQ8/tDc2w=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWUvW2lkXS4xYTZiYzM3Y2FiOTY4MWM0ZDk5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTs7O0FBRUEsU0FBU1MsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixvQkFBa0JGLDREQUFVLEVBQTVCO0FBQUE7QUFBQSxNQUFPRyxPQUFQOztBQUNBLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyw4RUFBbEI7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUNFLFNBQUcsRUFBQyxpQkFETjtBQUVFLFNBQUcsRUFBQyxFQUZOO0FBR0UsV0FBSyxFQUFFLEVBSFQ7QUFJRSxZQUFNLEVBQUUsRUFKVjtBQUtFLGVBQVMsRUFBQyxnQkFMWjtBQU1FLGFBQU8sRUFBRTtBQUFBLGVBQU1HLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBU0dGLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsNkNBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxnQ0FDRSw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0UsOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFhRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxnQ0FDRSw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWlCRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyx1QkFBVDtBQUFpQyxhQUFHLEVBQUMsRUFBckM7QUFBd0MsbUJBQVMsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXFCRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyx3QkFBVDtBQUFrQyxhQUFHLEVBQUMsRUFBdEM7QUFBeUMsbUJBQVMsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixFQXFDRyxDQUFDQSxPQUFELGdCQUNDO0FBQ0UsZUFBUyxFQUFDLGdJQURaO0FBRUUsYUFBTyxFQUFFTCxvREFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQVFDO0FBQ0UsU0FBRyxFQUFFSyxPQUFPLENBQUNHLElBQVIsQ0FBYUMsS0FEcEI7QUFFRSxlQUFTLEVBQUMsNERBRlo7QUFHRSxhQUFPLEVBQUVSLHFEQUFPQTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REOztHQTFEUUc7VUFDV0YsMERBQ0hDOzs7S0FGUkM7QUE0RFQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgSG9tZUljb24sXHJcbiAgU2VhcmNoSWNvbixcclxuICBQbHVzSWNvbixcclxuICBTdGFySWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSBiZy1bIzA0MDcxNF0gdG9wLTAgei1bMTAwMF0gZmxleCBpdGVtcy1jZW50ZXIgcHgtMTAgbWQ6cHgtMTIgaC1bNzJweF1cIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPVwiL2ltYWdlL2xvZ28uc3ZnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICBoZWlnaHQ9ezgwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtbC0xMCBtZDpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTZcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rIGdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJoLTRcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rIGdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj5TZWFyY2g8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGluayBncm91cFwiPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gY2xhc3NOYW1lPVwiaC00XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPldhdGNobGlzdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rIGdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTRcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+T3JpZ2luYWxzPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmsgZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvbW92aWUtaWNvbi5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+TW92aWVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmsgZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2Uvc2VyaWVzLWljb24uc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC01XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPlNlcmllczwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgeyFzZXNzaW9uID8gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gdXBwZXJjYXNlIGJvcmRlciBweC00IHB5LTEuNSByb3VuZGVkIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtzaWduSW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17c2lnbk91dH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJJbWFnZSIsIkhvbWVJY29uIiwiU2VhcmNoSWNvbiIsIlBsdXNJY29uIiwiU3Rhckljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkhlYWRlciIsInNlc3Npb24iLCJyb3V0ZXIiLCJwdXNoIiwidXNlciIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==