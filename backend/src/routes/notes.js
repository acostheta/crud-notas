const { Router } = require('express');
const router = Router();


// Hagamos que desde nuestro enrutador, escuchamos una ruta '/'
router.route('/')
    .get((req, res) => res.send('Notes Routes'))
    .post();

// Este tiene la diferencia de que se usa para peticiones a elementos específicos distinguidos por id.
router.route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;