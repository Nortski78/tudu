//projectscontroller.js

import { subscribe } from "./pubsub";

let projectsContainer = [];
let id = 0;

function init()
{
  subscribe('projectAdded', addProject);
  subscribe('todoAdded', addTodo);
};

function addProject(projectObj) {
  projectObj.setId(++id);
  projectsContainer.push(projectObj);
  console.log("Project added");
}

function addTodo(todoObj) {
  console.log(`in addTodo ${todoObj}`);
  projectsContainer.forEach(item => {
    if(item.getId() === todoObj.getProject()) {      
      item.addTodo(); // referenced addTodo() in project.js
      return;
    }
  })
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject, init };