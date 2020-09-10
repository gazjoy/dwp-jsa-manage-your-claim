const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/sprint1/', require('./views/sprint1/_routes'))

module.exports = router
