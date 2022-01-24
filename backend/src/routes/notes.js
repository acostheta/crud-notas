const { Router } = require('express');
const router = Router();
const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');

// Hagamos que desde nuestro enrutador, escuchamos una ruta '/'
router.route('/')
    .get(getNotes)
    .post(createNote);

// Este tiene la diferencia de que se usa para peticiones a elementos específicos distinguidos por id.
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;