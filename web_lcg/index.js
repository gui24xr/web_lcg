const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".menu_header_nav_var");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_header_nav_var_visible");

  if (navMenu.classList.contains("menu_header_nav_var")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
