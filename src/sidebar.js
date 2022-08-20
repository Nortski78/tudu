import { renderMainMenu } from "./mainmenu";
import { renderProjectsModule } from "./projectsview";

// Create DOM Elements
const sidebarContainer = document.createElement('div');

const renderSidebar = () => {    

    // Add Id
    sidebarContainer.setAttribute('id', 'sidebar-container');

    // Append items
    sidebarContainer.appendChild(renderMainMenu());
    sidebarContainer.appendChild(renderProjectsModule());

    return sidebarContainer;
}

const updateSidebar = () => {
    sidebarContainer.innerHTML = "";
    renderSidebar();
}

export { renderSidebar, updateSidebar };