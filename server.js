const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express
const port = process.env.Port || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// RENDERIZA LA VISTA PERSON: Y TE VOY A PASAR ESTOS 
// PARAMETROS Y HAZ ESTO.
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <link rel="stylesheet" href="/assets/style.css">
      <title>Document</title>
  </head>
  <body>
    <h1>Hola mundo!</h1>
      <p>Este es un parrafo y su contenido debe de ser azul</p>
  </body>
  </html>`
    );
});

app.get('/person/:id', (req, res) => {
    // ENVIAMOS 2 PARÁMETROS, EL NOMBRE DE LA VISTA Y LOS PARAMETROS.
    res.render('person', {
      ID: req.params.id, 
      Message: req.query.message,
      Time: req.query.time
    });
});

app.use('/assets', express.static(__dirname + '/public'));

app.listen(port);

