const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const User = require('../models/User')

// sign up
router.post('/signup', (req, res, next) => {
    User.create(req.body)
        .then((user) => res.status(201).json(user))
        .catch(next)
})

// sign in
router.post('/signin', (req, res, next) => {})

module.exports = router