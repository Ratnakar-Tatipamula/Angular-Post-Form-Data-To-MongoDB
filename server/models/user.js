const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String  
});

module.exports = mongoose.model('anything', userSchema, 'user');
//Third parameter is very important because you are providing Schema 
//to the Collection defined in the MongoDB