const express = require('express');
const cors = require('cors');
const path = require('path');
const conexion = require('./conexion');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// ENDPOINTS

// Objetivos
app.get('/api/objetivos', (req, res) => {
  conexion.query('SELECT * FROM objetivos', (err, results) => {
    if (err) {
      console.error('Error consultando objetivos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
});

// Comités
app.get('/api/comites', (req, res) => {
  conexion.query('SELECT id, nombre, descripcion, imagen FROM comites', (err, results) => {
    if (err) {
      console.error('Error consultando comites:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
});

// Noticias
app.get('/api/noticias', (req, res) => {
  conexion.query('SELECT * FROM noticias', (err, results) => {
    if (err) {
      console.error('Error consultando objetivos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
});

// CONTACTO - Guarda mensajes del formulario de contacto
app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ success: false, error: 'Faltan campos' });
  }
  const sql = 'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)';
  conexion.query(sql, [nombre, email, mensaje], (err, result) => {
    if (err) {
      console.error('Error guardando contacto:', err);
      return res.status(500).json({ success: false, error: 'Error en la base de datos' });
    }
    res.json({ success: true });
  });
});

// INICIA EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});