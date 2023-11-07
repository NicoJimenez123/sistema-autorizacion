const express = require('express')
const rolesRutas = express.Router()

rolesRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Roles'
    })
})

module.exports = rolesRutas