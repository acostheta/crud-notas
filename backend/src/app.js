// Archivo que aloja el código del servidor 

/* Aquí comienza el inicio del servidor */
const express = require('express');
const app = express(); /* Todo el serv está en esta variable. */

module.exports = app;
/* Aqui termina el inicio del servidor. Esto exporta app, que se toma en index.js y allí se corre. */