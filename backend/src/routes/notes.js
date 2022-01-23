const { Router } = require('express');
const router = Router();


// Hagamos que desde nuestro enrutador, escuchamos una ruta '/
router.route('/').get((req, res) => res.send('Notes Routes'));

module.exports = router;