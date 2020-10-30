//requerimos el modulo http
const http = require('http');

const PORT = 3001;

function router(request, response){
    switch(request.url){
        case '/hola':
            response.write('<h1 style="background-color:black; color:green">Hola que tal!!!</h1>');
            response.end();
            break;
        default:
            response.write('Error 404 la url no existe');
            response.end();
    }
}

const server = http.createServer(router);
server.listen(PORT, function(error){
    if(error){
        console.info('No se pudo establecer una conexion con el servidor');
        console.error(error.message);
    }
    else{
        console.info(`Ready on http://localhost:${PORT}`);
    }
});