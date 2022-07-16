/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application":
/*!*************************!*\
  !*** ./src/application ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


let project1 = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(1, 'holiday');

let todo1 = {id: 1, name: 'todo 1'};
let todo2 = {id: 2, name: 'todo 2'};

project1.addTodo(todo1);
project1.addTodo(todo2);

function loadPage() {
    console.log('loading page');
}

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
function Event(name) {
    let handlers = [];

    const getName = () => name;
    const addHandler = (callback) => handlers.push(callback);
    const getHandlers = () => handlers;
    const fireHandlers = (data) => {
        handlers.forEach((handler) => {
            handler(data);
        })
    }

    return { getName, addHandler, getHandlers, fireHandlers };
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
function Project(projectId, projectName) {

    let todoContainer = [];
    let name = projectName;
    let id = projectId;

    const getName = () => name;
    const getId = () => id;

    function addTodo(todoObj){
        todoContainer.push(todoObj);
    }

    function removeTodo(todoObj) {
        for(let i = 0; i < todoContainer.length; ++i) {
            if(todoContainer[i].id === todoObj.id) {
                todoContainer.splice(i, 1);
            }
        }
    }

    function setName(value) {
        name = value;
    }

    return { addTodo, removeTodo, setName, getId, getName};
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./src/event.js");


let events = [];

const publish = (eventName, data) => {

    if(!(eventName in events)) {
        events[eventName] = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.Event)(eventName);
    }
    events[eventName].fireHandlers(data);
}

const subscribe = (eventName, callback) => {
    
    if(!(eventName in events)) {
        events[eventName] = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.Event)(eventName);
    }

    events[eventName].addHandler(callback);
}

const getEvents = () => events;



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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/application");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
//index.js




document.addEventListener('DOMContentLoaded', (0,_application__WEBPACK_IMPORTED_MODULE_0__.loadPage)());

const body = document.querySelector('body');
const div = document.createElement('div');
const button = document.createElement('button');
button.textContent = "Add Project";

button.addEventListener('click', () => {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('projectAdded', 1);
    console.log((0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.getEvents)());
});

div.appendChild(button);
body.appendChild(div);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQSxlQUFlLGlEQUFPO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDeUM7QUFDSztBQUM5QztBQUNBLDhDQUE4QyxzREFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWCxnQkFBZ0Isa0RBQVM7QUFDekIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1ZHUvLi9zcmMvYXBwbGljYXRpb24iLCJ3ZWJwYWNrOi8vdHVkdS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly90dWR1Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdHVkdS8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWR1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWR1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1ZHUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmxldCBwcm9qZWN0MSA9IFByb2plY3QoMSwgJ2hvbGlkYXknKTtcclxuXHJcbmxldCB0b2RvMSA9IHtpZDogMSwgbmFtZTogJ3RvZG8gMSd9O1xyXG5sZXQgdG9kbzIgPSB7aWQ6IDIsIG5hbWU6ICd0b2RvIDInfTtcclxuXHJcbnByb2plY3QxLmFkZFRvZG8odG9kbzEpO1xyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8yKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHBhZ2UnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBFdmVudChuYW1lKSB7XHJcbiAgICBsZXQgaGFuZGxlcnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSAoY2FsbGJhY2spID0+IGhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgY29uc3QgZ2V0SGFuZGxlcnMgPSAoKSA9PiBoYW5kbGVycztcclxuICAgIGNvbnN0IGZpcmVIYW5kbGVycyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgYWRkSGFuZGxlciwgZ2V0SGFuZGxlcnMsIGZpcmVIYW5kbGVycyB9O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QocHJvamVjdElkLCBwcm9qZWN0TmFtZSkge1xyXG5cclxuICAgIGxldCB0b2RvQ29udGFpbmVyID0gW107XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgbGV0IGlkID0gcHJvamVjdElkO1xyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmope1xyXG4gICAgICAgIHRvZG9Db250YWluZXIucHVzaCh0b2RvT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG9PYmopIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0NvbnRhaW5lci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZih0b2RvQ29udGFpbmVyW2ldLmlkID09PSB0b2RvT2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXROYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIHNldE5hbWUsIGdldElkLCBnZXROYW1lfTtcclxufSIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vZXZlbnQuanNcIjtcclxuXHJcbmxldCBldmVudHMgPSBbXTtcclxuXHJcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcblxyXG4gICAgaWYoIShldmVudE5hbWUgaW4gZXZlbnRzKSkge1xyXG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0gRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH1cclxuICAgIGV2ZW50c1tldmVudE5hbWVdLmZpcmVIYW5kbGVycyhkYXRhKTtcclxufVxyXG5cclxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgY2FsbGJhY2spID0+IHtcclxuICAgIFxyXG4gICAgaWYoIShldmVudE5hbWUgaW4gZXZlbnRzKSkge1xyXG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0gRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHNbZXZlbnROYW1lXS5hZGRIYW5kbGVyKGNhbGxiYWNrKTtcclxufVxyXG5cclxuY29uc3QgZ2V0RXZlbnRzID0gKCkgPT4gZXZlbnRzO1xyXG5cclxuZXhwb3J0IHtwdWJsaXNoLCBzdWJzY3JpYmUsIGdldEV2ZW50c307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gXCIuL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IHB1Ymxpc2gsIGdldEV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWRQYWdlKCkpO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCAxKTtcclxuICAgIGNvbnNvbGUubG9nKGdldEV2ZW50cygpKTtcclxufSk7XHJcblxyXG5kaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuYm9keS5hcHBlbmRDaGlsZChkaXYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==