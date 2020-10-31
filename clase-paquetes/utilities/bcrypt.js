//traemos el paquete
const bcrypt = require('bcrypt');

const password = 'rpgile400';

bcrypt.hash(password, 5, function(error, hash){
    //el hash es el password encriptado
    console.warn(hash);

    //con la funcion compare() nos aseguramos que el password y el hash coincidan
    bcrypt.compare(password, hash, (error, res)=>{
        console.warn(res);
    });
})