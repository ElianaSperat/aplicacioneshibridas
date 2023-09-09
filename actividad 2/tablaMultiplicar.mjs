export function generarTabla(numero) {
  const tabla = [];
  for (let i = 1; i <= 12; i++) {
    tabla.push(`${numero} x ${i} = ${numero * i}`);
  }
  return tabla;
}
