// TOOGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
