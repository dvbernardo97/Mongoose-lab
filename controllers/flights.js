// controllers/flights.js

module.exports = {
    new : newflight,
}

function newflights(req, res){
    res.render("flights/new");
}