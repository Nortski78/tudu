export function Project(projectName) {

    let todoContainer = [];
    let name = projectName;
    let id = 0;

    const getName = () => name;
    const getId = () => id;
    const getTodos = () => todoContainer;

    function addTodo(todoObj){
        todoContainer.push(todoObj);
        console.log("todo added to project");
        console.log(todoObj);
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

    return { addTodo, removeTodo, setName, getId, getName, getTodos, setId};
}