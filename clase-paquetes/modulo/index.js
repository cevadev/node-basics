//traemos nuestro modulo
const modulo = require('./modulo.js');
//accediendo a las propiedades
const { prop3 } = require('./modulo.js');
//accediendo a metodos
const { adios } = require('./modulo.js');

//ejecutamos una funcion del modulo
modulo.saludar();
adios();
//accedemos a la propiedades del modulo
console.log(modulo.prop1);
console.log(modulo.prop2);
console.log(prop3);