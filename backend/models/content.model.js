const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    courseId: String,
    lecture: String,
    description: String,
    courseCode: String, 
    contentMaterial: Array
})

module.exports = mongoose.model('contents', contentSchema)

