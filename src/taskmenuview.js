import { renderTaskItem } from "./taskmenuitemview";

function renderTaskMenu(menu) {
    const menuList = document.createElement('div');

    menu.getMenuItems().forEach(item => {

        const menuItem = renderTaskItem(item);
        menuList.appendChild(menuItem);

    });

    return menuList;
}

export { renderTaskMenu };