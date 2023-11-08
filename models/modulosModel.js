const mongoose = require('mongoose')

const modulosSchema = mongoose.Schema({
  modulo_id: {type: Number, required: false},
  modulo_nombre: {type: String, required: true},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

module.exports = mongoose.model('Modulos', modulos)