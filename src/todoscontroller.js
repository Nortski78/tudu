//todoscontroller.js
import { publish, subscribe } from "./pubsub";

let todosContainer = [];
let id = 0;

function init()
{
  subscribe('todoAdded', addTodo);
};

function addTodo(todoObj) {
    todoObj.setId(++id);
    todosContainer.push(todoObj);
    todosContainer.sort((a, b) => (a.getDueDate() - b.getDueDate()));
    publish('todosSorted');
}

function getTodos() { return todosContainer; }

export { getTodos, addTodo, init };