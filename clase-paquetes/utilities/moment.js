const moment= require('moment');

const hoy = moment();

console.info(hoy.toString());
//formateamos la fecha
console.info(hoy.format('YYYY/MM/DD - HH:mm'));