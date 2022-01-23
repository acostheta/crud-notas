const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/crudtest';

mongoose.connect(URI), {
    newUrlParser: true,
    useCreateIndex: true
};

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
});
