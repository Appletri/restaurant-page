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

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addText\": () => (/* binding */ addText),\n/* harmony export */   \"addContainer\": () => (/* binding */ addContainer)\n/* harmony export */ });\n\n\nfunction addText(num, cssName, parent ) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('p');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n    \n};\n\nfunction addContainer(num, cssName, parent) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('div');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n\n};\n\n//# sourceURL=webpack://restraurant-page/./src/function.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startUpMenu)\n/* harmony export */ });\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function.js */ \"./src/function.js\");\n\n\nfunction startUpMenu(){\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'menuBoard', document.querySelector('#content'))\n    ;(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(2,'menu', document.querySelector('.menuBoard1'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(22,'type', document.querySelector('.menu1'));\n    document.querySelector('.type1').textContent =  'Drinks';\n    document.querySelector('.type2').textContent =  'Hot Coffees';\n    document.querySelector('.type3').textContent =  'Hot Teas';\n    document.querySelector('.type4').textContent =  'Hot Drinks';\n    document.querySelector('.type5').textContent =  'Frappuccino Blended Beverages';\n    document.querySelector('.type6').textContent =  'Cold Coffees';\n    document.querySelector('.type7').textContent =  'Iced Teas';\n    document.querySelector('.type8').textContent =  'Cold Drinks';\n    document.querySelector('.type9').textContent =  'Food';\n    document.querySelector('.type10').textContent =  'Hot Breakfast';\n    document.querySelector('.type11').textContent =  'Bakery';\n    document.querySelector('.type12').textContent =  'Lunch';\n    document.querySelector('.type13').textContent =  'Snacks & Sweets';\n    document.querySelector('.type14').textContent =  'Oatmean & Yogurt';\n    document.querySelector('.type15').textContent =  'At Home Coffee';\n    document.querySelector('.type16').textContent =  'Whole Bean';\n    document.querySelector('.type17').textContent =  'VIA Instant';\n    document.querySelector('.type18').textContent =  'Merchandise';\n    document.querySelector('.type19').textContent =  'Cold Cups';\n    document.querySelector('.type20').textContent =  'Tumblers';\n    document.querySelector('.type21').textContent =  'Water Bottles';\n    document.querySelector('.type22').textContent =  'Other';\n}\n\n//# sourceURL=webpack://restraurant-page/./src/pages/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/menu.js");
/******/ 	
/******/ })()
;