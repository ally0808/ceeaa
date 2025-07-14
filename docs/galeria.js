document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");

  // Tus eventos originales (puedes agregar/quitar aquí)
  const eventos = [
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/504849305_644380141970560_6797082119034026719_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbZZokr2gmIXTNPormkjKKFxAA-Q9ZX6kXEAD5D1lfqRUMy3f0lEj4BBwh_AzK2zosl58ky3XJZn6M6svPNgnb&_nc_ohc=VrvZuSJi4IAQ7kNvwGeHg1u&_nc_oc=AdkWWzQrryUxJ639JXD5dIYo5vXAOQW6TXBJtzDknBFSdC0nSboOc6Pzi1tCfyRtnepvytGiULwSNbMLDRyR2WAQ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=N3iT4L8NBLo0GIQt5SxKmg&oh=00_AfS1nyFGR5wUZkveb2tEeN8BMcno15DaOAGbCWAxcRB8Kg&oe=6874AE01",
      titulo: "Urgente que el gobierno federal voltee a ver Aguascalientes: CEEA",
      fecha: "10 de Junio 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/492190590_605035295905045_9043277596684626273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWchEGh4hnobkTlQpYgidR4rHkGgas1UPiseQaBqzVQwF_i1fZak3ft0aJX0L7yEDC-Soa7kaGg-npOL0vt1e6&_nc_ohc=llW3_b2hvI4Q7kNvwGLRVy-&_nc_oc=AdmvssmimGLmPUEYVodlpgMX_TJz_4e4Qo7DWY29Q6Cv5N9e8Fx53-awXOayx0TdMJtYiqmzizpzMciMDQpz8dGk&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=vGnhqIQBy8qW8le5fIj3cA&oh=00_AfSYhJBMdGdBUes0zTP56XC8CTbFBYerWDCJn43wqC-LmQ&oe=6874CC43",
      titulo: "Viajar Seguro a la Feria de San Marcos 2025: Transportistas Lanzan Operativo Especial",
      fecha: "18 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/491939019_603503506058224_8581665580798598176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG145GAZHv9OLfzyXhwLHLAyrWvAgJJzUzKta8CAknNTF7Nm0cpKm-MiuqHFGpY99Ju-zL9UuhP3kuWXbEw1pr3&_nc_ohc=b-61sYUNvVQQ7kNvwGzWoM4&_nc_oc=AdkhoqDLA0djeqGpuPAqxFZgZolQ7JuNP5qXxup3DA4KEKuBSkLX1v1wBEcfIUZWhqTplbqAGbhLcj6mWwlZP3bQ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=fWNg4Zw4RmxXOOG49Z4UGw&oh=00_AfQTWkc0qI7HA7UZ6-W-LssFzesMXseMMvowyH2ZbCPJog&oe=6874A6F7",
      titulo: "El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
      fecha: "16 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/489433164_597099523365289_7898538788796945129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiXdVH2tneRR4K5JICkNlOFq62ViIFtOYWrrZWIgW05pITNUP8wq8uMmWoWEU1mcPWovZGmFVNV7UZDfQoc8ce&_nc_ohc=XRh7X-8FOncQ7kNvwG_UfZJ&_nc_oc=AdkU398KdONE-VArrp9FftvyPccdnY-67eeTip3cawRmf3Xcg5VdN5fDU9JSCuP8yru-K4fVn3BnjGFPy2UY-Wyy&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=1hGqnkZY6ssN51bZ0rDIag&oh=00_AfRwhPD2TmI1N-8azZnh5qX2kPyi6j_SBkA3p_rNZAxQYw&oe=6874A517",
      titulo: "El CEEA cierra filas por una feria 100% segura",
      fecha: "08 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/496004947_1236559725144933_7308817332838522235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9GEQSlG5EbKaJ7_Be8KurbIgyCqmJWQFsiDIKqYlZAU6Up60XJpY-vZefn6CsB8ZbjGtzYHy-8HSHeOg28Aqk&_nc_ohc=MeF5mP1xtoAQ7kNvwFq2pDY&_nc_oc=AdmQGuxfLghuYC-lDYQMTByDKbKQptFd_rNP3s3Z1PtKMeFLYY6DAnztpBfgPGBMUSniDrfbtMdynv0-qufuUqho&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=GCSEphH1YyGyU4Q2ohHAdQ&oh=00_AfQID1oezcoeAGPxTgWwbMtA3_L3PghUUdFoV1Ik74W7WQ&oe=6874BFFA",
      titulo: "GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
      fecha: "13 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/484091208_575217008886874_4501387254240386964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHiqhVLAKCgO2YccvX172_plkqGNvBcJjGWSoY28FwmMR_Owjk8Qf3t2rosixHIrh8MhMsJ5DSIPEetcPNI3fWo&_nc_ohc=Dx_ixZfJK5AQ7kNvwF34xeS&_nc_oc=Admnqehnja7wSYfUQ-D4Q9POQzNzZFSeyqjRYkQUWRiKi-P8XGL5rXawQuaqL7jGf9brqLBLe9JY0KBzPzQ6xNNA&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=rbLnp_-bMIOM4iNfyyNFTw&oh=00_AfRwS_QI_F5sE3cCdGnHqUWr4EurlvQYX0-iglhW76L5OA&oe=6874BA32",
      titulo: "El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
      fecha: "11 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/483806998_575979768810598_1438490151524394419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFgvanL7R9ETI9Q0nagSylFuW2bJ-UhuBK5bZsn5SG4EljJzU6FVkNYG45HvkcbN_SV8p2gNs_ls9pGtasjs4t9&_nc_ohc=PFvhrakXxQMQ7kNvwG3OaSb&_nc_oc=AdlTpQfBFk4ccua0D8i_NxeDMp0dMB6IXSESKWw61MsV6LV1IdcLxJRA8dJ4JLmWncThkCj6G8lgkHgulORi2Evn&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=d7sovJX2kzlqZdc9VDQjbQ&oh=00_AfT5XgjrfLh9YBm95u3NxuSmskDP2lWBQwM7UIzq7EWhAA&oe=6874ABA2",
      titulo: "El CEEA promueve la denuncia ciudadana para prevenir el delito",
      fecha: "11 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482203547_573092015766040_1871465784854559755_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLU_dv1d9O-6AyJcgN6DJTAX1hkshkbOABfWGSyGRs4PV4ZrDh56rMfutzPrUFiczfDWLlMK32vfbehulixK-6&_nc_ohc=MYvZsJe_9LsQ7kNvwHW4WUV&_nc_oc=AdmAEhgnndYGkBIb1LUZG3JSCl73FlJgwEYSRbFVHZemhmFI98KJn_K7ysyohWJZx6bm8H26K2LGHmwWE-rUrpwO&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=F1guv3LKFh11ejdjO1p1gw&oh=00_AfRGiMRaZ61x0RDFj-jczCDWA3wuwftWkz7rRM4hYxmIYA&oe=6874CD94",
      titulo: "El Vicepresidente  del Clúster Automotriz GIRAA Mel Wilhem, tomó protesta como parte del Comité Estatal de Educación Dual en Educación Media Superior... ¡Felicidades!.",
      fecha: "23 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481152949_573088722433036_6356192112832417906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp4zoMvk72s-80EFuR7RLk4yTsgyY8lcXjJOyDJjyVxaTF6z1FhGAHXKRC0yrOwPCkmvpELHuu2dQ7UCHSTTHc&_nc_ohc=OxckPWqacJwQ7kNvwG4851f&_nc_oc=AdkKBO3_n6RG0xw4-NKZLuDAMLFXomjM4dUQrdeBroQCjKO8-sw2FRcwIijiBqlmAZnKc8Rkcq2ZwlVX__pftaa2&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=ComqakJzLxVGCH7Q2v0qWg&oh=00_AfRklUk12o6vpjRLLazuJtcuIf52YtQpR7rtAYa3he2IUA&oe=6874ABFB",
      titulo: "LA UAA y GIRAA AC unen fuerzas para impulsar la innovación y el desarrollo en Aguascalientes.",
      fecha: "06 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481985924_572944875780754_782459568704490221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtpkxUeHPpJkcWaA3PyDG-NpXwFpADxjE2lfAWkAPGMQjwSAja9hsnj7Hpb9m-0ecwQtYxqVmkNbAeOYFUBJdZ&_nc_ohc=rCqIbHeMNoQQ7kNvwERVL-j&_nc_oc=Adnu_2e1yPfTyJxZ1-f1Q_QggflivxfiVYnSUwi06KmK8wU-0Hy6vgLSP2ymYGo08jUNMFAqvQGAk2QwnCfgnUQV&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=zRoqMSxFRYU6PrfyRpqThw&oh=00_AfRlOep5nUdIv3L7ZjLHPqj1Mkvo5GqQow7N-Yw80dn_kw&oe=6874C04D",
      titulo: "CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
      fecha: "01 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482303519_572873712454537_1604038815095986070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfq-Au-KUjxEhHvdtZ9zUi3cDbR2th1rndwNtHa2HWuaj0cw4m9QpuTsBo_gb1xndaLlKOqasq5V19-bhmP-Ry&_nc_ohc=vyCm4B7bDEsQ7kNvwEnhUdA&_nc_oc=AdmZ0GeXVTQdGNVlcrjOucvPZyDQO2c4NxcVhjCIsgfOnESoQawxn60L5-z74vH5VOKZ4NgzgCLDXSdjcYPETjcB&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=tj09owiNqvE_odNpRsRFSg&oh=00_AfSN7IhXb2MfJCh3VSSPHgbbcbzsH5e1P9W6KgZJ9zOkPQ&oe=6874B868",
      titulo: "Los empresarios de Aguascalientes tienen la capacidad y fortaleza para enfrentar los retos y desafíos del 2025: CEEA.",
      fecha: "14 de Enero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482343877_572475432494365_5439314634286706159_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0IUPmKSGgYIvd6RmNMX2dnvdPplIPsbSe90-mUg-xtIwuRQwAdXhTCkXYOYhmNjpfky6J4mZazaGjUZtTXKU_&_nc_ohc=bIj92wxB-2QQ7kNvwGh-Ypy&_nc_oc=AdmeogB202zwxcIMSDIoxHKreDYX5RHUnvtalXO9ihOXb-QjSyk7pqg9jM180r1xE-vkfZLMQWTZm7Xd4brkSsin&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=V_nIIwWa-yCHXV3295F50g&oh=00_AfSOmaH3ZcAtbWHbBxKgoJxOh7-x_lZasGf-oy1N7LlO1g&oe=6874B9CE",
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