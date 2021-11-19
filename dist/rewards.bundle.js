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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addText\": () => (/* binding */ addText),\n/* harmony export */   \"addContainer\": () => (/* binding */ addContainer),\n/* harmony export */   \"addIconLabel\": () => (/* binding */ addIconLabel),\n/* harmony export */   \"addStep\": () => (/* binding */ addStep)\n/* harmony export */ });\n\n\nfunction addText(num, cssName, parent ) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('p');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n    \n};\n\nfunction addContainer(num, cssName, parent) {\n    for (let i=1; i<=num; i++){\n        const element = document.createElement('div');\n        element.className = cssName + i;\n        parent.appendChild(element);\n    }\n\n};\n\nfunction addIconLabel(parent, arrText, arrPic){\n    for (let i=0; i<arrText.length; i++){        \n        const element = document.createElement('div');\n        function addDivForImg (){\n            const imgMask = document.createElement('div');\n            const drink = new Image();\n            drink.src = arrPic[i];\n            imgMask.className = 'imgMask'\n            imgMask.appendChild(drink);\n            element.appendChild(imgMask);\n        }\n        addDivForImg();\n        const text = document.createElement('p');\n        text.textContent = arrText[i];\n        element.appendChild(text);\n        element.className = `menuIcon`;\n        parent.appendChild(element);\n    }\n};\n\nfunction addStep(num, picture, titleArr, textArr, parent, arrPic, picCSSName){\n    for (let i=0; i<num; i++){\n        const element = document.createElement('div');\n        if (picture === true){\n            const pic = new Image();\n            pic.src = arrPic[i];\n            pic.className = picCSSName;\n            element.appendChild(pic);\n        }\n        else {\n            const num = document.createElement('p');\n            num.textContent = i+1;\n            num.className = 'numberStepIcon'\n            element.appendChild(num);\n        }\n        const textbox = document.createElement('div');\n        textbox.className = 'textbox';\n        const text = document.createElement('p');\n        const subText = document.createElement('p');\n        text.textContent = titleArr[i];\n        subText.textContent = textArr[i];\n        text.className = 'stepTitle';\n        textbox.appendChild(text);\n        textbox.appendChild(subText);\n        element.appendChild(textbox);\n        parent.appendChild(element);        \n    }\n  \n};\n\n//# sourceURL=webpack://restraurant-page/./src/function.js?");

/***/ }),

/***/ "./src/pages/rewards.js":
/*!******************************!*\
  !*** ./src/pages/rewards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startUpRewards)\n/* harmony export */ });\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function.js */ \"./src/function.js\");\n\n\nfunction startUpRewards(){\n    const stepTitle = ['Create an account','Order and pay how you’d like','Earn Stars, get Rewards'];\n    const stepInstr = ['To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.','Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how','As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!'];\n    const stepTitle2 = ['Fun freebies', 'Order & pay ahead', 'Get to free faster'];\n    const stepInstr2 = ['Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.','Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.','Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.'];\n    const stepImg = ['https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg', 'https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg','https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg']\n    const rankTitle = ['Customize your drink'];\n    const rankInstr = ['Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.'];\n    const rankImg = ['https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png']\n\n\n    ;(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'mainRewards',document.querySelector('#content'))\n\n    ;(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(4,'rewards',document.querySelector('.mainRewards1'));\n    const rewards1 = document.querySelector('.rewards1');\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'box',rewards1);\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(3,'R1text',document.querySelector('.box1'));\n    document.querySelector('.R1text1').textContent = 'FREE COFFEE IS A TAP AWAY';\n    document.querySelector('.R1text2').textContent = 'Join now to start earning Rewards';\n    document.querySelector('.R1text3').textContent = 'Or join in the app for the best experience';\n    const hero = new Image();\n    hero.src = 'https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png';\n    rewards1.appendChild(hero);\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(2,'R2box',document.querySelector('.rewards2'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(2,'R2text',document.querySelector('.R2box1'));\n    document.querySelector('.R2text1').textContent = 'Getting started is easy';\n    document.querySelector('.R2text2').textContent = 'Earn Stars and get rewarded in a few easy steps';\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addStep)(3,false,stepTitle,stepInstr,document.querySelector(`.R2box2`));\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(2,'R3box',document.querySelector('.rewards3'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(1,'R3text',document.querySelector('.R3box1'));\n    document.querySelector('.R3text1').textContent = 'Get your favorites for free';\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(1,'R3box1',document.querySelector('.R3box1'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(5,'R3text2',document.querySelector('.R3box11'));\n    document.querySelector('.R3text21').innerHTML = '25<span style=\"color:gold; font-size:16px\">★</span>';\n    document.querySelector('.R3text22').innerHTML  = '50<span style=\"color:gold; font-size:16px\">★</span>';\n    document.querySelector('.R3text23').innerHTML  = '150<span style=\"color:gold; font-size:16px\">★</span>';\n    document.querySelector('.R3text24').innerHTML  = '200<span style=\"color:gold; font-size:16px\">★</span>';\n    document.querySelector('.R3text25').innerHTML  = '400<span style=\"color:gold; font-size:16px\">★</span>';\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addStep)(1,true,rankTitle,rankInstr,document.querySelector(`.R3box2`),rankImg,'rank-img');\n\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addContainer)(2,'R4box',document.querySelector('.rewards4'));\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addText)(2,'R4text',document.querySelector('.R4box1'));\n    document.querySelector('.R4text1').textContent = 'Endless Extras';\n    document.querySelector('.R4text2').textContent = 'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.';\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_0__.addStep)(3,true,stepTitle2,stepInstr2,document.querySelector(`.R4box2`),stepImg,'stepIcon');\n    \n}\n\n//# sourceURL=webpack://restraurant-page/./src/pages/rewards.js?");

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