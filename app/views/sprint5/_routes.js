var express = require('express')
var router = express.Router()

// router.get('/', function (req, res) {
//   res.redirect('sprint5/upload');
// })

// For "B" we copy pensions section from the newstylejsa prototype
router.use('/b/9-pensions', require('./b/9-pensions/_routes'))
router.use('/b/10-education', require('./b/10-education/_routes'))

router.post('/a/uploaded', function (req, res) {
  var answer = req.session.data['moreEvidence'];
  if (answer === 'yes') {
    res.redirect('upload');
  } else {
    res.redirect('declaration');
  }
})

module.exports = router