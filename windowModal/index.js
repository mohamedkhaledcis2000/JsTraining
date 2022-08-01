"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

// open modals function
const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
  modal.getElementsByClassName.display = "block";
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// function used to close modal and overlay
const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};
// add the function to modal
btnCloseModal.addEventListener("click", closeModal);
// close modal when clicking on overlay
overlay.addEventListener("click", closeModal);

// js keyboard events (keyup , keydown , keypress)
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});
