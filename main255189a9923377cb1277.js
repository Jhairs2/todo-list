/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #d4d4d8;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.page-container {\\r\\n    display: grid;\\r\\n    grid-template-rows: 4.5rem auto;\\r\\n    grid-template-columns: 18.5rem auto;\\r\\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    grid-area: 1 / 1 / 2 / -1;\\r\\n    background-color: #71717a;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    font-size: 2rem;\\r\\n    padding: 0em 1em 0em 0.5em;\\r\\n\\r\\n}\\r\\n\\r\\n.header-menu-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 1.5em;\\r\\n}\\r\\n\\r\\n#header-menu {\\r\\n    height: 3.5rem;\\r\\n    cursor: pointer;\\r\\n    transition: all 0.2s ease-in-out;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n.header-info {\\r\\n    display: flex;\\r\\n    gap: 2em;\\r\\n}\\r\\n\\r\\n.add-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 0.25em;\\r\\n}\\r\\n\\r\\n#add-todo {\\r\\n    transition: all 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n#add-todo:hover {\\r\\n    filter: invert(95%) sepia(8%) saturate(48%) hue-rotate(201deg) brightness(97%) contrast(92%);;\\r\\n    cursor: pointer;\\r\\n    height: 2.2rem;\\r\\n}\\r\\n\\r\\n.side-bar {\\r\\n    background-color: #a1a1aa;\\r\\n    grid-column: 1 / 2;\\r\\n    grid-row: 2 / -1;\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n#header-menu:hover {\\r\\n\\r\\n    filter: invert(95%) sepia(8%) saturate(48%) hue-rotate(201deg) brightness(97%) contrast(92%);\\r\\n}\\r\\n\\r\\n.selected-menu {\\r\\n    filter: invert(95%) sepia(8%) saturate(48%) hue-rotate(201deg) brightness(97%) contrast(92%);\\r\\n}\\r\\n#menu {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1.5em;\\r\\n    list-style: none;\\r\\n    padding-top: 2em;\\r\\n}\\r\\n\\r\\n#menu li {\\r\\n    font-size: 1.75rem;\\r\\n    padding-left: 1em;\\r\\n\\r\\n}\\r\\n\\r\\n#menu li:hover {\\r\\n    transition: all 0.3s ease-in-out;\\r\\n    background-color: rgba(93, 92, 92, 0.8);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.selected-tab {\\r\\n    background-color: rgba(93, 92, 92, 0.8);\\r\\n}\\r\\n.content {\\r\\n    grid-area: 2 / 2 / -1 / -1;\\r\\n    display: grid;\\r\\n    grid-auto-rows: 65px;\\r\\n    gap: 1em;\\r\\n    overflow-y: scroll;\\r\\n    padding: 3em;\\r\\n}\\r\\n\\r\\n.big {\\r\\n    grid-area: 2 / 1 / -1 / -1;\\r\\n    display: grid;\\r\\n    grid-auto-rows: 65px;\\r\\n    gap: 1em;\\r\\n    overflow-y: scroll;\\r\\n    padding: 3em;\\r\\n    \\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n    border: 2px solid black;\\r\\n    border-radius: 25px;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    background-color: #f1f5f9;\\r\\n}\\r\\n\\r\\n.todo-container:hover {\\r\\n    cursor: pointer;\\r\\n    transition: all 0.2s ease-in-out;\\r\\n    transform: scale(1.05);\\r\\n}\\r\\n\\r\\nimg {\\r\\n    height: 2rem;\\r\\n}\\r\\n\\r\\n.sign-in {\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    width: 100px;\\r\\n    transition: all 0.2s ease-in-out;\\r\\n    font-weight: bold;\\r\\n    background-color: #d4d4d8;\\r\\n\\r\\n}\\r\\n\\r\\n.sign-in:hover {\\r\\n   background-color: rgba(93, 92, 92, 0.8);\\r\\n   cursor: pointer;\\r\\n   transform: scale(1.1);\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n#trash {\\r\\n    transition: all 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n#trash:hover {\\r\\n    cursor: pointer;\\r\\n    height: 2.3rem;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n    padding: 2em;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    border-radius: 10px;\\r\\n    width: 50rem;\\r\\n    height: 35rem;\\r\\n}\\r\\n\\r\\n.modal::backdrop {\\r\\n    background: rgba(0, 0, 0, 0.7);\\r\\n}\\r\\n\\r\\n#input-title {\\r\\n    width: 30rem;\\r\\n    height: 2rem;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.title-date-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 1em;\\r\\n}\\r\\n\\r\\n.description-container {\\r\\n    display: flex;\\r\\n    gap: 0.5em;\\r\\n    \\r\\n}\\r\\n\\r\\n#input-description {\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.user-info {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: left;\\r\\n    gap: 2em;\\r\\n}\\r\\n\\r\\n#form-title {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#close-modal { \\r\\n    position: absolute;\\r\\n    top: 1%;\\r\\n    right: 1%;\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    height: 25px;\\r\\n    width: 25px;\\r\\n    font-weight: bold;\\r\\n    background-color: #fecaca;\\r\\n}\\r\\n\\r\\n#close-modal:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, .60);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dropMenu.js":
/*!*************************!*\
  !*** ./src/dropMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dropmenu = () => {\r\n    const menu = document.querySelector('.side-bar');\r\n    const img = document.querySelector('#header-menu');\r\n    const content = document.querySelector('.content');\r\n\r\n    img.addEventListener('click', () => {\r\n        if (menu.style.visibility === \"hidden\") {\r\n            menu.style.visibility = \"visible\";\r\n            img.classList.add('selected-menu');\r\n            content.classList.remove(\"big\");\r\n        } else {\r\n            menu.style.visibility = \"hidden\";\r\n            img.classList.remove('selected-menu');\r\n            content.classList.add('big');\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropmenu);\n\n//# sourceURL=webpack://todo-list/./src/dropMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _saveTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveTabs */ \"./src/saveTabs.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _todoTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoTab */ \"./src/todoTab.js\");\n/* harmony import */ var _dropMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropMenu */ \"./src/dropMenu.js\");\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/menu.svg */ \"./src/assets/menu.svg\");\n/* harmony import */ var _userInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInput */ \"./src/userInput.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuImg = document.getElementById('header-menu');\r\nmenuImg.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n(0,_userInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().openAndCloseModal();\r\n(0,_userInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().submitFormData();\r\n(0,_dropMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\nconst content = document.querySelector('.content');\r\nconst div = (0,_todoTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('dsfafa','fafa','faf').createContent();\r\nconst div2 = (0,_todoTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().createContent();\r\nconst tabs = document.querySelectorAll('li');\r\nlet save = (0,_saveTabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nsave.saveTab(div);\r\nsave.saveTab(div2)\r\n\r\ncontent.append(div,div2);\r\nsave.addIndex();\r\nconsole.log(save.getTabs());\r\n\r\nconst example = document.querySelectorAll('[data-id]');\r\n\r\n\r\ntabs.forEach(tab => {\r\n    tab.addEventListener(\"click\", (e) => {\r\n       switch(e.target.id) {\r\n\r\n        case 'Home':\r\n            removeSelected();\r\n            tab.classList.add('selected-tab');\r\n            removeAll();\r\n            getPageTabs(save.getTabs())\r\n            break;\r\n\r\n       \r\n       \r\n        case 'Today':\r\n            removeSelected();\r\n            tab.classList.add('selected-tab');\r\n            removeAll();\r\n            break;\r\n\r\n\r\n        case 'Week':\r\n            removeSelected();\r\n            tab.classList.add('selected-tab');\r\n            removeAll();\r\n            break;\r\n        }\r\n\r\n        \r\n    })\r\n})\r\n\r\nfunction removeAll() {\r\n    content.innerHTML = \"\";\r\n}\r\n\r\nfunction getPageTabs(tabs) {\r\n\r\n            for(let i = 0; i < tabs.length; i++) {\r\n                content.append(tabs[i]);\r\n            }\r\n}\r\n\r\nfunction removeSelected() {\r\n    for (let i = 0; i < tabs.length; i++) {\r\n        tabs[i].classList.remove('selected-tab');\r\n    }\r\n}\r\nconst trash = document.querySelectorAll('#trash');\r\n\r\n\r\n\r\ntrash.forEach(tab => {\r\n    tab.addEventListener('click', (e)=> {\r\n    save.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);\r\n    e.currentTarget.parentNode.parentNode.remove();\r\n    save.addIndex();\r\n    console.log(save.getTabs());\r\n})\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/saveTabs.js":
