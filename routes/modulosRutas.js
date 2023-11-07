const express = require('express')
const modulosRutas = express.Router()

modulosRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Modulos'
    })
})

module.exports = modulosRutas