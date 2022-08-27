import { getTodos } from "./todoscontroller";
import { publish } from "./pubsub";
import { format, isSameWeek } from 'date-fns';
import { sortTasks } from "./utilityfunctions";

let sortBy = "date";

// Create DOM elements
const weekPageContainer = document.createElement('div');
const pageTitle = document.createElement('h1');
const buttonContainer = document.createElement('div');
const addTodoBtn = document.createElement('div');
const sortingContainer = document.createElement('div');
const sortHeading = document.createElement('div');
const sortDateBtn = document.createElement('div');
const sortPriorityBtn = document.createElement('div');
const sortStatusBtn = document.createElement('div');
const todosListContainer = document.createElement('div');

// Apply attributes
weekPageContainer.classList.add('main-content-data');
addTodoBtn.classList.add('todo-button');
addTodoBtn.classList.add('pointer');
sortingContainer.classList.add('todo-sort-order');
sortDateBtn.classList.add('sort-button');
sortDateBtn.classList.add('pointer');
sortPriorityBtn.classList.add('sort-button');
sortPriorityBtn.classList.add('pointer');
sortStatusBtn.classList.add('sort-button');
sortStatusBtn.classList.add('pointer');

// Add text
pageTitle.innerText = "Week";
addTodoBtn.innerText = "Create new TuDu";
sortHeading.innerText = "Sort by:";
sortDateBtn.innerText = "Date";
sortPriorityBtn.innerText = "Priority";
sortStatusBtn.innerText = "Status";

// Bind events
addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    publish('createTodoSelected');
})
sortDateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sortBy = "date";
    renderWeekPage();
})
sortPriorityBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sortBy = "priority";
    renderWeekPage();
})
sortStatusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sortBy = "completedStatus";
    renderWeekPage();
})

const renderWeekPage = () => {

    todosListContainer.innerHTML = "";
    const todoList = getTodos();

    // Filter the array for weeks's todos
    let todoListFiltered = todoList.filter(todo => isSameWeek(new Date(), todo.getDueDate()));

    // Sort the todos
    todoListFiltered = sortTasks(sortBy, todoListFiltered);

    if(todoListFiltered.length > 1) { 
        sortingContainer.appendChild(sortHeading);
        sortingContainer.appendChild(sortDateBtn);
        sortingContainer.appendChild(sortPriorityBtn);
        sortingContainer.appendChild(sortStatusBtn);
        todosListContainer.appendChild(sortingContainer);
    }

    // Build todo list
    if(todoListFiltered.length > 0) {

        todoListFiltered.forEach((item) => {
            const todoItem = document.createElement('div');
            const checkBox = document.createElement('div');
            const title = document.createElement('div');
            const detailsBtn = document.createElement('div');
            const dueDate = document.createElement('div');
            const editBtn = document.createElement('div');
            const binBtn = document.createElement('svg');

            todoItem.classList.add('todo-item');
            checkBox.classList.add('todo-complete');
            title.classList.add('todo-title');
            detailsBtn.classList.add('todo-details');
            dueDate.classList.add('todo-date');
            editBtn.classList.add('todo-edit-icon');
            binBtn.classList.add('todo-bin-icon');

            // Add styles is todo is completed
            if(item.getCompletedStatus()) { 
                checkBox.classList.add('todo-complete-checked');
                title.classList.add('todo-title-checked');
                detailsBtn.classList.add('todo-details-checked');
                dueDate.classList.add('todo-date-checked');
                editBtn.classList.add('todo-edit-icon-checked');
                binBtn.classList.add('todo-bin-icon-checked');
            }

            // Set priority style
            if(item.getPriority() === 'high') todoItem.classList.add('high-priority');
            else if(item.getPriority() === 'medium') todoItem.classList.add('medium-priority');
            else if(item.getPriority() === 'low') todoItem.classList.add('low-priority');

            todoItem.setAttribute('todo-id', item.getId());

            title.innerText = item.getTitle();
            detailsBtn.innerText = "Details";
            dueDate.innerText = format(item.getDueDate(), 'MMM do');

            //editIcon.appendChild(editIconUse);
            todoItem.appendChild(checkBox);
            todoItem.appendChild(title);
            todoItem.appendChild(detailsBtn);
            todoItem.appendChild(dueDate);
            todoItem.appendChild(editBtn);
            todoItem.appendChild(binBtn);
            todosListContainer.appendChild(todoItem);

            // Bind events
            checkBox.addEventListener('click', () => {
                checkBox.classList.toggle('todo-complete-checked');
                title.classList.toggle('todo-title-checked');
                detailsBtn.classList.toggle('todo-details-checked');
                dueDate.classList.toggle('todo-date-checked');
                editBtn.classList.toggle('todo-edit-icon-checked');
                binBtn.classList.toggle('todo-bin-icon-checked');
                item.toggleIsCompleted();
                publish('todoIsCompletedToggled', parseInt(todoItem.getAttribute('todo-id')));
            })
            detailsBtn.addEventListener('click', () => {
                publish('todoDetailsSelected', parseInt(todoItem.getAttribute('todo-id')));
            })
            editBtn.addEventListener('click', () => {
                console.log('Edit todo selected');
                publish('todoEditSelected', parseInt(todoItem.getAttribute('todo-id')));
            })
            binBtn.addEventListener('click', () => {
                console.log('Delete todo selected');
                publish('todoDeleteSelected', parseInt(todoItem.getAttribute('todo-id')));
            })
        })
    }

    // Append content
    buttonContainer.appendChild(addTodoBtn);
    weekPageContainer.appendChild(pageTitle);
    weekPageContainer.appendChild(buttonContainer);
    weekPageContainer.appendChild(todosListContainer);

    return weekPageContainer;
}

export { renderWeekPage };