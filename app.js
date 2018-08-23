//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = { crear,guardarDB,actualizar } = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch( comando ){

    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
    let listado = porHacer.getListado(argv.completado);
    for(let tarea of listado){
        console.log("============Tarea Por Hacer============".red);
        console.log(tarea.descripcion);
        console.log('Estado:'.green, `${tarea.completado}`.red);   
        console.log('======================================='.red);
    }
    break;
    
    case 'actualizar':
        let tareaActualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Tarea Actualizada'.bgBlue);
    break;

    case 'borrar':
        console.log(`============Borrando tarea ${argv.descripcion}============`.red);
        let borrando = porHacer.borrarTarea(argv.descripcion);
        console.log('Tarea Borrada'.bgRed, borrando);
    break;

    default:
        console.log('Comando no reconocido');

}