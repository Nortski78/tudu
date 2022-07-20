function Todo(tit, desc, pro, pri, due ) {

    let id;
    let title = tit;
    let decscription = desc;
    let dueDate = due;
    let priority = pri;
    let project = pro;

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => decscription;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getProject = () => project;
    const getData = () =>{
        return {
            id: id,
            title: title,
            decscription: decscription,
            dueDate: dueDate,
            project: project,
            priority: priority
        }
    }

    const setId = (val) => id = val;

    return {getId, getTitle, getDescription, getDueDate, getPriority, getProject, getData, setId};
}

export default Todo;