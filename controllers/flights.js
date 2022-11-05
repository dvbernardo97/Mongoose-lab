// controllers/flights.js
const Flight = require("../models/flight")
const Ticket = require("../models/ticket")

module.exports = {
    new: newflights,
    create,
    index,
    show
}

function newflights(req, res) {
    res.render("flights/new");
}
function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) {
            console.log(err)
            return res.redirect('/flights/new');
        }
        console.log(flight);
        res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        if (err) {
            console.log(err)
            res.redirect('/');
        }
        res.render('flights/index', { flights });
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { flight, tickets })
        })
    })
}