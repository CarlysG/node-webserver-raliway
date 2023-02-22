// Con Express sin renderizar

const express = require('express');

const app = express();
const port = 8080;

// Servir contenido estatico - middleware
app.use( express.static('public') );

// Cuando no se hace llamado a la carpeta public
// .send envia la informacion en duro
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo en su respectiva ruta');
});

// .sendFile llama al archivo que contiene la informacion
app.get('/generic', (req, res) => {
  res.sendFile( __dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
  res.sendFile( __dirname + '/public/elements.html');
});
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })