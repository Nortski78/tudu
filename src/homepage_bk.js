import Menu from "./menu";
import { MenuItem } from "./menuitem";
import {renderMenuItem} from "./menuitemview"
import { renderTaskMenu } from "./taskmenuview";
import {publish, subscribe} from "./pubsub";
import { getTodos } from "./todoscontroller";

export function init(){
    subscribe('todoAdded', buildTaskMenu);
    //subscribe('todosSorted', renderTasks);
};

let createTodoBtn = MenuItem('Create a new todo');
createTodoBtn.addStyleClass("add-todo-btn");
createTodoBtn.addEvent('click', () => {publish('createTodoSelected')});

let tasksMenu = Menu();

function buildTaskMenu() {
    const tasks = getTodos();

    tasks.forEach(item => {
        const btn = MenuItem(item.getTitle());
        btn.addStyleClass('task-menu-item');
        tasksMenu.addMenuItem(btn);
    });

    publish('taskMenuBuilt');
}

const renderHomePage = () => {
    const pageContainer = document.createElement('div');
    const pageHead = document.createElement('div');
    const pageContent = document.createElement('div');
    const pageTitle = document.createElement('h1');
    const btnDiv = document.createElement('div');
    const tasksMenuDiv = document.createElement('div');

    pageContainer.classList.add('content-wrapper');
    pageHead.classList.add('content-head');
    pageContent.classList.add('content-data');

    pageTitle.textContent = "Home";

    btnDiv.appendChild(renderMenuItem(createTodoBtn));
    tasksMenuDiv.appendChild(renderTaskMenu(tasksMenu));
    pageHead.appendChild(pageTitle);
    pageContent.appendChild(pageHead);   
    pageContent.appendChild(btnDiv); 
    pageContent.appendChild(tasksMenuDiv);
    pageContainer.appendChild(pageContent);

    return pageContainer;
}

export default renderHomePage;