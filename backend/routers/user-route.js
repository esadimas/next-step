const express = require('express')
const user = express.Router()

user.get('/')
user.get('/profile')
user.put('/profile')
user.post('/register')
user.post('/login')
user.delete('/:id')

module.exports = user