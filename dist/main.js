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

/***/ "./src/projectscontroller.js":
/*!***********************************!*\
  !*** ./src/projectscontroller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
//projectscontroller.js



let projectsContainer = [];
console.log('I am Executed muuuuuhahahah');
(0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)('projectAdded', (data) => console.log('working'));

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }



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
/* harmony import */ var _projectscontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectscontroller */ "./src/projectscontroller.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQSxlQUFlLGlEQUFPO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ3lDO0FBQ0s7QUFDaEI7QUFDOUI7QUFDQSw4Q0FBOEMsc0RBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1gsZ0JBQWdCLGtEQUFTO0FBQ3pCLENBQUM7QUFDRDtBQUNBO0FBQ0Esc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWR1Ly4vc3JjL2FwcGxpY2F0aW9uIiwid2VicGFjazovL3R1ZHUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdHVkdS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3R1ZHUvLi9zcmMvcHJvamVjdHNjb250cm9sbGVyLmpzIiwid2VicGFjazovL3R1ZHUvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3R1ZHUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R1ZHUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90dWR1Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5sZXQgcHJvamVjdDEgPSBQcm9qZWN0KDEsICdob2xpZGF5Jyk7XHJcblxyXG5sZXQgdG9kbzEgPSB7aWQ6IDEsIG5hbWU6ICd0b2RvIDEnfTtcclxubGV0IHRvZG8yID0ge2lkOiAyLCBuYW1lOiAndG9kbyAyJ307XHJcblxyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8xKTtcclxucHJvamVjdDEuYWRkVG9kbyh0b2RvMik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZGluZyBwYWdlJyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gRXZlbnQobmFtZSkge1xyXG4gICAgbGV0IGhhbmRsZXJzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgICBjb25zdCBhZGRIYW5kbGVyID0gKGNhbGxiYWNrKSA9PiBoYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEhhbmRsZXJzID0gKCkgPT4gaGFuZGxlcnM7XHJcbiAgICBjb25zdCBmaXJlSGFuZGxlcnMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlcihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldE5hbWUsIGFkZEhhbmRsZXIsIGdldEhhbmRsZXJzLCBmaXJlSGFuZGxlcnMgfTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3RJZCwgcHJvamVjdE5hbWUpIHtcclxuXHJcbiAgICBsZXQgdG9kb0NvbnRhaW5lciA9IFtdO1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBpZCA9IHByb2plY3RJZDtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvT2JqKXtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLnB1c2godG9kb09iaik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvT2JqKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9Db250YWluZXIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYodG9kb0NvbnRhaW5lcltpXS5pZCA9PT0gdG9kb09iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIG5hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCBzZXROYW1lLCBnZXRJZCwgZ2V0TmFtZX07XHJcbn0iLCIvL3Byb2plY3RzY29udHJvbGxlci5qc1xyXG5cclxuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XHJcblxyXG5sZXQgcHJvamVjdHNDb250YWluZXIgPSBbXTtcclxuY29uc29sZS5sb2coJ0kgYW0gRXhlY3V0ZWQgbXV1dXV1aGFoYWhhaCcpO1xyXG5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIChkYXRhKSA9PiBjb25zb2xlLmxvZygnd29ya2luZycpKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE9iaikge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIucHVzaChwcm9qZWN0T2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7IHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjsgfVxyXG5cclxuZXhwb3J0IHsgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QgfTsiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL2V2ZW50LmpzXCI7XHJcblxyXG5sZXQgZXZlbnRzID0gW107XHJcblxyXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG5cclxuICAgIGlmKCEoZXZlbnROYW1lIGluIGV2ZW50cykpIHtcclxuICAgICAgICBldmVudHNbZXZlbnROYW1lXSA9IEV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICB9XHJcbiAgICBldmVudHNbZXZlbnROYW1lXS5maXJlSGFuZGxlcnMoZGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKCEoZXZlbnROYW1lIGluIGV2ZW50cykpIHtcclxuICAgICAgICBldmVudHNbZXZlbnROYW1lXSA9IEV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzW2V2ZW50TmFtZV0uYWRkSGFuZGxlcihjYWxsYmFjayk7XHJcbn1cclxuXHJcbmNvbnN0IGdldEV2ZW50cyA9ICgpID0+IGV2ZW50cztcclxuXHJcbmV4cG9ydCB7cHVibGlzaCwgc3Vic2NyaWJlLCBnZXRFdmVudHN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbmRleC5qc1xyXG5cclxuaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoLCBnZXRFdmVudHMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcclxuaW1wb3J0IFwiLi9wcm9qZWN0c2NvbnRyb2xsZXJcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkUGFnZSgpKTtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHVibGlzaCgncHJvamVjdEFkZGVkJywgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRFdmVudHMoKSk7XHJcbn0pO1xyXG5cclxuZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=