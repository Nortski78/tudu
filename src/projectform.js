import { Project } from "./project";
import { publish } from "./pubsub";
import { updateProjectList } from "./storage"

function renderForm(){
    const body = document.querySelector('body');
    const pageContainer = document.createElement('div');
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const formHeader = document.createElement('div');
    const formContent = document.createElement('div');
    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    const btnsDiv = document.createElement('div');
    const createBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'project-name-input');
    input.setAttribute('placeholder', 'Project name');
    input.autofocus = true;
    inputDiv.classList.add('form-item');
    btnsDiv.classList.add('form-item');
    input.classList.add('form-input');
    formContent.setAttribute('id', 'add-project-form-content');
    formHeader.setAttribute('id', 'add-project-form-header');
    formContainer.setAttribute('id', 'add-project-form-container');
    form.setAttribute('id', 'add-project-form');
    pageContainer.setAttribute('id', 'form-popup-container');
    createBtn.innerText = "Create";
    cancelBtn.innerText = "Cancel";

    formHeader.textContent = "Create new project...";

    btnsDiv.appendChild(createBtn);
    btnsDiv.appendChild(cancelBtn);
    inputDiv.appendChild(input);
    formContent.appendChild(inputDiv);
    formContent.appendChild(btnsDiv);
    form.appendChild(formHeader);
    form.appendChild(formContent);
    formContainer.appendChild(form);
    pageContainer.appendChild(formContainer);
    body.appendChild(pageContainer); 

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = Project(input.value);
        publish('projectCreated', project);
        updateProjectList(project);
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

export { renderForm };