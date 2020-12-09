var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.redirect('sprint5/upload');
})

router.post('/uploaded', function (req, res) {
  console.log('hmmm');
  res.redirect('upload-done');
})

module.exports = router