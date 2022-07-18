function renderMenuItem(item) {
    
    const menuItem = document.createElement('li');

    item.getClassList().forEach(item => {
        menuItem.classList.add(item);
    })

    // Bind events
    item.getEvents().forEach(element => {
        menuItem.addEventListener(element.event, element.handler);
    }) 
    
    menuItem.textContent = item.getName();

    return menuItem;
}

export { renderMenuItem };