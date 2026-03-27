/*
File: MERN_Stu_FebMay26Mys\W4\D5\portfolio-project\js\features\modal.js
Description: Handles opening and closing of the contact modal.

Brief Concept Explanation:
- This file uses event listeners to control the modal.
- When the user clicks the trigger button, the modal becomes visible.
- When the user clicks close or cancel, the modal is hidden again.
- This is a practical use of functions, DOM access, and event handling.
*/

function initModal() {
  const modal = document.getElementById("contact-modal");
  const modalContent = document.getElementById("modal-content");
  const modalTrigger = document.getElementById("modal-trigger");
  const modalClose = document.getElementById("modal-close");
  const formCancel = document.getElementById("form-cancel");

  if (!modal || !modalContent || !modalTrigger || !modalClose || !formCancel) {
    console.log("Modal elements not found.");
    return;
  }

  function openModal() {
    modal.classList.remove("hidden");

    // Small timeout so transition classes apply after display change
    setTimeout(function () {
      modalContent.classList.remove("scale-95", "opacity-0");
    }, 10);
  }

  function closeModal() {
    modalContent.classList.add("scale-95", "opacity-0");

    setTimeout(function () {
      modal.classList.add("hidden");
    }, 200);
  }

  modalTrigger.addEventListener("click", openModal);
  modalClose.addEventListener("click", closeModal);
  formCancel.addEventListener("click", closeModal);

  // Optional: close when clicking on backdrop
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  console.log("Modal initialized successfully.");
}