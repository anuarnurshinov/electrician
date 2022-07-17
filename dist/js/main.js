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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroller */ \"./modules/scroller.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_upScroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/upScroller */ \"./modules/upScroller.js\");\n/* harmony import */ var _modules_questAndAnswer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/questAndAnswer */ \"./modules/questAndAnswer.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_validator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_scroller__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_upScroller__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_questAndAnswer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\n    const serviceCarouselBlock = document.querySelector('.services-carousel')\n    const arrowRight = document.querySelector('.arrow-right')\n    const arrowLeft = document.querySelector('.arrow-left')\n    \n    \n    const turnRight = () =>{\n        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6')\n        itemList[5].toggleAttribute('hidden')\n        itemList[2].toggleAttribute('hidden')\n        itemList[5].remove()\n        itemList[0].before(itemList[5])\n    }\n    const turnLeft = () =>{\n        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6')\n        itemList[0].toggleAttribute('hidden')\n        itemList[3].toggleAttribute('hidden')\n        itemList[0].remove()\n        itemList[5].after(itemList[0])\n    }\n\n\n    arrowRight.addEventListener('click', turnRight)\n    arrowLeft.addEventListener('click', turnLeft)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({\n    timing,\n    draw,\n    duration\n}) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n}\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst modal = () => {\n    const serviceBlock = document.querySelector('.services-elements')\n    const modalOverlay = document.querySelector('.modal-overlay')\n    const modal = document.querySelector('.modal-callback')\n    const closeBtn = document.querySelector('.modal-close')\n    const header = document.querySelector('.header')\n    const callbackBtn = header.querySelector('.callback-btn')\n    const buttonServices = document.querySelector('.button-services')\n    let bounceEaseOut\n\n\n\n\n\n    const animation = () => {\n        modalOverlay.style.display = 'block'\n        modal.style.display = 'block'\n        ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 1500,\n            timing: bounceEaseOut,\n            draw: function (progress) {\n                modal.style.left = progress * 50 + '%';\n            }\n        });\n    }\n\n    const makeEaseOut = (timing) => {\n        return function (timeFraction) {\n            return 1 - timing(1 - timeFraction);\n        }\n    }\n\n    const bounce = (timeFraction) => {\n        for (let a = 0, b = 1; 1; a += b, b /= 2) {\n            if (timeFraction >= (7 - 4 * a) / 11) {\n                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)\n            }\n        }\n    }\n\n    const showModal = () => {\n        callbackBtn.addEventListener('click', (e) => {\n            bounceEaseOut = makeEaseOut(bounce);\n            if (e.target.classList.contains('fancyboxModal')) {\n                animation()\n            } else if (e.target.classList.contains('modal-close')) {\n\n            }\n        })\n        serviceBlock.addEventListener('click', (e) => {\n            bounceEaseOut = makeEaseOut(bounce);\n            if (e.target.classList.contains('fancyboxModal')) {\n                animation()\n            } else if (e.target.classList.contains('modal-close')) {\n\n            }\n        })\n        buttonServices.addEventListener('click', (e) => {\n            bounceEaseOut = makeEaseOut(bounce);\n            if (e.target.classList.contains('fancyboxModal')) {\n                animation()\n            } else if (e.target.classList.contains('modal-close')) {\n\n            }\n        })\n    }\n\n    const closeModal = () => {\n        modalOverlay.addEventListener('click', (e) => {\n            if (!e.target.closest('.modal-callback')) {\n                modal.style.display = 'none'\n                modalOverlay.style.display = 'none'\n            }\n        })\n        closeBtn.addEventListener('click', (e) => {\n            modal.style.display = 'none'\n            modalOverlay.style.display = 'none'\n        })\n    }\n\n\n    showModal()\n    closeModal()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/questAndAnswer.js":
/*!***********************************!*\
  !*** ./modules/questAndAnswer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst questAndAnswer = () => {\n    const accordeon = document.querySelector('.accordeon')\n    const elementsList = accordeon.querySelectorAll('.element-content')\n    const elements = accordeon.querySelectorAll('.element')\n    \n\n    accordeon.addEventListener('click', (e) => {\n        if(e.target.closest('.element')){\n            const content = e.target.closest('.element').querySelector('.element-content')\n\n        if (content.style.getPropertyValue(\"display\") === \"block\") {\n            content.style.display = \"none\"\n        } else {\n            elements.forEach(el => {\n                if(el.classList.contains('active')){\n                    el.classList.toggle('active')\n                    el.querySelector('.element-content').style.display =\"none\"\n                }\n                \n            });\n            content.style.display = \"block\"\n\n        }\n        e.target.closest('.element').classList.toggle('active')\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questAndAnswer);\n\n//# sourceURL=webpack:///./modules/questAndAnswer.js?");

/***/ }),

