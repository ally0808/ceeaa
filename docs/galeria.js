document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");

  // Tus eventos originales (puedes agregar/quitar aquí)
  const eventos = [
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/504849305_644380141970560_6797082119034026719_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UlFj67r4FT8Q7kNvwFTgWVQ&_nc_oc=AdkT-InBSYojccuELfjtLxkv4epPNjfQeaNmshvKld6zzgzGFnALWY856uNrGAHwb65hTOqJXuRTYqhPARMwofws&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=aeLr-SDj0U4mAadYrxDIkg&oh=00_AfNUyQi7sdO4F1Zkl1x4-gvjqHgsUIph5CwyEd1Ord4zvA&oe=686200C1",
      titulo: "Urgente que el gobierno federal voltee a ver Aguascalientes: CEEA",
      fecha: "10 de Junio 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/492190590_605035295905045_9043277596684626273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xsvO09hQ1CsQ7kNvwEzBWXy&_nc_oc=AdnolREA4qHqbrjJvJlfL4_mbHEgXfISBY9bWE1130NaJwx6KP7toOZXYvoNuZSIck0eFa_XHotKH-Y_9RYlf1s4&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=hKWOG4orv6aPna0oAdIgAw&oh=00_AfMOKM9v2NMgwY6rI2U1xFcJHy4MO3Ym7Leiu72web4gbw&oe=68621F03",
      titulo: "Viajar Seguro a la Feria de San Marcos 2025: Transportistas Lanzan Operativo Especial",
      fecha: "18 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/491939019_603503506058224_8581665580798598176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gprIopKTm5IQ7kNvwG9iAuO&_nc_oc=Adkx9IZP3wzb95G1AUeSi4TglFVhC2X0V-snUgxnzAO7YedF23CTk4tIQl1UABbVcIUifjtwdkonj40eY39Nyd8Z&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=pOb9CMlW79plwiz6kCLj1w&oh=00_AfMO1-tqZ3S1VOg2MpeSMIxQnixC-Dwnhq1gW9MDlrcigw&oe=6861F9B7",
      titulo: "El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
      fecha: "16 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/489433164_597099523365289_7898538788796945129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S8rduYadidAQ7kNvwE3T0bK&_nc_oc=AdkDGLACIV9ILARt4Rn-ZdfUTGwYU_YfT6ERtH_8sMSpr25HX3k0UwuF_vchT8FXiiPOAoNLBd8bYMLCTLXcs-QK&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=LFLldgkgx8N_evH76HPhdQ&oh=00_AfN53atzyQi8tu5RSIzyZ9JlZNiTsAo0MZv5ZMp24EF3yw&oe=68623017",
      titulo: "El CEEA cierra filas por una feria 100% segura",
      fecha: "08 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/496004947_1236559725144933_7308817332838522235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WEgI_iyyI5sQ7kNvwGpX1gZ&_nc_oc=AdkWgqQuT3x9cwxg9zd_6GjJDzxwbo0c_0o3R7rKQa75EhyaQzKuzWdBc8FwyujBA10mIf04DuBM4UkX7q_d2LZz&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=fqqPigVlp5QbxOzMSRVgww&oh=00_AfNL1EDJsMCO-m3KXsC6BcBFV2WDlXOaNPpsP-v4Fef3qw&oe=686212BA",
      titulo: "GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
      fecha: "13 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/484091208_575217008886874_4501387254240386964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PYU6Xw5No7QQ7kNvwGJ8gN6&_nc_oc=Adk50RMs7lJ2KBF1LupTAINYbScx1S_USDsU895-Tl21uWct42ZzWuyzf2IqtFN3Kjzc_SYhdoPgxfhtAUBdxkXO&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=307CW-Gl1IbiT5h6S82Adw&oh=00_AfP2YFgnmxYFH56uYFCmvGJyQxRP65btRwB5-U2TAgiQBQ&oe=68620CF2",
      titulo: "El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
      fecha: "11 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/483806998_575979768810598_1438490151524394419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sThBvNqaASwQ7kNvwHpLtRP&_nc_oc=AdkqNMglXHtSpOw-69GEJT2rdFXBQ5Qi5FpeZpagrdzGVU-pdM-kUfORfCZljkV6INewJgqF_ck2PgQO2qF7ZD98&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=wXtvWppdJVPahJaHhgxMeg&oh=00_AfMHxWqZ85XfHE4e5wfuD-WdNMG57WyC9xwC0OpzI7OI4g&oe=6861FE62",
      titulo: "El CEEA promueve la denuncia ciudadana para prevenir el delito",
      fecha: "11 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482203547_573092015766040_1871465784854559755_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j2TXIqo6pUYQ7kNvwEBxpzS&_nc_oc=AdkZaiwZdjZrFrSm84rZXClcWaT9rqyuHcQCx6hi-Kqp_6Va1NVm8eMxyU2Zs7XoJoG_u6wSgcOy4e0wnggxHV6Q&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=OhwWBMCibL-hHtZzSGm75g&oh=00_AfOtoH7iMBsBUZO44FewYnBg7uB2FUee0ehy4qfqtzxOXg&oe=68622054",
      titulo: "LA UAA y GIRAA AC unen fuerzas para impulsar la innovación y el desarrollo en Aguascalientes.",
      fecha: "06 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481152949_573088722433036_6356192112832417906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NyDp3JsrGh0Q7kNvwHgwRE1&_nc_oc=AdmZP6nweh9lYRIoBwekZc2eh1oBPdc_YKIXoPu3IGGsVzez5bNUuesDl_ohNy_OiFZD5jV15TsjVMmxfDJZlGPD&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=pImr2K_x4JrQe0htbcXpaQ&oh=00_AfOaLdS7vYCFKJbD8W2iSw12VMvA-2sO2KYmcy5eGee8ow&oe=6861FEBB",
      titulo: "CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
      fecha: "01 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481994085_573081429100432_8289302445105742167_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I2bAYZXN8AQQ7kNvwG8fcQ2&_nc_oc=AdljDADmEwPP4L01GbRQpO9JM4CHlUaZCm-0a8z5qTacNt0d1hmrNW3nXcpAh34KP83_zrelmGBuUaGjbortUrby&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A430SCgTeMy0ZgxIZ9IBvg&oh=00_AfNk2F1Ug87bdOjGFFbaPF2-zU20mztqvmcPYlXZud9HWQ&oe=686212EC",
      titulo: "El Vicepresidente  del Clúster Automotriz GIRAA Mel Wilhem, tomó protesta como parte del Comité Estatal de Educación Dual en Educación Media Superior... ¡Felicidades!.",
      fecha: "23 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481985924_572944875780754_782459568704490221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gFWxl4YHTI0Q7kNvwH3y0nn&_nc_oc=Adn5_uWvIjMuSP14NwBPd7LerbxHVgrQbRXMYfoH45UHiho9hqxVkD5bvZgq8y411McKX1lIZ_tdyFSQA2qYovpD&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=6z3GLbYY86Fsq9ez9Ah48g&oh=00_AfPoerzogDS_yD_I9jrqgDoXPBswvFwkK6SEAmekbkOWKA&oe=6862130D",
      titulo: "Los empresarios de Aguascalientes tienen la capacidad y fortaleza para enfrentar los retos y desafíos del 2025: CEEA.",
      fecha: "23 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482303519_572873712454537_1604038815095986070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OZbPpEpwilYQ7kNvwGO8MuJ&_nc_oc=AdmmL7VR1uLmmyYCi7jzBrkBwc_QhSc16kCoxTN7zcQR1k2Yj7Kh6k2cYlEvKcQ1fVNKSrQPaNQBzM0XEKw1enQM&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=M6ZumDY6JRyePeSVXAedEg&oh=00_AfOmpg0V4LahbzVoxPRgooesfZ1i_rSchbwQDzmbsCvJSQ&oe=68620B28",
      titulo: "Inició la Semana del Contador 2024.",
      fecha: "03 de Diciembre 2024"
    },
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