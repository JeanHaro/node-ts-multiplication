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
    // parse() - podriamos recibir un objeto o una promesa, y no nos combiene de que sea asíncrono 
    .parseSync()
