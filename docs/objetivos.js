document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById('objetivos-container'); // <-- el mismo que en el HTML
  fetch('/api/objetivos')
    .then(res => res.json())
    .then(data => {
      lista.innerHTML = "";
      const fila = document.createElement('div');
      fila.classList.add('objetivos-cards-fila');
      data.forEach((objetivo, i) => {
        const card = document.createElement('div');
        card.classList.add('objetivos-grid-card', 'fade-in-card');
        card.style.transitionDelay = `${0.15 * i}s`;
        card.innerHTML = `
          <i class="${objetivo.icono}" aria-hidden="true"></i>
          <h3>${objetivo.titulo}</h3>
          <p>${objetivo.descripcion}</p>
        `;
        fila.appendChild(card);
      });
      lista.appendChild(fila);
      // Animación escalonada
      const cards = document.querySelectorAll('.fade-in-card');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('show'), 150 * i + 300);
      });
    })
    .catch(err => {
      console.error('Error:', err);
      lista.innerHTML = "<p style='color: #fff;'>No se pudieron cargar los objetivos.</p>";
    });
});