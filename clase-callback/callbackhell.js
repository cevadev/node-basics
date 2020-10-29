function hola(nombre, miCallback){
    setTimeout(function(){
        console.info(`Hola ${nombre}`);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.info('bla, bla, bla, bla ...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.info(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

/**
 * Funcion recursiva conversacion: La recursividad consiste en llamar a la misma funcion pero con informacion ligeramente distinta
 * 
 * nombre -> persona con quien conversamos
 * veces -> numero de veces que vamos a conversar
 * callback -> es lo que se va a ejecutar despues de la conservacion
 */
function conversacion(nombre, veces, callback){
    //si las veces que quiere conversar con mayores a 0, entonces se inicia la conversacion, cuando es 0 se ejecuta el callback en else
    if(veces > 0){
        //empieza a hablar
        hablar(function(){
            //volvemos a llamar a la funcion conversacion
            conversacion(nombre, veces-1, callback)
        });
    }
    else{
        adios(nombre, callback);
    }
}

/*Evitando el callback hell con funcion recursiva */
console.info('Iniciando proceso...');
hola('Carlos', function(nombre){
    conversacion(nombre, 10, function(){
        console.info('Terminando proces...');
    });
});

/*Caso del callback hell */
/* console.info('Iniciando proceso....');
hola('Carlos', function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                //una vez que termine de hablar, temrinando el proceso
                adios(nombre, function(){
                    console.info('Terminando proces....');
                });
            });
        });
    });
}); */

