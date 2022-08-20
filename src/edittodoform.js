import { publish } from "./pubsub";
import { getTodos } from "./todoscontroller";
import { format, parse } from 'date-fns';

const todos = getTodos();

// Render the form
function renderTodoEditForm(todoId){
    console.log("In renderEditForm()");

    // Cache DOM
    const body = document.querySelector('body');

    // Create elements
    const pageContainer = document.createElement('div');
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const formHeader = document.createElement('div');
    const formTitle = document.createElement('div');
    const cancelBtn = document.createElement('div');
    const formContent = document.createElement('div');
    const inputDiv = document.createElement('div');
    const title = document.createElement('input');
    const descDiv = document.createElement('div');
    const desc = document.createElement('textarea');
    const priorityLow = document.createElement('input');
    const priorityMedium = document.createElement('input');
    const priorityHigh = document.createElement('input');
    const priorityLowLabel = document.createElement('label');
    const priorityMediumLabel = document.createElement('label');
    const priorityHighLabel = document.createElement('label');
    const radiosDiv = document.createElement('div');
    const btnsDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const datePicker = document.createElement('input');
    const editBtn = document.createElement('button');

    // Set classes and attributes
    title.setAttribute('type', 'text');
    title.autofocus = true;

    descDiv.classList.add('form-item');
    desc.setAttribute('rows', '10');
    descDiv.appendChild(desc);

    dateDiv.classList.add('form-item');
    datePicker.setAttribute('type', 'date');
    const setMin = format(new Date(), 'yyyy-MM-dd');
    datePicker.setAttribute('min', setMin);

    radiosDiv.classList.add('form-item');
    priorityLow.setAttribute('name', 'priority');
    priorityLow.setAttribute('id', 'low');
    priorityLow.setAttribute('value', 'low');
    priorityLow.setAttribute('type', 'radio');
    priorityMedium.setAttribute('name', 'priority');
    priorityMedium.setAttribute('id', 'medium');
    priorityMedium.setAttribute('value', 'medium');
    priorityMedium.setAttribute('type', 'radio');
    priorityHigh.setAttribute('name', 'priority');
    priorityHigh.setAttribute('id', 'high');
    priorityHigh.setAttribute('value', 'high');
    priorityHigh.setAttribute('type', 'radio');

    priorityLowLabel.setAttribute('for', 'low');
    priorityLowLabel.innerText = 'Low';
    priorityMediumLabel.setAttribute('for', 'medium');
    priorityMediumLabel.innerText = 'Medium';
    priorityHighLabel.setAttribute('for', 'high');
    priorityHighLabel.innerText = 'High';

    inputDiv.classList.add('form-item');
    btnsDiv.classList.add('form-item');
    formContainer.classList.add('todo-form-container');
    formContent.classList.add('todo-form-content');
    form.classList.add('todo-form');

    formHeader.setAttribute('id', 'add-todo-form-header');
    cancelBtn.classList.add('pointer');

    pageContainer.setAttribute('id', 'form-popup-container');

    editBtn.innerText = "Confirm changes";
    cancelBtn.innerText = "X";    

    formTitle.textContent = "Edit todo details...";

    // Append elements
    formHeader.appendChild(formTitle);
    formHeader.appendChild(cancelBtn);
    dateDiv.appendChild(datePicker);
    radiosDiv.appendChild(priorityLow);
    radiosDiv.appendChild(priorityLowLabel);
    radiosDiv.appendChild(priorityMedium);
    radiosDiv.appendChild(priorityMediumLabel);
    radiosDiv.appendChild(priorityHigh);
    radiosDiv.appendChild(priorityHighLabel);
    btnsDiv.appendChild(editBtn);
    inputDiv.appendChild(title);
    formContent.appendChild(inputDiv);
    formContent.appendChild(descDiv);
    formContent.appendChild(radiosDiv);
    formContent.appendChild(dateDiv);
    formContent.appendChild(btnsDiv);
    form.appendChild(formHeader);
    form.appendChild(formContent);
    formContainer.appendChild(form);
    pageContainer.appendChild(formContainer);

    let projectId = '';
    let isCompelted = '';
    for(const todo of todos) {
        if(todo.getId() == todoId) {
            title.value = todo.getTitle();
            desc.value = todo.getDescription();
            projectId = todo.getProjectId();
            isCompelted = todo.getCompletedStatus();
            datePicker.setAttribute('value', format(todo.getDueDate(), 'yyyy-MM-dd'));
            const priority = todo.getPriority();

            if(priority == 'low') priorityLow.setAttribute('checked', 'checked');
            else if (priority == 'medium') priorityMedium.setAttribute('checked', 'checked');
            else if (priority == 'high') priorityHigh.setAttribute('checked', 'checked');

            break;
        }
    }

    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("In edit button click");
        const priority = document.querySelector('input[name="priority"]:checked').value;

        const updatedTodo = {
            "id": todoId,
            "title": title.value,
            "description": desc.value,
            "priority": priority,
            "dueDate": stringToDate(datePicker.value),
            "isCompleted": isCompelted,
            "projectId": projectId
        };
        console.log(updatedTodo);
        publish('todoEdited', updatedTodo); 
        closeForm(body, pageContainer);
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeForm(body, pageContainer);
    });
    
    body.appendChild(pageContainer);
    return pageContainer;
}

function closeForm(body, pageContainer) {
    body.removeChild(pageContainer);
}

function stringToDate(date){
    let result = date.replaceAll('-', '/');
    result = parse(
        result,
    'yyyy/MM/dd',
    new Date()
  )
  return result;
}

export { renderTodoEditForm };