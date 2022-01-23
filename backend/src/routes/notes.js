const { Router } = require('express');
const router = Router();
const { getNotes } = require('../controllers/notes.controller');

// Hagamos que desde nuestro enrutador, escuchamos una ruta '/'
router.route('/')
    .get(getNotes)
    .post((req, res) => res.json({"message": "POST request"}));

// Este tiene la diferencia de que se usa para peticiones a elementos específicos distinguidos por id.
router.route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;