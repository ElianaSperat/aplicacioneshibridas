import express from "express";
import {mostrarAlbumes, crearAlbum, obtenerAlbumPorNombre, filtrarAlbumesPorContenido} from "../controllers/albumesController.js";

const router = express.Router();

// Ruta para obtener todos los álbumes
router.get("/", mostrarAlbumes)

// Creo un nuevo album
router.post("/nuevoalbum", crearAlbum)

// Busco Album por Nombre
router.get('/nombre/:nombre', obtenerAlbumPorNombre);

router.get('/filtrar/:nombre', filtrarAlbumesPorContenido);

export default router;