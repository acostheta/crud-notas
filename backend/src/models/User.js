const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // Para limpiar el string
        unique: true // No debe repetirse
    }
    }, {
        timestamps: true
});

module.exports = model('User', userSchema);