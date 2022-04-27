const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')


//get student courses
router.get('/get-courses', studentController.getStudentCourses)
router.get('/get-details/:id', studentController.getStudentDetails)
router.post('/enroll-details', studentController.enrollDetails)
router.get('/get-search-results/:searchKey', studentController.getSearchKeyResults)

module.exports = router;