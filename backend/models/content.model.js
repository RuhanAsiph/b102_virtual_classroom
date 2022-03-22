const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    courseId: mongoose.Types.ObjectId,
    lecture: String,
    description: String,
    courseCode: String, 
    contentMaterial: [],
    additionalMaterial: [
        {
            fileName: String, 
            file: String,
            instructor: String
        }
    ]
    
})

module.exports = mongoose.model('contents', contentSchema)

