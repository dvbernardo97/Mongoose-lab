const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true,
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    departs: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear() + 1)
    },

    destinations: [destinationSchema]
});

const ticketSchema = new Schema({
    seat : {type: String,
    match:/[A-F][1-9]\d?/
},
price : {
    type: Number,
    min: 50
},
flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}]

})


module.exports = mongoose.model('flights', flightSchema)


