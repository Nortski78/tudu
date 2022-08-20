function Todo(tit, desc, proId, pri, due ) {

    let id;
    let title = tit;
    let decscription = desc;
    let dueDate = due;
    let priority = pri;
    let projectId = proId;
    let isCompleted = false;

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => decscription;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getProjectId = () => projectId;
    const getCompletedStatus = () => (isCompleted);
    const getData = () =>{
        return {
            id: id,
            title: title,
            decscription: decscription,
            dueDate: dueDate,
            projectId: projectId,
            priority: priority,
            isCompleted: isCompleted
        }
    }

    const setId = (val) => id = val;
    const setTitle = (val) => title = val;
    const setDescription = (val) => decscription = val;
    const setDueDate = (val) => dueDate = val;
    const setPriority = (val) => priority = val;
    const setCompletedStatus = (val) => isCompleted = val;
    const setProjectId = (val) => projectId = val;

    const toggleIsCompleted = () => {
        isCompleted = (isCompleted === false) ? true : false;
        console.log(getCompletedStatus());
    }

    return {getId, getTitle, getDescription, getDueDate, getPriority, getProjectId, getData, getCompletedStatus,
        setId, setTitle, setDescription, setDueDate, setPriority, setCompletedStatus, setProjectId, toggleIsCompleted};
}

export default Todo;