const express = require('express')

const router = express.Router()
const Event = require('../models/Event')

// show all. maybe add paginationlater
router.get('/', (req, res, next) => {
    Event.find({})
        .then(events => {
            if (!events) {
                res.sendStatus(404)
            } else {
                res.json(events)
            }
        })
        .catch(next)
})

// show one
router.get('/:id', (req, res, next) => {
    Event.findById(req.params.id)
        .then(event => {
            if (!event) {
                res.sendStatus(404)
            } else {
                res.json(event)
            }
        })
        .catch(next)
})

// create one
router.post('/', (req, res, next) => {
    Event.create(req.body)
        .then(event => res.json(event))
        .catch(next)
})

// update one
router.put('/:id', (req, res, next) => {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedEvent => {
            if (!updatedEvent) {
                res.sendStatus(404)
            } else {
                res.json(updatedEvent)
            }
        })
        .catch(next)
})

// delete one
router.delete('/:id', (req, res, next) => {
    Event.findOneAndDelete({ _id: req.params.id })
        .then(deletedEvent => {
            if (!deletedEvent) {
                res.sendStatus(404)
            } else {
                res.sendStatus(204)
            }
        })
        .catch(next)
})



module.exports = router