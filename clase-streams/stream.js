//importamos el modulo fs (file stream) de nodejs
const fs = require('fs');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');

//aplicamos el encoding al stream para leer la informacion
readableStream.setEncoding('UTF-8');
//escuchamos el evento data del readableStream
readableStream.on('data', function(chunk){
    //conforme la informacion va llegando lo ubicamos en data
    data += chunk;
});
//escuchando cuando el stream termina e imprimimos la info en consola
readableStream.on('end', function(){
    console.info(data);
});