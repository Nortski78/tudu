import { renderHomePage } from "./homepage";
import { renderTodayPage } from "./todaypage";
import { renderWeekPage } from "./weekpage";
import { renderProjectPage } from "./projectpage";
import { subscribe } from "./pubsub";
import differenceInCalendarWeeksWithOptions from "date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js";

let currentPage = {"value": 'home', "type": 'page'};

const mainContentDiv = document.createElement('div');
mainContentDiv.setAttribute('id', 'main-content');

const initMaincontent = () => {
    subscribe('homeButtonSelected', renderMainContent); 
    subscribe('todayButtonSelected', renderMainContent);
    subscribe('weekButtonSelected', renderMainContent);
    subscribe('projectPageSelected', renderMainContent);
    subscribe('todoAdded', updatePage); 
    subscribe('todoDeleted', updatePage);   
    subscribe('todoUpdated', updatePage);
    subscribe('projectDeleted', setCurrentPage);
}

const renderMainContent = (page = currentPage) => {
    
    // Append content
    if(page.type === 'page') {
        if(page.value === 'home') {
            mainContentDiv.innerHTML = "";
            mainContentDiv.appendChild(renderHomePage());
            currentPage = page;
        }
        else if(page.value === 'today') {
            mainContentDiv.innerHTML = "";
            mainContentDiv.appendChild(renderTodayPage());
            currentPage = page;
        }
        else if(page.value === 'week') {
            mainContentDiv.innerHTML = "";
            mainContentDiv.appendChild(renderWeekPage());
            currentPage = page;
        }
    } else if(page.type === 'project id') {
        console.log(page);
        mainContentDiv.innerHTML = "";
        mainContentDiv.appendChild(renderProjectPage(page.value));
        currentPage = page;
    }

    return mainContentDiv;
}

const updatePage = () => {

    if(currentPage.value === 'home') { 
        renderMainContent();
    } else if((currentPage.value === 'today')) {
        renderMainContent();
    } else if((currentPage.value === 'week')) {
        renderMainContent();
    } else if(currentPage.type === 'project id') {
        console.log(currentPage);
        renderMainContent();
    }
}

const setCurrentPage = (projectId) => {
    console.log(projectId);
    console.log(currentPage);
    if (currentPage.type == 'project id' && currentPage.value == projectId) {
        console.log('here');
        currentPage.value = 'home';
        currentPage.type = 'page';
        console.log(currentPage);
        updatePage();
    }
}

export { initMaincontent, renderMainContent };