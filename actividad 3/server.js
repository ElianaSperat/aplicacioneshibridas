const express = require("express");

const app = express();
const puerto = 2023;

const tecnologias = [
  "HTML5",
  "Javascript",
  "PHP",
  "React",
  "MySQL",
];

const productos = [
  { id: 1, nombre: "Pan", precio: 120 },
  { id: 2, nombre: "Leche", precio: 80 },
  { id: 3, nombre: "Arroz", precio: 50 },
  { id: 4, nombre: "Carne", precio: 450 },
  { id: 5, nombre: "Pollo", precio: 300 },
  { id: 6, nombre: "Huevos", precio: 90 },
  { id: 7, nombre: "Fideos", precio: 60 },
  { id: 8, nombre: "Lechuga", precio: 70 },
  { id: 9, nombre: "Tomate", precio: 80 },
  { id: 10, nombre: "Papas", precio: 40 },
];

const minimo = parseInt(req.query.minimo);
const maximo = parseInt(req.query.maximo);

app.get("/", (req, res) => {
  res.send("Eliana Sperat");
});

app.get("/materia", (req, res) => {
  res.send("Mateira: Aplicaciones Híbridas");
});

app.get("/profesor", (req, res) => {
  res.send("Profesor: Camila Belén Marcos Galban");
});

app.get("/stack/:tecnologia", (req, res) => {
  const tecnologiaParam = req.params.tecnologia;

  if (tecnologias.includes(tecnologiaParam)) {
    res.send("Dónde te dejo el CV?");
  } else {
    res.send("A leer la documentación entonces...");
  }
});

app.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((productos) => productos.id === id);

  if (!producto) {
    res.status(404).send("No tenemos este producto, intentá ingresando otro id");
  } else {
    res.json(producto);
  }
});

if (!isNaN(minimo) && !isNaN(maximo)) {
  const productosFiltrados = alimentos.filter(
    (alimento) => alimento.precio >= minimo && alimento.precio <= maximo
  );

  res.json(productosFiltrados);
} else {
  res.json(producto);
}

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(puerto, () => {
  console.log(`Servidor web escuchando en el puerto ${puerto}`);
});
