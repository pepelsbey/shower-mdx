webpackHotUpdate_N_E("pages/index",{

/***/ "./pages lazy recursive":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Presentation; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/shower-mdx/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar style = \"rbbon\"; // const Style = dynamic((props) => import(\"@shower/material/styles/styles.css\"));\n//   style === \"ribbon\"\n//     ? import(\"@shower/ribbon/styles/styles.css\")\n//     : import(\"@shower/material/styles/styles.css\")\n// );\n// console.log(\"🚀 ~ file: index.js ~ line 19 ~  Style\", Style);\n// const getTheme = (layout) =>\n//   dynamic(import(`../node_modules/@shower/${layout}/styles/styles.css`));\n// const Theme = ({ name }) =>\n//   import(`@shower/${name}/styles/styles.css`).catch((err) => {\n//     return () => console.log(\"load fail!!!!\");\n//   });\n\nvar __N_SSG = true;\nfunction Presentation(_ref) {\n  _s();\n\n  var content = _ref.content,\n      _ref$frontMatter$layo = _ref.frontMatter.layout,\n      layout = _ref$frontMatter$layo === void 0 ? \"ribbon\" : _ref$frontMatter$layo,\n      frontMatter = _ref.frontMatter,\n      props = Object(_Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"content\", \"frontMatter\", \"frontMatter\"]);\n\n  // console.log(\"🚀 ~ file: index.js ~ line 36 ~ layout\", layout);\n  Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @shower/ribbon/styles/styles.css */ \"./node_modules/@shower/ribbon/styles/styles.css\", 7)); // import(themePath);\n  // import(\"@shower/ribbon/styles/styles.css\");\n  // : import(\"@shower/material/styles/styles.css\");\n\n  console.log(\"🚀 ~ file: index.js ~ line 15 ~ Presentation ~ props\", props);\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // TODO: temporary hack to force keyboard events work, try to fix better\n    var takeFocus = function takeFocus() {\n      return ref.current.focus();\n    };\n\n    document.getElementById(\"__next\").setAttribute(\"tabindex\", \"-1\");\n    document.getElementById(\"__next\").addEventListener(\"focus\", takeFocus); // TODO: temporary hack - adding class to body in order to get access to color variables, search for better solution\n\n    document.body.className = \"shower\";\n    return function () {\n      document.getElementById(\"__next\").removeEventListener(\"focus\", takeFocus);\n      document.body.className = \"\";\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_6__[\"Head\"], _objectSpread({}, frontMatter), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"shower list\",\n      ref: ref,\n      tabIndex: \"-1\",\n      dangerouslySetInnerHTML: {\n        __html: content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Presentation, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = Presentation;\n\nvar _c;\n\n$RefreshReg$(_c, \"Presentation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzdHlsZSIsIlByZXNlbnRhdGlvbiIsImNvbnRlbnQiLCJmcm9udE1hdHRlciIsImxheW91dCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRha2VGb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImNsYXNzTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLE9BQWQsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT2UsU0FBU0MsWUFBVCxPQUtaO0FBQUE7O0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsbUNBSERDLFdBR0MsQ0FIY0MsTUFHZDtBQUFBLE1BSGNBLE1BR2Qsc0NBSHVCLFFBR3ZCO0FBQUEsTUFGREQsV0FFQyxRQUZEQSxXQUVDO0FBQUEsTUFERUUsS0FDRjs7QUFDRDtBQUNBLHdLQUZDLENBR0Q7QUFFQTtBQUVBOztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzREFBWixFQUFvRUYsS0FBcEU7QUFDQSxNQUFNRyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsYUFBTUgsR0FBRyxDQUFDSSxPQUFKLENBQVlDLEtBQVosRUFBTjtBQUFBLEtBQWxCOztBQUNBQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDLENBQStDLFVBQS9DLEVBQTJELElBQTNEO0FBQ0FGLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0UsZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTRETixTQUE1RCxFQUpjLENBS2Q7O0FBQ0FHLFlBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxTQUFkLEdBQTBCLFFBQTFCO0FBQ0EsV0FBTyxZQUFNO0FBQ1hMLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0ssbUJBQWxDLENBQXNELE9BQXRELEVBQStEVCxTQUEvRDtBQUNBRyxjQUFRLENBQUNJLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixFQUExQjtBQUNELEtBSEQ7QUFJRCxHQVhRLENBQVQ7QUFhQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFELG9CQUFxQmhCLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQ0UsZUFBUyxFQUFDLGFBRFo7QUFFRSxTQUFHLEVBQUVLLEdBRlA7QUFHRSxjQUFRLEVBQUMsSUFIWDtBQUlFLDZCQUF1QixFQUFFO0FBQ3ZCYSxjQUFNLEVBQUVuQjtBQURlO0FBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBY0Q7O0dBNUN1QkQsWTs7S0FBQUEsWSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHJlbmRlclRvU3RyaW5nIGZyb20gXCJuZXh0LW1keC1yZW1vdGUvcmVuZGVyLXRvLXN0cmluZ1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIENvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IHN0eWxlID0gXCJyYmJvblwiO1xuXG4vLyBjb25zdCBTdHlsZSA9IGR5bmFtaWMoKHByb3BzKSA9PiBpbXBvcnQoXCJAc2hvd2VyL21hdGVyaWFsL3N0eWxlcy9zdHlsZXMuY3NzXCIpKTtcbi8vICAgc3R5bGUgPT09IFwicmliYm9uXCJcbi8vICAgICA/IGltcG9ydChcIkBzaG93ZXIvcmliYm9uL3N0eWxlcy9zdHlsZXMuY3NzXCIpXG4vLyAgICAgOiBpbXBvcnQoXCJAc2hvd2VyL21hdGVyaWFsL3N0eWxlcy9zdHlsZXMuY3NzXCIpXG4vLyApO1xuLy8gY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDE5IH4gIFN0eWxlXCIsIFN0eWxlKTtcbi8vIGNvbnN0IGdldFRoZW1lID0gKGxheW91dCkgPT5cbi8vICAgZHluYW1pYyhpbXBvcnQoYC4uL25vZGVfbW9kdWxlcy9Ac2hvd2VyLyR7bGF5b3V0fS9zdHlsZXMvc3R5bGVzLmNzc2ApKTtcblxuLy8gY29uc3QgVGhlbWUgPSAoeyBuYW1lIH0pID0+XG4vLyAgIGltcG9ydChgQHNob3dlci8ke25hbWV9L3N0eWxlcy9zdHlsZXMuY3NzYCkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIHJldHVybiAoKSA9PiBjb25zb2xlLmxvZyhcImxvYWQgZmFpbCEhISFcIik7XG4vLyAgIH0pO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBzZWN0aW9uOiBDb21wb25lbnRzLlNsaWRlLFxuICAuLi5Db21wb25lbnRzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlc2VudGF0aW9uKHtcbiAgY29udGVudCxcbiAgZnJvbnRNYXR0ZXI6IHsgbGF5b3V0ID0gXCJyaWJib25cIiB9LFxuICBmcm9udE1hdHRlcixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgLy8gY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDM2IH4gbGF5b3V0XCIsIGxheW91dCk7XG4gIGltcG9ydChcIkBzaG93ZXIvcmliYm9uL3N0eWxlcy9zdHlsZXMuY3NzXCIpO1xuICAvLyBpbXBvcnQodGhlbWVQYXRoKTtcblxuICAvLyBpbXBvcnQoXCJAc2hvd2VyL3JpYmJvbi9zdHlsZXMvc3R5bGVzLmNzc1wiKTtcblxuICAvLyA6IGltcG9ydChcIkBzaG93ZXIvbWF0ZXJpYWwvc3R5bGVzL3N0eWxlcy5jc3NcIik7XG5cbiAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDE1IH4gUHJlc2VudGF0aW9uIH4gcHJvcHNcIiwgcHJvcHMpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPOiB0ZW1wb3JhcnkgaGFjayB0byBmb3JjZSBrZXlib2FyZCBldmVudHMgd29yaywgdHJ5IHRvIGZpeCBiZXR0ZXJcbiAgICBjb25zdCB0YWtlRm9jdXMgPSAoKSA9PiByZWYuY3VycmVudC5mb2N1cygpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX19uZXh0XCIpLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX25leHRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRha2VGb2N1cyk7XG4gICAgLy8gVE9ETzogdGVtcG9yYXJ5IGhhY2sgLSBhZGRpbmcgY2xhc3MgdG8gYm9keSBpbiBvcmRlciB0byBnZXQgYWNjZXNzIHRvIGNvbG9yIHZhcmlhYmxlcywgc2VhcmNoIGZvciBiZXR0ZXIgc29sdXRpb25cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwic2hvd2VyXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX19uZXh0XCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0YWtlRm9jdXMpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21wb25lbnRzLkhlYWQgey4uLmZyb250TWF0dGVyfSAvPlxuICAgICAgey8qIDxTdHlsZSAvPiAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2hvd2VyIGxpc3RcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBjb250ZW50LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHByKSA9PiB7XG4gIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhgLi9pbmRleC5tZHhgKTtcblxuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuXG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHJlbmRlclRvU3RyaW5nKGNvbnRlbnQsIHtcbiAgICBjb21wb25lbnRzLFxuICAgIG1keE9wdGlvbnM6IHtcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtcbiAgICAgICAgcmVxdWlyZShcInJlbWFyay1tYXJrLXBsdXNcIiksXG4gICAgICAgIFtyZXF1aXJlKFwicmVtYXJrLWF0dHJcIiksIHsgZW5hYmxlQXR4SGVhZGVySW5saW5lOiBmYWxzZSB9XSxcbiAgICAgICAgcmVxdWlyZShcInJlbWFyay1zZWN0aW9uaXplXCIpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNjb3BlOiBkYXRhLFxuICB9KTtcblxuICBjb25zdCBwcmVzZW50YXRpb25IZWFkZXIgPSBgXG4gICAgPGhlYWRlciBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgIDxoMT4ke2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICR7ZGF0YS5zdWJ0aXRsZSAmJiBgPHA+JHtkYXRhLnN1YnRpdGxlfTwvcD5gfVxuICAgIDwvaGVhZGVyPmA7XG5cbiAgY29uc3QgcHJlc2VudGF0aW9uRm9vdGVyID0gYFxuICAgIDxmb290ZXIgY2xhc3M9XCJiYWRnZVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Nob3dlci9zaG93ZXJcIj5Gb3JrIG1lIG9uIEdpdEh1YjwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjwvZGl2PmA7XG5cbiAgY29uc3QgcHJlc0h0bWwgPVxuICAgIHByZXNlbnRhdGlvbkhlYWRlciArIG1keFNvdXJjZS5yZW5kZXJlZE91dHB1dCArIHByZXNlbnRhdGlvbkZvb3RlcjtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb250ZW50OiBwcmVzSHRtbCxcbiAgICAgIGZyb250TWF0dGVyOiBkYXRhLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})