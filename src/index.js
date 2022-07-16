//index.js

import { loadPage } from "./application";
import { publish, getEvents } from "./pubsub";

document.addEventListener('DOMContentLoaded', loadPage());

const body = document.querySelector('body');
const div = document.createElement('div');
const button = document.createElement('button');
button.textContent = "Add Project";

button.addEventListener('click', () => {
    publish('projectAdded', 1);
    console.log(getEvents());
});

div.appendChild(button);
body.appendChild(div);