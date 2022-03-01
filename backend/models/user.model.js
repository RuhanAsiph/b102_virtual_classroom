const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    roleId: String, 
    contactno: String,
    password: String, 
    image: String
})

module.exports = mongoose.model('users', userSchema)


