import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    // parse() - podriamos recibir un objeto o una promesa, y no nos combiene de que sea asíncrono 
    .parseSync()
