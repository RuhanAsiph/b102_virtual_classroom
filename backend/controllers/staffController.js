const express = require('express');


const Course = require('../models/course.model');
const Content = require('../models/content.model');
const Material = require('../models/material.model');

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

    Content.find({ courseId: courseId }, (err, content) => {
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

//send material pdf 
//add courseId insertion logic once the frontend starts behaving properly
exports.sendMaterial = (req, res) => {

    //contents --> Content
    const id = req.body._id
    const updatedMaterialModel = req.body
    Content.findOneAndUpdate({ _id: id }, updatedMaterialModel, (err, data) => {
        if (data) {
            res.json({
                status: 200,
                data: "successfully added materials"
            })
        } else if (err) {
            console.log(err)
        }
    })




    // example id === courseId
    //const id = req.params.id
    // model = new contents(req.body)
    // updateModel = req.body
    // model.save((err, data) => {
    //     if (err) {
    //         console.log("error")
    //     } else {
    //         res.json({
    //             status: 200,
    //             data: "successfully uploaded"
    //         })
    //     }
    // })

    // Material.find({ courseId: id}, (err, material) => {
    //     if (material) {
    //         Material.findOneAndUpdate({ courseId: id }, updateModel, (err, data) => {
    //             if (data) {
    //                 res.json({
    //                     status: 200,
    //                     data: "successfully uploaded"
    //                 })
    //             }
    //         })
    //     } else if (!material) {
    //         model.save((err, data) => {
    //             if (err) {
    //                 res.send(err)
    //             } else {
    //                 res.json({
    //                     status: 200,
    //                     data: "successfully uploaded"
    //                 })
    //             }
    //         })
    //     } else {
    //         res.send(err)
    //     }
    // })
}

exports.fetchDoc = (req, res) => {
    id = req.params.id
    Content.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.send(err)
        } else if (data) {
            res.json({
                status: 200,
                data: data.contentMaterial
            })
        } else {
            console.log("where am i?")
        }
    })
}

exports.deleteDoc = (req, res) => {
    id = req.params.id
    //logic
    Content.findOne({ _id: id }, (err, data) => {
        var deletedDoc = data.toObject()

        //check if is empty or nto
        if (deletedDoc.contentMaterial.length === 0) {
            res.json({
                status: 200,
                data: "There aren't any uploaded documents, please check again"
            })
        }
        
        else {
            delete deletedDoc.contentMaterial;
            
            Content.findOneAndUpdate({ _id: id }, deletedDoc, (err, data) => {
                if (data) {
                    res.json({
                        status: 200,
                        data: "successfully removed materials"
                    })
                } else if (err) {
                    console.log(err)
                }
            })

        }
    })
}