/*!*************************!*\
  !*** ./src/saveTabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Homepage tabs will be saved here\r\n\r\nconst saveTabs = () => {\r\n    let _tabs = [];\r\n\r\n    const saveTab = (tab) => {\r\n       return _tabs.push(tab);\r\n\r\n        \r\n    }\r\n\r\n    const getTabs = () => {\r\n    if(!_tabs) {\r\n        console.log(\"no todos\");\r\n    }\r\n    else {\r\n        return _tabs;\r\n    }\r\n}\r\n\r\n    const addIndex = () => {\r\n        const data = document.querySelectorAll('.todo-container');\r\n        let index = 0;\r\n        data.forEach(element => {\r\n            element.dataset.id = `${index}`;\r\n            index++;\r\n        });\r\n    }\r\n\r\n    const deleteTab = (tabIndex) => {\r\n         _tabs.splice(tabIndex, 1);\r\n    }\r\n\r\n\r\n    return { saveTab, getTabs, addIndex, deleteTab};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTabs);\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/saveTabs.js?");

/***/ }),

/***/ "./src/todoTab.js":
/*!************************!*\
  !*** ./src/todoTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_clipboard_edit_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/clipboard-edit-outline.svg */ \"./src/assets/clipboard-edit-outline.svg\");\n/* harmony import */ var _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/trash-can-outline.svg */ \"./src/assets/trash-can-outline.svg\");\n// Brainstorm what kind of properties your todo-items \r\n// are going to have. At a minimum they should have a \r\n// title, description, dueDate and priority. You might \r\n// also want to include notes or even a checklist.\r\n\r\n\r\n\r\nconst createTodoBox = (inputTitle = \"Blank\", inputDescription = \"Blank\", inputDueDate = \"Blank\") => {\r\n    // Create div container for todo\r\n    const createBox = () => {  \r\n    const toDo = document.createElement('div');\r\n    toDo.classList.add('todo-container');\r\n    toDo.dataset.id = \"\";\r\n    return toDo;\r\n    }\r\n    \r\n    // Create title section\r\n    const createTitle = () => {  \r\n    const title = document.createElement('span')\r\n    title.classList.add('todo-title');\r\n    title.textContent = inputTitle;\r\n    return title;\r\n    }\r\n\r\n\r\n    // Create description section\r\n    const createDescription = () => {\r\n    const descriptionSection = document.createElement('div');\r\n    const description = document.createElement('p');\r\n    description.classList.add('todo-description');\r\n    description.textContent = inputDescription;\r\n    descriptionSection.append(description);\r\n    return descriptionSection;\r\n    }\r\n\r\n    // Create date section\r\n    const createDueDate = () => {\r\n    const dueDateSection = document.createElement('div');\r\n    const dueDate = document.createElement('p');\r\n    dueDate.classList.add('due-Date');\r\n    dueDate.textContent = inputDueDate\r\n    dueDateSection.append(dueDate);\r\n    return dueDateSection\r\n    \r\n    }\r\n    const createIcons = () => {\r\n        const iconSection = document.createElement('div');\r\n        const edit = document.createElement('img');\r\n        const trash = document.createElement('img');\r\n        iconSection.classList.add('todo-icons');\r\n        edit.src = _assets_clipboard_edit_outline_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n        edit.id = 'edit'\r\n        trash.src = _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__\r\n        trash.id = 'trash'\r\n        iconSection.append(edit, trash);\r\n        return iconSection;\r\n        }\r\n    // add content to tab and then to conetent div\r\n    const createContent = () => {\r\n        const box = createBox();\r\n        box.append(createTitle(), createDescription(), createDueDate(), createIcons());\r\n        return box \r\n    }\r\n\r\n\r\n    return {createContent};\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoBox);\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoTab.js?");

