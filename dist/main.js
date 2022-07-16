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
let projectsContainer = [];

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }



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
/* harmony import */ var _projectscontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectscontroller */ "./src/projectscontroller.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




document.addEventListener('DOMContentLoaded', (0,_application__WEBPACK_IMPORTED_MODULE_0__.loadPage)());

let project1 = (0,_project__WEBPACK_IMPORTED_MODULE_2__.Project)(1, "Project1");
let project2 = (0,_project__WEBPACK_IMPORTED_MODULE_2__.Project)(2, "Project2");
let project3 = (0,_project__WEBPACK_IMPORTED_MODULE_2__.Project)(3, "Project3");

(0,_projectscontroller__WEBPACK_IMPORTED_MODULE_1__.addProject)(project1);
(0,_projectscontroller__WEBPACK_IMPORTED_MODULE_1__.addProject)(project2);
(0,_projectscontroller__WEBPACK_IMPORTED_MODULE_1__.addProject)(project3);

(0,_projectscontroller__WEBPACK_IMPORTED_MODULE_1__.getProjects)().forEach(item => {
    console.log(item.getName());
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQSxlQUFlLGlEQUFPO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNzQjtBQUMzQjtBQUNwQztBQUNBLDhDQUE4QyxzREFBUTtBQUN0RDtBQUNBLGVBQWUsaURBQU87QUFDdEIsZUFBZSxpREFBTztBQUN0QixlQUFlLGlEQUFPO0FBQ3RCO0FBQ0EsK0RBQVU7QUFDViwrREFBVTtBQUNWLCtEQUFVO0FBQ1Y7QUFDQSxnRUFBVztBQUNYO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVkdS8uL3NyYy9hcHBsaWNhdGlvbiIsIndlYnBhY2s6Ly90dWR1Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdHVkdS8uL3NyYy9wcm9qZWN0c2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWR1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWR1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHVkdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1ZHUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmxldCBwcm9qZWN0MSA9IFByb2plY3QoMSwgJ2hvbGlkYXknKTtcclxuXHJcbmxldCB0b2RvMSA9IHtpZDogMSwgbmFtZTogJ3RvZG8gMSd9O1xyXG5sZXQgdG9kbzIgPSB7aWQ6IDIsIG5hbWU6ICd0b2RvIDInfTtcclxuXHJcbnByb2plY3QxLmFkZFRvZG8odG9kbzEpO1xyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8yKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHBhZ2UnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3RJZCwgcHJvamVjdE5hbWUpIHtcclxuXHJcbiAgICBsZXQgdG9kb0NvbnRhaW5lciA9IFtdO1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBpZCA9IHByb2plY3RJZDtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvT2JqKXtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLnB1c2godG9kb09iaik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvT2JqKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9Db250YWluZXIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYodG9kb0NvbnRhaW5lcltpXS5pZCA9PT0gdG9kb09iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIG5hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCBzZXROYW1lLCBnZXRJZCwgZ2V0TmFtZX07XHJcbn0iLCJsZXQgcHJvamVjdHNDb250YWluZXIgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE9iaikge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIucHVzaChwcm9qZWN0T2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7IHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjsgfVxyXG5cclxuZXhwb3J0IHsgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4vYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkUGFnZSgpKTtcclxuXHJcbmxldCBwcm9qZWN0MSA9IFByb2plY3QoMSwgXCJQcm9qZWN0MVwiKTtcclxubGV0IHByb2plY3QyID0gUHJvamVjdCgyLCBcIlByb2plY3QyXCIpO1xyXG5sZXQgcHJvamVjdDMgPSBQcm9qZWN0KDMsIFwiUHJvamVjdDNcIik7XHJcblxyXG5hZGRQcm9qZWN0KHByb2plY3QxKTtcclxuYWRkUHJvamVjdChwcm9qZWN0Mik7XHJcbmFkZFByb2plY3QocHJvamVjdDMpO1xyXG5cclxuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXRlbS5nZXROYW1lKCkpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==