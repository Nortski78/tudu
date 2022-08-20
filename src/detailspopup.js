import { subscribe } from "./pubsub";
import { getTodos } from "./todoscontroller";
import { format } from "date-fns"
import { getProjects } from "./projectscontroller";

const initDetailsPopup = () => {
    subscribe('todoDetailsSelected', renderDetails);
}

const projects = getProjects();
const todoDetails = getTodos();

// Cache DOM
const body = document.querySelector('body');

// Create elements
const pageContainer = document.createElement('div');
const detailsContainer = document.createElement('div');
const formHeader = document.createElement('div');
const formTitle = document.createElement('div');
const cancelBtn = document.createElement('div');
const titleDiv = document.createElement('div');
const title = document.createElement('h1');
const detailsDiv = document.createElement('div');
const d1 = document.createElement('div');
const d2 = document.createElement('div');
const d1ul = document.createElement('ul');
const d2ul = document.createElement('ul');

// Set classes and attributes
pageContainer.setAttribute('id', 'details-popup-container');
detailsContainer.classList.add('todo-form-container');
detailsDiv.classList.add('todo-details-popup-data');
formHeader.setAttribute('id', 'add-todo-form-header');
cancelBtn.classList.add('pointer');

// Add text
formTitle.innerText = "Edit todo details...";
cancelBtn.innerText = "X";

// Append elements
formHeader.appendChild(formTitle);
formHeader.appendChild(cancelBtn);
d1.appendChild(d1ul);
d2.appendChild(d2ul);
detailsDiv.appendChild(d1);
detailsDiv.appendChild(d2);
titleDiv.appendChild(title);
detailsContainer.appendChild(formHeader);
detailsContainer.appendChild(titleDiv);
detailsContainer.appendChild(detailsDiv);
pageContainer.appendChild(detailsContainer);

const renderDetails = (id) => {

    d1ul.innerHTML = "";
    d2ul.innerHTML = "";

    for(const todo of todoDetails) {
        if(todo.getId() == id) {

            // Retrieve project name if todo is assigned to one
            let project = '';
            if(isNaN(todo.getProjectId())) {
                project = 'None';
            } else {
                for(const pro of projects) {
                    if(pro.getId() == todo.getProjectId()) project = pro.getName();
                }
            }

            console.log(todo.getData());
            title.innerText = todo.getTitle();
            const headings = `
            <li><strong>Project:</strong></li>
            <li><strong>Priority:</strong></li>
            <li><strong>Due Date:</strong></li>
            <li><strong>Details:</strong></li>
            `;
            const data = `
            <li>${project}</li>
            <li>${capitalizeFirstLetter(todo.getPriority())}</li>
            <li>${format(todo.getDueDate(), 'MMMM do, yyyy')}</li>
            <li>${todo.getDescription()}</li>`;
            d1ul.insertAdjacentHTML("afterbegin", headings);
            d2ul.insertAdjacentHTML("afterbegin", data);
            //body.appendChild(pageContainer);
            break;
        }
    }

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeForm();
    });

    body.appendChild(pageContainer);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function closeForm() {
    console.log("Closing popup");
    body.removeChild(pageContainer);
}

export { initDetailsPopup };


