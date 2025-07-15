document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");

  // Tus eventos originales (puedes agregar/quitar aquí)
  const eventos = [
    {
      src:"img/julio8.webp",
      titulo:"Acuerdo con autoridades estatales trabajar en coordinación para lograr el fortalecimiento de la economía y la seguridad del Estado.",
      fecha: "08 de Julio 2025"
    },
    {
      src:"img/junio10.webp",
      titulo: "Urgente que el gobierno federal voltee a ver Aguascalientes: CEEA",
      fecha: "10 de Junio 2025",
    },
    {
      src:"img/mayo13.webp",
      titulo: "Empresarios piden al gobierno federal detalles sobre la reforma al infonavit",
      fecha: "13 de Mayo 2025",
    },
    {
      src: "img/abril18.webp",
      titulo: "Viajar Seguro a la Feria de San Marcos 2025: Transportistas Lanzan Operativo Especial",
      fecha: "18 de Abril 2025"
    },
    {
      src:"img/abril16.webp",
      titulo: "El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
      fecha: "16 de Abril 2025"
    },
    {
      src: "img/abril8.webp",
      titulo: "El CEEA cierra filas por una feria 100% segura",
      fecha: "08 de Abril 2025"
    },
    {
      src: "img/marzo13.webp",
      titulo: "GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
      fecha: "13 de Marzo 2025"
    },
    {
      src: "img/marzo11.webp",
      titulo: "El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
      fecha: "11 de Marzo 2025"
    },
    {
      src: "img/marzo5.webp",
      titulo: "El Gobierno del Estado a través de SEDECYT,, en colaboración con GIRAA",
      fecha: "05 de Marzo 2025"
    },
    {
      src: "img/febrero11.webp",
      titulo: "El CEEA promueve la denuncia ciudadana para prevenir el delito",
      fecha: "11 de Febrero 2025"
    },
    {
      src: "img/febrero6.webp",
      titulo: "LA UAA y GIRAA AC unen fuerzas para impulsar la innovación y el desarrollo en Aguascalientes.",
      fecha: "06 de Febrero 2025"
    },
    {
      src: "img/febrero1.webp",
      titulo: "CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
      fecha: "01 de Febrero 2025"
    },
    {
      src: "img/enero14.webp",
      titulo: "Los empresarios de Aguascalientes tienen la capacidad y fortaleza para enfrentar los retos y desafíos del 2025: CEEA.",
      fecha: "14 de Enero 2025"
    },
    {
      src: "img/diciembre3.webp",
      titulo: "Inició la Semana del Contador 2024.",
      fecha: "03 de Diciembre 2024"
    },
    {
      src:"img/noviembre12.webp",
      titulo:"Primera imagen del CEEA",
      fecha:"12 de Noviembre 2024",
    }
  ];

  galeriaContainer.innerHTML = "";

  eventos.forEach((evento, i) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-galeria";
    tarjeta.tabIndex = 0;
    tarjeta.style.animationDelay = (i * 0.13) + "s";
    setTimeout(() => {
      tarjeta.classList.add("show");
    }, 30 + i * 130);

    const img = document.createElement("img");
    img.src = evento.src;
    img.alt = evento.titulo;

    const detalle = document.createElement("div");
    detalle.className = "detalle-evento";
    detalle.innerHTML = `<h3>${evento.titulo}</h3><span>${evento.fecha}</span>`;

    tarjeta.appendChild(img);
    tarjeta.appendChild(detalle);

    // Modal al hacer clic
    tarjeta.addEventListener("click", () => mostrarModal(evento));
    tarjeta.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { mostrarModal(evento); }
    });

    galeriaContainer.appendChild(tarjeta);
  });

  // Modal funcionalidad
  const modal = document.getElementById("modal-img");
  const cerrar = document.getElementById("cerrar-modal");
  const modalImg = document.getElementById("img-grande");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalFecha = document.getElementById("modal-fecha");

  function mostrarModal(evento) {
    modalImg.src = evento.src;
    modalImg.alt = evento.titulo;
    modalTitulo.textContent = evento.titulo;
    modalFecha.textContent = evento.fecha;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  cerrar.onclick = cerrarModal;
  modal.onclick = function(e) {
    if (e.target === modal) cerrarModal();
  };
  document.addEventListener("keydown", function(e) {
    if (modal.classList.contains("active") && (e.key === "Escape" || e.key === "Esc")) cerrarModal();
  });
  function cerrarModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Botón subir arriba
  const btnSubir = document.getElementById("btn-subir");
  window.onscroll = function() {
    if (window.scrollY > 200) btnSubir.style.display = "block";
    else btnSubir.style.display = "none";
  };
  btnSubir.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});