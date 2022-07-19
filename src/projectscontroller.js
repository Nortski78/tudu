//projectscontroller.js

import { subscribe } from "./pubsub";

let projectsContainer = [];
let id = 0;

function init()
{
  subscribe('projectAdded', addProject);
};

function addProject(projectObj) {
  projectObj.setId(++id);
  projectsContainer.push(projectObj);
  console.log("Project added");
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject, init };