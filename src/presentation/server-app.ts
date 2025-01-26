interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

// El que va a orquestar de como va a funcionar nuestra aplicación de entrada
export class ServerApp {
    static run (options: RunOptions) {
        console.log('Server running...');

        console.log(options);
    }
}