const fs = require('fs');
const colors = require('colors');
const crearArchivo = ( base = 5, limite = 10, listar ) => {
  return new Promise((resolve, reject) =>{
    try{
        const nombreArchivo = `tabla-${ base }.txt`;
        let salida = '';
        for(let i = 1 ; i < limite + 1; i++) {
            salida += `               ${ base } ${colors.grey('X')} ${i} = ${ base * i}\n`;
        }
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);

        if( listar ){
          console.log(colors.red("========================================="))
          console.log(`${ colors.red('||')}             ${ colors.rainbow('TABLA DEL ')}${ colors.red(base) }           ${ colors.red('||')}`)
          console.log(colors.red("========================================="))
          console.log(`${ colors.blue(salida) }`);
        } 

        resolve(nombreArchivo);
      }catch(err){
        reject(err);
      }
  });
}

module.exports = {
  crearArchivo
};