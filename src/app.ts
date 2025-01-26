// Plugins
import { yarg } from "./config/plugins/yargs.plugin";

/* console.log(process.argv);

console.log(yarg);
console.log('valor de b es =>', yarg.b); */

// Función anonima autoinvocada, se ejecuta solo
(async () => {
    await main();
})();

async function main() {
    console.log(yarg);
}