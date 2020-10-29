//llamamos al modulo fs que significa file system
const fs = require('fs');

/*emplos para leer un archivo del file system */
//version 1
function leer(ruta, callback){
    /**callback:
     * err -> error por si algo falla al momento de buscar o leer el archivo
     * data -> data del archivo
     */
    fs.readFile(ruta, function(err, data){
        //leido
        console.info(data.toString()); //toString() para poder leerlo como un string el contenido del archivo
    });
}

/**funcion para escribir en un archivo */
function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function(error){
        if(error){
            console.error('No ha sido posible escribir en el archivo', error);
        }
        else{
            console.info('Se ha escrito correctamente en el archivo');
        }
    });
}

/**funcion para borrar un archivo */
function borrar(ruta, callback){
    fs.unlink(ruta, function(error){
        if(error){
            console.error('No se ha podido eliminar el archivo especificado');
        }
        else{
            console.info('Se ha eliminado satisfactoriamente el archivo');
        }
    });
}

//llamada de la funcion
borrar(__dirname+'/archivo1.txt');
//escribir(__dirname + '/archivo1.txt', 'soy un nuevo archivo. Hola NODEJS!!!');
//leer(__dirname + '/texto.txt');