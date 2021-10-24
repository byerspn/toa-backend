// require mongoose
const mongoose = require('mongoose')
// shorthand for schema constructor
const Schema = mongoose.Schema

// create event schema
const eventSchema = new Schema({
    name: String,
    location: String,
    dateandtime: String,
    description: String,
    entrants: { type: Number, default: 0 },
}, { timestamps: true })

// create event model
const Event = mongoose.model('Event', eventSchema)

// export model
module.exports = Event