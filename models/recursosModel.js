const mongoose = require('mongoose')

const recursosSchema = mongoose.Schema({
  recurso_id: {type: Number, required: false},
  recurso_nombre: {type: String, required: true},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

module.exports = mongoose.model('Recursos', recursosSchema)