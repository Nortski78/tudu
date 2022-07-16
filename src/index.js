import { loadPage } from "./application";
import { addProject, getProjects } from "./projectscontroller";
import { Project } from "./project";

document.addEventListener('DOMContentLoaded', loadPage());

let project1 = Project(1, "Project1");
let project2 = Project(2, "Project2");
let project3 = Project(3, "Project3");

addProject(project1);
addProject(project2);
addProject(project3);

getProjects().forEach(item => {
    console.log(item.getName());
})