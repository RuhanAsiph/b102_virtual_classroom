const express = require('express');


const Course = require('../models/course.model');
const Content = require('../models/content.model');

exports.getCourses = (req, res) => {
    Course.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: 200, 
                data: data
            })
        }
    })
}



//post course into courses db
exports.sendCourse = (req, res) => {
    newCourse = new Course(req.body)
    Course.findOne({ name: newCourse.name }, (err, data) => {
        
        if (data) {
            res.json({
                status: 400, 
                data: "user already exists"
            })
        } else if (!data) {
            newCourse.save((err, course) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json({
                        status: 200, 
                        data: "added"
                    })
                }
            })
        } else if (err) {
            console.log(err)
        } 
    })
}
//get contents of a particular class
exports.getContent = (req, res) => {
    const courseId = req.params.id

    Content.find({ courseId: courseId}, (err, content) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: 200,
                data: content
            })
        }
    })
}