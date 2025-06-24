document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('comites-container');
  fetch('http://localhost:3000/api/comites')
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "";
      if (!data || data.length === 0) {
        container.innerHTML = "<p style='color: #fff;'>No hay comités disponibles.</p>";
        return;
      }
      data.forEach((comite, i) => {
        const comiteDiv = document.createElement('div');
        comiteDiv.className = 'comite';
        comiteDiv.style.opacity = '0';
        comiteDiv.style.transform = 'translateY(30px)';
        comiteDiv.innerHTML = `
          <div class="comite-text">
            <h2>${comite.nombre ? comite.nombre : 'Sin nombre'}:</h2>
            <p>${comite.descripcion ? comite.descripcion : 'Sin descripción'}</p>
          </div>
          <img src="${comite.imagen ? comite.imagen : 'https://via.placeholder.com/180x110?text=Sin+Imagen'}" alt="${comite.nombre ? comite.nombre : ''}">
        `;
        container.appendChild(comiteDiv);
        setTimeout(() => {
          comiteDiv.style.transition = 'opacity 2.5s, transform 2.5s';
          comiteDiv.style.opacity = '1';
          comiteDiv.style.transform = 'none';
        }, 140 * i);
      });
    })
    .catch(err => {
      container.innerHTML = "<p style='color: #fff;'>No se pudieron cargar los comités.</p>";
    });
});