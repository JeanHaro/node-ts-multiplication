import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name?: string;
    destination?: string;
}

// El que va a orquestar de como va a funcionar nuestra aplicación de entrada
export class ServerApp {
    // Cuando nosotros lanzamos la aplicación queremos crear la tabla 
    static run ({base, limit, showTable, name, destination}: RunOptions) {
        console.log('Server running...');

        // Si el nombre viene igual entonces ...
        if (name === "table") name = `table-${base}`;

        // Nuestro caso de uso
        const table = new CreateTable().execute({base, limit}); 
        const wasCreated = new SaveFile().execute({ 
            fileContent: table, 
            fileDir: destination,
            fileName: name
        });
        
        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File Created!')
            : console.error('File not created');
    }
}