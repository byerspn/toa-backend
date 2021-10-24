const express = require('express')

const { handleValidateId, handleRecordExists, } = require('../middleware/custom_errors ')

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
router.get('/:id', handleValidateId, (req, res, next) => {
    Event.findById(req.params.id)
        .populate('entrants')
        .populate('owner')
        .then(handleRecordExists)
        .then((event) => {
            res.json(event)
        })
        .catch(next)
})

// create one
router.post('/', (req, res, next) => {
    Event.create(req.body)
        .then(event => res.status(201).json(event))
        .catch(next)
})

// update one
router.put('/:id', handleValidateId, (req, res, next) => {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(handleRecordExists)
        .then((updatedEvent) => {
            res.json(updatedEvent)
        })
        .catch(next)
})

// delete one
router.delete('/:id', handleValidateId, (req, res, next) => {
    Event.findOneAndDelete({ _id: req.params.id })
        .then(handleRecordExists)
        .then((deletedEvent) => {
            res.json(deletedEvent)
        })
        .catch(next)
})


module.exports = router