import Cancion from "../models/canciones_model.js";

export async function mostrarCanciones(req, res) {
    try {
        let canciones = await Cancion.find();
        res.json({ canciones });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las canciones" });
    }
}

export async function crearCancion(req, res) {
    const body = req.body
    const añoLanzamiento = Number(body.lanzamiento);
    const duracion = body.duracion.split(":");
    const duracionMinutos = Number(duracion[0]);
    const duracionSegundos = Number(duracion[1]);

    let cancion = new Cancion({
        idCancion:body.idCancion,
        nombre: body.nombre,
        album: body.album,
        lanzamiento: añoLanzamiento,
        duracion: {
            minutos: duracionMinutos,
            segundos: duracionSegundos
        }
    });

    try {
        const nuevaCancion = await cancion.save();
        res.json(nuevaCancion);
    } catch (error) {
        res.status(500).json({ error: "No se pudo crear la canción" });
    }
}

export async function obtenerCancionPorNombre(req, res) {
    try {
        const nombre = req.params.nombre;
        const cancion = await Cancion.findOne({ nombre: nombre });

        if (!cancion) {
            return res.status(404).json({ message: "Canción no encontrada" });
        }

        res.json(cancion);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la canción" });
    }
}

export async function obtenerCancionesPorAlbum(req, res) {
    const album = req.params.album;
    try {
        const canciones = await Cancion.find({ album: album });
        if (canciones.length === 0) {
            return res.status(404).json({ message: "No se encontraron canciones en ese álbum" });
        }
        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener canciones por álbum" });
    }
}

export async function filtrarCancionesPorFecha(req, res) {
    try {
        const fecha = req.params.fecha;
        const canciones = await Cancion.find({ lanzamiento: fecha });

        if (canciones.length === 0) {
            return res.status(404).json({ message: "No se encontraron canciones con esa fecha de lanzamiento." });
        }

        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: "Error al filtrar canciones por fecha de lanzamiento." });
    }
}

export async function eliminarCancion(req, res) {
    try {
        const nombre = req.params.nombre;
        const cancionEliminada = await Cancion.findOneAndDelete({ nombre: nombre });
        if (!cancionEliminada) {
            return res.status(404).json({ message: "La canción no existe" });
        }
        res.json(cancionEliminada);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la canción." });
    }
}

export async function obtenerCancionPorId(req, res) {
    try {
        const idCancion = req.params.idCancion;
        const cancion = await Cancion.findById(idCancion);

        if (!cancion) {
            return res.status(404).json({ message: "Canción no encontrada" });
        }

        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener la canción por ID" });
    }
}

export async function actualizarCancion(req, res) {
    const idCancion = req.params.idCancion;
    const datosNuevos = req.body;

    try {
        const cancionActualizada = await Cancion.findByIdAndUpdate(idCancion, datosNuevos, { new: true });

        if (!cancionActualizada) {
            return res.status(404).json({ message: "La canción no existe" });
        }

        res.json(cancionActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar la canción en la base de datos" });
    }
}

export async function ordenarCanciones(req, res) {
    try {
        const { ordenarPor, orden } = req.query;

        const consulta = Cancion.find();

        if (ordenarPor && orden) {
            consulta.sort({ [ordenarPor]: orden });
        }

        const canciones = await consulta.exec();

        if (canciones.length === 0) {
            return res.status(404).json({ message: "No se encontraron canciones" });
        }

        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las canciones" });
    }
}