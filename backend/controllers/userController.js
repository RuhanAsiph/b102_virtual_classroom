
const express = require('express');
const User = require('../models/user.model');

//login 
exports.login = (req, res) => {
    const authModel = req.body
    User.findOne({email: authModel.email, password: authModel.password}, (err, user) => {
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

