let projectsContainer = [];

function addProject(projectObj) {
    projectsContainer.push(projectObj);
}

function getProjects() { return projectsContainer; }

export { getProjects, addProject };