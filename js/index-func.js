// Code for displaying current year in footer
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("current-year");
yearElement.textContent = currentYear;

// Code for toggling navbar
const navbarToggle = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-nav");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});