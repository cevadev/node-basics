function Saludar(nombre, MiCallbackDeDespedida){
    setTimeout(function(){
        console.info(`Hola ${nombre}`);
        MiCallbackDeDespedida(nombre);
    }, 1000);
}

function SaludoDespedida(nombre, OtroCallback){
    setTimeout(function(){
        console.info(`Adios ${nombre}`);
        OtroCallback();
    } ,1000);
}

console.info('Iniciando proceso...');
Saludar('Carlos', function(nombre){
    SaludoDespedida(nombre, function(){
        console.info('Terminando proceso');
    })
});