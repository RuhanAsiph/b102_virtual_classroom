const mongoose = require('mongoose')

const enrollSchema = new mongoose.Schema({
    courseId: mongoose.Types.ObjectId,
    personalDetail: Object,
    addressData: Object,
    permanentAddressData: Object,
    marksData: Object,
    pictureDetails: Object
})

module.exports = mongoose.model('enrollments', enrollSchema)


