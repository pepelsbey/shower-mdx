webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Presentation; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/shower-mdx/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar themes = {\n  ribbon: __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @shower/ribbon/styles/styles.css */ \"./node_modules/@shower/ribbon/styles/styles.css\", 7)),\n  material: __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! @shower/material/styles/styles.css */ \"./node_modules/@shower/material/styles/styles.css\", 7))\n};\n\nvar loadTheme = function loadTheme(name) {\n  return themes[name];\n}; // const loadTheme = (name) => {\n//   switch (name) {\n//     case \"material\":\n//       import(\"@shower/material/styles/styles.css\");\n//       break;\n//     case \"ribbon\":\n//     default:\n//       import(\"@shower/ribbon/styles/styles.css\");\n//   }\n// };\n\n\nvar __N_SSG = true;\nfunction Presentation(_ref) {\n  _s();\n\n  var content = _ref.content,\n      layout = _ref.frontMatter.layout,\n      frontMatter = _ref.frontMatter,\n      props = Object(_Users_illustrova_Dropbox_PROJECTS_shower_mdx_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"content\", \"frontMatter\", \"frontMatter\"]);\n\n  // loadTheme(layout);\n  console.log(\"🚀 ~ file: index.js ~ line 36 ~ layout\", layout);\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // TODO: temporary hack to force keyboard events work, try to fix better\n    var takeFocus = function takeFocus() {\n      return ref.current.focus();\n    };\n\n    document.getElementById(\"__next\").setAttribute(\"tabindex\", \"-1\");\n    document.getElementById(\"__next\").addEventListener(\"focus\", takeFocus); // TODO: temporary hack - adding class to body in order to get access to color variables, search for better solution\n\n    document.body.className = \"shower\";\n    return function () {\n      document.getElementById(\"__next\").removeEventListener(\"focus\", takeFocus);\n      document.body.className = \"\";\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_6__[\"Head\"], _objectSpread({}, frontMatter), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"shower list\",\n      ref: ref,\n      tabIndex: \"-1\",\n      dangerouslySetInnerHTML: {\n        __html: content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Presentation, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = Presentation;\n\nvar _c;\n\n$RefreshReg$(_c, \"Presentation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJyaWJib24iLCJtYXRlcmlhbCIsImxvYWRUaGVtZSIsIm5hbWUiLCJQcmVzZW50YXRpb24iLCJjb250ZW50IiwibGF5b3V0IiwiZnJvbnRNYXR0ZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YWtlRm9jdXMiLCJjdXJyZW50IiwiZm9jdXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJjbGFzc05hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUsNktBREs7QUFFYkMsVUFBUSxFQUFFO0FBRkcsQ0FBZjs7QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0FBQUEsU0FBVUosTUFBTSxDQUFDSSxJQUFELENBQWhCO0FBQUEsQ0FBbEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRWUsU0FBU0MsWUFBVCxPQUtaO0FBQUE7O0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIY0MsTUFHZCxRQUhEQyxXQUdDLENBSGNELE1BR2Q7QUFBQSxNQUZEQyxXQUVDLFFBRkRBLFdBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNEO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaLEVBQXNESixNQUF0RDtBQUNBLE1BQU1LLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxhQUFNSCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsS0FBWixFQUFOO0FBQUEsS0FBbEI7O0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEMsQ0FBK0MsVUFBL0MsRUFBMkQsSUFBM0Q7QUFDQUYsWUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDRSxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEROLFNBQTVELEVBSmMsQ0FLZDs7QUFDQUcsWUFBUSxDQUFDSSxJQUFULENBQWNDLFNBQWQsR0FBMEIsUUFBMUI7QUFDQSxXQUFPLFlBQU07QUFDWEwsY0FBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDSyxtQkFBbEMsQ0FBc0QsT0FBdEQsRUFBK0RULFNBQS9EO0FBQ0FHLGNBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0QsS0FIRDtBQUlELEdBWFEsQ0FBVDtBQWFBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQsb0JBQXFCZixXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUNFLGVBQVMsRUFBQyxhQURaO0FBRUUsU0FBRyxFQUFFSSxHQUZQO0FBR0UsY0FBUSxFQUFDLElBSFg7QUFJRSw2QkFBdUIsRUFBRTtBQUN2QmEsY0FBTSxFQUFFbkI7QUFEZTtBQUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQWFEOztHQXJDdUJELFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCByZW5kZXJUb1N0cmluZyBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3JlbmRlci10by1zdHJpbmdcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBDb21wb25lbnRzIGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIHNlY3Rpb246IENvbXBvbmVudHMuU2xpZGUsXG4gIC4uLkNvbXBvbmVudHMsXG59O1xuXG5jb25zdCB0aGVtZXMgPSB7XG4gIHJpYmJvbjogaW1wb3J0KFwiQHNob3dlci9yaWJib24vc3R5bGVzL3N0eWxlcy5jc3NcIiksXG4gIG1hdGVyaWFsOiBpbXBvcnQoXCJAc2hvd2VyL21hdGVyaWFsL3N0eWxlcy9zdHlsZXMuY3NzXCIpLFxufTtcbmNvbnN0IGxvYWRUaGVtZSA9IChuYW1lKSA9PiB0aGVtZXNbbmFtZV07XG5cbi8vIGNvbnN0IGxvYWRUaGVtZSA9IChuYW1lKSA9PiB7XG4vLyAgIHN3aXRjaCAobmFtZSkge1xuLy8gICAgIGNhc2UgXCJtYXRlcmlhbFwiOlxuLy8gICAgICAgaW1wb3J0KFwiQHNob3dlci9tYXRlcmlhbC9zdHlsZXMvc3R5bGVzLmNzc1wiKTtcbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgXCJyaWJib25cIjpcbi8vICAgICBkZWZhdWx0OlxuLy8gICAgICAgaW1wb3J0KFwiQHNob3dlci9yaWJib24vc3R5bGVzL3N0eWxlcy5jc3NcIik7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXNlbnRhdGlvbih7XG4gIGNvbnRlbnQsXG4gIGZyb250TWF0dGVyOiB7IGxheW91dCB9LFxuICBmcm9udE1hdHRlcixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgLy8gbG9hZFRoZW1lKGxheW91dCk7XG5cbiAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDM2IH4gbGF5b3V0XCIsIGxheW91dCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRPRE86IHRlbXBvcmFyeSBoYWNrIHRvIGZvcmNlIGtleWJvYXJkIGV2ZW50cyB3b3JrLCB0cnkgdG8gZml4IGJldHRlclxuICAgIGNvbnN0IHRha2VGb2N1cyA9ICgpID0+IHJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX25leHRcIikuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fbmV4dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGFrZUZvY3VzKTtcbiAgICAvLyBUT0RPOiB0ZW1wb3JhcnkgaGFjayAtIGFkZGluZyBjbGFzcyB0byBib2R5IGluIG9yZGVyIHRvIGdldCBhY2Nlc3MgdG8gY29sb3IgdmFyaWFibGVzLCBzZWFyY2ggZm9yIGJldHRlciBzb2x1dGlvblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gXCJzaG93ZXJcIjtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX25leHRcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRha2VGb2N1cyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbXBvbmVudHMuSGVhZCB7Li4uZnJvbnRNYXR0ZXJ9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNob3dlciBsaXN0XCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogY29udGVudCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChwcikgPT4ge1xuICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoYC4vaW5kZXgubWR4YCk7XG5cbiAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKTtcblxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCByZW5kZXJUb1N0cmluZyhjb250ZW50LCB7XG4gICAgY29tcG9uZW50cyxcbiAgICBtZHhPcHRpb25zOiB7XG4gICAgICByZW1hcmtQbHVnaW5zOiBbXG4gICAgICAgIHJlcXVpcmUoXCJyZW1hcmstbWFyay1wbHVzXCIpLFxuICAgICAgICBbcmVxdWlyZShcInJlbWFyay1hdHRyXCIpLCB7IGVuYWJsZUF0eEhlYWRlcklubGluZTogZmFsc2UgfV0sXG4gICAgICAgIHJlcXVpcmUoXCJyZW1hcmstc2VjdGlvbml6ZVwiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzY29wZTogZGF0YSxcbiAgfSk7XG5cbiAgY29uc3QgcHJlc2VudGF0aW9uSGVhZGVyID0gYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICA8aDE+JHtkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAke2RhdGEuc3VidGl0bGUgJiYgYDxwPiR7ZGF0YS5zdWJ0aXRsZX08L3A+YH1cbiAgICA8L2hlYWRlcj5gO1xuXG4gIGNvbnN0IHByZXNlbnRhdGlvbkZvb3RlciA9IGBcbiAgICA8Zm9vdGVyIGNsYXNzPVwiYmFkZ2VcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaG93ZXIvc2hvd2VyXCI+Rm9yayBtZSBvbiBHaXRIdWI8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj48L2Rpdj5gO1xuXG4gIGNvbnN0IHByZXNIdG1sID1cbiAgICBwcmVzZW50YXRpb25IZWFkZXIgKyBtZHhTb3VyY2UucmVuZGVyZWRPdXRwdXQgKyBwcmVzZW50YXRpb25Gb290ZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udGVudDogcHJlc0h0bWwsXG4gICAgICBmcm9udE1hdHRlcjogZGF0YSxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})