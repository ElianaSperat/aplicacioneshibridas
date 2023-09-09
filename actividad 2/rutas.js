const path = require('path');
const fs = require('fs');
const os = require('os');

const directorio = 'archivos';

const archivo = 'notas.txt';

const rutaArchivo = path.join(__dirname, directorio, archivo);

console.log(rutaArchivo);

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error al leer el archivo: ${err}`);
    return;
  }

  console.log('Contenido del archivo:');
  console.log(data);
});

const sistemaOperativo = os.platform();
const arquitecturaSistema = os.arch();

const mensaje = `Sistema Operativo: ${sistemaOperativo}\nArquitectura del Sistema: ${arquitecturaSistema}`;

fs.writeFile(rutaArchivo, mensaje, (err) => {
  if (err) {
    console.error(`Error al escribir en el archivo: ${err}`);
    return;
  }

  console.log(`El archivo ${archivo} se ha creado exitosamente con la información del sistema.`);
});

const nombreDispositivo = os.hostname();
const mensajeAdicional = 'Este es un mensaje adicional para el archivo.';

const mensajeCompleto = `${mensaje}\nNombre del Dispositivo: ${nombreDispositivo}\n${mensajeAdicional}`;

fs.appendFile(rutaArchivo, `\n${mensajeCompleto}`, (err) => {
  if (err) {
    console.error(`Error al agregar al archivo: ${err}`);
    return;
  }

  console.log('Se ha agregado la información adicional al archivo exitosamente.');
});


