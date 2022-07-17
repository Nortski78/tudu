//projectscontroller.js

import { subscribe } from "./pubsub";

function init()
{
  subscribe('projectAdded', () => console.log('working'));
}

let projectsContainer = [];

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject };