/*
File: project-render.js
Description: Dynamically renders project cards into the Projects section.

Brief Concept Explanation:
- This file reads project objects from projectsData.
- It uses loops and DOM creation methods to generate project cards.
- This removes hardcoded HTML and makes the section data-driven.
*/

function renderProjects(projectList) {
  const projectsContainer = document.getElementById("projects-container");

  if (!projectsContainer) {
    console.log("Projects container not found.");
    return;
  }

  projectsContainer.innerHTML = "";

  if (!projectList || projectList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "text-center col-span-full text-gray-600";
    emptyMessage.textContent = "No projects found.";
    projectsContainer.appendChild(emptyMessage);
    return;
  }

  projectList.forEach(function (project) {
    const card = document.createElement("div");
    card.className =
      "group shadow-lg hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 overflow-hidden border bg-white";

    const wrapper = document.createElement("div");
    wrapper.className = "border-b pb-6 mb-6";

    const headerRow = document.createElement("div");
    headerRow.className = "flex items-center gap-3 mb-2";

    const statusBadge = document.createElement("span");
    statusBadge.className =
      "text-xs font-bold uppercase px-2 py-1 rounded-full bg-green-100 text-green-700";
    statusBadge.textContent = project.status;

    const title = document.createElement("h3");
    title.className = "text-2xl font-bold";
    title.textContent = project.name;

    headerRow.appendChild(statusBadge);
    headerRow.appendChild(title);

    const body = document.createElement("div");
    body.className = "space-y-4 mb-8";

    const description = document.createElement("p");
    description.className = "text-gray-700";
    description.textContent = project.description;

    const techWrapper = document.createElement("div");
    techWrapper.className = "flex flex-wrap gap-2";

    project.technologies.forEach(function (tech) {
      const techBadge = document.createElement("span");
      techBadge.className =
        "px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full";
      techBadge.textContent = tech;
      techWrapper.appendChild(techBadge);
    });

    body.appendChild(description);
    body.appendChild(techWrapper);

    const footer = document.createElement("div");
    footer.className = "flex gap-4 pt-6";

    const liveLink = document.createElement("a");
    liveLink.href = project.liveDemo;
    liveLink.className =
      "bg-red-400 hover:bg-green-500 hover:shadow-lg rounded transition-all duration-300 px-8 py-3";
    liveLink.textContent = "Live Demo";

    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.className =
      "bg-red-400 hover:bg-green-500 hover:shadow-lg rounded transition-all duration-300 px-8 py-3";
    githubLink.textContent = "Github";

    footer.appendChild(liveLink);
    footer.appendChild(githubLink);

    wrapper.appendChild(headerRow);
    wrapper.appendChild(body);
    wrapper.appendChild(footer);

    card.appendChild(wrapper);
    projectsContainer.appendChild(card);
  });

  console.log("Projects rendered successfully.");
}