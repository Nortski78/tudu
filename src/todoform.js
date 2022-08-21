import Todo from "./todo";
import { publish } from "./pubsub";
import { getProjects } from "./projectscontroller";
import { format, parse } from 'date-fns';

function renderForm(){

    const projects = getProjects(); // needed for project id's
    
    const body = document.querySelector('body');
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
    const projectsDiv = document.createElement('div');
    const projectsList = document.createElement('select');
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
    const createBtn = document.createElement('button');

    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Todo title');
    title.classList.add('edit-title');
    title.autofocus = true;

    descDiv.classList.add('form-item');
    desc.setAttribute('rows', '10');
    desc.classList.add('edit-desc');
    descDiv.appendChild(desc);

    dateDiv.classList.add('form-item');
    datePicker.setAttribute('type', 'date');
    const setMin = format(new Date(), 'yyyy-MM-dd');
    datePicker.setAttribute('min', setMin);
    datePicker.setAttribute('value', setMin);
    datePicker.classList.add('edit-date');
    dateDiv.appendChild(datePicker);

    projectsDiv.classList.add('form-item');
    projectsList.classList.add('projects-dropdown');
    projectsList.innerHTML = '<option value="" disabled selected>Select a project</option>';

    projects.forEach(item => {
        const opt = document.createElement('option');
        opt.textContent = item.getName();
        opt.setAttribute('value', item.getId());
        projectsList.appendChild(opt);
    })
    projectsDiv.appendChild(projectsList);

    radiosDiv.classList.add('form-item');
    radiosDiv.classList.add('edit-radios');
    priorityLow.setAttribute('name', 'priority');
    priorityLow.setAttribute('id', 'low');
    priorityLow.setAttribute('value', 'low');
    priorityLow.setAttribute('checked', 'checked');
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

    radiosDiv.appendChild(priorityLow);
    radiosDiv.appendChild(priorityLowLabel);
    radiosDiv.appendChild(priorityMedium);
    radiosDiv.appendChild(priorityMediumLabel);
    radiosDiv.appendChild(priorityHigh);
    radiosDiv.appendChild(priorityHighLabel);

    inputDiv.classList.add('form-item');
    btnsDiv.classList.add('form-item');
    formContainer.classList.add('todo-form-container');
    formContent.classList.add('todo-form-content');
    form.classList.add('todo-form');
    createBtn.classList.add('create-button');
    cancelBtn.classList.add('pointer');
    
    
    formHeader.setAttribute('id', 'add-todo-form-header');    
    
    pageContainer.setAttribute('id', 'form-popup-container');

    createBtn.innerText = "Create";
    cancelBtn.innerText = "X";
    formHeader.textContent = "Create new todo...";

    formHeader.appendChild(formTitle);
    formHeader.appendChild(cancelBtn);
    btnsDiv.appendChild(createBtn);
    //btnsDiv.appendChild(cancelBtn);
    inputDiv.appendChild(title);
    formContent.appendChild(inputDiv);
    formContent.appendChild(descDiv);
    formContent.appendChild(radiosDiv);
    formContent.appendChild(dateDiv);
    if(getProjects().length > 0) {formContent.appendChild(projectsDiv)};
    formContent.appendChild(btnsDiv);
    form.appendChild(formHeader);
    form.appendChild(formContent);
    formContainer.appendChild(form);
    pageContainer.appendChild(formContainer);
    body.appendChild(pageContainer); 

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const todo = Todo(title.value, desc.value, parseInt(projectsList.value), priority, stringToDate(datePicker.value));
        publish('todoCreated', todo); 
        //InsertIntoTodoList(todo); // Used pubsub instead
        closeForm(body, pageContainer);
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeForm(body, pageContainer);
    });

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

export { renderForm };