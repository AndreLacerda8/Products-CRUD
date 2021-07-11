const express = require('express')
const products = require('./products')

const route = express.Router()

route.get('/', products.read)

route.post('/product', products.create)

route.put('/product', products.update)

route.delete('/product/:id', products.delete)

module.exports = route