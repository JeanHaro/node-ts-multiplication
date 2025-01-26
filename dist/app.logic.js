"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const number = 5;
let bodyMessage = '';
// \n -> salto de línea
for (let i = 1; i <= 10; i++) {
    bodyMessage += `${number} x ${i} = ${number * i}\n`;
}
const data = `
==========================
    Tabla del ${number}
==========================

${bodyMessage}
`;
console.log(data);
// Genera la carpeta
const outputDir = path_1.default.join(__dirname, '../outputs');
try {
    // Verificamos si la carpeta existe
    if (!fs_1.default.existsSync(outputDir))
        fs_1.default.mkdirSync(outputDir); // Crea la carpeta si no oexiste
    // Donde estará alojado el archivo
    const filePath = path_1.default.join(outputDir, `tabla-${number}.txt`);
    // Crea el archivo y coloca el contenido
    fs_1.default.writeFileSync(filePath, data);
    console.log('Archivo creado exitosamente');
}
catch (error) {
    console.log('Error al escribir el archivo', error);
}
