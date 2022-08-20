function MenuItem(name, isActive) {

    let events = [];
    let classList = [];
    let id = "";

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
    const getId = () => id;
    const setId = (itemId) => id = itemId;

    return { getName, addEvent, getEvents, getActiveStatus, addStyleClass, getClassList, getId, setId };
}

export { MenuItem };