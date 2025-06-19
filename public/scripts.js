// Simula la carga de datos desde la base de datos o API
const objetivos = [
  {
    titulo: "Objetivo Global",
    descripcion: "Impulsar la colaboración entre sectores para un desarrollo sostenible.",
    icono: "fas fa-globe"
  },
  {
    titulo: "Crecimiento Económico",
    descripcion: "Fomentar iniciativas que contribuyan al crecimiento económico local.",
    icono: "fas fa-chart-line"
  },
  {
    titulo: "Alianzas Estratégicas",
    descripcion: "Promover alianzas entre empresas y gobierno para beneficio mutuo.",
    icono: "fas fa-handshake"
  },
  {
    titulo: "Sustentabilidad",
    descripcion: "Incorporar prácticas responsables con el medio ambiente.",
    icono: "fas fa-leaf"
  },
  {
    titulo: "Comunidad",
    descripcion: "Fortalecer el sentido de comunidad y participación social.",
    icono: "fas fa-users"
  }
];

// Función para renderizar los objetivos en el DOM
function renderObjetivos() {
  const container = document.getElementById("objetivos-container");
  container.innerHTML = "";

  // Para hacer filas de 3 items máximo
  const rowSize = 3;
  for (let i = 0; i < objetivos.length; i += rowSize) {
    const fila = document.createElement("div");
    fila.className = "objetivos-cards-fila";

    const slice = objetivos.slice(i, i + rowSize);
    slice.forEach((obj, index) => {
      const card = document.createElement("article");
      card.className = `objetivos-grid-card fade-in-card delay-${i + index + 1} show`;

      card.innerHTML = `
        <i class="${obj.icono}"></i>
        <h3>${obj.titulo}</h3>
        <p>${obj.descripcion}</p>
      `;

      fila.appendChild(card);
    });

    container.appendChild(fila);
  }
}

// Llama la función cuando carga la página
window.addEventListener("DOMContentLoaded", () => {
  renderObjetivos();

  // Código del menú responsive
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
