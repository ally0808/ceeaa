-- BORRAR Y CREAR BASE DE DATOS
DROP DATABASE IF EXISTS ceea_db;
CREATE DATABASE ceea_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ceea_db;

-- TABLA: noticias
CREATE TABLE IF NOT EXISTS noticias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(200) NOT NULL,
  contenido TEXT,
  fecha_publicacion DATE
);

INSERT INTO noticias (titulo, contenido, fecha_publicacion)
VALUES 
('CEEA anuncia foro de inversión extranjera',
 'El Consejo Estatal Empresarial de Aguascalientes (CEEA) organizará el próximo mes un foro para atraer inversión extranjera directa, buscando fortalecer el sector industrial local y promover el desarrollo económico en la región.',
 '2025-03-18'),

('Convenio CEEA–Universidad Autónoma de Aguascalientes',
 'El CEEA firmó un convenio de colaboración con la UAA para impulsar programas de formación dual, prácticas profesionales y proyectos de innovación conjunta entre estudiantes y empresas afiliadas.',
 '2025-02-27'),

('CEEA reconoce a empresas socialmente responsables',
 'Por segundo año consecutivo, el Consejo entregó reconocimientos a compañías locales que han implementado políticas de responsabilidad social, sostenibilidad y apoyo comunitario.',
 '2025-05-08'),

('Llamado del CEEA a fortalecer el turismo de negocios',
 'El presidente del CEEA invitó a los empresarios a sumarse a la estrategia para posicionar a Aguascalientes como destino clave para congresos y turismo de negocios, aprovechando la infraestructura y conectividad del estado.',
 '2025-04-30'),

('CEEA impulsa capacitación digital',
 'El Consejo empresarial puso en marcha una serie de talleres gratuitos sobre transformación digital, dirigidos a pymes locales para mejorar su competitividad y presencia en línea.',
 '2025-06-12');

-- TABLA: comites
CREATE TABLE comites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  imagen VARCHAR(255)
);

INSERT INTO comites (nombre, descripcion, imagen)
VALUES 
('Sustentabilidad',
 'Promueve prácticas responsables con el medio ambiente.',
 'https://unicarreras.com/wp-content/uploads/2024/05/que-es-la-sustentabilidad.webp'),
('Innovación y Tecnología',
 'Impulsa la transformación digital empresarial.',
 'https://blog.maestriasydiplomados.tec.mx/hs-fs/hubfs/Blog%20notas%20maestrias%20y%20diplomados/Innovaci%C3%B3n%20tecnol%C3%B3gica%202.jpg?width=1250&height=625&name=Innovaci%C3%B3n%20tecnol%C3%B3gica%202.jpg'),
('Desarrollo Agroalimentario',
 'Apoya el crecimiento del sector agroindustrial.',
 'https://www.gob.mx/cms/uploads/article/main_image/25755/JITOMATE.jpg'),
 ('Relaciones Institucionales',
 'Fomenta alianzas con organismos públicos y privados.',
 'https://th.bing.com/th/id/OIP.WBVdIUp-8H_OT9ff4falLQHaEK?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3'),
 ('Educación y Talento',
 'Enlace con universidades y formación del capital humano.',
 'https://th.bing.com/th/id/OIP.CHItMOcpzd2u28OT5bMXgQHaE_?w=1000&h=675&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3');

-- TABLA: objetivos
CREATE TABLE IF NOT EXISTS objetivos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT NOT NULL,
  icono VARCHAR(100) NOT NULL
);

INSERT INTO objetivos (titulo, descripcion, icono) VALUES
('Objetivo Global', 'Impulsar la colaboración entre sectores para un desarrollo sostenible', 'fa-solid fa-handshake'),
('Crecimiento Económico', 'Fomentar iniciativas que contribuyan el crecimiento económico local.', 'fa-solid fa-lightbulb'),
('Alianzas Estratégicas', 'Promover alianzas entre empresas y gobierno para beneficio mutuo.', 'fa-solid fa-users'),
('Sustentabilidad', 'Incorporar prácticas responsables con el medio ambiente.', 'fa-solid fa-globe'),
('Comunidad', 'Fortalecer el sentido de comunidad y participación social.', 'fa-solid fa-globe');

CREATE TABLE IF NOT EXISTS contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);