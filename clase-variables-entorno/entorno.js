
const nombre = `Hola ${process.env.NOMBRE} tu variable de entorno está en: `;
//Si no existe la variable JAVA_HOME le pasamos un valor por defecto
const JAVA_HOME = process.env.JAVA_HOME || 'no hay variable de entorno JAVA_HOME';

console.info(`${nombre} ${JAVA_HOME}`);