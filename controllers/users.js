const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const User = require('../models/User')

// sign up
router.post('/signup', (req, res, next) => {
    bcrypt
        .hash(req.body.password, 10)
        .then(hash =>
            ({
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                password: hash
            })
        )
        .then(user => User.create(user))
        .then(user => res.status(201).json(user))
        .catch(next)
    })

// sign in
router.post('/signin', (req, res, next) => {})

module.exports = router