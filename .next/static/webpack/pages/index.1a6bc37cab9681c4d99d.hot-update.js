"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWE2YmMzN2NhYjk2ODFjNGQ5OWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsb0JBQWtCRiw0REFBVSxFQUE1QjtBQUFBO0FBQUEsTUFBT0csT0FBUDs7QUFDQSxNQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsOEVBQWxCO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFDRSxTQUFHLEVBQUMsaUJBRE47QUFFRSxTQUFHLEVBQUMsRUFGTjtBQUdFLFdBQUssRUFBRSxFQUhUO0FBSUUsWUFBTSxFQUFFLEVBSlY7QUFLRSxlQUFTLEVBQUMsZ0JBTFo7QUFNRSxhQUFPLEVBQUU7QUFBQSxlQUFNRyxNQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQVNHRixPQUFPLGlCQUNOO0FBQUssZUFBUyxFQUFDLDZDQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0UsOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxnQ0FDRSw4REFBQyw4REFBRDtBQUFZLG1CQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBLGdDQUNFLDhEQUFDLDREQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBYUU7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0UsOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFpQkU7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsdUJBQVQ7QUFBaUMsYUFBRyxFQUFDLEVBQXJDO0FBQXdDLG1CQUFTLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsZUFxQkU7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsd0JBQVQ7QUFBa0MsYUFBRyxFQUFDLEVBQXRDO0FBQXlDLG1CQUFTLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosRUFxQ0csQ0FBQ0EsT0FBRCxnQkFDQztBQUNFLGVBQVMsRUFBQyxnSUFEWjtBQUVFLGFBQU8sRUFBRUwsb0RBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFRQztBQUNFLFNBQUcsRUFBRUssT0FBTyxDQUFDRyxJQUFSLENBQWFDLEtBRHBCO0FBRUUsZUFBUyxFQUFDLDREQUZaO0FBR0UsYUFBTyxFQUFFUixxREFBT0E7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNERDs7R0ExRFFHO1VBQ1dGLDBEQUNIQzs7O0tBRlJDO0FBNERULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVJY29uLFxyXG4gIFNlYXJjaEljb24sXHJcbiAgUGx1c0ljb24sXHJcbiAgU3Rhckljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgYmctWyMwNDA3MTRdIHRvcC0wIHotWzEwMDBdIGZsZXggaXRlbXMtY2VudGVyIHB4LTEwIG1kOnB4LTEyIGgtWzcycHhdXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz1cIi9pbWFnZS9sb2dvLnN2Z1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgaGVpZ2h0PXs4MH1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAvPlxyXG4gICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWwtMTAgbWQ6ZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC02XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGluayBncm91cFwiPlxyXG4gICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwiaC00XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPkhvbWU8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGluayBncm91cFwiPlxyXG4gICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTRcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+U2VhcmNoPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmsgZ3JvdXBcIj5cclxuICAgICAgICAgICAgPFBsdXNJY29uIGNsYXNzTmFtZT1cImgtNFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj5XYXRjaGxpc3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGluayBncm91cFwiPlxyXG4gICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC00XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPk9yaWdpbmFsczwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rIGdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL21vdmllLWljb24uc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC01XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPk1vdmllczwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rIGdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL3Nlcmllcy1pY29uLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtNVwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj5TZXJpZXM8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshc2Vzc2lvbiA/IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvIHVwcGVyY2FzZSBib3JkZXIgcHgtNCBweS0xLjUgcm91bmRlZCBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgb25DbGljaz17c2lnbklufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvIGgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiSW1hZ2UiLCJIb21lSWNvbiIsIlNlYXJjaEljb24iLCJQbHVzSWNvbiIsIlN0YXJJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJzZXNzaW9uIiwicm91dGVyIiwicHVzaCIsInVzZXIiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=