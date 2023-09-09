// Para este ejercicio hay que agregar esto en el package.jsoon: "type": "module",
// Lo saqué para que funcione la segunda consigna

import { generarTabla } from './tablaMultiplicar.mjs';

const numero = 5;
const tabla = generarTabla(numero);

console.log(`Tabla de multiplicar del ${numero}:`);
tabla.forEach(item => {
  console.log(item);
});
