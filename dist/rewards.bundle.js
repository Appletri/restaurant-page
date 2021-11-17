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

/***/ "./src/pages/rewards.js":
/*!******************************!*\
  !*** ./src/pages/rewards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startUpRewards)\n/* harmony export */ });\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function.js */ \"./src/function.js\");\n\n\nfunction startUpRewards(){\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'mainRewards',document.querySelector('#content'))\n    ;(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(4,'rewards',document.querySelector('.mainRewards1'));\n    const rewards1 = document.querySelector('.rewards1');\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'box',rewards1);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(3,'R1text',document.querySelector('.box1'));\n    document.querySelector('.R1text1').textContent = 'FREE COFFEE IS A TAP AWAY';\n    document.querySelector('.R1text2').textContent = 'Join now to start earning Rewards';\n    document.querySelector('.R1text3').textContent = 'Or join in the app for the best experience';\n    const hero = new Image();\n    hero.src = 'https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png';\n    rewards1.appendChild(hero);\n}\n\n//# sourceURL=webpack://restraurant-page/./src/pages/rewards.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/rewards.js");
/******/ 	
/******/ })()
;