/*
File: main.js
Description: Entry point for initializing portfolio features.

Brief Concept Explanation:
- This file runs after the HTML is loaded.
- It calls different feature functions in one place.
- This keeps the project organized and modular.
*/

/*
File: main.js
Description: Entry point for initializing portfolio features.

Brief Concept Explanation:
- This file starts feature modules after the page is loaded.
- Keeping initialization in one place makes the project easier to manage.
*/

document.addEventListener("DOMContentLoaded", function () {
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    renderProjects(projectsData);
    initProjectFilter();
});