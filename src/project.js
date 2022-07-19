export function Project(projectName) {

    let todoContainer = [];
    let name = projectName;
    let id = 0;

    const getName = () => name;
    const getId = () => id;

    function addTodo(todoObj){
        todoContainer.push(todoObj);
    }

    function removeTodo(todoObj) {
        for(let i = 0; i < todoContainer.length; ++i) {
            if(todoContainer[i].id === todoObj.id) {
                todoContainer.splice(i, 1);
            }
        }
    }

    function setName(value) {
        name = value;
    }

    function setId(val) {
        id = val;
    }

    return { addTodo, removeTodo, setName, getId, getName, setId};
}