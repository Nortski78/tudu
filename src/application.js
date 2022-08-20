import { subscribe } from "./pubsub";
import { renderForm } from "./projectform";
import { renderForm as renderTodoForm } from "./todoform";
import { renderTodoEditForm } from "./edittodoform";
import { initProjectsController } from "./projectscontroller";
import { initTodosController } from "./todoscontroller";
import { initMaincontent } from "./maincontent";
import { initDetailsPopup } from "./detailspopup";
import { renderSidebar, updateSidebar } from "./sidebar";
import { renderProjectsModule } from "./projectsview";
import { renderMainContent } from "./maincontent";
import { initLocalStorage } from "./storage";

// Cache the DOM
const header = document.querySelector('header');
const contentContainer = document.querySelector('#content-container');
const footer = document.querySelector('footer');

function loadPage() {
    initLocalStorage();
    initProjectsController();
    initTodosController();
    initMaincontent();
    initDetailsPopup();
    contentContainer.appendChild(renderSidebar());
    contentContainer.appendChild(renderMainContent());
}

subscribe('addProjectSelected', () => {
    renderForm();
})
subscribe('projectAdded', () => { 
    renderProjectsModule();
    updateSidebar();
});
subscribe('createTodoSelected', () => {
    renderTodoForm();
})
subscribe('todoEditSelected', (todoId) => {
    renderTodoEditForm(todoId);
})

export { loadPage };