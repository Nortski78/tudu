import MenuItem from "./menuitem";
import Menu from "./menu";
import { renderMenu } from "./menuview";
import { publish, subscribe } from "./pubsub";
import renderHomePage from "./homepage";
import renderTodayPage from "./todaypage";
import renderWeekPage from "./weekpage";

// Cache the DOM
const header = document.querySelector('header');
const navContainer = document.querySelector('nav');
const contentContainer = document.querySelector('#main-content');

function init() {
    let homeBtn = MenuItem("Home");
    homeBtn.addEvent('click', () => {publish('homeButtonSelected')});
    let todayBtn = MenuItem("Today");
    todayBtn.addEvent('click', () => {publish('todayButtonSelected')});
    let weekBtn = MenuItem("Week");
    weekBtn.addEvent('click', () => {publish('weekButtonSelected')});

    let mainMenu = Menu();
    mainMenu.addMenuItem(homeBtn);
    mainMenu.addMenuItem(todayBtn);
    mainMenu.addMenuItem(weekBtn);

    navContainer.appendChild(renderMenu(mainMenu));
    contentContainer.appendChild(renderHomePage());
};

function loadPage() {
    console.log('loading page');
    init();
}

const updateContent = (() => {
    subscribe('homeButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderHomePage());
    })
    subscribe('todayButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderTodayPage());
    })
    subscribe('weekButtonSelected', () => {
        contentContainer.innerHTML = "";
        contentContainer.appendChild(renderWeekPage());
    })
})();

export { loadPage };