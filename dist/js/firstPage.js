/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var nav = document.querySelector('.--nav');
var navLinks = nav.querySelectorAll('a');
function setNavStyles() {
  navLinks.forEach(function (navLink) {
    if (navLink.classList.contains('active')) {
      navLink.style.cssText = "font-variation-settings: 'wght' 600; letter-spacing: 0.05px; font-size: 17.2px; color: #E9C1C8; ";
    } else {
      navLink.style.cssText = "font-variation-settings: 'wght' 400; letter-spacing: 0; font-size: 17px; color: #fff; border-bottom: none";
    }
    console.log(navLink);
    var linkWidth = navLink.offsetWidth;
    navLink.style.width = linkWidth + 'px';
  });
}
function navLinksAnimation() {
  var hoverFontWeight = [{
    fontVariationSettings: "'wght' 400",
    letterSpacing: '0px',
    fontSize: '17px',
    color: '#fff'
  }, {
    fontVariationSettings: "'wght' 500",
    letterSpacing: '0.05px',
    fontSize: '17.2px',
    color: '#E9C1C8'
  }];
  var hoverOptions = {
    duration: 300,
    iterations: 1,
    easing: 'ease',
    fill: 'forwards'
  };
  var unHoverOptions = {
    duration: 300,
    iterations: 1,
    easing: 'ease',
    direction: 'reverse',
    fill: 'forwards'
  };
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('mouseover', function () {
      if (!navLink.classList.contains('active')) {
        navLink.animate(hoverFontWeight, hoverOptions);
      }
    });
    navLink.addEventListener('mouseout', function () {
      if (!navLink.classList.contains('active')) {
        if (!navLink.classList.contains('active')) {
          navLink.animate(hoverFontWeight, unHoverOptions);
        }
      }
    });
  });
}
function navigation() {
  setNavStyles();
  navLinksAnimation();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/firstPage.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
function firstSectionAnimation() {
  var imgOpacity = [{
    opacity: 1
  }, {
    opacity: 0
  }];
  var imgDisappearTiming = {
    duration: 4000,
    iterations: 1,
    easing: 'ease',
    fill: 'forwards'
  };
  var imgAppearTiming = _objectSpread(_objectSpread({}, imgDisappearTiming), {}, {
    direction: 'reverse',
    delay: 2000
  });
  var h1Opacity = [{
    opacity: 1
  }, {
    opacity: 0,
    offset: 0.4
  }, {
    opacity: 0,
    offset: 0.7
  }, {
    opacity: 1
  }];
  var h1Timing = {
    duration: 8000,
    iteration: 1,
    easing: 'ease',
    fill: 'forwards'
  };
  var h1 = document.querySelector('h1');
  var lastImg = document.querySelectorAll('.section--1 > img').length;
  var visibleChild = 1;
  setInterval(function () {
    var visibleImg = document.querySelector(".section--1 img:nth-child( ".concat(visibleChild, " )"));
    visibleChild = visibleChild >= lastImg ? 1 : ++visibleChild;
    var nextVisibleImg = document.querySelector(".section--1 img:nth-child( ".concat(visibleChild, " )"));
    visibleImg.animate(imgOpacity, imgDisappearTiming);
    nextVisibleImg.animate(imgOpacity, imgAppearTiming);
    if (nextVisibleImg.classList.contains('left') && visibleImg.classList.contains('right') || visibleImg.classList.contains('left') && nextVisibleImg.classList.contains('right')) {
      setTimeout(function () {
        nextVisibleImg.classList.contains('left') ? h1.style.cssText = 'right:150px; left:unset' : h1.style.cssText = 'left:150px; right:unset';
      }, 3000);
      h1.animate(h1Opacity, h1Timing);
    }
  }, 20000);
}
firstSectionAnimation();
var section2 = document.querySelector('.section--2');
var heading = section2.querySelector('.--heading > h2');
var paragraph = section2.querySelector('.--paragraph');
var paragraphHeight = paragraph.offsetHeight;
var bamboo = section2.querySelector('.--bamboo');
bamboo.style.height = paragraphHeight + 150 + 'px';
function secondSectionAppearAnimation() {
  var headingAppear = [{
    transform: 'translateY(0)',
    opacity: 0.7
  }, {
    transform: 'translateY(-30px)',
    opacity: 1
  }];
  var headingAppearOptions = {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: 'forwards'
  };
  var paragraphAppear = [{
    marginTop: '30px',
    opacity: 0.7
  }, {
    marginTop: '0',
    opacity: 1
  }];
  var paragraphAppearOptions = {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: 'forwards',
    delay: 1000
  };
  window.addEventListener('scroll', function scrolledToSeconSection() {
    console.log('getbounding ' + section2.getBoundingClientRect().top);
    console.log('scroll ' + window.scrollY);
    if (window.scrollY >= -1 * section2.getBoundingClientRect().top) {
      heading.animate(headingAppear, headingAppearOptions);
      paragraph.animate(paragraphAppear, paragraphAppearOptions);
      window.removeEventListener('scroll', scrolledToSeconSection);
    }
  });
}
secondSectionAppearAnimation();
function setSeconSectionStyle() {}
window.addEventListener("resize", function () {
  var paragraphHeight = paragraph.offsetHeight;
  bamboo.style.height = paragraphHeight + 150 + 'px';
});
})();

/******/ })()
;