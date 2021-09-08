"use strict";
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./pages/movie/[id].js":
/*!*****************************!*\
  !*** ./pages/movie/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var C_Users_Dogukan_Desktop_disneyproject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Hero */ "./components/Hero.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-player/lazy */ "./node_modules/react-player/lazy/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Dogukan\\Desktop\\disneyproject\\pages\\movie\\[id].js",
    _s = $RefreshSig$();












function Movie(_ref) {
  _s();

  var _result$videos, _result$videos$result;

  var result = _ref.result;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(),
      _useSession2 = (0,C_Users_Dogukan_Desktop_disneyproject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),
      session = _useSession2[0];

  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showPlayer = _useState[0],
      setShowPlayer = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (!session) {
      router.push("/");
    }
  }, []);
  var index = result.videos.results.findIndex(function (element) {
    return element.type === "Trailer";
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), !session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
      className: "relative z-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "relative min-h-[calc(100vh-72px)]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path),
          layout: "fill",
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          className: "text-3xl sm:text-4xl md:text-5xl font-bold",
          children: result.title || result.original_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "flex items-center space-x-3 md:space-x-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            className: "text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/image/play-icon-black.svg",
              alt: "",
              className: "h-6 md:h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "uppercase font-medium tracking-wide",
              children: "Play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            className: "text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]",
            onClick: function onClick() {
              return setShowPlayer(true);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/images/play-icon-white.svg",
              alt: "",
              className: "h-6 md:h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "uppercase font-medium tracking-wide",
              children: "Trailer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PlusIcon, {
              className: "h-6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/images/group-icon.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          className: "text-xs md:text-sm",
          children: [result.release_date || result.first_air_date, " \u2022", " ", Math.floor(result.runtime / 60), "h ", result.runtime % 60, "m \u2022", " ", result.genres.map(function (genre) {
            return genre.name + " ";
          }), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h4", {
          className: "text-sm md:text-lg max-w-4xl",
          children: result.overview
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), showPlayer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "absolute inset-0 bg-black opacity-50 h-full w-full z-50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ".concat(showPlayer ? "opacity-100 z-50" : "opacity-0"),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "flex items-center justify-between bg-black text-[#f9f9f9] p-3.5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: "font-semibold",
            children: "Play Trailer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]",
            onClick: function onClick() {
              return setShowPlayer(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.XIcon, {
              className: "h-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "relative pt-[56.25%]",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_player_lazy__WEBPACK_IMPORTED_MODULE_9__.default, {
            url: "https://www.youtube.com/watch?v=".concat((_result$videos = result.videos) === null || _result$videos === void 0 ? void 0 : (_result$videos$result = _result$videos.results[index]) === null || _result$videos$result === void 0 ? void 0 : _result$videos$result.key),
            width: "100%",
            height: "100%",
            style: {
              position: "absolute",
              top: "0",
              left: "0"
            },
            controls: true,
            playing: showPlayer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Movie, "x0tVG2IlLnJFzMjvX62NzlPflIM=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Movie;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c;

$RefreshReg$(_c, "Movie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWUvW2lkXS5kMTVmZTkxMWRkNjEwZTA3NjIwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTVyxLQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUN6QixvQkFBa0JaLDREQUFVLEVBQTVCO0FBQUE7QUFBQSxNQUFPYSxPQUFQOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxzQ0FBakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdaLHNEQUFTLEVBQXhCOztBQUNBLGtCQUFvQ0UsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1csVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDUyxPQUFMLEVBQWM7QUFDWkUsTUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1DLEtBQUssR0FBR1AsTUFBTSxDQUFDUSxNQUFQLENBQWNDLE9BQWQsQ0FBc0JDLFNBQXRCLENBQ1osVUFBQ0MsT0FBRDtBQUFBLFdBQWFBLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQixTQUE5QjtBQUFBLEdBRFksQ0FBZDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDRSwrREFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFaLE1BQU0sQ0FBQ2EsS0FBUCxJQUFnQmIsTUFBTSxDQUFDYztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtB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QUE7QUFBQTtBQUFBLGNBL0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0dEOztHQXRIUUw7VUFDV1gsMERBRUhHOzs7S0FIUlE7O0FBd0hULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlcm9cIjtcclxuaW1wb3J0IHsgUGx1c0ljb24sIFhJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXIvbGF6eVwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWUoeyByZXN1bHQgfSkge1xyXG4gIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Nob3dQbGF5ZXIsIHNldFNob3dQbGF5ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gcmVzdWx0LnZpZGVvcy5yZXN1bHRzLmZpbmRJbmRleChcclxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IFwiVHJhaWxlclwiXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7IXNlc3Npb24gPyAoXHJcbiAgICAgICAgPEhlcm8gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLVtjYWxjKDEwMHZoLTcycHgpXVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxyXG4gICAgICAgICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQucG9zdGVyX3BhdGh9YFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0yOCBtZDppbnNldC15LWF1dG8gbWQ6Ym90dG9tLTEwIGluc2V0LXgtNCBtZDppbnNldC14LTEyIHNwYWNlLXktNiB6LTUwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICB7cmVzdWx0LnRpdGxlIHx8IHJlc3VsdC5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBtZDpzcGFjZS14LTVcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1iYXNlIGJnLVsjZjlmOWY5XSB0ZXh0LWJsYWNrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIuNSBweC02IHJvdW5kZWQgaG92ZXI6YmctWyNjNmM2YzZdXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9wbGF5LWljb24tYmxhY2suc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IG1kOmgtOFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtYmFzZSBiZy1ibGFjay8zMCB0ZXh0LVsjZjlmOWY5XSBib3JkZXIgYm9yZGVyLVsjZjlmOWY5XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yLjUgcHgtNiByb3VuZGVkIGhvdmVyOmJnLVsjYzZjNmM2XVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGxheWVyKHRydWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wbGF5LWljb24td2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IG1kOmgtOFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgVHJhaWxlclxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0xMSBoLTExIGN1cnNvci1wb2ludGVyIGJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0ljb24gY2xhc3NOYW1lPVwiaC02XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTEgaC0xMSBjdXJzb3ItcG9pbnRlciBiZy1ibGFjay82MFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dyb3VwLWljb24uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICB7cmVzdWx0LnJlbGVhc2VfZGF0ZSB8fCByZXN1bHQuZmlyc3RfYWlyX2RhdGV9IOKAontcIiBcIn1cclxuICAgICAgICAgICAgICB7TWF0aC5mbG9vcihyZXN1bHQucnVudGltZSAvIDYwKX1oIHtyZXN1bHQucnVudGltZSAlIDYwfW0g4oCie1wiIFwifVxyXG4gICAgICAgICAgICAgIHtyZXN1bHQuZ2VucmVzLm1hcCgoZ2VucmUpID0+IGdlbnJlLm5hbWUgKyBcIiBcIil9e1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtbGcgbWF4LXctNHhsXCI+e3Jlc3VsdC5vdmVydmlld308L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEJnIE92ZXJsYXkgKi99XHJcbiAgICAgICAgICB7c2hvd1BsYXllciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjayBvcGFjaXR5LTUwIGgtZnVsbCB3LWZ1bGwgei01MFwiPjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0zIGluc2V0LXgtWzclXSBtZDppbnNldC14LVsxMyVdIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMCAke1xyXG4gICAgICAgICAgICAgIHNob3dQbGF5ZXIgPyBcIm9wYWNpdHktMTAwIHotNTBcIiA6IFwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWJsYWNrIHRleHQtWyNmOWY5ZjldIHAtMy41XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlBsYXkgVHJhaWxlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB3LTggaC04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTc1IGhvdmVyOmJnLVsjMEYwRjBGXVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGxheWVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8WEljb24gY2xhc3NOYW1lPVwiaC01XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHQtWzU2LjI1JV1cIj5cclxuICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHtyZXN1bHQudmlkZW9zPy5yZXN1bHRzW2luZGV4XT8ua2V5fWB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiMFwiLCBsZWZ0OiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBwbGF5aW5nPXtzaG93UGxheWVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVMmYXBwZW5kX3RvX3Jlc3BvbnNlPXZpZGVvc2BcclxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2Vzc2lvbixcclxuICAgICAgcmVzdWx0OiByZXF1ZXN0LFxyXG4gICAgfSxcclxuICB9O1xyXG59Il0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJIZWFkIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkhlcm8iLCJQbHVzSWNvbiIsIlhJY29uIiwiUmVhY3RQbGF5ZXIiLCJNb3ZpZSIsInJlc3VsdCIsInNlc3Npb24iLCJCQVNFX1VSTCIsInJvdXRlciIsInNob3dQbGF5ZXIiLCJzZXRTaG93UGxheWVyIiwicHVzaCIsImluZGV4IiwidmlkZW9zIiwicmVzdWx0cyIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJ0eXBlIiwidGl0bGUiLCJvcmlnaW5hbF9uYW1lIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwicmVsZWFzZV9kYXRlIiwiZmlyc3RfYWlyX2RhdGUiLCJNYXRoIiwiZmxvb3IiLCJydW50aW1lIiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJuYW1lIiwib3ZlcnZpZXciLCJrZXkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9