//const exec = requiere('child_process').exec;
const { exec, spawn } = require('child_process');

/**
 * ejecutamos un comando dir del SO
 * Tambien podemos llamar a archivo para que node los ejecute
 * en el ejemplo, mandamos a ejecucion al archivo consola.js, tambien podemos reemplezar el node consola.js por
 * cualquier comando del SO como dir
 */
/* exec('node consola.js', function(err, stdout, sterr){
    if(err){
        console.error(err);
        return false;
    }
    console.info(stdout);
}); */

/**Comando spawn nos permite invocar un nuevo proceso de nodejs y ejecutar un comando */
let proceso = spawn('dir');
//examinamos informacion del proceso generado
//console.info(proceso);
console.info(proceso.pid);
console.info(proceso.connected);
//escuchamos lo que esta ocurriendo en el proceso cuando vienen datos: proceso.stdout.on("data") y ejecutamos una funcion
proceso.stdout.on("data", function(data){
    console.info(data.toString());
});
//detectamos cuando termina el proceso y ejecutamos una funcion
proceso.on("exit", ()=>{
    console.info(`el proceso terminó ${proceso.killed}`);
});