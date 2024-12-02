let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("shown");
  if (window.scrollY < lastScrollY) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
  lastScrollY = window.scrollY;
});
