// Con Express y renderizado (hbs) handlebars
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// TODO: require('hbs')
// handlebars = para renderizar vistas 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico - middleware
app.use( express.static('public') );

// hbs
// .render = Cuando se renderiza la vista
// controlador : vista home.hbs
app.get('/', (req, res) => {
  res.render('Home', {
    nombre: 'Carlys',
    titulo: 'Curso de Node'
  });
});

// controlador : vista generic.hbs
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Carlys',
    titulo: 'Curso de Node'
  });
});

// controlador : vista elements.hbs
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Carlys',
    titulo: 'Curso de Node'
  });
});

// 404
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })