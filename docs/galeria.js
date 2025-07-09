document.addEventListener("DOMContentLoaded", function () {
  const galeriaContainer = document.getElementById("galeria-container");
  galeriaContainer.innerHTML = "<p>Cargando imágenes...</p>";

  fetch('https://ceeaa-backend.onrender.com/api/galeria')
    .then(response => response.json())
    .then(imagenes => {
      galeriaContainer.innerHTML = "";
      imagenes.forEach(imagen => {
        const div = document.createElement("div");
        div.className = "galeria-item";
        div.innerHTML = `
          <img src="${imagen.src}" alt="${imagen.titulo}">
          <h4>${imagen.titulo}</h4>
          <p>${imagen.fecha}</p>
        `;
        galeriaContainer.appendChild(div);
      });
    })
    .catch(err => {
      galeriaContainer.innerHTML = "<p>Error al cargar la galería.</p>";
    });
});
