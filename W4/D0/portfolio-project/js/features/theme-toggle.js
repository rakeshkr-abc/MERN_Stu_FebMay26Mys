/*
File: MERN_Stu_FebMay26Mys\W4\D5\portfolio-project\js\features\theme-toggle.js
Description: Enables light/dark theme switching and stores user preference.

Brief Concept Explanation:
- This feature allows users to toggle between light and dark mode.
- localStorage is used to remember the selected theme.
- When the page loads, the saved theme is applied automatically.
*/

function initThemeToggle() {

  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleBtn) {
    console.log("Theme toggle button not found.");
    return;
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("portfolio-theme", "dark");
      console.log("Dark mode enabled");
    } else {
      localStorage.setItem("portfolio-theme", "light");
      console.log("Light mode enabled");
    }

  });

}