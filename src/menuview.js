function renderMenu(menu) {
    const menuList = document.createElement('ul');

    menu.getMenuItems().forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item.getName();
        menuList.appendChild(menuItem);

        item.getEvents().forEach(element => {
            menuItem.addEventListener(element.event, element.handler);
        }) 
    });
    return menuList;
}

export { renderMenu };