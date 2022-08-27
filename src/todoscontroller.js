import { publish, subscribe } from "./pubsub";
import { getTodoListFromLocalStorage } from "./storage";
import { parseISO } from "date-fns";
import Todo from "./todo";

let storageTodos = getTodoListFromLocalStorage();
let todosContainer = [];
let id = 0;

const getId = () => id;

function initTodosController()
{
  setId();
  populateTodosContainer();
  subscribe('todoCreated', addTodo);
  subscribe('todoDeleteSelected', deleteTodo);
  subscribe('todoEdited', updateTodo);
  subscribe('projectDeleted', filterTodos)
};

function populateTodosContainer() {
  if(storageTodos){
    storageTodos.forEach(item => {
      let todo = Todo();
      todo.setId(item.id);
      todo.setTitle(item.title);
      todo.setDescription(item.description);
      todo.setPriority(item.priority);
      todo.setCompletedStatus(item.isCompleted);
      todo.setDueDate(parseISO(item.dueDate));
      if(item.projectId) todo.setProjectId(item.projectId);

      todosContainer.push(todo);
      //console.log(item);
    })
  }
}

function addTodo(todoObj) {
    todoObj.setId(++id);
    todosContainer.push(todoObj);
    localStorage.setItem("todoId", id);
    publish('todoAdded', todoObj);
    console.log("Todo added");
}

function deleteTodo(id) {
  todosContainer.forEach((item, index) => {
    if(item.getId() == id){
      todosContainer.splice(index, 1);      
      publish('todoDeleted', id);
      return;
    }
  })
}

function updateTodo(todoObj) {
  todosContainer.forEach((item) => {
    if(item.getId() == todoObj.id){

      item.setTitle(todoObj.title);
      item.setDescription(todoObj.description);
      item.setPriority(todoObj.priority);
      item.setDueDate(todoObj.dueDate);

      publish('todoUpdated');
    }
  })
}

function filterTodos(projectId) {
  todosContainer = todosContainer.filter(obj => {
    return obj.getProjectId() != projectId;
  })
  console.log(todosContainer);
  publish('todosFiltered', {"value": "home", "type": "page"});
}

function getTodos() { return todosContainer; }

function setId(){
  if(localStorage.getItem("todoId")) {
    id = parseInt(localStorage.getItem("todoId"));
  }
}

export { getTodos, addTodo, initTodosController, getId, deleteTodo, updateTodo };