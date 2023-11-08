const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Conectado a Mongo'))
  .catch(e => console.log('Error al conectarse: ', e))

const rutas = require('./routes/router')
app.use(express.json())
app.use('/', rutas)

app.listen(process.env.PORT, () => console.log('Servidor corriendo en el puerto: ', process.env.PORT))