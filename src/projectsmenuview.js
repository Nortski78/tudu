import { getProjectsMenu } from "./projectsmenu"

console.log("in projectsmenuview");

/* function init() {
    console.log("in init");
    subscribe('projectsMenuBuilt', renderProjectsMenu);
} */

function renderProjectsMenu() {
    console.log("in renderProjectsMenu()");
    const projectsMenu = getProjectsMenu().getMenuItems();

    const wrapper = document.createElement('div');
    wrapper.classList.add('projects-list');
    const ul = document.createElement('ul');

        projectsMenu.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item.getName();
        ul.appendChild(menuItem);
        
    })

    wrapper.appendChild(ul);

    return wrapper;
}

export { renderProjectsMenu };