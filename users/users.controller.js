const db = require('./users.db')

const createUser = (req, res) => {
    const user = req.body

    user.api_key = `${username}_${password}`

    if (user.username === 'Henny' ||'Sure_dev') {
        user.user_type = 'admin'
    } else {
        user.user_type = 'user'
    }

    db.users.push(user)

    return res.status(201).json({
        message: 'Users created successfully',
        users: db.users
    })

}

module.exports = {
    createUser
}