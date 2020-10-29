function hola(nombre){
    /*nuestra funcion hola retorna una promesa */
    return new Promise(function(resolve, reject){
        setTimeout(function()
        {
            console.info(`Hola ${nombre}`);
            //en lugar de llamar a un callback, llamamos a resolve()
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.info('bla, bla, bla, bla ...');
            //resolve();
            //lanzamos un error intencionalmente
            reject('Aqui sucedió un error...');
        }, 1000);
    });
}

function adios(nombre){
    /**retornamos una promesa utilizando ES6 */
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.info(`Adios ${nombre}`);
            resolve();
        }, 1000);
    });
}

/**llamamos a la promesa */
console.info('Iniciando el proceso');
hola('Carlos')
    //pasamos una funcion JS moderno (las 3 formas de pasar una funcion son validas)
    .then(hablar)
    //pasamos una funcion usando ES 6
    .then((nombre)=>{
        //return para llamar a una function
        return adios(nombre);
    })
    //Pasamos una función usando viejo JS
    .then(function(nombre){
        console.info('Terminado el proceso');
    })
    //caputuramos el error en caso de que algo inesperado ocurra
    .catch(function(error){
        console.info('Error: ');
        console.error(error);
    })