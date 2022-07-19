import { getProjectsMenu } from "./projectsmenu";
import { renderMenuItem } from "./menuitemview";

function init() {
    subscribe('projectsMenuBuilt', renderProjectsMenu);
} 

function renderProjectsMenu() {
    const projectsMenu = getProjectsMenu().getMenuItems();

    const wrapper = document.createElement('div');
    wrapper.classList.add('projects-list');
    const ul = document.createElement('ul');

    projectsMenu.forEach(item => {
        const menuItem = renderMenuItem(item);
        ul.appendChild(menuItem);
    })

    wrapper.appendChild(ul);

    return wrapper;
}

export { renderProjectsMenu };