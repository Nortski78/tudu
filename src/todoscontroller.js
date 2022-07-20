//todoscontroller.js
import { getProjects } from "./projectscontroller";
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
    console.log("Todo added");
}

function getTodos() { return projectsContainer; }

export { getTodos, addTodo, init };