const express = require('express')
const usuarioRutas = express.Router()

usuarioRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Usuarios GET'
    })
})

usuarioRutas.post('/', (req, res) => {
    res.json({
        message: 'Hola Usuarios POST'
    })
})

usuarioRutas.delete('/:id', (req, res) => {
    res.json({
        message: 'Hola Usuarios DELETE, id: ' + req.params.id
    })
})

usuarioRutas.put('/:id', (req, res) => {
    res.json({
        message: 'Hola Usuarios PUT, id: ' + req.params.id
    })
})



module.exports = usuarioRutas