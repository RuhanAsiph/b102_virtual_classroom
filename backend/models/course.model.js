const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    level: String,
    about: String,
    whatYouWillLearn: Array,
    description: String,
    img: String,
    stars: String
})

module.exports = mongoose.model('courses', courseSchema)


