document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");

  // Tus eventos originales (puedes agregar/quitar aquí)
  const eventos = [
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/504849305_644380141970560_6797082119034026719_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7w2nyYaKHqQQ7kNvwEtwEjA&_nc_oc=Adki0Cc7LQS-W4f5FUgdfgODDEYeI2lp7tdNmrp23g7K94u-atSt0s_VoSxIyepdasnhOTv7DBJErZOiR0kwssIg&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=DUpHvIo9tC-nnukvRr2t5w&oh=00_AfSmXAPOVG1OgQtL0oT1vSA150en-BIhWef7HksuJgzvmw&oe=687B4581",
      titulo: "Urgente que el gobierno federal voltee a ver Aguascalientes: CEEA",
      fecha: "10 de Junio 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/492190590_605035295905045_9043277596684626273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j0uVFdJ7kQ4Q7kNvwHeRjYz&_nc_oc=AdlSWzq4EftHDtqQ1KFfd3Tma92fD40GkwiAI9bVCFATp4ky7gXZKz2QLjbqmhiXD0RmR8ysl1kvawm2q2GDhdC9&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=ySm7ASZSvFcSfBVafDGkGA&oh=00_AfRhtwJVvjK8GuyIDw2Hk_azM1Wv5vnMS2LCB_xPekpuUA&oe=687B2B83",
      titulo: "Viajar Seguro a la Feria de San Marcos 2025: Transportistas Lanzan Operativo Especial",
      fecha: "18 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/491939019_603503506058224_8581665580798598176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N7llQiOPXt0Q7kNvwF5Hm4X&_nc_oc=AdmOcDOiteX7MeoKXZUhdcwn53nmIlpBBv3EhDrHHieTCzwdPFHkGe0IKx9-Ko5EeBmXnRkgYB8e7w-ZxK9f_LGM&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=--jouFvxoCX0gTkbdnlBiA&oh=00_AfRabxmggja_urZajqpCr8lmF83XDvqontSpTOOeykok1A&oe=687B3E77",
      titulo: "El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
      fecha: "16 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/489433164_597099523365289_7898538788796945129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9Fwx2oMLuNgQ7kNvwFec0Wa&_nc_oc=AdlCFq_5Q0hEMBtZlBGXMD2HFUwVRhoDKW_NAMkvxt270O9gWUM6pEkIEklj4B89uShC8HaHrQVRlunCXGRomTx7&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=iW74xgTy-VzMFoevdvsXjg&oh=00_AfSD-ffOeFOvXgIOu-8SVETZZQVp3HtiIWzWbcZIVRGkQQ&oe=687B3C97",
      titulo: "El CEEA cierra filas por una feria 100% segura",
      fecha: "08 de Abril 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/496004947_1236559725144933_7308817332838522235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OnmWC-9hPnkQ7kNvwHALE9G&_nc_oc=Adl4YmvqPY80XSgVRixb7wHTSAFCw2SkWYxEzPEAshpYkTubzCQGnw9rLIAqZFeLhcHdtEtxHXXDJfPI3cp3FcUr&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=dJQ3EVhOBdUcprA2fjvnAA&oh=00_AfSMu3RZfdFLDZAdBHGiEnaxqGAYbKSlyaiMh2LcdCuCbg&oe=687B1F3A",
      titulo: "GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
      fecha: "13 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/484091208_575217008886874_4501387254240386964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jRScBJtBh_AQ7kNvwGpqHed&_nc_oc=AdntxYyUq577FLkSuS1v2Z22xAY5Bl9QgCulsjD6-oAafXKPgGimWfg7G3Dwgt8zsVA_EdYde-Jn8taJ4trkwv_R&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=7K4MFj2XMAFBy2Xxl1d9qA&oh=00_AfS4FGxcnqzk4gpX1DC9SzTbb6XuOK_vdNFogzJAVWBQ2Q&oe=687B1972",
      titulo: "El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
      fecha: "11 de Marzo 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/483806998_575979768810598_1438490151524394419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Brfu3NpLBCwQ7kNvwGdaDML&_nc_oc=AdlubVW-9ISEOyVbtuiDcx71COFyNwPzhh_VbhAPYg8wiR8kAoFSE2EOI3mytvvWmIqKdRHpq6yvSNPhbC6Td40x&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=f1vA43em0v_PT3HnEuofvQ&oh=00_AfSne7ZNk1MJ6CXQQbbwKtThzIK7-Ojti6oLqO3d8rQJYQ&oe=687B4322",
      titulo: "El CEEA promueve la denuncia ciudadana para prevenir el delito",
      fecha: "11 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482203547_573092015766040_1871465784854559755_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YVpHaU4WDhIQ7kNvwGYK1Fa&_nc_oc=AdnHem-GTGO0zIRpuJota1Dlyyql4HMgPP8h8KeNgHIkYRoH_oH8W7Xzm_8KGzryMDg3B6EN8Ju9kjoUZpbc3KYu&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=8XZvFyC12bLcAlbd9mPJ2A&oh=00_AfSMOSPHE8JBQO5T37f0k-H1eLqfdTcF9nDtsZRhYIH2tQ&oe=687B2CD4",
      titulo: "LA UAA y GIRAA AC unen fuerzas para impulsar la innovación y el desarrollo en Aguascalientes.",
      fecha: "06 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481152949_573088722433036_6356192112832417906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YWVg9lVzhiAQ7kNvwH1DYcf&_nc_oc=AdloklEwrFy0YjWTfouwfLZWjL3TdVsVdIlYcSetuva4Cjye7ibLRFb6il2xFXGpWaW3ynJVwuqsJ7QQQYGJxMvw&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=ZR7etiWc4ufnDBnj_Xu9yw&oh=00_AfRDf3aAX2nZ4jmkaRBeHv2hQoe3lonG67uUKf4Hx68q6Q&oe=687B437B",
      titulo: "CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
      fecha: "01 de Febrero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481985924_572944875780754_782459568704490221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7ZThNke8ZQAQ7kNvwG4cMVy&_nc_oc=Admp_ol9nm0y8LTXpE3FpOvHZt_SmT6XRZ_D0-OeKY98E2lLBQLrKKvvXtYzgIiuRZOHAM0PFMRdtJ8A_ZOQ78Zd&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=Yyr66zFQlLa-vKnGbtzgdQ&oh=00_AfS8EHRoWAjRH66agwghTf9HIqqUhDXqdG_Nw-E6OipCYA&oe=687B1F8D",
      titulo: "Los empresarios de Aguascalientes tienen la capacidad y fortaleza para enfrentar los retos y desafíos del 2025: CEEA.",
      fecha: "14 de Enero 2025"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482303519_572873712454537_1604038815095986070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ChGVZNCjCS4Q7kNvwEIAFJJ&_nc_oc=AdlROJOmFfVBI41EqpTMVHtEQV5rjWld26B1Ygz-xpnxYE4ffVXBD3rE1Oen10IppScM5tEMgX9L0VtGf14RFbkM&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=VaGizv4pe11MFAC1RrMoCA&oh=00_AfSC5tSVFy70nKG2Wge-1JhnpLPjk46WAa5gSHrHKr45uA&oe=687B4FE8",
      titulo: "Inició la Semana del Contador 2024.",
      fecha: "03 de Diciembre 2024"
    },
    {
      src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481995821_572475275827714_5724457372830233654_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Xa7-48GoCmEQ7kNvwGP-I4h&_nc_oc=AdkzjL2GmtyuMucqa-tfY_Fk0g26ln82Z7Q8f4h1BzDW4wUiquWnDIvoMECxsp0bFpQD8pf-T8JGEz0w-rJPSP72&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=QhsuPrQ-uqT6kfop5SpSYA&oh=00_AfQJgU3ekRDowfmKfIBSmM0iorU-9Yn-zToKaDSFivxHxQ&oe=687B1EEF",
      titulo: "SE CONSOLIDA EL CEEA COMO UN GRAN EQUIPO QUE CONTRIBUYE AL BIENESTAR DE AGUASCALIENTES.",
      fecha: "12 de Noviembre 2024"
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