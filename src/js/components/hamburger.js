const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});
