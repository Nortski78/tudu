const renderWeekPage = () => {
    const pageContainer = document.createElement('div');
    const pageHead = document.createElement('div');
    const pageContent = document.createElement('div');
    const pageTitle = document.createElement('h1');

    pageContainer.classList.add('content-wrapper');
    pageHead.classList.add('content-head');
    pageContent.classList.add('content-data');

    pageTitle.textContent = "Week";

    pageHead.appendChild(pageTitle);
    pageContent.appendChild(pageHead);
    pageContainer.appendChild(pageContent);

    return pageContainer;
}

export default renderWeekPage;