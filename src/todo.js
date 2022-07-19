function Todo() {
    let id;
    let title;
    let decscription;
    let dueDate;
    let priority;

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => decscription;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const setId = (val) => id = val;

    return {getId, getTitle, getDescription, getDueDate, getPriority, setId};
}