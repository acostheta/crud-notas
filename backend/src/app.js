// Archivo que aloja el código del servidor 

/* Aquí comienza el inicio del servidor */
const express = require('express');
const app = express(); /* Todo el serv está en esta variable. */


//  Settings

/* Aqui se pueden poner varias cosas como:
- Poner nombre al servidor
- Un motor de plantillas
- Puerto definido
- Otras variables finas para el servidor */

app.set('port', process.env.PORT || 4000); 



// Middlewares






// Routes





module.exports = app;
/* Aqui termina el inicio del servidor. Esto exporta app, que se toma en index.js y allí se corre. */