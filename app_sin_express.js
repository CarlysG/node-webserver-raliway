//Sin Express

// Libreria De node
const http = require('http');


// req = solicitud al servidor
// res = respuesta del servidor
http.createServer( (req, res) => {

    // status de respuesta
    // res.writeHead(200);
    // status con tipo de documento
    // res.writeHead(200, { 'content-Type': 'text/plain' });
    // Para descargar archivos
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'content-Type': 'application/cdv' });

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');
    res.end();

})
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 );