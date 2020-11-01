let suma = 0;

/**para saber cuanto tiempo le toma a un proceso hacer una tarea */
console.time('bucle');
for(let i = 0; i < 1000000000; i++){
    suma += 1;
}
console.timeEnd('bucle');

console.time('asincrono');
console.info('empieza el proceso asincrono');
asincrona()
    .then(() =>{
        console.timeEnd('asincrono');
    });


/*funcion asincrona */
function asincrona(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.info('Termonó el proceso asincrono');
            resolve();
        }, 1000);
    });
}