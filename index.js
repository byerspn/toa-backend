require('dotenv').config()
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000
const mongoURI = process.env.DB_URI
const db = mongoose.connection;
const Event = require('./models/Event')
const { handleErrors, handleValidationErrors } = require('./middleware/custom_errors')

// cors
app.use(cors())
app.use(passport.initialize())

// parse requests to js objects
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, () => {
    console.log('the connection with mongodb is established')
})

db.on('error', (err) => console.log(err.message + ' is Mongod running?'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))


// CONTROLLERS ////////////////////////////////////////////////
const eventsController = require('./controllers/events')
app.use('/events', eventsController)
const usersController = require('./controllers/users')
app.use('/users', usersController)

app.use(handleValidationErrors)
app.use(handleErrors)

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})