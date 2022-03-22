const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')


//get student courses
router.get('/get-courses', studentController.getStudentCourses)
router.get('/get-details/:id', studentController.getStudentDetails)

module.exports = router;