// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar
const Hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
