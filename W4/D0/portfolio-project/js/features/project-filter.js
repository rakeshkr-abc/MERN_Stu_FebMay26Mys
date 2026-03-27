/*
File: project-filter.js
Description: Creates project filter buttons and filters the project list by category.

Brief Concept Explanation:
- This file uses arrays and filter() to show only matching projects.
- Clicking a filter button updates the rendered project list.
- This is a practical use of conditions, arrays, event listeners, and DOM updates.
*/

let activeProjectCategory = "All";

function initProjectFilter() {
  const filterContainer = document.getElementById("project-filters");

  if (!filterContainer) {
    console.log("Project filter container not found.");
    return;
  }

  // Build unique category list from projectsData
  const categories = ["All"];

  projectsData.forEach(function (project) {
    if (!categories.includes(project.category)) {
      categories.push(project.category);
    }
  });

  filterContainer.innerHTML = "";

  categories.forEach(function (category) {
    const button = document.createElement("button");
    button.textContent = category;
    button.className =
      "project-filter-btn px-4 py-2 rounded-full border font-semibold bg-white hover:bg-blue-100 transition";

    if (category === activeProjectCategory) {
      button.classList.add("bg-blue-600", "text-white");
    }

    button.addEventListener("click", function () {
      activeProjectCategory = category;
      updateFilteredProjects();
      updateActiveFilterButtons();
    });

    filterContainer.appendChild(button);
  });

  console.log("Project filters initialized.");
}

function updateFilteredProjects() {
  let filteredProjects = projectsData;

  if (activeProjectCategory !== "All") {
    filteredProjects = projectsData.filter(function (project) {
      return project.category === activeProjectCategory;
    });
  }

  renderProjects(filteredProjects);
}

function updateActiveFilterButtons() {
  const buttons = document.querySelectorAll(".project-filter-btn");

  buttons.forEach(function (button) {
    button.classList.remove("bg-blue-600", "text-white");

    if (button.textContent === activeProjectCategory) {
      button.classList.add("bg-blue-600", "text-white");
    }
  });
}