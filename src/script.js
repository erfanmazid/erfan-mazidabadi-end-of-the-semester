const languageIcon = document.getElementById("languageicon");

const navBars = document.getElementById("nav-bars");
const navLinks = document.getElementById("nav-links");
const navClose = document.getElementById("nav-close");
const aLink = document.querySelectorAll(".a-link");

languageIcon.addEventListener("click", (e) => {
  if (
    languageIcon.src == "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png"
  ) {
    languageIcon.src = "http://127.0.0.1:5500/src/img/gb.svg";
  } else {
    languageIcon.src = "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png";
  }
});

navBars.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-500px]");
});

navClose.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-500px]");
});

aLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("left-[-500px]");
  });
});
