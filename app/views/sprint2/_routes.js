var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.redirect('sprint2/claimant-details');
})

router.get('/book-appointment', function (req, res) {
  res.redirect('type');
})

router.post('/type', function (req, res) {
  res.redirect('duration');
})

router.post('/duration', function (req, res) {
  res.redirect('where');
})

module.exports = router