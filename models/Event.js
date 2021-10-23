// require mongoose
const mongoose = require('mongoose')
// shorthand for schema constructor
const Schema = mongoose.Schema
// initialize slug gener8r
// mongoose.plugin(slug)

// create event schema
const eventSchema = new Schema({
    name: String,
    location: String,
    dateandtime: String,
    description: String,
    entrants: { type: Number, default: 0 },
    // slug: {type: String, slug: 'name'}
}, { timestamps: true })

// create event model
const Event = mongoose.model('Event', eventSchema)

// export model
module.exports = Event