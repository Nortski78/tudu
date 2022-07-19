import { subscribe } from "./pubsub";

let todosContainer = [];
let id = 0;

function init()
{
  subscribe('projectAdded', addTodo);
};

function addTodo(todoObj) {
    todoObj.setId(++id);
    todosContainer.push(projectObj);
    console.log("Todo added");
}

function getProjects() { return todosContainer; }

export { getProjects, addTodo, init };