const { createServer } = require("http");

createServer((peticion, respuesta) => {

    respuesta.writeHead(200, { "Content-type": "text/html" });

    respuesta.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <h1> Hola </h1>
        </body>
        </html>
        `);

    respuesta.end();

}).listen(4000);