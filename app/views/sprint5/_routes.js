var express = require('express')
var router = express.Router()

// router.get('/', function (req, res) {
//   res.redirect('sprint5/upload');
// })

router.post('/a/uploaded', function (req, res) {
  var answer = req.session.data['moreEvidence'];
  if (answer === 'yes') {
    res.redirect('upload');
  } else {
    res.redirect('declaration');
  }
})

module.exports = router