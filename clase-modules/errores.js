function otraFuncion() {
     serompe();
}

function serompe() {
    return 3+z;
}

function serompeASYNC(callbackError) {

    setTimeout(function () {
        try {
            return z+3;
        } catch (error) {
            console.log('error funcion asincrona');
            callbackError(error);
        }
    },1000);
}

/**modo sincrono */
/* try {
    otraFuncion();
} catch(err) {
    console.error('error en el llamado');
    console.error(err.message);
    console.error(err);
}
console.log('despues de romper'); */

/**modo asyncrono */
try {
    // otraFuncion();
    serompeASYNC(function (error) {
        console.log(error.message);
    
    });
    //serompeASYNC();
} catch (error) {
    console.error("No fu posible entrgegar respuesta")
    console.error(error.message);
    console.error(error);
}