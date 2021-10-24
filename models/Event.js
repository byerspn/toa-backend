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
    entrants: [{
        type: Schema.Types.ObjectId, 
        ref: 'User',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

// create event model
const Event = mongoose.model('Event', eventSchema)

// export model
module.exports = Event