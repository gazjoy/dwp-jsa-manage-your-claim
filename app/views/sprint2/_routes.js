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

router.post('/where', function (req, res) {
  res.redirect('who');
})

router.post('/who', function (req, res) {
  res.redirect('when');
})

router.post('/when', function (req, res) {
  res.redirect('check');
})

router.post('/work-search', function (req, res) {
  res.redirect('work-search?today=2');
})

module.exports = router