const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        const ticket = new Ticket(req.body);
        console.log(req.body)
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
