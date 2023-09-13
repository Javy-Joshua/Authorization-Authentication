const checkSize = (req, res, next) => {
    const validSize = ['small', 's', 'medium', 'm', 'large', 'l']

    if(!validSize.includes(req.body.size)) {
        console.log(req.body.size);
        return res.status(422).json({
            data:null,
            error:'ivalid size, use small,large, meduim or s, m, l'
        })
    }
    console.log(req.body)
    next()
}

module.exports = { checkSize }