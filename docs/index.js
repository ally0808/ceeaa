// index.js
const conexion = require('../conexion'); // Importa la conexión

// Obtener y mostrar datos de una tabla
function obtenerDatos(tabla) {
  conexion.query(`SELECT * FROM ${tabla}`, (error, resultados) => {
    if (error) {
      console.error(`Error en la consulta de la tabla "${tabla}":`, error);
    } else {
      console.log(`\n--- Datos de la tabla "${tabla}" ---`);
      console.log(resultados);
    }
  });
}

// Llamamos a las consultas para cada tabla
obtenerDatos('objetivos');
obtenerDatos('comites');
obtenerDatos('noticias');
obtenerDatos('contactos');

// Cierra la conexión después de un pequeño retardo para asegurar que todas las consultas terminen
setTimeout(() => {
  conexion.end();
  console.log('\nConexión cerrada.');
}, 2000);

