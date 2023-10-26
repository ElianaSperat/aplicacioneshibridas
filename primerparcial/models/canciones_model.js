import mongoose from "mongoose";

const cancionesSchema = new mongoose.Schema({
    idCancion: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    lanzamiento: {
        type: Number,
        required: true
    },
    duracion: {
        minutos: {
            type: Number,
            required: true
        },
        segundos: {
            type: Number,
            required: true
        }
    }
});



export default mongoose.model("Canciones", cancionesSchema);
