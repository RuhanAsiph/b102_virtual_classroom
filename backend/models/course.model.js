const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    level: String,
    description: String,
    stars: String
})

module.exports = mongoose.model('courses', courseSchema)


