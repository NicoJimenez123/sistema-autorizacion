const express = require('express')
const usuarioRutas = express.Router()

usuarioRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Usuarios'
    })
})

module.exports = usuarioRutas