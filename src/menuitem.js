function MenuItem(name, isActive) {

    let events = [];
    let classList = [];

    const getName = () => name;
    const getEvents = () => events;
    const getActiveStatus = () => isActive;
    function addStyleClass(value) {
      classList.push(value);
    }
    function addEvent(event, handler)
    {
      events.push({ event, handler });
    }
    const getClassList = () => classList;

    return { getName, addEvent, getEvents, getActiveStatus, addStyleClass, getClassList };
}

export { MenuItem };