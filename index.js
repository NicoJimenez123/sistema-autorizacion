const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.json({
        message: 'Hola Mundo'
    })
})

app.listen(process.env.PORT, () => console.log('Servidor corriendo en el puerto: ', process.env.PORT))