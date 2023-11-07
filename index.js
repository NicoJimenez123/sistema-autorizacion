const express = require('express')
const app = express()
require('dotenv').config()

const rutas = require('./routes/router')

app.use('/', rutas)

app.listen(process.env.PORT, () => console.log('Servidor corriendo en el puerto: ', process.env.PORT))