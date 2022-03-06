const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    courseId: String,
    pdf: String,
    instructorName: String
})

module.exports = mongoose.model('materials', materialSchema)
