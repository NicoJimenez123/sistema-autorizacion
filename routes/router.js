const express = require('express')
const router = express.Router()
const usuarioRutas = require('./usuarioRutas')

router.use('/usuarios', usuarioRutas)

module.exports = router