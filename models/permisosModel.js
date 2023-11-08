const mongoose = require('mongoose')

const permisosSchema = mongoose.Schema({
  permiso_id: {type: Number, required: false},
  permiso_nombre: {type: String, required: true},
  fechaCreacion: {type: Date, required: false},
  fechaModificacion: {type: Date, required: false},
  fechaEliminado: {type: Date, required: false},
})

module.exports = mongoose.model('Permisos', permisosSchema)