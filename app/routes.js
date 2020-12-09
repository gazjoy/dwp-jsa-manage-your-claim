const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/sprint1/', require('./views/sprint1/_routes'))
router.use('/sprint2/', require('./views/sprint2/_routes'))
router.use('/sprint5/', require('./views/sprint5/_routes'))


module.exports = router
