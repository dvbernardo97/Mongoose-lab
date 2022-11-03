var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/new', flightCtrl.new);

module.exports = router;
