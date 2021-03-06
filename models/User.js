// require mongoose
const mongoose = require('mongoose')
// shorthand for schema constructor
const Schema = mongoose.Schema

// user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_doc, ret) => {
                delete ret.password
                return ret
            },
        },
        id: false
    })

module.exports = mongoose.model('User', userSchema);