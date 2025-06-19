document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");

  // Tus eventos originales (puedes agregar/quitar aquí)
  const eventos = [
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/492190590_605035295905045_9043277596684626273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWchEGh4hnobkTlQpYgidR4rHkGgas1UPiseQaBqzVQwF_i1fZak3ft0aJX0L7yEDC-Soa7kaGg-npOL0vt1e6&_nc_ohc=7ORk0XhDhccQ7kNvwG3JXVD&_nc_oc=Adnp15xyK07IaiGuJJDTFTyFItbxuTIhObsQQxp8ro8r1mUr3p_-kC0UkK3R8UAdatBPubcCcD-ZyssFRsYNgF3c&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=sNGVD0BcuPgVnCD-JgQuBA&oh=00_AfNxvB0_vcdi2i-fRHDQaaQG1s722cniSDCkUI4ICmh0LA&oe=6858E483",
      titulo: "Viajar Seguro a la Feria de San Marcos 2025: Transportistas Lanzan Operativo Especial",
      fecha: "18 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/491939019_603503506058224_8581665580798598176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG145GAZHv9OLfzyXhwLHLAyrWvAgJJzUzKta8CAknNTF7Nm0cpKm-MiuqHFGpY99Ju-zL9UuhP3kuWXbEw1pr3&_nc_ohc=rvt1xZvxvGAQ7kNvwEiuDDv&_nc_oc=Adn7Jsy_9bqUUxsYPJbDdeE5SvGqwGhyZG-uNlm1WfvLcx5ZHFlgo8QxICQWJxUGCmzFXj7qMkeu3IJyJQNr_3qe&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=aKcYaUyYYIwPGgZgMmViEA&oh=00_AfOPqS_bw6_mShtwuJz1ofcJPvGdBC_Z7QWLVJka_GfPNg&oe=6858F777",
      titulo: "El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
      fecha: "16 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/489433164_597099523365289_7898538788796945129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiXdVH2tneRR4K5JICkNlOFq62ViIFtOYWrrZWIgW05pITNUP8wq8uMmWoWEU1mcPWovZGmFVNV7UZDfQoc8ce&_nc_ohc=HqD5tMKVp8QQ7kNvwHyay7G&_nc_oc=Adk1Dw9gvCfq9bWxJaWIshNK3E6WG2UsrQCIeBg4e76nUJSikMKpMjbw0DVrSjUbftXTLLTMckBVMbV54ZdphfXh&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=ymzGnBgC3sNM0MlE4-WwKw&oh=00_AfPvEWRF4cy0zCcqB8jDRktsI19wT1pZI_WaiptDeErKVQ&oe=6858F597",
      titulo: "El CEEA cierra filas por una feria 100% segura",
      fecha: "08 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/496004947_1236559725144933_7308817332838522235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9GEQSlG5EbKaJ7_Be8KurbIgyCqmJWQFsiDIKqYlZAU6Up60XJpY-vZefn6CsB8ZbjGtzYHy-8HSHeOg28Aqk&_nc_ohc=vxCS-_sCH6wQ7kNvwGkQxtL&_nc_oc=AdlD3JV0gTyGPa6JTvQTtJYJBu1r-XXxNbpNwkoB4ni4owGVaRcNkmvnY0waejoHeL3c8-F8EGsp1BRD9eyt9940&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=mi23_7Y4vvCUtI1amYgSnQ&oh=00_AfNxwFLuKt2oPjnm32XlcD6oDUhP4xVl9dMxAR-HTuIS1Q&oe=6858D83A",
      titulo: "GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
      fecha: "13 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/484091208_575217008886874_4501387254240386964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHiqhVLAKCgO2YccvX172_plkqGNvBcJjGWSoY28FwmMR_Owjk8Qf3t2rosixHIrh8MhMsJ5DSIPEetcPNI3fWo&_nc_ohc=oXlcM-fBABoQ7kNvwH02t78&_nc_oc=Adkvn3DXTxuc3R-QKxEAeLNs-Xbft5oiTYFVNkfv5ZNKKg386YoBZBzgTD0qiZx_7f5c1lw_LhabsDj-OIEOtBg9&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=EAjCXhZVNFkUSvIGt3RJoQ&oh=00_AfOzN8q_zQLtSXCBOfppH89Vv00ebF_0Ax7lLdTpVJSmUQ&oe=6858D272",
      titulo: "El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
      fecha: "11 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/483806998_575979768810598_1438490151524394419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFgvanL7R9ETI9Q0nagSylFuW2bJ-UhuBK5bZsn5SG4EljJzU6FVkNYG45HvkcbN_SV8p2gNs_ls9pGtasjs4t9&_nc_ohc=fETJ8PgDuqMQ7kNvwGmWx3o&_nc_oc=AdkPr1D2Ro2m-XZ-mNXdqn_f9azUbDGZD4CAc5qoVh0_lqbjGRiNi9_fB2b8oL6Jdgt9Ph862TgDAbaPRrugwZ8y&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=Ol2S-UzSOp_qvkk4IynYDg&oh=00_AfNG2a5F60zbnf69j-Fv8E6HWmvHPVqFZEUb9TnZPfzYIw&oe=6858FC22",
      titulo: "El CEEA promueve la denuncia ciudadana para prevenir el delito",
      fecha: "11 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482203547_573092015766040_1871465784854559755_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLU_dv1d9O-6AyJcgN6DJTAX1hkshkbOABfWGSyGRs4PV4ZrDh56rMfutzPrUFiczfDWLlMK32vfbehulixK-6&_nc_ohc=b-K_E9-wQO4Q7kNvwH4KfNh&_nc_oc=AdlI-7DMLyEGqNBWRFhH1ltTxUVG4EdytTiBl1OKbqEz8jK3VFj1yCEjAlCH8o1ZvyyVKGdy3Br85mk4VyZzSQk1&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=Ly39B3eqlrGKqcL9XptKDA&oh=00_AfM9Ved4CH8S1TrUr1Btvt4oT-WCh_QloYAfRo6yl7tjfA&oe=6858E5D4",
      titulo: "UAA y GIRAA AC Firman Convenio para Fortalecer la Vinculación Académico-Empresarial",
      fecha: "06 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481152949_573088722433036_6356192112832417906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp4zoMvk72s-80EFuR7RLk4yTsgyY8lcXjJOyDJjyVxaTF6z1FhGAHXKRC0yrOwPCkmvpELHuu2dQ7UCHSTTHc&_nc_ohc=dYgpI95nULgQ7kNvwE7Gh7Y&_nc_oc=AdnarKqBNeoLZCPYmDEAxX7a9h7faUTwzqs5VQbGloHG2h0iH_aTADo-SRnQU1ezQEIMOS9lqRpvFeQP2pks7CxC&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=v6TBt8IQgpxEpoOxok3XpQ&oh=00_AfNLr3tYNgXeQetffj-bFn0wHLRr8rwzuKdH9Oc31VPVvw&oe=6858FC7B",
      titulo: "CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
      fecha: "01 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482303519_572873712454537_1604038815095986070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfq-Au-KUjxEhHvdtZ9zUi3cDbR2th1rndwNtHa2HWuaj0cw4m9QpuTsBo_gb1xndaLlKOqasq5V19-bhmP-Ry&_nc_ohc=LQxuOFe6tSUQ7kNvwGo0g_7&_nc_oc=AdlnGNU5lj3wkyt9usMh5m286V88ix5TJNE7HER4DuSXZ3Xrc-sSNq-MI69JoJA0k-j-vM8y0bO2KVLw0XtMcVda&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=9plwJtjs8ZNNP09OaQ0DoQ&oh=00_AfP5XlAZvdQaUOuijfszsbuyfFqpUnA7Zv7E8sOaVrQLOQ&oe=6858D0A8",
      titulo: "Inició la Semana del Contador 2024.",
      fecha: "03 de Diciembre 2025"
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