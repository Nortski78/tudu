import { renderMenuItem } from "./menuitemview";

function renderMenu(menu) {
    const menuList = document.createElement('ul');

    menu.getMenuItems().forEach(item => {

        const menuItem = renderMenuItem(item);
        menuList.appendChild(menuItem);

    });

    return menuList;
}

export { renderMenu };