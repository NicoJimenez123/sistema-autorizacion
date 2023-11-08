const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
  usuario_id: {type: Number, required: false},
  usuario_nombre: {type: String, required: false},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

module.exports = mongoose.model('Usuario', usuarioSchema)