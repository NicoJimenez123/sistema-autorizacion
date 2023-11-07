const express = require('express')
const permisosRutas = express.Router()

permisosRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Permisos'
    })
})

module.exports = permisosRutas