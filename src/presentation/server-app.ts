import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

// El que va a orquestar de como va a funcionar nuestra aplicación de entrada
export class ServerApp {
    // Cuando nosotros lanzamos la aplicación queremos crear la tabla 
    static run ({base, limit, showTable}: RunOptions) {
        console.log('Server running...');

        // Nuestro caso de uso
        const table = new CreateTable().execute({base, limit}); 
        const wasCreated = new SaveFile().execute({ 
            fileContent: table, 
            fileDir: 'outputs',
            fileName: `table-${base}`
        });
        
        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File Created!')
            : console.error('File not created');
    }
}