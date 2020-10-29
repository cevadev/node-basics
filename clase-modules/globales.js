/**funciones globales */
let i = 0;
function intervalo(){
    let intervalo = setInterval(function(){
        console.log('Hola');
        if(i === 3){
            clearInterval(intervalo);
        }
        i++;
    }, 1000);
}

function immediate(){
    setImmediate(function(){
        console.info('hola');
    });
}

function whereIAm(){
    console.info(`Your path is: ${__dirname}`);
    console.info(`Your are working on ${__filename} file`);
}

/**creamos una variable global para todo nuestro proceso de node */
function miVariableGlobal(){
    global.url = 'http://localhost:8080/ventas';
    console.info(`mi url de conexion es: ${global.url}`);
}

miVariableGlobal();
//immediate();
//whereIAm();
//intervalo();