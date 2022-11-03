var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/new', flightCtrl.new);
/*POST new flight*/
router.post('/', flightCtrl.create)

module.exports = router;
