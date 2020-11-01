/**
 * Nuestra funcion asincrona representa aquella funcion que luego usaremos en otros lugares de la app
 */
function asincrona(callback){
    //varias lineas de codigo que realizan diversas tareas
    setTimeout(function(){
        try{
            let a = 3 + z; //z no esta definido, el codigo se rompe y sale de la ejecucion
            /**suponemos que todo fue bien, no caimos en el catch, el error es null, retornamos a */
            callback(null, a);
        }
        catch(error){
            //devolvemos el error, y si espera el callback otros parametros sera un undefined
            callback(error);
        }
    }, 1000);
}


//llamamos a asincrona y le pasamos nuestro callback
asincrona(function(error, dato){
    //sabemos que nuestro callback puede fallar, por lo que lo primero es comprobar si hay un error
    //si error es null, es decir, no se produjo un error, null es false asi que no se terminará la ejecucion
    if(error){
        console.error(`Se ha producido un error: ${error}`);
        //detenemos la ejecucion de la funcion o podemos lanzar un error a quien llamó a la funcion
        return false;
    }
});