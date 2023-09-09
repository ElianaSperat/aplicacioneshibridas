// app.mjs en el main de package json para que funcione
import { default as esParOImpar } from './esParImpar.js';

const numero = 5;
const resultado = esParOImpar(numero);

console.log(`El número ${numero} es ${resultado}.`);

