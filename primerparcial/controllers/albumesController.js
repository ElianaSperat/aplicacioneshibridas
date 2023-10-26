import Album from "../models/albumes_model.js";

export async function mostrarAlbumes(req, res){
    try {
        let albumes = await Album.find();
        res.json({ albumes });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los albumes" });
    }
}

export async function crearAlbum(req, res) {
    const body = req.body
    const lanzamiento = Number(body.lanzamiento);

    let album = new Album({
        idAlbum:body.idAlbum,
        nombre: body.nombre,
        lanzamiento: lanzamiento,
    });

    try {
        const nuevoAlbum = await album.save();
        res.json(nuevoAlbum);
    } catch (error) {
        res.status(500).json({ error: "No se pudo crear el album" });
    }
}

// Devuelve un solo album, por ejemplo: http://localhost:3000/albumes/nombre/Fearless (Taylor's Version)
export async function obtenerAlbumPorNombre(req, res) {
    try {
        const nombre = req.params.nombre;
        const album = await Album.findOne({ nombre: nombre });

        if (!album) {
            return res.status(404).json({ message: "El Album no existe" });
        }

        res.json(album);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el album" });
    }
}

// Devuelve una lista de albums que coinciden con la información que buscaste,
// por ejemplo: http://localhost:3000/albumes/filtrar/(Taylor's Version)
export async function filtrarAlbumesPorContenido(req, res) {
    try {
        const nombre = req.params.nombre;
        const albumes = await Album.find({ nombre: { $regex: nombre, $options: "i" } });

        if (albumes.length === 0) {
            return res.status(404).json({ mensaje: "No se encontraron álbumes con ese contenido en el nombre" });
        }

        res.json(albumes);
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
}