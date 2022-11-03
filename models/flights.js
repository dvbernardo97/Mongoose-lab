const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    airport: String,
});

module.exports = mongoose.model('flights', flightSchema)


