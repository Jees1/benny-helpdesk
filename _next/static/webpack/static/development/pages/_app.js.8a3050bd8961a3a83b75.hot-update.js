webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/NButton/index.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/NButton/index.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".NButton_button__1z5N0 {\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem 1.2rem;\n  min-height: 42px;\n  min-width: 86px;\n  border-radius: 4px;\n  border: solid 1px;\n  font-size: 16px;\n  margin: 10px;\n  transition: all 120ms;\n}\n.NButton_button__1z5N0:active {\n  background-position: 0 0%;\n}\n.NButton_button__1z5N0.NButton_brand__1IjXJ {\n  background-color: #40c9dd;\n  border-color: #25bacf;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_brand__1IjXJ:active {\n  box-shadow: inset 0 1px 3px #209eb1;\n}\n.NButton_button__1z5N0.NButton_secondary__2VUhR {\n  background-color: #333;\n  border-color: #1f1f1f;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_secondary__2VUhR:active {\n  box-shadow: inset 0 1px 3px #0d0d0d;\n}\n.NButton_button__1z5N0.NButton_destructive__28M85 {\n  background-color: #f04747;\n  border-color: #ed2121;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_destructive__28M85:active {\n  box-shadow: inset 0 1px 3px #d91212;\n}\n.NButton_button__1z5N0.NButton_light__1UVSA {\n  background-color: #ffffff;\n  border-color: #ebebeb;\n  color: #464c4f;\n}\n.NButton_button__1z5N0.NButton_light__1UVSA:active {\n  box-shadow: inset 0 1px 3px #d9d9d9;\n}\n.NButton_button__1z5N0:disabled {\n  background-image: none;\n  background-color: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: rgba(255, 255, 255, 0.34) !important;\n  cursor: not-allowed;\n  box-shadow: none !important;\n}\n@media screen and (max-width: 575px) {\n  .NButton_button__1z5N0.NButton_hideable__5HdQ7 {\n    display: none;\n  }\n}", "",{"version":3,"sources":["F:/Projects/benny-things/helpdesk/components/NButton/index.module.scss"],"names":[],"mappings":"AAUA;EACC,eAAA;EACA,sBAAA;EACA,UAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,qBAAA;AATD;AAWC;EACC,yBAAA;AATF;AAYC;EACC,yBA/BY;EAgCZ,qBAAA;EACA,cA5Bc;AAkBhB;AAYE;EACC,mCAAA;AAVH;AAcC;EACC,sBAxCgB;EAyChB,qBAAA;EACA,cArCkB;AAyBpB;AAcE;EACC,mCAAA;AAZH;AAgBC;EACC,yBAjDkB;EAkDlB,qBAAA;EACA,cA9CoB;AAgCtB;AAgBE;EACC,mCAAA;AAdH;AAkBC;EACC,yBA1DY;EA2DZ,qBAAA;EACA,cAvDc;AAuChB;AAkBE;EACC,mCAAA;AAhBH;AAoBC;EACC,sBAAA;EACA,sDAAA;EACA,kDAAA;EACA,2CAAA;EACA,mBAAA;EACA,2BAAA;AAlBF;AAqBE;EACA;IACC,aAAA;EAnBD;AACF","file":"index.module.scss","sourcesContent":["$color-brand: #40c9dd;\r\n$color-secondary: #333;\r\n$color-destructive: #f04747;\r\n$color-light: #ffffff;\r\n\r\n$text-on-brand: #ffffff;\r\n$text-on-secondary: #ffffff;\r\n$text-on-destructive: #ffffff;\r\n$text-on-light: #464c4f;\r\n\r\n.button {\r\n\tcursor: pointer;\r\n\tbox-sizing: border-box;\r\n\toutline: 0;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0.6rem 1.2rem;\r\n\tmin-height: 42px;\r\n\tmin-width: 86px;\r\n\tborder-radius: 4px;\r\n\tborder: solid 1px;\r\n\tfont-size: 16px;\r\n\tmargin: 10px;\r\n\ttransition: all 120ms;\r\n\r\n\t&:active {\r\n\t\tbackground-position: 0 0%;\r\n\t}\r\n\r\n\t&.brand {\r\n\t\tbackground-color: $color-brand;\r\n\t\tborder-color: darken($color-brand, 8%);\r\n\t\tcolor: $text-on-brand;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-brand, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.secondary {\r\n\t\tbackground-color: $color-secondary;\r\n\t\tborder-color: darken($color-secondary, 8%);\r\n\t\tcolor: $text-on-secondary;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-secondary, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.destructive {\r\n\t\tbackground-color: $color-destructive;\r\n\t\tborder-color: darken($color-destructive, 8%);\r\n\t\tcolor: $text-on-destructive;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-destructive, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.light {\r\n\t\tbackground-color: $color-light;\r\n\t\tborder-color: darken($color-light, 8%);\r\n\t\tcolor: $text-on-light;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-light, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-image: none;\r\n\t\tbackground-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tborder-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tcolor: rgba(255, 255, 255, 0.34) !important;\r\n\t\tcursor: not-allowed;\r\n\t\tbox-shadow: none !important;\r\n\t}\r\n\r\n\t\t@media screen and (max-width: 575px){\r\n\t\t&.hideable {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"button": "NButton_button__1z5N0",
	"brand": "NButton_brand__1IjXJ",
	"secondary": "NButton_secondary__2VUhR",
	"destructive": "NButton_destructive__28M85",
	"light": "NButton_light__1UVSA",
	"hideable": "NButton_hideable__5HdQ7"
};

/***/ })

})
//# sourceMappingURL=_app.js.8a3050bd8961a3a83b75.hot-update.js.map