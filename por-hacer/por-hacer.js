
const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () =>{

    return new Promise ((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        if (!data){
            reject(`Debe introducir una descripcion de la tarea`);
            return;
        }
    
        fs.writeFile(`db/data.json`, data, (err) => {
        
            if (err){ 
                reject(err);
            }else{
                resolve(`data.json`.yellow);
            }
            
        });
    
    })

}

borrarDb = () => {

    return new Promise ((resolve, reject) => {

        data = [];

        let data = JSON.stringify(listadoPorHacer);

        if (!data){
            reject(`Debe introducir una descripcion de la tarea`);
            return;
        }
    
        fs.writeFile(`db/data.json`, data, (err) => {
        
            if (err){ 
                reject(err);
            }else{
                resolve(`data.json`.yellow);
            }
            
        });
    
    })

}

const cargarDb = () => {

    try {
     
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        
    }

}

const crear = (descripcion) => {
    
    cargarDb();

    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push( porHacer );
    
    guardarDB();
    
    return porHacer;

}

const getListado = (completado = false) => {

    cargarDb();
    let  nuevoListado = listadoPorHacer.findIndex( tarea => {
        console.log(tarea.completado === true);
        return tarea.completado !== false;
    })
    if( completado === true ){
        console.log(completado);
        return nuevoListado;
    }else{
        console.log(completado);
        return listadoPorHacer;
    }

}

const actualizar = (descripcion, completado) => {

    cargarDb();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    })

    if( index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}



const borrarTarea = (descripcion) => {

    cargarDb();
    let  nuevoListado = listadoPorHacer.filter( tarea => {
        console.log(tarea.descripcion !== descripcion);
        return tarea.descripcion !== descripcion;
    })
    if( nuevoListado.length === listadoPorHacer.length ){
        return `No existe la tarea`.bgRed;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return `Exito`.yellow;
    }

}

module.exports = {
    crear,
    cargarDb,
    getListado,
    guardarDB,
    actualizar,
    borrarTarea
}
