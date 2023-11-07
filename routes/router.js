const express = require('express')
const router = express.Router()
const usuarioRutas = require('./usuarioRutas')
const modulosRutas = require('./modulosRutas')
const permisosRutas = require('./permisosRutas')
const recursosRutas = require('./recursosRutas')
const rolesRutas = require('./rolesRutas')

router.use('/usuarios', usuarioRutas)
router.use('/modulos', modulosRutas)
router.use('/permisos', permisosRutas)
router.use('/recursos', recursosRutas)
router.use('/roles', rolesRutas)

module.exports = router