/***/ "./modules/scroller.js":
/*!*****************************!*\
  !*** ./modules/scroller.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroller = () => {\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\n    for (let smoothLink of smoothLinks) {\n        smoothLink.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = smoothLink.getAttribute('href');\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroller);\n\n//# sourceURL=webpack:///./modules/scroller.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\n    const form = document.querySelector('form')\n    const statusBlock = document.createElement('div')\n    const loadText = 'Загрузка...'\n    const errorText = 'Ошибка'\n    const successText = 'Спасибо! Наш менеджер свяжется с вами!'\n\n    const sendData = async (data) => {\n        if (data.fio.length > 1 && data.tel.length > 6) {\n            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\n                method: 'POST',\n                body: JSON.stringify(data),\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            })\n            return await res.json()\n        } else {\n            successText = 'Данные не подходят, для отправки'\n        }\n\n    }\n\n    const submitForm = () => {\n        const formElements = form.querySelectorAll('.form-group>input')\n        const formData = new FormData(form)\n        const formBody = {}\n        statusBlock.textContent = loadText\n        form.append(statusBlock)\n\n        formData.forEach((val, key) => {\n            if (val != '') {\n                formBody[key] = val\n            }\n        })\n\n        sendData(formBody)\n            .then(data => {\n                statusBlock.textContent = successText\n                formElements.forEach(input => {\n                    console.log(input);\n                    input.value = ''\n                })\n            })\n            .catch(error => {\n                statusBlock.textContent = errorText\n            })\n    }\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        submitForm()\n\n\n    })\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const topSlider = document.querySelector('.top-slider')\n    const slides = topSlider.querySelectorAll('.item')\n    const textCells = topSlider.querySelectorAll('.table')\n    let i = 0\n\n    const sliderInterval = setInterval(() => {\n        let timerId = setTimeout(() => {\n            textCells[0].classList.toggle('active')\n            textCells[1].classList.toggle('active')\n            textCells[2].classList.toggle('active')\n            timerId = setTimeout(() => {\n                slides[i].toggleAttribute('hidden')\n                i++\n                if (i >= 2) {\n                    i = 0\n                }\n            }, 1500)\n\n        }, 1000);\n    }, 3000)\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/upScroller.js":
/*!*******************************!*\
  !*** ./modules/upScroller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst upScroller = () => {\n    const goTopBtn = document.querySelector('.up')\n\n    const trackScroll = () => {\n        var scrolled = window.pageYOffset;\n        var coords = document.documentElement.clientHeight;\n\n        if (scrolled > coords) {\n            goTopBtn.removeAttribute('hidden', '');\n        }\n        if (scrolled < coords) {\n            goTopBtn.setAttribute('hidden', '');\n        }\n    }\n\n    const backToTop = () => {\n        if (window.pageYOffset > 0) {\n            window.scrollBy(0, -80);\n            setTimeout(backToTop, 0);\n        }\n    }\n\n\n    window.addEventListener('scroll', trackScroll);\n    goTopBtn.addEventListener('click', backToTop);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upScroller);\n\n//# sourceURL=webpack:///./modules/upScroller.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\n    const modal = document.querySelector('.modal-callback')\n    modal.addEventListener('input', (e) => {\n        if (e.target.getAttribute('name') === 'tel') {\n            e.target.value = e.target.value.replace(/[^\\d-+-]/, '').replace(/^\\s*/g, \"\")\n        }\n        if (e.target.getAttribute('name') === 'fio') {\n            e.target.value = e.target.value.replace(/[^А-я ]/, '').replace(/^\\s*/g, \"\")\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;