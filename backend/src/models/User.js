const { Schema, model } = require('mongoose');

new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // Para limpiar el string
        unique: true // No debe repetirse
    }
    }, {
        timestamps: true
});

module.exports = model('Note', userSchema);