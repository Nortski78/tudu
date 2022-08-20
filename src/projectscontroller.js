//projectscontroller.js

import { publish, subscribe } from "./pubsub";
import { getProjectListFromLocalStorage } from "./storage";
import { Project } from "./project";

let storageProjects = getProjectListFromLocalStorage();
let projectsContainer = [];
let id = 0;

function initProjectsController()
{
  setId();
  populateProjectsContainer();
  subscribe('projectCreated', addProject);
  subscribe('todoAdded', addTodo);
};

function populateProjectsContainer() {
  if(storageProjects){
    storageProjects.forEach(item => {
      let project = Project();
      project.setId(item.id);
      project.setName(item.name);
      project.setTodoContainer(item.todoContainer);

      projectsContainer.push(project);
      console.log(item);
    })
  }
}

function setId(){
  if(localStorage.getItem("projectId")) {
    id = parseInt(localStorage.getItem("projectId"));
  }
}

function addProject(projectObj) {
  projectObj.setId(++id);
  projectsContainer.push(projectObj);
  localStorage.setItem("projectId", id);
  console.log("Project added");
  publish('projectAdded');
}

function addTodo(todoObj) {
  projectsContainer.forEach(item => {
    if(item.getId() === todoObj.getProjectId()) {      
      //item.addTodo(todoObj); // referenced addTodo() in project.js
      item.addTodo(todoObj.getId()); // referenced addTodo() in project.js
      return;
    }
  })
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject, initProjectsController };