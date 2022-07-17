const Menu = () => {
    let menuItems = [];

    function addMenuItem(item) {
        menuItems.push(item);
    }

    const getMenuItems = () => menuItems;

    return { addMenuItem, getMenuItems };
}

export default Menu;