/***/ }),

/***/ "./src/userInput.js":
/*!**************************!*\
  !*** ./src/userInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoTab */ \"./src/todoTab.js\");\n/* harmony import */ var _saveTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTabs */ \"./src/saveTabs.js\");\n\r\n\r\n\r\nconst formHandlingAndData = () => {\r\nconst modal = document.querySelector('.modal');\r\n\r\n    const openAndCloseModal = () => {\r\n        \r\n        const openButton = document.querySelector('#add-todo');\r\n        const closeButton = document.querySelector('#close-modal ');\r\n        openButton.addEventListener('click', () => {\r\n            modal.showModal();\r\n        })\r\n\r\n        closeButton.addEventListener('click', () => {\r\n            modal.close();\r\n        })\r\n\r\n        \r\n    }\r\n\r\n\r\n    const formData = () => {\r\n        const formTitle = document.querySelector('#input-title');\r\n        const formDate = document.querySelector('#input-date');\r\n        const formDescription = document.querySelector('#input-description');\r\n        return {formTitle, formDate, formDescription};\r\n    \r\n        }\r\n\r\n    const submitFormData = () => {\r\n        const content = document.querySelector('.content');\r\n        const submitButton = document.querySelector('.new-todo');\r\n        const form = document.querySelector('.user-info');\r\n        submitButton.addEventListener('click', (e)=> {\r\n            e.preventDefault();\r\n            const tab = (0,_todoTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formData().formTitle.value, formData().formDescription.value, formData().formDate.value).createContent();\r\n            content.append(tab);\r\n            form.reset();\r\n            modal.close();\r\n            ;\r\n        })\r\n        \r\n    }\r\n    return {openAndCloseModal, submitFormData}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formHandlingAndData);\n\n//# sourceURL=webpack://todo-list/./src/userInput.js?");

/***/ }),

/***/ "./src/assets/clipboard-edit-outline.svg":
/*!***********************************************!*\
  !*** ./src/assets/clipboard-edit-outline.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"clipboard-edit-outline.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/clipboard-edit-outline.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/assets/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/assets/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"trash-can-outline.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/trash-can-outline.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;