const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController')
//get courses 
router.get('/get-courses', staffController.getCourses);
router.get('/get-content/:id', staffController.getContent)
router.post('/post-course', staffController.sendCourse)
module.exports = router;