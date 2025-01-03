  const express = require('express')
const order = express.Router()

order.get('/', (req, res) => {
  res.send('order')
})

order.post('/', (req, res) => {
  res.send('order')
})

order.put('/:id', (req, res) => {
  res.send('order')
})

module.exports = order