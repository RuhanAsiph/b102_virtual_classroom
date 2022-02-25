
const express = require('express');

const User = require('../models/user.model');

//login 
exports.login = (req, res) => {
    const authModel = req.body
    User.findOne({email: authModel.email, password: authModel.password, roleId:authModel.roleId}, (err, user) => {
        if (err) {
            res.send(err)
        } else if (!user) {
            res.json({
                status: 400,
                data: "please register"
            })
        } else if (user) {
            res.json({
                status: 200,
                data:"user authenticated"
            })
        }
    })
}

//register
exports.register = (req, res) => {
    userModel = new User(req.body)
    User.findOne({ email: userModel.email}, (err, user) => {
        if (user) {
            res.json({
                status: 400,
                data: "user already exists"
            })
        } else if (!user) {
            userModel.save((err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json({
                        status: 200,
                        data: "user successfully registered"
                    })
                } 
            })
        } else if (err) {
            res.send(err)
        }
    })

}

