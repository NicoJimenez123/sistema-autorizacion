const express = require('express')
const router = express.Router()
const usuarioRutas = require('./usuarioRutas')
const modulosRutas = require('./modulosRutas')
const permisosRutas = require('./permisosRutas')
const recursosRutas = require('./recursosRutas')
const rolesRutas = require('./rolesRutas')
const auth = require('../middlewares/auth')

router.use('/usuarios', usuarioRutas)
router.use('/recursos', auth, recursosRutas)
router.use('/roles', auth, rolesRutas)

module.exports = router