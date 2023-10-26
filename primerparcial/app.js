import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import canciones from "./routes/canciones-routes.js";
import albumes from "./routes/albumes-routes.js";

mongoose
    .connect('mongodb://127.0.0.1/taylorverse', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conectado con la base de datos!!!")
    })
    .catch((error) => {
        console.log("Error al conectar con la Base de datos", error)
    })

const app = express()
const __dirname = path.resolve()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('./vistas/index.html', {root: __dirname})
})
app.use('/canciones', canciones)
app.use('/albumes', albumes)


const puerto = process.env.PORT || 3002;

app.listen(puerto, function() {
    console.log("Servidor Corriendo")
})
