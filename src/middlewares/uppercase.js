const axios = require("axios");

const uppercase = (req, res, next) => {
    const body = req.body
    const keys = Object.keys(body);
    const values = Object.values(body);
    keys.forEach((key, index) => {
        if(typeof(values[index]) == "String"){
            delete req.body[key]
            req.body[key] = values[index].toUpperCase();
        }
    })
    next();
}

module.exports = uppercase;