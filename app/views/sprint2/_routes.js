var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.redirect('sprint2');
})


module.exports = router