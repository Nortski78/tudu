const MenuItem = (name, isActive) => {

    let events = [];

    const getName = () => name;
    const getEvents = () => events;
    const getActiveStatus = () => isActive;
    function addEvent(event, handler)
    {
      events.push({ event, handler });
    }

    return { getName, addEvent, getEvents, getActiveStatus };
}

export default MenuItem;