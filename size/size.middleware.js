const sizeMiddleware = (req, res, next) => {
    if (!req.body){
        return res.status(400).json({
            message: 'must have a body'
        })
    }
    next()
}

module.exports = {
    checkBody: sizeMiddleware
}