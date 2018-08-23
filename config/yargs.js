
const descripcion =  {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer' 
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command('crear','Crea una tarea por hacer', {
                    descripcion: descripcion
                })
                .command('actualizar','Actualizar una tarea por hacer a estado completado', {
                    descripcion: descripcion,
                    completado: completado
                })
                .command('borrar','Borrado de una tarea', {
                    descripcion: descripcion,
                    completado: completado
                })
                .command('listar','Listando Tareas', {
                    completado: completado
                })
                .help()
                .argv;

module.exports = {
    argv
}