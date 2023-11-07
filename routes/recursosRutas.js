const express = require('express')
const recursosRutas = express.Router()

recursosRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Recursos'
    })
})

module.exports = recursosRutas