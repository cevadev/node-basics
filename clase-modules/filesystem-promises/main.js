const fs = require('./io.js');

const CONTENIDO = `Hola amigos
nueva linea`;

async function main(path){
    await fs.escribir(path, CONTENIDO);
    const data =  await fs.leer(path);
    console.info(data);
    await esperar(path);

}

//eliminamos el archivo 3 segundos despues
async function esperar(path){
    setTimeout(function(){
        fs.borrar(path);
        console.info('El archivo se borró exitósamente');
    }, 3000);
}

main(__dirname + '/file.txt');