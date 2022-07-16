//projectscontroller.js

import { subscribe } from "./pubsub";

let projectsContainer = [];
console.log('I am Executed muuuuuhahahah');
subscribe('projectAdded', (data) => console.log('working'));

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject };