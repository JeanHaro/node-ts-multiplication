// Plugins
import { yarg } from "./config/plugins/yargs.plugin";

// Presentation
import { ServerApp } from "./presentation/server-app";

/* console.log(process.argv);

console.log(yarg);
console.log('valor de b es =>', yarg.b); */

// Función anonima autoinvocada, se ejecuta solo
(async () => {
    await main();
})();

async function main() {
    const { 
        b:base, 
        l:limit, 
        s:showTable,
        n: name,
        d: destination 
    } = yarg;

    ServerApp.run({base, limit, showTable, name, destination});
}

