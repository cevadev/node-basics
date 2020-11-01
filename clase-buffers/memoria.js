//creamos un buffer de 4 posiciones vacias
let buffer = Buffer.alloc(4);
//creamos un buffer que contiene el siguiente array
let buffer2 = Buffer.from([1,2,3]);
//creamos un buffer con una cadena de texto
let buffer3 = Buffer.from('Hola');

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString())