import fs from 'fs';
import path from 'path';

// Como quiero que funcione mi UseCase
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDir?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor (
        /** repository: StorageRepository (aws, fileSystem) */
    ) {}

    execute ({ fileContent, fileDir = 'outputs', fileName='table' }: Options): boolean {

        // Genera la carpeta
        const nameFileDir = path.join(__dirname, `../../../${fileDir}`);

        try {
            // Verificamos si la carpeta existe
            if (!fs.existsSync(nameFileDir)) fs.mkdirSync(nameFileDir, {recursive: true}); // Crea la carpeta si no existe
        
            // Donde estará alojado el archivo
            const filePath = path.join(nameFileDir, `${fileName}.txt`);
        
            // Crea el archivo y coloca el contenido
            fs.writeFileSync(filePath, fileContent);

            return true;
        } catch (error) {
            console.log('Error al escribir el archivo', error)

            return false;
        }
    }
}