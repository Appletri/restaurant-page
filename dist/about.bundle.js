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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addText\": () => (/* binding */ addText),\n/* harmony export */   \"addContainer\": () => (/* binding */ addContainer),\n/* harmony export */   \"addIconLabel\": () => (/* binding */ addIconLabel)\n/* harmony export */ });\n\n\nfunction addText(num, cssName, parent ) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('p');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n    \n};\n\nfunction addContainer(num, cssName, parent) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('div');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n\n};\n\nfunction addIconLabel(parent, arrText, arrPic){\n    for (let i=0; i<arrText.length; i++){        \n        const element = document.createElement('div');\n        function addDivForImg (){\n            const imgMask = document.createElement('div');\n            const drink = new Image();\n            drink.src = arrPic[i];\n            imgMask.className = 'imgMask'\n            imgMask.appendChild(drink);\n            element.appendChild(imgMask);\n        }\n        addDivForImg();\n        const text = document.createElement('p');\n        text.textContent = arrText[i];\n        element.appendChild(text);\n        element.className = `menuIcon`;\n        parent.appendChild(element);\n    }\n};\n\n//# sourceURL=webpack://restraurant-page/./src/function.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startUpAbout)\n/* harmony export */ });\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function.js */ \"./src/function.js\");\n/* harmony import */ var _images_137_74956_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/137-74956.png */ \"./src/images/137-74956.png\");\n/* harmony import */ var _images_137_74957_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/137-74957.png */ \"./src/images/137-74957.png\");\n\n\n\n\nfunction startUpAbout(){\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(3,'container', document.querySelector('#content'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1, 'firstTextBlock', document.querySelector('.container1'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(2,'text', document.querySelector('.firstTextBlock1'));\n    document.querySelector('.text1').textContent =  'Jingle all the way to free favorites';\n    document.querySelector('.text2').textContent =  'Join Starbucks Rewards for delicious deals & exclusive offers.';\n\n    const cont2 = document.querySelector('.container2');\n    const drinks = new Image();\n    drinks.src = _images_137_74956_png__WEBPACK_IMPORTED_MODULE_1__;\n    cont2.appendChild(drinks);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1, 'childTextBlock', cont2);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(2,'fav-text',document.querySelector('.childTextBlock1'));\n    document.querySelector('.fav-text1').textContent =  'Your faves are back';\n    document.querySelector('.fav-text2').textContent =  'Come celebrate the season with our merry holiday drinks: Peppermint Mocha, Caramel Brulée Latte and Toasted White Chocolate Mocha. Cheers!';\n\n    const cont3 = document.querySelector('.container3');\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1, 'childTextBlockA', cont3);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(2,'new-text',document.querySelector('.childTextBlockA1'));\n    document.querySelector('.new-text1').textContent =  `NEW TO THE NICE LIST`;\n    document.querySelector('.new-text2').textContent =  'For a nondairy twist on a holiday cookie classic, try the new Iced Sugar Cookie Almondmilk Latte.';\n    const almondLatte = new Image();\n    almondLatte.src = _images_137_74957_png__WEBPACK_IMPORTED_MODULE_2__;\n    cont3.appendChild(almondLatte);\n\n};\n\n//# sourceURL=webpack://restraurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/images/137-74956.png":
/*!**********************************!*\
  !*** ./src/images/137-74956.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2156d8332465636b1a8f.png\";\n\n//# sourceURL=webpack://restraurant-page/./src/images/137-74956.png?");

/***/ }),

/***/ "./src/images/137-74957.png":
/*!**********************************!*\
  !*** ./src/images/137-74957.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"180587e87061fd0ef832.png\";\n\n//# sourceURL=webpack://restraurant-page/./src/images/137-74957.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/about.js");
/******/ 	
/******/ })()
;