import mongoose from "mongoose";

const albumesSchema = new mongoose.Schema({
    idAlbum: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        require: true
    },
    lanzamiento: {
        type: Number,
        required: true
    }
    
})

export default mongoose.model("Album", albumesSchema);