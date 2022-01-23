// Archivo que aloja el código del servidor 

/* Aquí comienza el inicio del servidor */
const express = require('express');
const cors = require('cors');
const app = express(); /* Todo el serv está en esta variable. */


//  Settings

/* Aqui se pueden poner varias cosas como:
- Poner nombre al servidor
- Un motor de plantillas
- Puerto definido
- Otras variables finas para el servidor */

app.set('port', process.env.PORT || 4000); 



// Middlewares
app.use(cors()); 
// Cada que llegue una peticion al serv, podra enviar y recibir datos.

// Como este servidor manejará API (JSON), debemos usar un método json desde express.
app.use(express.json()); 



// Routes - Rutas que la app de React podrá utilizar
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));



module.exports = app;
/* Aqui termina el inicio del servidor. Esto exporta app, que se toma en index.js y allí se corre. */