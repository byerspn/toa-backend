const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000
// const mongoURI = 
const db = mongoose.connection;
const Event = require('./event')


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, () => {
    console.log('the connection with mongodb is established')
})

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

const firstEvent = {
    name: 'First Test Event',
    location: 'Featheringill',
    dateandtime: 'friday night',
    description: 'an event entry to see how this all works and whatnot.',
    entrants: 1,
}

Event.create(firstEvent , (error, event) => {
    if (error) { // if there is an error console log it
        console.log(error);
    } else { // else show us the created tweet
        console.log(event);
    }
    // get control of terminal back
    // you can also just use control-c
    db.close();
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})