const Flight = require('../models/flight');


module.exports = {
    create,
    new: newTicket,
    tick

};

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body)
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}
function tick(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        const ticket = new Ficket(req.body);
        ticket.save(function (err) {
            if (err) return res.redirect(`/flights/${flight._id}/tickets/new`);
            res.redirect(`/flights/${flight._id}`)
        });
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', { title: 'New Ticket', flight })
    })
}