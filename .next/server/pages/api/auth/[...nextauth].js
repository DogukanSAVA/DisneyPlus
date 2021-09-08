"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyBvOs9qlCAp2DD_hgNgI5CiMhcWnv3207Q",
  authDomain: "disneyprojectt.firebaseapp.com",
  projectId: "disneyprojectt",
  storageBucket: "disneyprojectt.appspot.com",
  messagingSenderId: "1029678655704",
  appId: "1:1029678655704:web:73956574332e73a32e4fad"
};
const app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
const db = app.firestore();


/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/firebase-adapter */ "@next-auth/firebase-adapter");
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firebase */ "./firebase.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  }) // ...add more providers here
  ],
  adapter: (0,_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__.FirebaseAdapter)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db)
}));

/***/ }),

/***/ "@next-auth/firebase-adapter":
/*!**********************************************!*\
  !*** external "@next-auth/firebase-adapter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/firebase-adapter");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxjQUFjLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLHlDQURLO0FBRWJDLEVBQUFBLFVBQVUsRUFBRSxnQ0FGQztBQUdiQyxFQUFBQSxTQUFTLEVBQUUsZ0JBSEU7QUFJYkMsRUFBQUEsYUFBYSxFQUFFLDRCQUpGO0FBS2JDLEVBQUFBLGlCQUFpQixFQUFFLGVBTE47QUFNYkMsRUFBQUEsS0FBSyxFQUFFO0FBTk0sQ0FBdkI7QUFTQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQ1IsNkRBQUQsR0FDVkEsNkRBQUEsQ0FBdUJDLGNBQXZCLENBRFUsR0FFVkQsbURBQUEsRUFGRjtBQUlBLE1BQU1ZLEVBQUUsR0FBR0osR0FBRyxDQUFDSyxTQUFKLEVBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLGlFQUFlQyxnREFBUSxDQUFDO0FBQ3RCO0FBQ0FHLEVBQUFBLFNBQVMsRUFBRSxDQUNURixpRUFBQSxDQUFpQjtBQUNmSSxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURQO0FBRWZDLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlgsR0FBakIsQ0FEUyxDQUtUO0FBTFMsR0FGVztBQVV0QkMsRUFBQUEsT0FBTyxFQUFFVCw0RUFBZSxDQUFDSix5Q0FBRDtBQVZGLENBQUQsQ0FBdkI7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5leHQtYXV0aC9maXJlYmFzZS1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgICBhcGlLZXk6IFwiQUl6YVN5QnZPczlxbENBcDJERF9oZ05nSTVDaU1oY1dudjMyMDdRXCIsXHJcbiAgICAgICAgICBhdXRoRG9tYWluOiBcImRpc25leXByb2plY3R0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgcHJvamVjdElkOiBcImRpc25leXByb2plY3R0XCIsXHJcbiAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcImRpc25leXByb2plY3R0LmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDI5Njc4NjU1NzA0XCIsXHJcbiAgICAgICAgICBhcHBJZDogXCIxOjEwMjk2Nzg2NTU3MDQ6d2ViOjczOTU2NTc0MzMyZTczYTMyZTRmYWRcIlxyXG4gICAgICAgIH07XHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggXHJcbj8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgXHJcbjogZmlyZWJhc2UuYXBwKCk7IFxyXG5cclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgeyBkYiB9OyIsImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiO1xyXG5pbXBvcnQge2RifSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2VcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gIF0sXHJcblxyXG4gIGFkYXB0ZXI6IEZpcmViYXNlQWRhcHRlcihkYiksXHJcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJOZXh0QXV0aCIsIlByb3ZpZGVycyIsIkZpcmViYXNlQWRhcHRlciIsInByb3ZpZGVycyIsIkdvb2dsZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==