const express = require('express')
const controller = require('./users.controller')
const middleware = require('./users.middleware')

const router = express.Router()

router.post('/', middleware.validateUserCreation, controller.createUser)


module.exports = router
