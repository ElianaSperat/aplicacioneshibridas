import express from "express";
import { mostrarCanciones, crearCancion, eliminarCancion, obtenerCancionPorId, actualizarCancion, obtenerCancionPorNombre, obtenerCancionesPorAlbum, filtrarCancionesPorFecha, ordenarCanciones } from "../controllers/cancionesController.js";

const router = express.Router();

// Creo una nueva canción
router.post("/nuevacancion", crearCancion)

// Muestro canciones. No pude aplicar la Paginación
router.get("/", mostrarCanciones)

// Busco por Canción Id
router.get('/idCancion/:idCancion', obtenerCancionPorId);

// Busco Canción por Nombre
router.get('/nombre/:nombre', obtenerCancionPorNombre);

// Filtro Canciones por Album
router.get('/album/:album', obtenerCancionesPorAlbum);

// Filtro Canciones por Fecha
// Filtro Canciones por Fecha de Lanzamiento
router.get('/lanzamiento/:fecha', filtrarCancionesPorFecha);

// Elimino una canción
router.delete('/eliminar/:nombre', eliminarCancion);

// El patch lo usamos cuando queremos actualizar un dato puntual de la canción
router.patch('/actualizar/:idCancion', actualizarCancion);

// Para ordenar según año de lanzamiento
// En la URL de Psotman tenes que poner: http://localhost:3000/canciones?ordenarPor=lanzamiento&orden=mayor
router.get('/canciones', ordenarCanciones);

export default router;