//todoscontroller.js
import { subscribe } from "./pubsub";

let todosContainer = [];
let id = 0;

function init()
{
  subscribe('todoAdded', addTodo);
};

function addTodo(todoObj) {
    todoObj.setId(++id);
    todosContainer.push(todoObj);
}

function getTodos() { return todosContainer; }

export { getTodos, addTodo, init };