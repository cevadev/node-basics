function saludar(){
    console.info('Hola mundo JS');
}

function adios(){
    console.info('Adios mundo JS');
}

//exportamos un objeto con funciones y propiedades
module.exports = {
    saludar,
    adios,
    prop1: 'hello',
    prop2: 'world',
    prop3: 'JS'
}