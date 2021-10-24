require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.DB_URI
const db = mongoose.connection;
const User = require('./models/User');


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, () => {
    console.log('the connection with mongodb is established')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

const seedUsers = [
    {
        username: 'mickolas',
        email: 'mickenstein@emaildomain.com',
        phone: 1111111111,
        password: 'mickolaspassword'
    },
    {
        username: 'brucey',
        email: 'brucewhite@emaildomain.com',
        phone: 2222222222,
        password: 'bruceypassword'
    },
    {
        username: 'me',
        email: 'me@emaildomain.com',
        phone: 3333333333,
        password: 'mepassword'
    },
]


User.create(seedUsers , (error, user) => {
    if (error) {
        console.log(error)
    } else {
        console.log(user)
    }
    db.close()
})