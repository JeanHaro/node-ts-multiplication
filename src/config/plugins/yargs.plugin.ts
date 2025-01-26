import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    // hay varias formas que tiene yargs para configurarse
    // Se puede configurar mediante opciones o mediante funciones
    // Primer parámetro -> es la b de la base
    // Segundo parámetro -> es lo que quiero hacer con él
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // esto me va a obligar a que me lo proporcione
        describe: 'Multiplication table base'
    })
    // Valores por defecto
    .option('l', { 
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    // Mostrar la tabla
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((argv, options) => {

        if (argv.b < 1) throw 'ERROR: base must be greater than 0';

        return true;
    })
    // parse() - podriamos recibir un objeto o una promesa, y no nos combiene de que sea asíncrono 
    .parseSync()
