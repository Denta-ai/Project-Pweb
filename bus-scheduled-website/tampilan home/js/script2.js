// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// slide menu diklik
document.querySelector("#slide-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar
const slide = document.querySelector("#slide-menu");

document.addEventListener("click", function (e) {
  if (!slide.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
