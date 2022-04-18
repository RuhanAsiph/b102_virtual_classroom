const express = require('express');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Course = require('../models/course.model');
const Content = require('../models/content.model');
const Enroll = require('../models/student/enrollment.model');
exports.getStudentCourses = (req, res) => {
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

exports.enrollDetails = (req, res) => {
    enrollModel = new Enroll(req.body)
    Enroll.findOne({ courseId: enrollModel.courseId }, (err, yesExists) => {
        if (yesExists) {
            res.json({
                status: 400,
                data: "already enrolled"
            })
        } else if (!yesExists) {
            enrollModel.save((err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        data: "successfully enrolled"
                        
                    })
                }
            })
        } else if (err) {
            res.send(err)
        }
    })

}

exports.getStudentDetails = (req, res) => {
    id = req.params.id
    Course.aggregate(
        [
            {
                $match: { _id: { $eq: ObjectId(id) } }
            },
            {

                $lookup: {
                    from: "contents",
                    localField: "_id",
                    foreignField: "courseId",
                    as: "output",
                },
            }

        ], (err, data) => {
            if (data) {
                res.json({
                    status: 200,
                    data
                })
            }
            else {
                console.log("inside getStdent Details in the server")
            }
        })
}