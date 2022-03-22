const express = require('express');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Course = require('../models/course.model');
const Content = require('../models/content.model');

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