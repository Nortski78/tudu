import { subscribe } from "./pubsub";

let todosContainer = [];
let id = 0;

const getId = () => id;

function initTodoController()
{
  subscribe('todoAdded', addTodo);
};

function addTodo(todoObj) {
    todoObj.setId(++id);
    todosContainer.push(todoObj);
    console.log("Todo added");
}

function getTodos() { return todosContainer; }

export { getTodos, addTodo, initTodoController, getId };