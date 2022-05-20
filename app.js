const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('./config/yargs')
const colors = require('colors')
console.clear();

let base = argv.b;
let limite = argv.i;
let listado = argv.l;


crearArchivo( base, parseInt( limite ), listado )
  .then( nombreArchivo => console.log('          ',colors.blue(nombreArchivo), colors.rainbow('creada')))
  .catch( err => console.log(err));

