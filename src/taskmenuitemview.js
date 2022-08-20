function renderTaskItem(item) {

    console.log(item);

    //console.log(item.getTitle());
    
    const menuItem = document.createElement('div');
    const check = document.createElement('input');

    menuItem.setAttribute('task-id', item.getId());
    check.setAttribute('type', 'checkbox');

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

export { renderTaskItem };