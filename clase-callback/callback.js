function soyAsincrono(miCallback){
    console.info('Hola, soy una funcion asincrona');
    setTimeout(function(){
        console.info('Estoy siendo asincrono');
        //llamamos a nuestro callback. Una vez que termine con la tarea asincrona, luego llama a la funcion micallback
        miCallback();
    }, 1000);
}

console.info('Iniciando proces....');
soyAsincrono(function(){
    console.info('Terminando proces..');
});
