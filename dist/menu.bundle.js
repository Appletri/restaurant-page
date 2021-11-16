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

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startUpMenu)\n/* harmony export */ });\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function.js */ \"./src/function.js\");\n\n\nfunction startUpMenu(){\n    const all = ['Drinks','Hot Coffees','Hot Teas','Hot Drinks','Frappuccino Blended Beverages','Cold Coffees','Iced Teas','Cold Drinks','Food','Hot Breakfast','Bakery','Lunch','Snacks & Sweets','Oatmeal & Yogurt','At Home Coffee','Whole Bean','VIA Instant','Merchandise','Cold Cups','Tumblers','Water Bottles','Other'];\n    const drinks = ['Hot Coffees','Hot Teas','Hot Drinks','Frappuccino Blended Beverages','Cold Coffees','Iced Teas','Cold Drinks'];\n    const food = ['Hot Breakfast','Bakery','Lunch','Snacks & Sweets','Oatmeal & Yogurt'];\n    const atHomeCoffee = ['Whole Bean','VIA Instant'];\n    const merchandise = ['Cold Cups','Tumblers','Water Bottles','Other'];\n    const header = ['Drinks','Food','At Home Coffee','Merchandise'];\n    const drinksImg = ['https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg','https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg','https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg','https://globalassets.starbucks.com/assets/d50938db081948b8a23c81070a300ad8.jpg','https://globalassets.starbucks.com/assets/3abfc4b26c144afd9dd4eec001f0f252.jpg','https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg','https://globalassets.starbucks.com/assets/77334c4087314c518f842c2f77cfaec1.jpg'];\n    const foodImg = ['https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg','https://globalassets.starbucks.com/assets/738d89c837874a4ab31044808764b6fb.jpg', 'https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg', 'https://globalassets.starbucks.com/assets/60622ad125344b8184b80fed745dc1f6.jpg', 'https://globalassets.starbucks.com/assets/b0e0112505884457ad3f3af0ba17f6c7.jpg'];\n    const atHomeCoffeeImg = ['https://globalassets.starbucks.com/assets/a327bf1877f34f29854c8298b91bcf0a.jpg','https://globalassets.starbucks.com/assets/ea966427c0cd46038be7a5181089fb0f.jpg'];\n    const merchandiseImg = ['https://globalassets.starbucks.com/assets/d85a6ec4d5be46e9a3a4bc6031573fda.jpg','https://globalassets.starbucks.com/assets/b7a99a58163043eeae6d92ead70bbea3.jpg','https://globalassets.starbucks.com/assets/1d60dfa15cb34919b8a6a7c3d1703eb8.jpg','https://globalassets.starbucks.com/assets/75252b10ad4f45debf9cff3de9029663.jpg'];\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'menuBoard', document.querySelector('#content'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(2,'menu', document.querySelector('.menuBoard1'));\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(22,'type', document.querySelector('.menu1'));\n    for (let i=0; i<all.length; i++){\n        document.querySelector(`.type${i+1}`).textContent = all[i];\n    };\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(4,'icon-category', document.querySelector('.menu2'));\n    // document.querySelector('icon-category1').textContent = 'Menu';\n    // document.querySelector('icon-category2').textContent = 'Drinks';\n    \n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addIconLabel)(document.querySelector('.icon-category1'), drinks, drinksImg);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addIconLabel)(document.querySelector('.icon-category2'), food, foodImg);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addIconLabel)(document.querySelector('.icon-category3'), atHomeCoffee, atHomeCoffeeImg);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addIconLabel)(document.querySelector('.icon-category4'), merchandise, merchandiseImg);\n    AddHeader();\n\n    function AddHeader(){\n        for(let i=1;i<=4;i++){\n            const element = document.createElement('div');\n            element.className = 'sectionHead';\n            const text = document.createElement('h2');\n            text.textContent = header[i-1];\n            const hr = document.createElement('hr');\n            element.appendChild(text);\n            element.appendChild(hr);\n            document.querySelector('.menu2').insertBefore(element, document.querySelector(`.icon-category${i}`));\n        }\n        const head = document.createElement('h1');\n        head.textContent = 'Menu';\n        document.querySelector('.menu2').insertBefore(head, document.querySelector('.sectionHead'));\n    };\n\n}\n\n//# sourceURL=webpack://restraurant-page/./src/pages/menu.js?");

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