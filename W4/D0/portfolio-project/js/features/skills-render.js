/*
File: MERN_Stu_FebMay26Mys\W4\D5\portfolio-project\js\features\skills-render.js
Description: Dynamically renders the Skills section using JavaScript data.

Brief Concept Explanation:
- This file reads skill data from the skillsData array.
- It uses a loop to go through each skill object.
- It creates HTML elements using createElement().
- It inserts those elements into the DOM using appendChild().
- This is a practical use of arrays, objects, loops, and DOM manipulation.
*/

function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");

  // Safety check:
  // If the container is not present, stop execution.
  if (!skillsContainer) {
    console.log("Skills container not found.");
    return;
  }

  // Clear existing content before rendering.
  // This avoids duplicate cards if renderSkills() is called again.
  skillsContainer.innerHTML = "";

  // Loop through each skill object from skillsData
  skillsData.forEach(function (skill) {
    // Create the outer card
    const card = document.createElement("div");
    card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

    // Create icon box
    const iconBox = document.createElement("div");
    iconBox.className =
      "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

    // Create icon text
    const iconText = document.createElement("span");
    iconText.className = "text-2xl text-white font-bold";
    iconText.textContent = skill.shortLabel;

    // Put icon text inside icon box
    iconBox.appendChild(iconText);

    // Create skill name
    const skillName = document.createElement("h3");
    skillName.className = "text-xl font-bold mb-2";
    skillName.textContent = skill.name;

    // Create skill description
    const skillDescription = document.createElement("p");
    skillDescription.className = "text-sm";
    skillDescription.textContent = skill.description;

    // Append all child elements to card
    card.appendChild(iconBox);
    card.appendChild(skillName);
    card.appendChild(skillDescription);

    // Append card to skills container
    skillsContainer.appendChild(card);
  });

  console.log("Skills rendered successfully.");
}