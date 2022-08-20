import { publish } from "./pubsub";

const renderMainMenu = () => {

    // Create menu elements
    const navContainer = document.createElement('nav');
    const homeBtn = document.createElement('div');
    const todayBtn = document.createElement('div');
    const weekBtn = document.createElement('div');

    // Add attributed
    navContainer.classList.add('main-menu');
    homeBtn.classList.add('menu-item');
    homeBtn.setAttribute('id', 'home-btn');
    todayBtn.classList.add('menu-item');
    todayBtn.setAttribute('id', 'today-btn');
    weekBtn.classList.add('menu-item');
    weekBtn.setAttribute('id', 'week-btn');

    // Add text content
    homeBtn.innerText = "Home";
    todayBtn.innerText = "Today";
    weekBtn.innerText = "Week";

    // Bind event listeners
    homeBtn.addEventListener('click', () => { 
        publish('homeButtonSelected', { "value": 'home', "type": 'page' });
        console.log('Home button selected');
    });
    todayBtn.addEventListener('click', () => {
        publish('todayButtonSelected', { "value": 'today', "type": 'page' });
        console.log('Today button selected');
    });
    weekBtn.addEventListener('click', () => {
        publish('weekButtonSelected', { "value": 'week', "type": 'page' });
        console.log('Week button selected');
    });

    // Append buttons to nav container
    navContainer.appendChild(homeBtn);
    navContainer.appendChild(todayBtn);
    navContainer.appendChild(weekBtn);

    return navContainer;
}

export { renderMainMenu };