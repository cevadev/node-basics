/*a una funcion que retorna una promesa le añadimos el async y convertimos a la funcion en asincrona*/
async function hola(nombre){
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

async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.info('bla, bla, bla, bla ...');
            resolve();
            //lanzamos un error intencionalmente
            //reject('Aqui sucedió un error...');
        }, 1000);
    });
}

async function adios(nombre){
    /**retornamos una promesa utilizando ES6 */
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.info(`Adios ${nombre}`);
            resolve();
        }, 1000);
    });
}

/*llamamos a una funcion async hola() */
async function main(){
    //la funcion hola retorna el nombre
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina elproceso...');
}

main();