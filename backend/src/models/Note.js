const { Schema, model } = require('mongoose');

new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
}, {
    timestamps: true
});

module.exports = model('Note', noteSchema);