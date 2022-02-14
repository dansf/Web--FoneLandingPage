const container = document.getElementById("nav-container"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

toggleMenu
  ? toggleMenu.addEventListener("click", () => {
      container.classList.add("show-menu");
    })
  : null;

closeMenu
  ? closeMenu.addEventListener("click", () => {
      container.classList.remove("show-menu");
    })
  : null;
