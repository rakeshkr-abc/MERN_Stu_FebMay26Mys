/*
File: MERN_Stu_FebMay26Mys\W4\D5\portfolio-project\js\features\contact-validation.js
Description: Validates the contact form inside the modal.

Brief Concept Explanation:
- This file reads form input values and checks whether they are valid.
- preventDefault() stops the form from submitting until validation passes.
- Dynamic messages help the user understand what needs to be corrected.
- This is a practical use of form handling, conditions, and DOM updates.
*/

function initContactValidation() {
  const contactForm = document.getElementById("contact-form");
  const contactName = document.getElementById("contact-name");
  const contactEmail = document.getElementById("contact-email");
  const formMessage = document.getElementById("form-message");

  if (!contactForm || !contactName || !contactEmail || !formMessage) {
    console.log("Contact form elements not found.");
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();

    formMessage.textContent = "";
    formMessage.className = "text-sm";

    // Name validation
    if (name === "") {
      formMessage.textContent = "Name is required.";
      formMessage.classList.add("text-red-500");
      contactName.focus();
      return;
    }

    if (name.length < 3) {
      formMessage.textContent = "Name must be at least 3 characters long.";
      formMessage.classList.add("text-red-500");
      contactName.focus();
      return;
    }

    // Email validation
    if (email === "") {
      formMessage.textContent = "Email is required.";
      formMessage.classList.add("text-red-500");
      contactEmail.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("text-red-500");
    contactEmail.focus();
    return;
    }

    // Success state
    formMessage.textContent = "Message submitted successfully.";
    formMessage.classList.add("text-green-600");

    console.log("Valid contact form data:", {
      name: name,
      email: email
    });

    // Optional: reset form after successful validation
    contactForm.reset();
  });

  // Clear message when user starts correcting the inputs
  contactName.addEventListener("input", function () {
    formMessage.textContent = "";
  });

  contactEmail.addEventListener("input", function () {
    formMessage.textContent = "";
  });

  console.log("Contact form validation initialized successfully.");
}