const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    role: String, 
    contactno: String,
    password: String
})

module.exports = mongoose.model('users', userSchema)