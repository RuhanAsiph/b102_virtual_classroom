const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController')
//get courses 
router.get('/get-courses', staffController.getCourses);
router.get('/get-content/:id', staffController.getContent);
router.post('/post-course', staffController.sendCourse);
router.put('/upload-material', staffController.sendMaterial);
router.get('/fetch-doc/:id', staffController.fetchDoc);
router.put(`/delete-doc/:id`, staffController.deleteDoc);

module.exports = router;