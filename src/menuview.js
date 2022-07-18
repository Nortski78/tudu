import { renderMenuItem } from "./menuitemview";

function renderMenu(menu) {
    const menuList = document.createElement('ul');

    menu.getMenuItems().forEach(item => {

        const menuItem = renderMenuItem(item);
        menuList.appendChild(menuItem);

    });

    const projectsTitle = document.createElement('div');
    projectsTitle.classList.add('menu-item');
    projectsTitle.innerText = "Projects";
    menuList.appendChild(projectsTitle);

    return menuList;
}

export { renderMenu };