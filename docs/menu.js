document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarList = document.getElementById('navbarList');

  // Abre o cierra el menú al dar clic en el botón hamburguesa
  menuToggle.addEventListener('click', function() {
    navbarList.classList.toggle('open');
  });

  // Cierra el menú si se hace clic fuera de él
  document.addEventListener('click', function(event) {
    if (
      navbarList.classList.contains('open') &&
      !navbarList.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navbarList.classList.remove('open');
    }
  });

  // Cierra el menú al dar clic en cualquier enlace del menú
  navbarList.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navbarList.classList.remove('open');
    });
  });
});
