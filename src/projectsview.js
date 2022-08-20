import { getProjects } from "./projectscontroller";
import { publish } from "./pubsub";

const projects = getProjects();

const renderProjectsModule = () => {

    // Create DOM elements
    const projectsDiv = document.createElement('div');
    const headingDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const projectsListDiv = document.createElement('div');
    const addProjectBtn = document.createElement('div');

    if( projects.length > 0) {
        projects.forEach(item => {
            const projectDiv = document.createElement('div');
            projectDiv.setAttribute('project-id', item.getId());
            projectDiv.classList.add('project-button');
            projectDiv.classList.add('pointer');
            projectDiv.innerText = item.getName();
            projectsListDiv.appendChild(projectDiv);

            // Bind events
            projectDiv.addEventListener('click', () => {
                const projectId = parseInt(projectDiv.getAttribute('project-id'));
                publish('projectPageSelected', { "value": projectId, "type": 'project id' });
            });
        })        
    }

    // Add classes
    projectsDiv.classList.add('projects-module');
    projectsListDiv.classList.add('projects-list');
    addProjectBtn.classList.add('add-project-btn');

    // Add text
    heading.innerText = "Projects";
    addProjectBtn.innerText = "Project";

    // Append elements
    headingDiv.appendChild(heading);
    projectsDiv.appendChild(headingDiv);
    if(projects.length > 0) projectsDiv.appendChild(projectsListDiv);
    projectsDiv.appendChild(addProjectBtn);

    // Bind events
    addProjectBtn.addEventListener('click', () => { publish('addProjectSelected') });

    return projectsDiv;
}

export { renderProjectsModule };