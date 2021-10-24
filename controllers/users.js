const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const User = require('../models/User')

const { createUserToken } = require('../middleware/auth')

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
// POST /api/signin
router.post('/signin', (req, res, next) => {
    User.findOne({ email: req.body.email })
        // Pass the user and the request to createUserToken
        .then((user) => createUserToken(req, user))
        // createUserToken will either throw an error that
        // will be caught by our error handler or send back
        // a token that we'll in turn send to the client.
        .then((token) => res.json({ token }))
        .catch(next);
    });

module.exports = router