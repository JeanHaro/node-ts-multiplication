export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {
        /**
         *  DI - Inyección de dependencias
         * Vamos a inyectarle la forma en como queremos que cree el archivo
         * o que queremos que haga basado en dependencias externas es decir nuestra clase de
         * CreateTable puede recibir algún tipo de recurso externo lo podemos inyectar
         */
        
    }
    
    execute ({ base, limit = 10 }: CreateTableOptions): string {
        let bodyMessage = '';

        // \n -> salto de línea
        for (let i = 1; i <= limit; i++) {
            bodyMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return bodyMessage;

    }
}