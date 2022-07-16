//projectscontroller.js

import { subscribe } from "./pubsub";

let projectsContainer = [];

subscribe('projectAdded', () => console.log('working'));

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject };