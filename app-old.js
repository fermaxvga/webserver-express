const http = require('http');

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });
        //response.write('Hola Mundo');


        let salida = {
            nombre: 'Fernando',
            edad: 34,
            url: request.url
        }

        response.write(JSON.stringify(salida));

        response.end();
    })
    .listen(8080);
console.log('Escuchando puerto 8080');