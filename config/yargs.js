const argv = require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe : 'Es la base de multiplicar'
              })
              .check((argv, options) => {
                if( isNaN(argv.b) ){
                  throw 'La base debe ser un número'
                }
                return true;
              })
              .option('i', {
                alias: 'itereacion',
                type: 'number',
                demandOption: false,
                default: 10,
                describe : 'Define el numero maximo de repeticiones de tabla'
              })
              .check((argv, options) => {
                if( isNaN(argv.b) ){
                  throw 'El Limite debe ser un número.'
                }
                return true;
              })
              .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe : 'Define si el usuario requiere imprimir tabla'
              })
              .check((argv, options) => {
                if(typeof(argv.l) !== 'boolean'){
                  throw 'El listado debe ser de tipo booleano.'
                }
                return true;
              })
              .argv;

module.exports = argv;