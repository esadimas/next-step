const express = require('express')
const product = express.Router()

product.get('/', (req, res) => {
    res.send('get')
})       
product.get('/:id', (req, res) => {
    res.send('get by id')
})    
product.post('/', (req, res) => {
    res.send('post')
})      
product.put('/:id', (req, res) => {
    res.send('put by id')
})    
product.delete('/:id', (req, res) => {
    res.send('del by id')
}) 


module.exports = product