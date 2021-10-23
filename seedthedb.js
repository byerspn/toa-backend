require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.DB_URI
const db = mongoose.connection;
const Event = require('./models/event')


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, () => {
    console.log('the connection with mongodb is established')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

const seedEvents = [
    {
        name: 'Vandertilted #47',
        location: 'Featheringill',
        dateandtime: 'friday night, you know the drill',
        description: 'a weekly smash tournament that is run by vandysmash, and consistently won by infamous highschooler, Snapback.',
        entrants: 38,
    },
    {
        name: 'Hump Day Hot Shots',
        location: 'Coconut Beach',
        dateandtime: 'wednesday night. reg at 6 play at 7.',
        description: 'A relaxed volleyball tournament aimed at beginners so they can improve by playing all skill levels for cheap. good players are also enticed to come for cash prize. five dollar per player, max six players to a team. each team guranteed 4 games.',
        entrants: 12,
    },
    {
        name: 'Friday Night Hot Shots',
        location: 'White Sands / Seegers Sandbar',
        dateandtime: 'friday night, after leagues',
        description: 'standard hotshots, $5/player, 6player/team. late night. known to go as late as 2am.',
        entrants: 24,
    },
    {
        name: 'Emerald Coast Classic',
        location: 'okaloosa island',
        dateandtime: 'oct 12-17',
        description: 'a massive beach volleyball tournament. all the legends will come. everyone sandbags. good luck. $80 a person.',
        entrants: 300,
    },
    {
        name: 'Commodore Cup #4',
        location: 'Featheringill',
        dateandtime: 'saturday',
        description: 'the fourth event in the commodore cup circuit. must come to 3 to qualify for main event.',
        entrants: 60,
    }
]

Event.create(seedEvents , (error, event) => {
    if (error) { // if there is an error console log it
        console.log(error);
    } else { // else show us the created tweet
        console.log(event);
    }
    // get control of terminal back
    // you can also just use control-c
    db.close();
})