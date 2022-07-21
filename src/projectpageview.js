import { getProjects } from "./projectscontroller";
import Menu from "./menu";
import { MenuItem } from "./menuitem";
import {renderMenuItem} from "./menuitemview"
import { renderMenu } from "./menuview";
import {publish, subscribe} from "./pubsub";

export function init(){
    subscribe('todoAdded', buildTaskMenu);
};

let createTodoBtn = MenuItem('Create a new todo');
createTodoBtn.addStyleClass("add-todo-btn");
createTodoBtn.addEvent('click', () => {publish('createTodoSelected')});

const renderProjectPage = (obj) => {

    const projectsArr = getProjects();
    let project = obj.getName(); 

    const pageContainer = document.createElement('div');
    const pageHead = document.createElement('div');
    const pageContent = document.createElement('div');
    const pageTitle = document.createElement('h1');
    const btnDiv = document.createElement('div');
    const tasksMenuDiv = document.createElement('div');

    pageContainer.classList.add('content-wrapper');
    pageHead.classList.add('content-head');
    pageContent.classList.add('content-data');

    pageTitle.textContent = project;

    btnDiv.appendChild(renderMenuItem(createTodoBtn));
    pageHead.appendChild(pageTitle);
    pageContent.appendChild(pageHead);
    pageContent.appendChild(btnDiv);
    pageContainer.appendChild(pageContent);

    return pageContainer;
}

export default renderProjectPage;