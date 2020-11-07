webpackHotUpdate_N_E("pages/docs/tags/tags_info",{

/***/ "./pages/docs/tags/tags_info.md":
/*!**************************************!*\
  !*** ./pages/docs/tags/tags_info.md ***!
  \**************************************/
/*! exports provided: info, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\pages\\docs\\tags\\tags_info.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var info = {
  name: "What are Benny's tags?",
  description: "Information regarding Benny's tags."
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 14
      }
    }));
  };
};

var PageToolBar = makeShortcode("PageToolBar");
_c = PageToolBar;
var DiscordMessages = makeShortcode("DiscordMessages");
_c2 = DiscordMessages;
var DiscordMessage = makeShortcode("DiscordMessage");
_c3 = DiscordMessage;
var Alert = makeShortcode("Alert");
_c4 = Alert;
var layoutProps = {
  info: info
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(PageToolBar, {
    title: "Benny's tags",
    mdxType: "PageToolBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Benny's tags are designed to help your server with pre-typed messages. You can use Benny's tags to quickly share information, without using the time to type it again.\nHere's an example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessages, {
    mdxType: "DiscordMessages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessage, {
    author: "Discord User",
    bot: false,
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
    key: 1,
    mdxType: "DiscordMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Benny Tag ExampleTag"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessage, {
    author: "Benny",
    bot: true,
    avatar: "https://bennybot.dev/icon.png",
    mdxType: "DiscordMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "This is an example tag")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "features"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), "Features"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "Benny's tags module offers amazing features to help you even more. You can customize these options in your server's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://bennybot.dev/dashboard"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 128
    }
  }), "dashboard"), ". You can view articles of these features ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://help.bennybot.dev/docs/tags"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 73
    }
  }), "here.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "permissions"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), "Permissions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "For the Tags module to function correctly, it requires a list of permissions."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Alert, {
    style: "info",
    mdxType: "Alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "Configuration: Server Settings > Roles > Benny"), "Benny requires these permissions:", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "View Message History"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "View Messages"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Send Messages"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Embed Links")));
}
_c5 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "PageToolBar");
$RefreshReg$(_c2, "DiscordMessages");
$RefreshReg$(_c3, "DiscordMessage");
$RefreshReg$(_c4, "Alert");
$RefreshReg$(_c5, "MDXContent");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy90YWdzL3RhZ3NfaW5mby5tZCJdLCJuYW1lcyI6WyJpbmZvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVNob3J0Y29kZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiUGFnZVRvb2xCYXIiLCJEaXNjb3JkTWVzc2FnZXMiLCJEaXNjb3JkTWVzc2FnZSIsIkFsZXJ0IiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVPLElBQU1BLElBQUksR0FBRztBQUNsQkMsTUFBSSxFQUFFLHdCQURZO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFiOztBQUlQLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUYsSUFBSTtBQUFBLFNBQUksU0FBU0csbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQzVEQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlTixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFdBQU8sd0pBQVNJLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FIcUI7QUFBQSxDQUExQjs7QUFJQSxJQUFNRyxXQUFXLEdBQUdMLGFBQWEsQ0FBQyxhQUFELENBQWpDO0tBQU1LLFc7QUFDTixJQUFNQyxlQUFlLEdBQUdOLGFBQWEsQ0FBQyxpQkFBRCxDQUFyQztNQUFNTSxlO0FBQ04sSUFBTUMsY0FBYyxHQUFHUCxhQUFhLENBQUMsZ0JBQUQsQ0FBcEM7TUFBTU8sYztBQUNOLElBQU1DLEtBQUssR0FBR1IsYUFBYSxDQUFDLE9BQUQsQ0FBM0I7TUFBTVEsSztBQUNOLElBQU1DLFdBQVcsR0FBRztBQUNsQlosTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1hLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVWLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTyxXQUFmLEVBQWdDUCxLQUFoQztBQUF1QyxjQUFVLEVBQUVVLFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUwsMERBQUMsV0FBRDtBQUFhLFNBQUssRUFBQyxjQUFuQjtBQUFrQyxXQUFPLEVBQUMsYUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBR0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFISyxFQUtMLDBEQUFDLGVBQUQ7QUFBaUIsV0FBTyxFQUFDLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsY0FBRDtBQUFnQixVQUFNLEVBQUMsY0FBdkI7QUFBc0MsT0FBRyxFQUFFLEtBQTNDO0FBQWtELFVBQU0sRUFBQyxnREFBekQ7QUFBMEcsT0FBRyxFQUFFLENBQS9HO0FBQWtILFdBQU8sRUFBQyxnQkFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUlFLDBEQUFDLGNBQUQ7QUFBZ0IsVUFBTSxFQUFDLE9BQXZCO0FBQStCLE9BQUcsRUFBRSxJQUFwQztBQUEwQyxVQUFNLEVBQUMsK0JBQWpEO0FBQWlGLFdBQU8sRUFBQyxnQkFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRixDQUxLLEVBYUwsbUpBQVE7QUFDTixVQUFNO0FBREEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJLLEVBZ0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkhBQTJIO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDN0ksWUFBUTtBQURxSSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEzSCxnREFFb0U7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUN0RixZQUFRO0FBRDhFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGcEUsQ0FoQkssRUFxQkwsbUpBQVE7QUFDTixVQUFNO0FBREEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSyxFQXdCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQXhCSyxFQXlCTCwwREFBQyxLQUFEO0FBQU8sU0FBSyxFQUFDLE1BQWI7QUFBb0IsV0FBTyxFQUFDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBekJLLHVDQTJCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUU7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUU7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLENBM0JLLENBQVA7QUFrQ0Q7TUF0Q3VCRCxVO0FBd0N4QjtBQUNBQSxVQUFVLENBQUNFLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy90YWdzL3RhZ3NfaW5mby4zMTJhOGQyMGI3NTA0OGE1YTljNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IHtcbiAgbmFtZTogXCJXaGF0IGFyZSBCZW5ueSdzIHRhZ3M/XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkluZm9ybWF0aW9uIHJlZ2FyZGluZyBCZW5ueSdzIHRhZ3MuXCJcbn07XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFBhZ2VUb29sQmFyID0gbWFrZVNob3J0Y29kZShcIlBhZ2VUb29sQmFyXCIpO1xuY29uc3QgRGlzY29yZE1lc3NhZ2VzID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlc1wiKTtcbmNvbnN0IERpc2NvcmRNZXNzYWdlID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlXCIpO1xuY29uc3QgQWxlcnQgPSBtYWtlU2hvcnRjb2RlKFwiQWxlcnRcIik7XG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgaW5mb1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxQYWdlVG9vbEJhciB0aXRsZT1cIkJlbm55J3MgdGFnc1wiIG1keFR5cGU9XCJQYWdlVG9vbEJhclwiIC8+XG4gICAgPHA+e2BCZW5ueSdzIHRhZ3MgYXJlIGRlc2lnbmVkIHRvIGhlbHAgeW91ciBzZXJ2ZXIgd2l0aCBwcmUtdHlwZWQgbWVzc2FnZXMuIFlvdSBjYW4gdXNlIEJlbm55J3MgdGFncyB0byBxdWlja2x5IHNoYXJlIGluZm9ybWF0aW9uLCB3aXRob3V0IHVzaW5nIHRoZSB0aW1lIHRvIHR5cGUgaXQgYWdhaW4uXG5IZXJlJ3MgYW4gZXhhbXBsZTpgfTwvcD5cbiAgICA8RGlzY29yZE1lc3NhZ2VzIG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZXNcIj5cbiAgICAgIDxEaXNjb3JkTWVzc2FnZSBhdXRob3I9XCJEaXNjb3JkIFVzZXJcIiBib3Q9e2ZhbHNlfSBhdmF0YXI9XCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nXCIga2V5PXsxfSBtZHhUeXBlPVwiRGlzY29yZE1lc3NhZ2VcIj5cbkJlbm55IFRhZyBFeGFtcGxlVGFnXG4gICAgICA8L0Rpc2NvcmRNZXNzYWdlPlxuICAgICAgPERpc2NvcmRNZXNzYWdlIGF1dGhvcj1cIkJlbm55XCIgYm90PXt0cnVlfSBhdmF0YXI9XCJodHRwczovL2Jlbm55Ym90LmRldi9pY29uLnBuZ1wiIG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZVwiPlxuVGhpcyBpcyBhbiBleGFtcGxlIHRhZ1xuICAgICAgPC9EaXNjb3JkTWVzc2FnZT5cbiAgICA8L0Rpc2NvcmRNZXNzYWdlcz5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJmZWF0dXJlc1wiXG4gICAgfX0+e2BGZWF0dXJlc2B9PC9oMT5cbiAgICA8cD57YEJlbm55J3MgdGFncyBtb2R1bGUgb2ZmZXJzIGFtYXppbmcgZmVhdHVyZXMgdG8gaGVscCB5b3UgZXZlbiBtb3JlLiBZb3UgY2FuIGN1c3RvbWl6ZSB0aGVzZSBvcHRpb25zIGluIHlvdXIgc2VydmVyJ3MgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYmVubnlib3QuZGV2L2Rhc2hib2FyZFwiXG4gICAgICB9fT57YGRhc2hib2FyZGB9PC9hPntgLiBZb3UgY2FuIHZpZXcgYXJ0aWNsZXMgb2YgdGhlc2UgZmVhdHVyZXMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaGVscC5iZW5ueWJvdC5kZXYvZG9jcy90YWdzXCJcbiAgICAgIH19PntgaGVyZS5gfTwvYT48L3A+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwicGVybWlzc2lvbnNcIlxuICAgIH19PntgUGVybWlzc2lvbnNgfTwvaDE+XG4gICAgPHA+e2BGb3IgdGhlIFRhZ3MgbW9kdWxlIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgcmVxdWlyZXMgYSBsaXN0IG9mIHBlcm1pc3Npb25zLmB9PC9wPlxuICAgIDxBbGVydCBzdHlsZT1cImluZm9cIiBtZHhUeXBlPVwiQWxlcnRcIj5Db25maWd1cmF0aW9uOiBTZXJ2ZXIgU2V0dGluZ3MgPiBSb2xlcyA+IEJlbm55PC9BbGVydD5cbkJlbm55IHJlcXVpcmVzIHRoZXNlIHBlcm1pc3Npb25zOlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFZpZXcgTWVzc2FnZSBIaXN0b3J5YH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVmlldyBNZXNzYWdlc2B9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlbmQgTWVzc2FnZXNgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BFbWJlZCBMaW5rc2B9PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==