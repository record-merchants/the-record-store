'use strict'

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Album = require('./album')
const Shipping = require('./shipping')
const CreditCard = require('./credit_card')

// EI: what if user wants to buy multiple copies of the same album?
Album.belongsTo(User)
User.hasMany(Album)

Shipping.belongsTo(User)

// EI: storing credit cards presents us with some new security challenges; for MVP, we can just let a 3rd party API handle payment info for us, so we don't need to store this
User.hasMany(CreditCard)
CreditCard.belongsTo(User)


module.exports = {User, Album, Shipping, CreditCard}
