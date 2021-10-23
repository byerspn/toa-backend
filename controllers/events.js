const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

// show all. maybe add paginationlater
app.get('/events', (req, res) => {
    Event.find({})
        .then(events => res.json(events))
        .catch(next)
})

// show one
app.get('/events/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(events => res.json(events))
        .catch(next)
})

app.get('/events', (req, res) => {
    Event.find({})
        .then(events => res.json(events))
        .catch(next)
})

app.get('/events', (req, res) => {
    Event.find({})
        .then(events => res.json(events))
        .catch(next)
})