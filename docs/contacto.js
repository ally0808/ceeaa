document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contacto-form');
  const mensajeDiv = document.getElementById('mensaje-exito');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();

      // Validación básica
      if (!nombre || !email || !mensaje) {
        mostrarMensaje('Por favor, completa todos los campos.', false);
        return;
      }

      fetch('https://ceeaa-backend.onrender.com/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          mostrarMensaje('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', true);
          form.reset();
        } else {
          mostrarMensaje('Hubo un error. Inténtalo de nuevo más tarde.', false);
        }
      })
      .catch(() => {
        mostrarMensaje('No se pudo enviar el mensaje. Intenta más tarde.', false);
      });
    });
  }

  function mostrarMensaje(texto, exito) {
    if (!mensajeDiv) return;
    mensajeDiv.textContent = texto;
    mensajeDiv.classList.remove('error', 'mostrar');
    if (texto) {
      mensajeDiv.classList.add('mostrar');
      if (!exito) mensajeDiv.classList.add('error');
    } else {
      mensajeDiv.classList.remove('mostrar');
    }
  }
});
