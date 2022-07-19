import { MenuItem } from "./menuitem";
import Menu from "./menu";
import { renderMenu } from "./menuview";
import { renderMenuItem } from "./menuitemview";
import { publish, subscribe, getEvents } from "./pubsub";
import renderHomePage from "./homepage";
import renderTodayPage from "./todaypage";
import renderWeekPage from "./weekpage";
import { renderForm } from "./projectform";
import { init as initProjectController } from "./projectscontroller";
import { init as initProjectsMenu } from "./projectsmenu";
import { init as initProjectsMenuView } from "./projectsmenuview";
import { renderProjectsMenu } from "./projectsmenuview";
import renderProjectPage from "./projectpageview";

// Cache the DOM
const body = document.querySelector('body');
const header = document.querySelector('header');
const navContainer = document.querySelector('nav');
const contentContainer = document.querySelector('#main-content');

function init() {
    initProjectController();
    initProjectsMenu();
    //initProjectsMenuView();
    let homeBtn = MenuItem("Home");
    homeBtn.addStyleClass('menu-item');
    homeBtn.addStyleClass('home-btn');
    homeBtn.addEvent('click', () => {publish('homeButtonSelected')});
    let todayBtn = MenuItem("Today");
    todayBtn.addEvent('click', () => {publish('todayButtonSelected')});
    todayBtn.addStyleClass('menu-item');
    todayBtn.addStyleClass('today-btn');
    let weekBtn = MenuItem("Week");
    weekBtn.addStyleClass('menu-item');
    weekBtn.addStyleClass('week-btn');
    weekBtn.addEvent('click', () => {publish('weekButtonSelected')});

    let mainMenu = Menu();
    mainMenu.addMenuItem(homeBtn);
    mainMenu.addMenuItem(todayBtn);
    mainMenu.addMenuItem(weekBtn);

    let addProjectButton = MenuItem("Add Project");
    addProjectButton.addStyleClass("add-project-btn");
    addProjectButton.addEvent('click', () => {publish('addProjectSelected')});

    navContainer.appendChild(renderMenu(mainMenu));
    navContainer.appendChild(renderMenuItem(addProjectButton));
    contentContainer.appendChild(renderHomePage());
};

function loadPage() {
    init();
}

const updateContent = (() => {
    subscribe('homeButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderHomePage());
    })
    subscribe('todayButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderTodayPage());
    })
    subscribe('weekButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderWeekPage());
    })
    subscribe('addProjectSelected', () => {
        renderForm();
    })
    subscribe('projectsMenuBuilt', () => {
        const div = document.createElement('div');
        div.classList.add('projects-list');
        navContainer.appendChild(div);
        const navUl = document.querySelector('nav ul');
        const node = document.querySelector('.projects-list');
        navContainer.removeChild(node);
        navUl.after(renderProjectsMenu());
    })
    subscribe('projectSelected', (obj) => {
        contentContainer.innerHTML ="";
        contentContainer.appendChild(renderProjectPage(obj));
    })
    
})();

export { loadPage };