
import { subscribe } from "./pubsub";
import { getTodos } from "./todoscontroller";

function initLocalStorage() {
    subscribe('todoDeleted', removeFromTodoList);
    subscribe('todoAdded', insertIntoTodoList);
    subscribe('todoUpdated', editTodoList);
    subscribe('todoIsCompletedToggled', editTodoList);
    subscribe('todosFiltered', editTodoList);
}

function insertIntoTodoList(todoObj){

    let todos = JSON.parse(localStorage.getItem("todoList") || "[]");

    let todo = {
        "id": todoObj.getId(),
        "title": todoObj.getTitle(),
        "description": todoObj.getDescription(),
        "dueDate": todoObj.getDueDate(),
        "priority": todoObj.getPriority(),
        "projectId": todoObj.getProjectId(),
        "isCompleted": todoObj.getCompletedStatus()
    }

    todos.push(todo);
    updateToDosToLocalStorage(todos);
}

function removeFromTodoList(todoId) {
    let todos = JSON.parse(localStorage.getItem("todoList") || "[]");

    todos.forEach((item, index) => {
        if(item.id == todoId) {
            todos.splice(index, 1);
            return;
        }
    })

    updateToDosToLocalStorage(todos);
}

function editTodoList() {
    const todos = getTodos();
    let todoList = [];

    todos.forEach(item => {
        let todo = {
            "id": item.getId(),
            "title": item.getTitle(),
            "priority": item.getPriority(),
            "dueDate": item.getDueDate(),
            "description": item.getDescription(),
            "projectId": item.getProjectId(),
            "isCompleted": item.getCompletedStatus()
        };

        todoList.push(todo);
    })

    updateToDosToLocalStorage(todoList);
}

function updateToDosToLocalStorage(todos) {    

    localStorage.setItem("todoList", JSON.stringify(todos));
    //console.log(localStorage.getItem("todoList"));
}

function getTodoListFromLocalStorage() { return JSON.parse(localStorage.getItem("todoList")); }

function updateProjectList(projectObj){

    let projects = JSON.parse(localStorage.getItem("projectList") || "[]");

    let project = {
        "id": projectObj.getId(),
        "name": projectObj.getName(),
        "todoContainer": projectObj.getTodos()
    }

    projects.push(project);
    addProjectsToLocalStorage(projects);
}

function removeFromProjectList(projectId) {
    let projects = JSON.parse(localStorage.getItem("projectList") || "[]");

    projects.forEach((item, index) => {
        if(item.id == projectId) {
            projects.splice(index, 1);
            return;
        }
    })

    addProjectsToLocalStorage(projects);
}

function addProjectsToLocalStorage(projects) {    

    localStorage.setItem("projectList", JSON.stringify(projects));
    console.log(localStorage.getItem("projectList"));
}

function getProjectListFromLocalStorage() { return JSON.parse(localStorage.getItem("projectList")); }

export {initLocalStorage, insertIntoTodoList, removeFromTodoList, updateProjectList, getTodoListFromLocalStorage, getProjectListFromLocalStorage, removeFromProjectList};