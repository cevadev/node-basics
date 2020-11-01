//Trabajamos con buffer de escritura de node stdout de la consola
/* process.stdout.write('Hello');
process.stdout.write('World');
process.stdout.write('JS');
 */

/**creacion de un buffer de ecritura que recibe un dato, lo modifica y escribirlo
 * Para ello debemos crear un buffer de transformacion
 * 
 * Vamos a leer del fichero input.txt pasarlo a mayusculas y luego escribirlo en la consola:
 * 1. Importamos la dependencia stream
 */
const stream = require('stream');
const util = require('util');
const fs = require('fs');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');

//aplicamos el encoding al stream para leer la informacion
readableStream.setEncoding('UTF-8');

//creamos el stream de transformacion
const Transform = stream.Transform;

//creamos la funcion para transformar a mayuscujas
function Mayus(){
    Transform.call(this);
}

//ahora decimos que la funcion Mayus hereda o trae todo lo que necesita de Transform
util.inherits(Mayus, Transform);

//trabajamos en la funcion transform() qye viene por defecto en los stream de transformaciom
/**
 * Generamos la transformacion
 * @param {*} chunk 
 * @param {*} codi -> codificacion
 * @param {*} callback -> callback que tenemos que ejecutar cuando hayamos hecho custom a las cosas que queremos
 */
Mayus.prototype._transform = function(chunk, codi, callback){
    //por cada chunk lo pasamos a mayusculas
    chunkMayus = chunk.toString().toUpperCase();
    //enviamos el push
    this.push(chunkMayus);
    //ejcutamos el callback vacio
    callback();
}

//llamamos a nuestro generador de transformacion 
let mayus = new Mayus();

//pipe -> funcion que se utiliza para mandar de un sitio a otro
readableStream
    .pipe(mayus)
    //la salida la enviamos a la consola
    .pipe(process.stdout);
