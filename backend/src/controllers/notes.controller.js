const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note ({
        title, content, date, author
    })
    await newNote.save();
    res.json({"message": "all fine"})
}


module.exports = notesCtrl;