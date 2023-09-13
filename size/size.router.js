const express = require('express')
const controller = require('./size.controller')
const middleware = require('./size.middleware')


const router = express.Router()

router.post('/', middleware.checkBody, controller.createSize)

module.exports = router 