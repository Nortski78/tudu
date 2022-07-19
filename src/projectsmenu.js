import Menu from "./menu";
import { MenuItem } from "./menuitem";
import {getProjects} from "./projectscontroller";
import {publish, subscribe} from "./pubsub";

let projectsMenu = Menu();

function init() {
    subscribe('projectAdded', addMenuItem)
    getProjects().forEach(item => {
        projectsMenu.addMenuItem(item.getName())
    })
}

function addMenuItem(obj){
    //console.log(obj);
    let item = MenuItem(obj.getName());
    item.addEvent('click', () => {publish('projectSelected', item)});
    projectsMenu.addMenuItem(item);
    publish('projectsMenuBuilt', projectsMenu);
}

const getProjectsMenu = () => projectsMenu;

export { getProjectsMenu, init };