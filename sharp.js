const sharp = require('sharp');

//redimensionamos una imagen de su tamaño original a una de 16x16
sharp("design.png")
    .resize(16,16)
    .toFile('original16x16.png')
    .catch(error =>{
        console.error(error)
    })