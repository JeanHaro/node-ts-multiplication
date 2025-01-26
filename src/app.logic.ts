import fs from 'fs';
import path from 'path';
import { yarg } from './config/plugins/yargs.plugin';

// const number = yarg.b;
const { b: number, l: limit, s: show } = yarg;
let bodyMessage: string = '';

// \n -> salto de línea
for (let i = 1; i <= limit; i++) {
    bodyMessage += `${number} x ${i} = ${number * i}\n`;
}

const data = `
==========================
    Tabla del ${number}
==========================

${bodyMessage}
`

if (show) console.log(data);

// Genera la carpeta
const outputDir = path.join(__dirname, '../outputs');

try {
    // Verificamos si la carpeta existe
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir); // Crea la carpeta si no oexiste

    // Donde estará alojado el archivo
    const filePath = path.join(outputDir, `tabla-${number}.txt`);

    // Crea el archivo y coloca el contenido
    fs.writeFileSync(filePath, data);

    console.log('Archivo creado exitosamente');
} catch (error) {
    console.log('Error al escribir el archivo', error)
}
