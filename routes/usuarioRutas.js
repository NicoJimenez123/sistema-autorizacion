const express = require('express')
const usuarioRutas = express.Router()
const { Usuario } = require('../models/usuarioModel')

usuarioRutas.get('/', (req, res) => {
    res.json({
        message: 'Hola Usuarios GET'
    })
})

usuarioRutas.post('/', (req, res) => {
    let nombre = req.body.usuario
    let usuario = new Usuario({
        usuario_nombre: nombre
    })
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