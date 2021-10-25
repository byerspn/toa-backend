const express = require('express')

const { handleValidateId, handleRecordExists, handleValidateOwnership } = require('../middleware/custom_errors')

const router = express.Router()
const Event = require('../models/Event')

const { requireToken } = require('../middleware/auth')

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
router.post('/', requireToken, (req, res, next) => {
    Event.create({ ...req.body, owner: req.user._id })
        .then((event) => res.status(201).json(event))
        .catch(next)
})

//register someone
router.put('/:id/register', handleValidateId, (req, res, next) => {
    Event.findById(req.params.id)
        .then(handleRecordExists)
        .then((event) => event.set(req.body).save())
        .then((event) => {
            res.json(event)
        })
        .catch(next)
})

// update one
router.put('/:id', handleValidateId, requireToken, (req, res, next) => {
    Event.findById(req.params.id)
        .then(handleRecordExists)
        .then((event) => handleValidateOwnership(req, event))
        .then((event) => event.set(req.body).save())
        .then((event) => {
            res.json(event)
        })
        .catch(next)
})

// delete one
router.delete('/:id', handleValidateId, requireToken, (req, res, next) => {
    Event.findById(req.params.id)
        .then(handleRecordExists)
        .then((event) => handleValidateOwnership(req, event))
        .then((event) => event.remove())
        .then(() => {
            res.sendStatus(204);
        })
        .catch(next);
});


module.exports = router