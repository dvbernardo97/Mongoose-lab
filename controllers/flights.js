// controllers/flights.js
const flight = require("../models/flight")

module.exports = {
    new: newflights,
    create,
    index,
}

function newflights(req, res) {
    res.render("flights/new");
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}
function index(req, res) {
    Flight.find({}, function (err, flights) {
        if (err) { return res.redirect('/'); }
        res.render('flights/index', { flights });
    })
}