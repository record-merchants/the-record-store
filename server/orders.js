'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const {mustBeLoggedIn, forbidden, selfOnly, adminOnly} = require('./auth.filters')
const api = require('express').Router();

api.get('/', mustBeLoggedIn, (req, res, next) => {
    Order.findAll()
    .then(orders => {
        // If user is an admin, return all orders
        if (req.user.isAdmin) return res.json(orders);
        
        // Otherwise, return all of the user's own orders
        return res.json(orders.map(order => order.user_id === req.user.id));
    })
    .catch(next);
})

api.post('/', (req, res, next) => {
    Order.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(next)
})

api.get('/:orderId', (req, res, next) => {
    Order.findOne({
        where: {id: req.params.orderId}
    })
    .then(order => res.json(order))
    .catch(next)
})

api.get('/status/:statusType', mustBeLoggedIn, adminOnly, (req, res, next) => {
    Order.findAll({
        where: {status: req.params.statusType}
    })
    .then(orders => res.json(orders))
    .catch(next)
})