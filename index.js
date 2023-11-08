const express = require('express')
const app = express()
const rutas = require('./routes/router')

const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Conectado a Mongo'))
  .catch(e => console.log('Error al conectarse: ', e))

app.use(cors())
app.use(express.json())
app.use('/', rutas)

app.listen(process.env.PORT, () => console.log('Servidor corriendo en el puerto: ', process.env.PORT))