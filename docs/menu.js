document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navbarList");

  // Abrir/cerrar menú al dar click en el ícono hamburguesa
  menuToggle?.addEventListener("click", function (e) {
    e.stopPropagation();
    navList.classList.toggle("open");
    menuToggle.classList.toggle("open"); // Toggle clase para animar el ícono
  });

  // Cierra el menú si haces click fuera de él
  document.addEventListener("click", function (e) {
    if (navList.classList.contains("open")) {
      if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
        navList.classList.remove("open");
        menuToggle.classList.remove("open");
      }
    }
  });

  // Cierra el menú al seleccionar una opción
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });
});