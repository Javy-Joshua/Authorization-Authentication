const db = require('../users/users.db')

const checkBody = (req, res, next) => {
    if (!req.body){
        return res.status(400).json({ 
            data: null,
            error: 'must have a body'
        })
    }
    next()
}

const basicAuth = (req, res, next) => {
    const authHeader = req.header.authorization

    if (!authHeader){
        return res.status(401).json({
            message: 'You are not authenticated'
        })
    } 

    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')

    const username = auth[0]
    const password = auth[1]

    const existingUser = db.users.find(user => user.username === username && user.password === password)

    if (existingUser) {
        req.user = existingUser
        next();
    } else {
        return res.status(401).json({
            message: 'You are not authenticated!!'
        })
    }
    
}

const apiKeyAuth = (req, res, next) => {
    const authHeader = req.headers

    if(!authHeader.api_key) {
        return res.status(401).json({
            message: 'You are not authenticated!!'
        })
    }

    const existingUser = db.users.find(user => user.api_key === authHeader.api_key)

    if (existingUser) {
        req.header = existingUser
        next()
    } else {
        return res.status(401).json({
            message: 'You are not authenticated'
        })
    }

}

const checkAdmin = (req, res, next) => {
    if (req.user.user_type !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized!!'})
    }
    next()
}


module.exports = {
    checkBody,
    basicAuth,
    apiKeyAuth,
    checkAdmin
}