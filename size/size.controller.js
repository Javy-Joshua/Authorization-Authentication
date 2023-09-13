const size = [ ]

const createSize = (req, res) => {
    return res.status(200).json({ data: size})
}

const updateSize = (req, res) => {
  return res.status(200).json({ data: size });
};

const getSize = (req, res) => {
    return res.status(200).json({ data: size})
}

module.exports = {
    createSize,
    updateSize,
    getSize
}
