const axios = require("axios");

const uppercase = (req, res, next) => {
    req.body.nome = req.body.nome.toUpperCase()
    next()
}

module.exports = uppercase;