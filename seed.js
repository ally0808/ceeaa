// seed.js
const mongoose = require('mongoose');
require('dotenv').config();

const Objetivo = require('./models/Objetivo');
const Comite = require('./models/Comite');
const Noticia = require('./models/Noticia');
const Contacto = require('./models/Contacto');
const Galeria = require('./models/Galeria'); // ✅ CORREGIDO

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('📦 Conectado a MongoDB');
    return seedData();
  })
  .catch(err => console.error('❌ Error al conectar:', err));

async function seedData() {
  try {
    // OBJETIVOS
    await Objetivo.deleteMany();
    await Objetivo.insertMany([
      {
        titulo: "Objetivo Global",
        descripcion: "Impulsar la colaboración entre sectores para un desarrollo sostenible.",
        icono: "fas fa-globe"
      },
      {
        titulo: "Crecimiento Económico",
        descripcion: "Fomentar iniciativas que contribuyan al crecimiento económico local.",
        icono: "fas fa-chart-line"
      },
      {
        titulo: "Alianzas Estratégicas",
        descripcion: "Promover alianzas entre empresas y gobierno para beneficio mutuo.",
        icono: "fas fa-handshake"
      },
      {
        titulo: "Sustentabilidad",
        descripcion: "Incorporar prácticas responsables con el medio ambiente.",
        icono: "fas fa-leaf"
      },
      {
        titulo: "Comunidad",
        descripcion: "Fortalecer el sentido de comunidad y participación social.",
        icono: "fas fa-users"
      }
    ]);

    // COMITÉS
    await Comite.deleteMany();
    await Comite.insertMany([
      {
        nombre: "Sustentabilidad",
        descripcion: "Promueve prácticas responsables en el medio ambiente.",
        imagen: "https://jiffygroup.com/es/wp-content/uploads/2023/06/jiff-jiffygrouplatam-image-914_1a807c5fe21a7f81736c8171bda9dc72_2000.jpeg"
      },
      {
        nombre: "Innovación y Tecnología",
        descripcion: "Impulsa la transformación digital empresarial.",
        imagen: "https://blog.maestriasydiplomados.tec.mx/hs-fs/hubfs/Blog%20notas%20maestrias%20y%20diplomados/Innovaci%C3%B3n%20tecnol%C3%B3gica%202.jpg"
      },
      {
        nombre: "Desarrollo Agroalimentario",
        descripcion: "Apoya el crecimiento del sector agroindustrial.",
        imagen: "https://www.gob.mx/cms/uploads/article/main_image/25755/JITOMATE.jpg"
      },
      {
        nombre: "Relaciones Institucionales",
        descripcion: "Fomenta alianzas con organismos públicos y privados.",
        imagen: "https://th.bing.com/th/id/OIP.gkva38ot7-gP7QeGcAIn_AHaE8?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
      },
      {
        nombre: "Eduación y Talento",
        descripcion: "Alianzas con universidades y formación del capital humano",
        imagen: "https://almaconsultores.com.pe/wp-content/uploads/2024/03/alianzas-con-universidades-estrategias-para-atraer-talento-joven-Alma-Consultores-Consultora-de-Recursos-Humanos-en-Peru-scaled.jpg"
      }
    ]);

    // NOTICIAS
    await Noticia.deleteMany();
    await Noticia.insertMany([
      {
        titulo: "YA VIENE EL DÍA DEL BOLILLO, Y NO TE LO PUEDES PERDER...",
        contenido: "En Aguascalientes se celebrará el Día del Bolillo con Crema este 3 de julio, repartiendo miles de bolillos, conocidos como tortas de albañil, en la Plaza de la Patria y panaderías de todo el estado. César Salado, presidente de CANAINPA y GIPAN, convocó a los panaderos a sumarse para regalar bolillos con crema a las familias y reforzar esta tradición local. El año pasado se entregaron 14 mil bolillos, y este año se espera repartir 20 mil, visitando también asilos y casas hogar para llegar a personas vulnerables. Se busca aumentar la participación de 23 panaderías a 50, promoviendo la unión del gremio panadero y destacando la creatividad y variedad de la panadería hidrocálida.",
        fecha_publicacion: new Date("2025-07-01")
      },
      {
        titulo: "URGENTE QUE EL GOBIERNO FEDERAL VOLTEE A VER A AGUASCALIENTES: CEEA",
        contenido: "Empresarios de Aguascalientes exigen obras y presupuesto federal, alertan sobre falta de apoyo y proponen acciones en infraestructura, agua, migración y seguridad. Se reunirán con legisladores para trabajar en soluciones conjuntas. Empresarios de Aguascalientes exigen obras y presupuesto federal, alertan sobre falta de apoyo y proponen acciones en infraestructura, agua, migración y seguridad. Se reunirán con legisladores para trabajar en soluciones conjuntas.",
        fecha_publicacion: new Date("2025-06-10")
      },
      {
        titulo: "EMPRESARIOS PIDEN AL GOBIERNO FEDERAL DETALLES SOBRE LA REFORMA AL INFONAVIT",
        contenido: "El CEEA analizó con autoridades la reforma a la Ley del Infonavit, preocupados por sus impactos en trabajadores y patrones. Exigieron viviendas dignas y mayores espacios habitables. La senadora Nora Ruvalcaba explicó que la reforma busca mejorar la calidad, ubicación y acceso a viviendas. Empresarios temen alzas en cuotas y piden claridad. El Infonavit pidió confianza en el nuevo modelo de vivienda social y mayor orientación a los trabajadores. El CEEA analizó con autoridades la reforma a la Ley del Infonavit, preocupados por sus impactos en trabajadores y patrones. Exigieron viviendas dignas y mayores espacios habitables. La senadora Nora Ruvalcaba explicó que la reforma busca mejorar la calidad, ubicación y acceso a viviendas. Empresarios temen alzas en cuotas y piden claridad. El Infonavit pidió confianza en el nuevo modelo de vivienda social y mayor orientación a los trabajadores.",
        fecha_publicacion: new Date("2025-05-13")
      },
      {
        titulo: "EN ÓMNIBUS DE MÉXICO,GRUPO ESTRELLA BLANCA Y PRIMERA PLUS, SE VIAJA SEGURO",
        contenido: "En el inicio de la Feria Nacional de San Marcos 2025, las empresas Ómnibus de México, Grupo Estrella Blanca y Primera Plus activaron un operativo especial para transportar a miles de visitantes a Aguascalientes. Ofrecerán descuentos del 50% para estudiantes y 25% para maestros, válidos solo en vacaciones escolares. Los directivos exhortaron a comprar boletos únicamente en canales oficiales (páginas web, apps, centrales de autobuses y agencias autorizadas) para evitar fraudes de agencias falsas que venden boletos apócrifos. Recalcaron que viajar en autobús es seguro y cómodo, y con esta campaña refuerzan su compromiso con la movilidad segura, la conectividad y el turismo nacional. También inauguraron módulos de venta de boletos en la explanada J. Pani para facilitar el acceso a los pasajeros. #ViajaSeguroEnAutobus",
        fecha_publicacion: new Date("2025-04-18")
      },
      {
        titulo: "EL CEEA ESTÁ ABIERTO A CONOCER A LOS CANDIDATOS A JUECES, MAGISTRADOS Y MINISTROS DE LA CORTE",
        contenido: "Se hizo un llamado a la ciudadanía para informarse y participar en la inédita elección de nuevos integrantes del Poder Judicial. Su presidente, Roberto Díaz Ruíz, advirtió sobre la falta de difusión y el desconocimiento que persiste sobre el proceso, lo que podría generar confusión y malas decisiones al votar. Subrayó la importancia de conocer las trayectorias y propuestas de los candidatos, pues elegir mal a los juzgadores podría poner en riesgo la justicia en México. Para contribuir a la información ciudadana, el CEEA sostuvo una reunión con Marisela Morales, ex Procuradora General de la República y candidata a ministra de la Suprema Corte de Justicia de la Nación, quien explicó el procedimiento de votación y motivó a la ciudadanía a ejercer su derecho este 1 de junio de 2025, destacando que la justicia es un derecho de todos.",
        fecha_publicacion: new Date("2025-04-16")
      },
      {
        titulo:"CLUBES DE CIENCIA LLEGA A AGUASCALIENTES",
        contenido:"Clubes de Ciencia México llega por primera vez a Aguascalientes, con la participación de investigadores de Estados Unidos y Europa. El evento ofrecerá cursos gratuitos sobre ciencia, tecnología e innovación para estudiantes de nivel medio superior y superior. Las inscripciones estarán abiertas hasta el 4 de julio en clubesdeciencia.mx. Esta iniciativa internacional ya se ha realizado en ciudades como Monterrey, Guadalajara y CDMX. David Zapata Leal, investigador local, invita a los jóvenes a aprovechar esta oportunidad única de aprendizaje con expertos de universidades de renombre mundial.",
        fecha_publicacion: new Date("2025-05-31")
      },
      {
        titulo: "VIRIDIANA CRUZ REPRESENTARÁ A MÉXICO EN CAMPEONATO MUNDIAL DE REPOSTERÍA EN BRASIL",
        contenido: "En Aguascalientes se celebrará el Día del Bolillo con Crema este 3 de julio, repartiendo miles de bolillos, conocidos como tortas de albañil, en la Plaza de la Patria y panaderías de todo el estado. El CEEA celebra la participación internacional de Viridiana Cruz, joven panadera y repostera de Aguascalientes, quien representará a México en la Competencia Nacional de Reposteros Junior en São Paulo, Brasil. A sus 24 años, Viridiana fue seleccionada por CANAINPA por su destacada trayectoria en repostería gourmet. Es integrante de GIPAN, egresada de la Universidad Panamericana y fundadora de @vidolce_reposteria, su proyecto emprendedor. Además, imparte clases de repostería avanzada. El CEEA felicita a Viridiana por poner en alto el nombre de Aguascalientes y demostrar el talento joven de la industria alimentaria del estado.",
        fecha_publicacion: new Date("2025-04-14")
      },
    ]);

    // GALERÍA
    await Galeria.deleteMany();
    await Galeria.insertMany([
      {
        src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/504849305_644380141970560_6797082119034026719_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbZZokr2gmIXTNPormkjKKFxAA-Q9ZX6kXEAD5D1lfqRUMy3f0lEj4BBwh_AzK2zosl58ky3XJZn6M6svPNgnb&_nc_ohc=VrvZuSJi4IAQ7kNvwGeHg1u&_nc_oc=AdkWWzQrryUxJ639JXD5dIYo5vXAOQW6TXBJtzDknBFSdC0nSboOc6Pzi1tCfyRtnepvytGiULwSNbMLDRyR2WAQ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=rpEXLcYxIFhMph97E2Edlg&oh=00_AfSCM04yO5bR5fK1knJTMOu7VXeHbCKTlr5RRCtkPNXQLw&oe=6874AE01",
        titulo: "Urgente que el gobierno federal voltee a ver Aguascalientes: CEEA",
        fecha: "10 de Junio 2025"
      },
      {
        src: "https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/492190590_605035295905045_9043277596684626273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWchEGh4hnobkTlQpYgidR4rHkGgas1UPiseQaBqzVQwF_i1fZak3ft0aJX0L7yEDC-Soa7kaGg-npOL0vt1e6&_nc_ohc=llW3_b2hvI4Q7kNvwGLRVy-&_nc_oc=AdmvssmimGLmPUEYVodlpgMX_TJz_4e4Qo7DWY29Q6Cv5N9e8Fx53-awXOayx0TdMJtYiqmzizpzMciMDQpz8dGk&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=H7vYmx2GIT-Hro7s2AM4AQ&oh=00_AfSJmNRtoIEFIknFH0XJwpgKw0IoYuG4IAKGRMjbmiuy_g&oe=6874CC43",
        titulo: "Viajar Seguro a la Feria de San Marcos 2025",
        fecha: "18 de Abril 2025"
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/491939019_603503506058224_8581665580798598176_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG145GAZHv9OLfzyXhwLHLAyrWvAgJJzUzKta8CAknNTF7Nm0cpKm-MiuqHFGpY99Ju-zL9UuhP3kuWXbEw1pr3&_nc_ohc=b-61sYUNvVQQ7kNvwGzWoM4&_nc_oc=AdkhoqDLA0djeqGpuPAqxFZgZolQ7JuNP5qXxup3DA4KEKuBSkLX1v1wBEcfIUZWhqTplbqAGbhLcj6mWwlZP3bQ&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=-AC60WM-L8-cvASkeJoHyg&oh=00_AfS92jRMiVe8EZO9ILUYKufuI2UZ8pZxbdrOTEcNePpAyg&oe=6874A6F7",
        titulo:"El CEEA Se Pronuncia por una Elección Informada de Juzgadores en México",
        fecha:"16 de Abril 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/489433164_597099523365289_7898538788796945129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiXdVH2tneRR4K5JICkNlOFq62ViIFtOYWrrZWIgW05pITNUP8wq8uMmWoWEU1mcPWovZGmFVNV7UZDfQoc8ce&_nc_ohc=XRh7X-8FOncQ7kNvwG_UfZJ&_nc_oc=AdkU398KdONE-VArrp9FftvyPccdnY-67eeTip3cawRmf3Xcg5VdN5fDU9JSCuP8yru-K4fVn3BnjGFPy2UY-Wyy&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=EenM2qXM_Nsg13P7ytCeZQ&oh=00_AfQbnpYIR_tCcWLW9Og3JCiKoHxVLGBOA0rkhNJSi3VLqg&oe=6874A517",
        titulo:"El CEEA cierra filas por una feria 100% segura",
        fecha:"08 de Abril 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/496004947_1236559725144933_7308817332838522235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9GEQSlG5EbKaJ7_Be8KurbIgyCqmJWQFsiDIKqYlZAU6Up60XJpY-vZefn6CsB8ZbjGtzYHy-8HSHeOg28Aqk&_nc_ohc=MeF5mP1xtoAQ7kNvwFq2pDY&_nc_oc=AdmQGuxfLghuYC-lDYQMTByDKbKQptFd_rNP3s3Z1PtKMeFLYY6DAnztpBfgPGBMUSniDrfbtMdynv0-qufuUqho&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=uiJ56raOKBHGvBcOBsipHA&oh=00_AfQp7A-ebdui0NLDeP841UzwgQpzrVJiFLTI11J9gEuT4w&oe=6874BFFA",
        titulo:"GIRAA Da la Bienvenida a su Nueva Vicepresidenta: Carolina Ponce Asume el Cargo",
        fecha:"13 de Marzo 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/484091208_575217008886874_4501387254240386964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PYU6Xw5No7QQ7kNvwGJ8gN6&_nc_oc=Adk50RMs7lJ2KBF1LupTAINYbScx1S_USDsU895-Tl21uWct42ZzWuyzf2IqtFN3Kjzc_SYhdoPgxfhtAUBdxkXO&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=307CW-Gl1IbiT5h6S82Adw&oh=00_AfP2YFgnmxYFH56uYFCmvGJyQxRP65btRwB5-U2TAgiQBQ&oe=68620CF2",
        titulo:"El CEEA Se Suma a la Campaña Nacional Contra la Corrupción y la Inseguridad",
        fecha:"11 de Marzo 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/483806998_575979768810598_1438490151524394419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFgvanL7R9ETI9Q0nagSylFuW2bJ-UhuBK5bZsn5SG4EljJzU6FVkNYG45HvkcbN_SV8p2gNs_ls9pGtasjs4t9&_nc_ohc=PFvhrakXxQMQ7kNvwG3OaSb&_nc_oc=AdlTpQfBFk4ccua0D8i_NxeDMp0dMB6IXSESKWw61MsV6LV1IdcLxJRA8dJ4JLmWncThkCj6G8lgkHgulORi2Evn&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=KiwC1LgB-TWpZfewOV-zOA&oh=00_AfT4pBmlovqnlsXkBu8VA8xu8JlsgyVFQcssdwWzpsxA8g&oe=6874ABA2",
        titulo:"El CEEA promueve la denuncia ciudadana para prevenir el delito",
        fecha:"11 de Febrero 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481994085_573081429100432_8289302445105742167_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I2bAYZXN8AQQ7kNvwG8fcQ2&_nc_oc=AdljDADmEwPP4L01GbRQpO9JM4CHlUaZCm-0a8z5qTacNt0d1hmrNW3nXcpAh34KP83_zrelmGBuUaGjbortUrby&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=A430SCgTeMy0ZgxIZ9IBvg&oh=00_AfNk2F1Ug87bdOjGFFbaPF2-zU20mztqvmcPYlXZud9HWQ&oe=686212EC",
        titulo:"El Vicepresidente  del Clúster Automotriz GIRAA Mel Wilhem, tomó protesta como parte del Comité Estatal de Educación Dual en Educación Media Superior... ¡Felicidades!.",
        fecha:"23 de Febrero 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482203547_573092015766040_1871465784854559755_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j2TXIqo6pUYQ7kNvwEBxpzS&_nc_oc=AdkZaiwZdjZrFrSm84rZXClcWaT9rqyuHcQCx6hi-Kqp_6Va1NVm8eMxyU2Zs7XoJoG_u6wSgcOy4e0wnggxHV6Q&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=OhwWBMCibL-hHtZzSGm75g&oh=00_AfOtoH7iMBsBUZO44FewYnBg7uB2FUee0ehy4qfqtzxOXg&oe=68622054",
        titulo:"LA UAA y GIRAA AC unen fuerzas para impulsar la innovación y el desarrollo en Aguascalientes.",
        fecha:"06 de Febrero 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481152949_573088722433036_6356192112832417906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NyDp3JsrGh0Q7kNvwHgwRE1&_nc_oc=AdmZP6nweh9lYRIoBwekZc2eh1oBPdc_YKIXoPu3IGGsVzez5bNUuesDl_ohNy_OiFZD5jV15TsjVMmxfDJZlGPD&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=pImr2K_x4JrQe0htbcXpaQ&oh=00_AfOaLdS7vYCFKJbD8W2iSw12VMvA-2sO2KYmcy5eGee8ow&oe=6861FEBB",
        titulo:"CEEA Llama a Proteger la Feria Nacional de San Marcos como Patrimonio de Todos",
        imagen:"01 de Febrero 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/481985924_572944875780754_782459568704490221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtpkxUeHPpJkcWaA3PyDG-NpXwFpADxjE2lfAWkAPGMQjwSAja9hsnj7Hpb9m-0ecwQtYxqVmkNbAeOYFUBJdZ&_nc_ohc=TKexcFIaZ88Q7kNvwGWpjrF&_nc_oc=Adm2GaiFH35kwukoGQel6HH_EQkLYVEuOFLm5LVs512eDy-TNVV0UW0l0JydFQQ2MnY51b8B9r42zy_UEFAmvZ1V&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=gRsDzj2u2ZyXI5VQLrnnLg&oh=00_AfOLFrl1uBjoxAyfmR0mV5Tmw-KPWQhhLf5avw3L951W7g&oe=686DF08D",
        titulo:"Los empresarios de Aguascalientes tienen la capacidad y fortaleza para enfrentar los retos y desafíos del 2025: CEEA.",
        fecha:"14 de Enero 2025",
      },
      {
        src:"https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/482303519_572873712454537_1604038815095986070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfq-Au-KUjxEhHvdtZ9zUi3cDbR2th1rndwNtHa2HWuaj0cw4m9QpuTsBo_gb1xndaLlKOqasq5V19-bhmP-Ry&_nc_ohc=RMKjL-D68L4Q7kNvwHmWIU7&_nc_oc=Adl8qajz5w_GPIhoQE9u3GHE-kY3ZOuUm1sGnhRD6HkXAu3gupwhJTGFppbONzuH-RlvmCBi105oDtjhvaIyjXXA&_nc_zt=23&_nc_ht=scontent.fagu3-1.fna&_nc_gid=eP8h6nnHcv-8YPskX3HC-w&oh=00_AfOgceHm-SzoQA5KpcObnzdaAs4rsu8qLU-R0HbmQeZJ0A&oe=686E20E8",
        titulo:"Inició la Semana del Contador 2024.",
        imagen:"03 de Diciembre 2024",
      } ]);

    console.log('✅ Datos insertados con éxito');
    process.exit(0);

  } catch (err) {
    console.error('❌ Error insertando datos:', err);
    process.exit(1);
  }
}
