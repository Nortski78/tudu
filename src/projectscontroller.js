//projectscontroller.js

import { subscribe } from "./pubsub";

let projectsContainer = [];

function init()
{
  subscribe('projectAdded', addProject);
};

function addProject(projectObj) {
  projectsContainer.push(projectObj);
  console.log("Project added");
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject, init };