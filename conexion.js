const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ceea_db', // ← este es el nombre correcto según tu imagen
  port: 3306
});

conexion.connect((err) => {
  if (err) throw err;
  console.log('¡Conectado a la base de datos MySQL!');
});

module.exports = conexion;