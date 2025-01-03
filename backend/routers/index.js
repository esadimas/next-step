const express = require('express')
const router = express.Router()

router.use('/users', require('./user-route'))
router.use('/products', require('./product-route'))
router.use('/orders', require('./order-route'))

module.exports = router