// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu-teh").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan navbar

const teh = document.querySelector("#menu-teh");

document.addEventListener("click", function (e) {
  if (!teh.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
